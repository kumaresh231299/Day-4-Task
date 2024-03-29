//! 1&2(A) Print odd numbers in an array
//* Annoymous Function
var result = [];
var a = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log("Annoymous Function - Find odd numbers :", a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//* IIFE Function
var result1 = [];
(function (arr1) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] % 2 !== 0) {
            result1.push(arr1[j]);
        }
    }
    console.log("IIFE Function - Find odd numbers :", result1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//* Arrow Function
var result2 = [];
var b = (arr2) => {
    for (var k = 0; k < arr2.length; k++) {
        if (arr2[k] % 2 !== 0) {
            result2.push(arr2[k]);
        }
    }
    return result2;
};
console.log("Arrow Function - Find odd numbers :", b([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//! 1&2(B) Convert all strings to title caps in a string Array
//* Annoymous Function
var titleCase = function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
};
console.log("Title caps in a string Array - Annoymous Function : ", titleCase("i lovE jAva scRIpt"));


//* IIFE Function
(function () {
    var titleCase1 = function (str1) {
        str1 = str1.toLowerCase().split(" ");
        for (var j = 0; j < str1.length; j++) {
            str1[j] = str1[j].charAt(0).toUpperCase() + str1[j].slice(1);
        }
        return str1.join(" ");
    };
    console.log("Title caps in a string Array - IIFE Function : ", titleCase1("i lovE jAva scRIpt"));
})();


//* Arrow Function
var titleCase2 = (str2) => {
    str2 = str2.toLowerCase().split(" ");
    for (var k = 0; k < str2.length; k++) {
        str2[k] = str2[k].charAt(0).toUpperCase() + str2[k].slice(1);
    }
    return str2.join(" ");
};
console.log("Title caps in a string Array - Arrow Function : ", titleCase2("i lovE jAva scRIpt"));



//! 1&2(C) Sum of all numbers in an Array
//* Annoymous Function
var sumArray = function (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }

    return sum;
};
console.log("Annoymous Function - Sum of all numbers in an Array :", sumArray([1, 4, 0, 9, -3]));


//* IIFE Function
(function (array1) {
    let sum1 = 0;

    for (let j = 0; j < array1.length; j += 1) {
        sum1 += array1[j];
    }
    console.log("IIFE Function - Sum of all numbers in an Array :", sum1);
})([1, 4, 0, 9, -3]);


//* Arrow Function
var sumArray1 = (array2) => {
    let sum2 = 0;

    for (let k = 0; k < array2.length; k += 1) {
        sum2 += array2[k];
    }

    return sum2;
};
console.log("Arrow Function - Sum of all numbers in an Array :", sumArray1([1, 4, 0, 9, -3]));



//! 1&2(D) Return all the prime numbers in an array
//* Annoymous Function
var primeNumbers = function (arr) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    var primeArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
};
console.log("Annoymous Function - prime numbers in an array :", primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//* IIFE Function
(function (arr) {
    var primeNumbers = function (arr) {
        function isPrime(num) {
            if (num <= 1) {
                return false;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        var primeArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (isPrime(arr[i])) {
                primeArr.push(arr[i]);
            }
        }
        return primeArr;
    };
    console.log("IIFE Function - prime numbers in an array :", primeNumbers(arr));
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//* Arrow Function
var primeNumbers = (arr) => {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    var primeArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
};
console.log("Arrow Function - prime numbers in an array :", primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//! 1&2(E) Return all the palindromes in an array
//* Annoymous Function
var findPalidromes = function (arr) {
    function isPalindrome(str) {
        let value = str.toLowerCase();
        return value === value.split("").reverse().join("");
    }

    let palindromeArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArr.push(arr[i]);
        }
    }
    return palindromeArr;
};
console.log("Palindromes in an array - Annoymous Function :", findPalidromes(["Mom", "banana", "level", "radar", "racecar"]))


//* IIFE Function
var palindromes = (function (arr) {
    function isPalindrome1(str) {
        let value = str.toLowerCase();
        return value === value.split("").reverse().join("");
    }

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome1(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
})
console.log("Palindromes in an array - IIFE Function :", palindromes(["Mom", "banana", "level", "radar", "racecar"]))


//* Arrow Function
var findPalidromes2 = (arr) => {
    function isPalindrome2(str) {
        let value = str.toLowerCase();
        return value === value.split("").reverse().join("");
    }

    let palindromeArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalindrome2(arr[i])) {
            palindromeArr.push(arr[i]);
        }
    }
    return palindromeArr;
};
console.log("Palindromes in an array - Arrow Function :", findPalidromes2(["Mom", "banana", "level", "radar", "racecar"]));



//! 1(F) Return median of two stored arrays of the same size
//* Annoymous Function
const medianOfTwoArrays = function (ar1, ar2) {
    const merged = [...ar1, ...ar2].sort((a, b) => a - b);
    const length = merged.length;

    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (merged[midIndex - 1] + merged[midIndex]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return merged[midIndex];
    }
};
console.log("Annoymous Function - Median of two stored arrays of the same size :", medianOfTwoArrays([1, 3, 5], [2, 4, 6]));


//* IIFE Function
(function (arr1, arr2) {
    const medianArrays1 = function (arr1, arr2) {
        const merged = [...arr1, ...arr2].sort((a, b) => a - b);
        const length = merged.length;

        if (length % 2 === 0) {
            const midIndex = length / 2;
            return (merged[midIndex - 1] + merged[midIndex]) / 2;
        } else {
            const midIndex = Math.floor(length / 2);
            return merged[midIndex];
        }
    };
    console.log("IIFE Function - Median of two stored arrays of the same size :", medianArrays1(arr1, arr2));
})([1, 3, 5], [2, 4, 6]);



//! 1(G) Remove duplicates from an array
//* Annoymous Function
var removedDuplicateArray = function (arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
};
console.log("Remove duplicates from an array - Annoymous Function :", removedDuplicateArray(["apple", "mango", 2, "apple", 1, 2, 3, "orange", "mango", "mango"]));


//* IIFE Function
(function (arr) {
    let unique1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique1.indexOf(arr[i]) === -1) {
            unique1.push(arr[i]);
        }
    }
    console.log("Remove duplicates from an array - IIFE Function :", unique1)
})(["apple", "mango", 2, "apple", 1, 2, 3, "orange", "mango", "mango"])



//! 1(h) Rotate an array by k times
//* Annoymous Function
const rotateArray = function (arr, rotations) {
    rotations = rotations % arr.length;
    const rotateLeft = () => arr.push(arr.shift());

    for (let i = 0; i < rotations; i++) {
        rotateLeft();
    }
    return arr;
}
const array = [1, 2, 3, 4, 5];
const k = array.length;
console.log("Annoymous Function Original array :", array);
console.log("Rotate an array by k times :", rotateArray(array, k));


//* IIFE Function
(function (array1, k1) {
    const rotateArray1 = function (arr, rotations) {
        rotations = rotations % arr.length;
        const rotateLeft = () => arr.push(arr.shift());

        for (let i = 0; i < rotations; i++) {
            rotateLeft();
        }
        return arr;
    }
    console.log("IIFE Function Original array :", array);
    console.log("Rotate an array by k times :", rotateArray1(array1, k1));
})
const array1 = [1, 2, 3, 4, 5];
const k1 = array.length;