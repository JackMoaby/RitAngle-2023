class Question {
    solve() {
        // The maximum angle will be the one which bisects the 
        // bottom right or top left corner
        
        const angleInRadians = 2 * Math.acos(210 / Math.sqrt(297**2 + 210**2));
        const angleInDegrees = (angleInRadians / Math.PI) * 180;
        return angleInDegrees.toPrecision(5)
    }
}

export default Question;
