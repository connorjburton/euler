export default function multiples(max: number): number {
    let total = 0;
    for (let i = 0; i <= max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }

    return total;
}