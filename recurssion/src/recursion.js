// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

var sum = function(array) {
    if (array.length === 1 ) {
        return array[0];
    }
    if (array.length === 0) {
        return 0;
    }
    else {
        return array.pop() + sum(array)
    }
    
};

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 3. Check if a number is even.
var isEven = function(n) {
    if (n===0) {
        return true;
    }
    if (n===1) {
        return false;
    }
    if (n<0) {
        return isEven(-n+2)
    } else {
        return isEven(n-2);
    }
}

// 4. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length === 0) {
        return "";
    }
    else {
        let str = string.substr(1);
        return reverse(str) + string.charAt(0)
    }
    



};


// 5. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length === 1 ) {
        return array;
    }
    if (array.length === 0 ) {
        return [];
    } else {
        return array.pop() + reverseArr(array);
    }
};


// 6. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n === 2) {
        return [0,1]
    }
    if (n === 1) {
        return [0]
    } else {
        var recur = fibonacci(n-1)
        recur.push(recur(recur.length-1) + recur(recur.length-2))
        return recur
    }

};

// 7. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};



// 8. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};


// 9. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 10. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    return array.sort(function(a,b) {
        return a-b
    })
};


