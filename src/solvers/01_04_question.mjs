class Question {
    solve() {
        // A_speed = 100t_3  = 80t_1 - 80
        // B_speed = 90t_2 - 180 = 100t_1
        // C_speed = 85t_3 - 255 = 1000t_2

        // ┌                 ┐ ^ {-1}  ┌     ┐
        // │ -100   90    0  │         │ 180 │
        // │ -80     0   100 │         │ -80 │
        // │   0   -100  85  │         │ 255 │
        // └                 ┘         └     ┘

        //   =

        // ┌          ┐   ┌     ┐
        // │ 4707/388 │   │ t_1 │
        // │ 2227/194 │ = │ t_2 │
        // │ 1019/97  │   │ t_3 │
        // └          ┘   └     ┘

        // A_speed ≈ 7.4187 ms^{-1}
        // B_speed ≈ 7.6153 ms^{-1}
        // C_speed ≈ 7.4046 ms^{-1}

        // Δ_max = 100/C_speed - 100/A_speed
        // ≈ 0.373695
        
        const result = 0.373695
        return result.toPrecision(3)
    }
}

export default Question;
