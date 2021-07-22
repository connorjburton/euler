import multiples from './index';

describe('multiples', () => {
    test('returns first 9', () => {
        expect(multiples(9)).toBe(23);
    });

    test('returns first 1000', () => {
        expect(multiples(999)).toBe(233168);
    });
});