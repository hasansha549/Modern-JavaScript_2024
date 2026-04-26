// JavaScript Memozition
function square(num) {
    return num * num;
}

// console.log(square(4));
// console.log(square(888888888));

/*
 * Name: memoSqr()
? This function creates a clouser to implement memozition (caching Result)
? It is initializes an empty objects cache to store previously calculated square.
? It return an inner function optimizeSrq()
*/
function square(num) {
    if (typeof n !== 'number') {
        throw new TypeError('Input must be a number');
    } // I didn't explained in the video 👍
    return num * num;
}

/*
 * Name: memoSqr()
? This function creates a closure to implement memoization (caching results).
? It initializes an empty object cache to store previously calculated squares.
? It returns an inner function optimizedSquare(num).
 */
function memoSqr() {
    // Outer Scope
    // Closure
    let cache = {}

    /*
  * optimizedSrq(num) Function:
! This is the actual function that calculates and returns the square of a number num.
? It checks if num exists as a key in the cache object.
? If found:
? It logs a message indicating retrieval from cache.
? It returns the cached value directly, avoiding recalculation.
! If not found:
? It logs a message indicating square computation.
? It calls square(num) to calculate the square.
? It stores the calculated square (result) in the cache with num as the key.
? It returns the result.
  */
    return function optimizeSrq(num) {
        if (num in cache) {
            console.log('Returning from Cashe');
            console.log(cache);
            return cache[num]
        } else {
            const result = square(num);
            (cache[num] = result);
            console.log('Coputing Square');
            return result;
        }
    };
}

// Usage
/*
*  Usage:

The memoizedSquare() function is called and assigned to the variable memoSuqare.
memoSquare(9999999999999999) is called twice to calculate the square of a very large number.
*/
const memozition = memoSqr();
console.log(memozition(4));
console.log(memozition(4));
console.log(memozition(4));
console.log(memozition(5));
console.log(memozition(9));