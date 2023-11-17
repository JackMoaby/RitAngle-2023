class RitAngleSolver {
    constructor() {
        this.solvers = [];
        const solverPaths = [

            // Stage 1
            "./solvers/01_01_question.mjs",
            "./solvers/01_02_question.mjs",
            "./solvers/01_03_question.mjs",
            "./solvers/01_04_question.mjs",
            "./solvers/01_05_question.mjs",
            "./solvers/01_06_question.mjs",
            "./solvers/01_07_question.mjs",
            "./solvers/01_08_question.mjs",
            "./solvers/01_09_question.mjs",
            "./solvers/01_10_question.mjs",
            "./solvers/01_11_question.mjs",
            "./solvers/01_12_question.mjs",
            "./solvers/01_13_question.mjs",
            // "./solvers/01_14_question.mjs",
            // "./solvers/01_15_question.mjs",
            // "./solvers/01_16_question.mjs",
            // "./solvers/01_17_question.mjs",
            // "./solvers/01_18_question.mjs",
            // "./solvers/01_19_question.mjs",
            // "./solvers/01_20_question.mjs",

        ];

        this.importAndExtendSolvers(solverPaths).then(() => {
            this.runSolvingSuite();
        });
    }

    async importAndExtendSolvers(solverPaths) {
        const importedSolvers = await Promise.all(
            solverPaths.map(async (path) => {
                const { default: SolverClass } = await import(path);
                return new SolverClass();
            })
        );

        this.solvers.push(...importedSolvers);
    }

    async runSolvingSuite() {
        for (let index = 0; index < this.solvers.length; index++) {
            const solver = this.solvers[index];
            console.time(`[Question ${index + 1}]: [TIME]`);
            const result = await solver.solve();
            console.timeEnd(`[Question ${index + 1}]: [TIME]`);
            console.log(`[Question ${index + 1}]: [OUTP]: ${result}`);
        }
    }

    async solveSpecificQuestion(questionNumber){
        const solver = this.solvers[index];
        console.time(`[Question ${index + 1}]: [TIME]`);
        const result = await solver.solve();
        console.timeEnd(`[Question ${index + 1}]: [TIME]`);
        console.log(`[Question ${index + 1}]: [OUTP]: ${result}`);
    }
}

const RitAngle2023 = new RitAngleSolver();