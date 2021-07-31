import { fibonacci, fib2 } from './index';

describe('fibonacci', () => {
    test('sum of max 10', () => {
        expect(fibonacci(10)).toBe(10);
    });

    test('sum of max 4000000', () => {
        expect(fibonacci(4000000)).toBe(4613732);
    });
});

// describe('fib2', () => {
//     test('1', () => {
//         expect(fib2(1)).toBe(1);
//     });

//     test('2', () => {
//         expect(fib2(2)).toBe(1);
//     });
    
//     test('3', () => {
//         expect(fib2(3)).toBe(2);
//     });

//     test('5', () => {
//         expect(fib2(5)).toBe(5);
//     });

//     test('8', () => {
//         expect(fib2(8)).toBe(21);
//     });

//     test('12', () => {
//         expect(fib2(12)).toBe(144);
//     });
// });