class Question {
    solve() {
        // ∫_{a^2}^{a} (ax^2 - 7a^{2}x- 7/3 a^{3}) dx
        // [ a/3 x^{3} - 7/2 a^{2}x^{2} -  7/3 a^{3}x ]_{a^2}^{a}
        // 1/3 a^{7} - 7/2 a^{6} - 7/3 a^{5} + 11/2 a^{4}= 0
        // a = 0, -1.5, 1
        // ∴ a = -1.5

        const result = -1.5;
        return result;
    }
}

export default Question;
