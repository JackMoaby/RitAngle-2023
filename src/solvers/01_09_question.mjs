import MathUtils from "../../utils/JAVASCRIPT/mathUtils.js"

class Question {
    solve() {
        const sinX = "(x - x^3/6 + x^5/120 - x^7/5040 + x^9/362880 - x^11/39916800)";
        const cosX = "(1 - x^2/2 + x^4/24 - x^6/720 + x^8/40320 - x^10/3628800)";
        const tanX = "(x + x^3/3 + 2 * x^5/15 + 17 * x^7/315 + 62 * x^9/2835 + 1382 * x^11/155925)";


        const cosX_minus_tanX = Math.PI - MathUtils.bruteForceRootsFromInit(
            `${cosX} - ${tanX}`,
            1000, 0);

        const cosX_plus_tanX = Math.PI - MathUtils.bruteForceRootsFromInit(
            `${cosX} + ${tanX}`,
            1000, 0);


        function integral(f, start, end, step=0.0001, accumulator=0) {
            for (let x = start + step / 2; x < end; x += step) {
                accumulator += f(x) * step;
            };

            return accumulator;
        }
            
        const R_1 = 
            Math.abs(integral((x) => Math.sin(x) + Math.cos(x), cosX_minus_tanX, Math.PI)) -
            Math.abs(integral((x) => Math.sin(x) + Math.tan(x), cosX_minus_tanX, Math.PI))

        const R_2 =
            Math.abs(integral((x) => Math.cos(x) + Math.tan(x), Math.PI, cosX_plus_tanX))

        const R_3 =
            Math.abs(integral((x) => Math.sin(x) + Math.tan(x), Math.PI, (5/4) * Math.PI)) -
            Math.abs(integral((x) => Math.cos(x) + Math.tan(x), cosX_plus_tanX, (5/4) * Math.PI))

        const result = R_1 + R_2 + R_3;
        return result.toPrecision(3)
    }
}

export default Question;


