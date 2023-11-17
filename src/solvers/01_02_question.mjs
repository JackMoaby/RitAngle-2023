class Question {
    solve() {
        // Solved by looking at the intersection
        // point of the curves on desmos

        // 2 = ac(c^{2} - a^{2})
        // a^{3} * c^{3} = 2(c^{2} - a^{2})
        // ab^{2}c = 2

        const result = 1.5127 + 0.9349 + 2 ** ( 1 / 4 );
        return result.toPrecision(3);
    }

    
}

export default Question;
