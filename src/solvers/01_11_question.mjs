class Question {
    solve() {
        // From the triangles

        //   ┌   ┐   ┌   ┐
        //   │ a │   │ b │
        // k │ b │ = │ c │
        //   │ c │   │ d │
        //   └   ┘   └   ┘
        
        // and k(a + b + c) = b + c + d


        // ∴ ak + bk + ck - b - c = d
        // ∴ a + ak + ak^{2} - 2 = ak^{3}
        
        // -k^{3} + k^{2} + k + ( -2/a ) = 0
        // 2/a → 0 as a → ∞

        // ∴ -k^{3} + k^{2} + k = 0
        // ∴ k = (1 + √(5)) / 2
        // ak^{3} = d ∴ k^{3} = e
        // e ≈ 4.24

        const result = 4.24;
        return result;
    }
}

export default Question;
