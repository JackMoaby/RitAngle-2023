class RitAngleSolver {
    constructor() {
        this.solvers = [];
        this.solverPaths = [

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
            "./solvers/01_14_question.mjs",
            // "./solvers/01_15_question.mjs",
            // "./solvers/01_16_question.mjs",
            // "./solvers/01_17_question.mjs",
            // "./solvers/01_18_question.mjs",
            // "./solvers/01_19_question.mjs",
            // "./solvers/01_20_question.mjs",

        ];
    }

    async importAndExtendSolvers() {
        const importedSolvers = await Promise.all(
            this.solverPaths.map(async (path) => {
                const { default: SolverClass } = await import(path);
                return new SolverClass();
            })
        );

        this.solvers.push(...importedSolvers);
    }

    async runSolvingSuite() {
        this.importAndExtendSolvers().then(async () => {

            console.time(`[SOLVED RITANGLE]`)
            for (let index = 0; index < this.solvers.length; index++) {
                const solver = this.solvers[index];
                console.time(`[Question ${index + 1}]: [TIME]`);
                const result = await solver.solve();
                console.timeEnd(`[Question ${index + 1}]: [TIME]`);
                console.log(`[Question ${index + 1}]: [OUTP]: ${result}`);
            };

            console.timeEnd(`[SOLVED RITANGLE]`)    
        });

            
    }
}

const RitAngle2023 = new RitAngleSolver();
RitAngle2023.runSolvingSuite();