module.exports = function toReadable(number) {
    const primes = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const decades = {
        0: "",
        1: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let resultArray = [];
    let arrayOfNumbers = [...number.toString()];
    while (arrayOfNumbers.length < 3) {
        arrayOfNumbers.unshift("0");
    }
    if (arrayOfNumbers[1] === "1") {
        arrayOfNumbers[2] = arrayOfNumbers[1] + arrayOfNumbers[2];
    }
    if (number === 0) {
        return "zero";
    }
    if (primes[arrayOfNumbers[0]]) {
        resultArray.push(primes[arrayOfNumbers[0]]);
        resultArray.push("hundred");
    }
    if (decades[arrayOfNumbers[1]]) {
        resultArray.push(decades[arrayOfNumbers[1]]);
    }
    if (primes[arrayOfNumbers[2]]) {
        resultArray.push(primes[arrayOfNumbers[2]]);
    }
    return resultArray.join(" ");
};
