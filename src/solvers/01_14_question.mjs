class Question {
    solve() {
        let values = {
            a: Infinity,
            b: 2,
            c: Infinity
        }
         
        let distance = (a, b, c) => 
            Math.sqrt((a-b) ** 2 + (b-c) ** 2) +
            Math.sqrt((b-c) ** 2 + (c-a) ** 2) +
            Math.sqrt((c-a) ** 2 + (a-b) ** 2)
         
         
        let step = 0.1;
        let epsilon = 0.0001;
        
        while (step > epsilon){
            values.b -= step;
            values.a = values.b;
            values.c = Math.sqrt(values.a ** 2 + values.b ** 2);
            let currentDistance = distance(values.a, values.b, values.c);
            if (currentDistance < 1){
                values.b += step;
                step /= 10;
            };
        };
         
        const area = (1/2 * ((values.c > values.b ? values.c : values.b) - values.a) ** 2).toPrecision(3);
        return area;
    }
}

export default Question;


