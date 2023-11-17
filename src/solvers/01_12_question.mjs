class Question {
    solve() {
        // q, r, are the solutions to the negative quadratic

        // -ax^{2} + x = x/2 + 1
        // ∴ x = (-1 ± √(1-4*(-2)*(-2a))) / 2(-2a)

        // ∴ (-1-√(1-16a)) / -4a - (-1+√(1-16a)) / -4a = 1
        // -2√(1-16a) = -4a ∴ 1-16a = 4a^2
        // ∴ a = (-4±√(17)) / 2

        const result = (-4 + (17) ** (1/2)) / 2;
        return result.toPrecision(3);
    }
}

export default Question;
