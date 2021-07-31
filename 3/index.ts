// This is a more efficent algorithim for determining prime on larger numbers
// This algorithim isn't quite right though, it thinks 91 is a prime for example
// Possibly because I was using this function on any number larger than 10, it may 
// only work on much larger numbers.

// const notPrimeIfEnd = [0, 2, 4, 5, 6, 8];
// function isLargePrime(num: number): boolean {
//     const endsIn = num % 10;
//     // if the given number ends in one of the numbers in the array, it's not a prime
//     if (notPrimeIfEnd.indexOf(endsIn) > -1) {
//         return false;
//     }

//     // if the sum of the digits of the given number is divisble by 3, it's not a prime
//     if (num.toString().split('').map((i) => parseInt(i, 10)).reduce((agg, i) => agg += i) % 3 === 0) {
//         return false;
//     }

//     // divide all prime numbers below the square root value of the given number, if it's divisible by any
//     // of them, it's not a prime number
//     const sqrt = Math.sqrt(num);
//     const prime = new Array(Math.floor(sqrt) - 1).fill(undefined).map((_, idx) => idx + 1).some((i) => {
//         if (isPrime(i) && num % i === 0) {
//             return false;
//         }

//         return true;
//     });

//     if (!prime) {
//         return false;
//     }

//     return true;
// }

// function isPrime(set: Set, num: number): boolean {
//     for (let i = 0; i <= num; i++) {
        
//     }
// }

// export default function largestPrimeFactor(num: number): number | undefined {
//     const primes = new Set();
//     setPrimes(primes, num);

//     for (let i = num; i >= 0; i--) {
//         if (!isPrime(i)) {
//             continue;
//         }

//         if (num % 2 !== 0) {
//             continue;
//         }

//         return factor;
//     }

// }