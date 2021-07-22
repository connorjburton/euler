export default function multiples(max: number): number {
    return new Array(max).fill(undefined).map((_, idx) => idx + 1).reduce((agg, val) => (val % 3 === 0 || val % 5 === 0) ? agg += val : agg, 0);
}