export function fibonacci(max: number): number {
    if (max < 2) {
        throw new Error('Fibonacci sequences must be at least 2 terms long');
    }

    let twoBefore = 1;
    let oneBefore = 2;
    let total = 2;
    // Even though we have a break in the loop i'd rather do this guard rather than while(true)
    while (oneBefore < max) {
        const newTerm = oneBefore + twoBefore;
        if (newTerm > max) {
            break;
        }
        
        if (newTerm % 2 === 0) {
            total += newTerm;
        }

        twoBefore = oneBefore;
        oneBefore = newTerm;
    }

    return total;
}

// Tail recursion
export function fib2(n: number, a: number = 1, b: number = 1): number {
    if (n <= 2) {
        return a;
    }

    return fib2(n - 1, a + b, a);
}
