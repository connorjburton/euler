import fibonacci from './index';

describe('fibonacci', () => {
    test('sum of max 10', () => {
        expect(fibonacci(10)).toBe(10);
    });

    test('sum of max 4000000', () => {
        expect(fibonacci(4000000)).toBe(4613732);
    });
});