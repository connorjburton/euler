export default function fibonacci(max: number): number {
    const terms = [1, 2];

    // Even though we have a break in the loop i'd rather do this guard rather than while(true)
    while (terms[terms.length - 1] < max) {
        const len = terms.length;
        const newTerm = terms[len - 1] + terms[len - 2];
        if (newTerm > max) {
            break;
        }

        terms.push(newTerm);
    }

    return terms.reduce((agg, val) => val % 2 === 0 ? agg += val : agg, 0);
}