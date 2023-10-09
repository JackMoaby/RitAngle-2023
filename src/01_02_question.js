import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({ units: 3, activation: "relu", inputShape: [3] }));

const guess = {x: 0.9349,y: 1.1892,z: 1.5127};

function lossFunction(x, y, z) {
    const equationsPenalty = 1e2;
    const f1 = x.mul(y.pow(2)).mul(z).sub(2);
    const f2 = x.mul(z).mul(z.pow(2).sub(x.pow(2))).sub(2);
    const f3 = x.pow(3).mul(z.pow(3)).sub(2).mul(z.pow(2).sub(x.pow(2)));

    const guessPenaltyValue = 1e10;
    const guessPenalty = x.sub(guess.x).pow(2).add(y.sub(guess.y).pow(2)).add(z.sub(guess.z).pow(2))


    const loss = f1.square().add(f2.square()).add(f3.square()).mul(tf.scalar(equationsPenalty))
        .add(guessPenalty.mul(tf.scalar(guessPenaltyValue)))
    
    return loss;
}


async function optimise(iterations) {
    const learningRate = 0.1;

    let x = tf.variable(tf.scalar(guess.x));
    let y = tf.variable(tf.scalar(guess.y));
    let z = tf.variable(tf.scalar(guess.z));

    const optimiser = tf.train.adam(learningRate);
    for (let i = 0; i < iterations; i++) {
        optimiser.minimize(() => lossFunction(x, y, z));
    }

    const optimisedX = x.dataSync()[0];
    const optimisedY = y.dataSync()[0];
    const optimisedZ = z.dataSync()[0];
    
    console.log(`optimised values: x = ${optimisedX}, y = ${optimisedY}, z = ${optimisedZ}`);
    console.log(`Final Output: ${optimisedX + optimisedY + optimisedZ}`)
}

console.time("Training Time")
optimise(10_000);
console.timeEnd("Training Time")

// console.time("Training Time")
// optimise(1_000_000);
// console.timeEnd("Training Time")

// [Running] node "d:\[ GITHUB ]\RitAngle-2023\src\tensorflowTest.js"

// optimised values: x = 0.9348953366279602, y = 1.1892564296722412, z = 1.5126985311508179
// Final Output: 3.6368502974510193
// Training Time: 12:01.465 (m:ss.mmm)

// [Done] exited with code=0 in 726.246 seconds