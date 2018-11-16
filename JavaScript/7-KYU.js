// Unflatten a list (Easy) 
// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a

function unflatten(flatArray) {
  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] > 2) flatArray[i] = flatArray.splice(i, flatArray[i] || flatArray.length - 1, flatArray[i + 1])
  }
  return flatArray;
}



// Resistor Color Codes 
// https://www.codewars.com/kata/57cf3dad05c186ba22000348

function decodeResistorColors(bands) {
  let result = '';
  bands = bands.split(' ');
  for (let i = 0; i < 2; i++) {
    bands[i] === 'black' ? result += '0' :
      bands[i] === 'brown' ? result += '1' :
        bands[i] === 'red' ? result += '2' :
          bands[i] === 'orange' ? result += '3' :
            bands[i] === 'yellow' ? result += '4' :
              bands[i] === 'green' ? result += '5' :
                bands[i] === 'blue' ? result += '6' :
                  bands[i] === 'violet' ? result += '7' :
                    bands[i] === 'gray' ? result += '8' :
                      result += '9';
  }
  bands[2] === 'black' ? null :
    bands[2] === 'brown' ? result += '0' :
      bands[2] === 'red' ? result = result.split('').join('.') + 'k' : // 
        bands[2] === 'orange' ? result += 'k' :
          bands[2] === 'yellow' ? result += '0k' :
            bands[2] === 'green' ? result = result.split('').join('.') + 'M' :
              bands[2] === 'blue' ? result += 'M' :
                bands[2] === 'violet' ? result += '0M' :
                  bands[2] === 'gray' ? result += '00M' :
                    result += '000M';
  bands[3] === 'gold' ? result += ' ohms, 5%' :
    bands[3] === 'silver' ? result += ' ohms, 10%' :
      result += ' ohms, 20%'
  if (result[1] === '.' && result[2] === '0') {
    result = result.split('')
    result.splice(1, 2);
    result = result.join('');
  }
  return result
}



// How many are smaller than me?
// https://www.codewars.com/kata/56a1c074f87bc2201200002e

function smaller(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums.slice(i, nums.length).filter((e) => e < nums[i]).length;
  }
  return nums;
}



// Fizz Buzz
// https://www.codewars.com/kata/5300901726d12b80e8000498

function fizzbuzz(num) {
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(i % 15 === 0 ? 'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i);
  }
  return result;
}



// Switcheroo 
// https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x) {
  return x.split('').map((e) => e === 'a' ? e = 'b' : e === 'b' ? e = 'a' : e).join('');
}



// Distributing Candies Fairly
// https://www.codewars.com/kata/59901cd68fc658ab6c000025

function distribute(m, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  for (let i = 0; i < m; i++) {
    arr[i]++;
    if (i === arr.length - 1) {
      i -= n;
      m -= n;
    }
  }
  return arr.includes(NaN) ? [] : arr;
}



// Thinkful - String: Drills: Repeater
// https://www.codewars.com/kata/585a1a227cb58d8d740001c3

function repeater(string, n) {
  return string.repeat(n);
}



// Sorting Arrays
// https://www.codewars.com/kata/57fe864854685b1c420002e0

function sortArray(a1, a2) {
  let result = [];
  let firsts = a1.map((e) => e = e[0]);
  for (let i = 0; i < a2.length; i++) {
    result.push((a2.filter((e) => e.charAt(0) === firsts[i])).toString());
  }
  return result;
}



// Chuck Norris IV - Bearded Fist
// https://www.codewars.com/kata/57066708cb7293901a0013a1

function fistBeard(arr) {
  var flattened = [].concat.apply([], arr)
  return flattened.map((e) => e = [...String.fromCharCode(e)]).join('');
}



// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  return str.length === Array.from(new Set(str.toLowerCase().split('').map((e) => e.charCodeAt()))).length ? true : false
}



// Product of Array Items
// https://www.codewars.com/kata/5901f361927288d961000013

function product(values) {
  let result = null;
  return values ? values.length ? values.reduce((a, b) => a *= b) : null : null;
}



// Sum of a nested list
// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018

const sumNested = arr => {
  let result = 0;
  isNested = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        result += arr[i]
      } else if (typeof arr[i] === 'object') {
        isNested(arr[i])
      }
    }
    return result;
  }
  return isNested(arr);
}



// Bubblesort Once
// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

function bubblesortOnce(a) {
  let arr = [...a]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let swapped = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = swapped
    }
  }
  return arr;
}



// Determine if the poker hand if flush
// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d

function isFlush(cards) {
  let result = true;
  let suit = cards[0].charAt(cards[0].length - 1)
  for (let i = 0; i < cards.length; i++) {
    if (suit !== cards[i].charAt(cards[i].length - 1)) {
      result = false;
    }
  }
  return result;
}



// Progressive Spiral Number Position
// https://www.codewars.com/kata/5a254114e1ce0ecf6a000168

function layers(n) {
  let cumulativeSpaces = 0;
  let base = 1;
  let counter = 0;
  for (let i = 0; cumulativeSpaces < n; i) {
    cumulativeSpaces = Math.pow(base, 2)
    base += 2;
    counter++;
  }
  return counter;
}



// Form the Minimum
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
  values = values.sort((a, b) => a - b);
  let uniqVals = [...new Set(values)];
  return +uniqVals.join('');
}



// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
  dna = dna.split('').map((e) => {
    if (e === "A") {
      return e = "T"
    } else if (e === "T") {
      return e = "A"
    } else if (e === "C") {
      return e = "G"
    } else if (e === "G") {
      return e = "C"
    }
  })
  return dna.join('');
}



// Ball and Cups
// https://www.codewars.com/kata/5b715fd11db5ce5912000019

function cupAndBalls(b, arr) {
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(b)) {
        console.log(arr[i]);
        let sum = arr[i].reduce((tot, num) => tot += num)
        b = sum - b;
      }
    }
  }
  return b;
}



// Product Array (Array Series #5)
// https://www.codewars.com/kata/5a905c2157c562994900009d

function productArray(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let arrCopy1 = [...numbers];
    let arrCopy2 = [...numbers];
    arrCopy1.splice(i, 1);
    console.log(arrCopy1);
    arrCopy2[i] = arrCopy1.reduce((tot, num) => tot *= num)
    result.push(arrCopy2[i]);
  }
  return result;
}



// Maximum Triplet Sum (Array Series #7)
// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(nums) {
  let max = [];
  for (let i = 0; i < 3; i++) {
    let biggest = Math.max.apply(null, nums);
    nums = nums.filter((e) => e !== biggest);
    max.push(biggest);
  }
  return max.reduce((tot, num) => tot += num)
}



// Tidy Number (Special Numbers Series #9)
// https://www.codewars.com/kata/5a87449ab1710171300000fd

function tidyNumber(n) {
  let nArr = n.toString().split('')
  let largest = 0;
  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i] < largest) {
      return false;
    } else {
      largest = nArr[i]
    }
  }
  return true;
}



// Kaprekar Split
// https://www.codewars.com/kata/5b6ee22ac5cc71833f0010d7

function kaprekarSplit(n) {
  let result = -1;
  let square = Math.pow(n, 2);
  squareStr = square.toString();
  for (let i = 0; i < squareStr.length; i++) {
    if (parseInt(squareStr.substring(0, i + 1)) + parseInt(squareStr.substring(i + 1, squareStr.length)) === n) {
      result = i + 1
    }
  }
  if (n === 1) {
    result = 0;
  }
  return result;
}



// The wheat/rice and chassboard problem
// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

function squaresNeeded(grains) {
  if (grains !== 0) {
    grains = grains.toString(2).split('').reverse();
    return grains.length;
  } else {
    return 0
  }
}



// Build a square
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(int) {
  let result = '';
  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      result += ('+')
    }
    result = result + ('\n')
  }
  result = result.substring(0, result.length - 1);
  return result;
}



// Who's Online
// https://www.codewars.com/kata/5b6375f707a2664ada00002a

const whosOnline = (friends) => {
  if (friends.length) {
    let friendsObj = {
      online: [],
      offline: [],
      away: []
    };
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].status == 'offline') {
        friendsObj.offline.push(friends[i].username);
      } else {
        if (friends[i].lastActivity > 10) {
          friendsObj.away.push(friends[i].username)
        } else {
          friendsObj.online.push(friends[i].username)
        }
      }
    }
    if (!friendsObj.online.length) {
      delete friendsObj.online;
    } else if (!friendsObj.offline.length) {
      delete friendsObj.offline;
    } else if (!friendsObj.away.length) {
      delete friendsObj.offline;
    }
    return friendsObj;
  } else {
    return {};
  }
}



// Are the numbers in order?
// https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr) {
  let result = true;
  let highestPrev = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < highestPrev) {
      result = false;
    } else {
      highestPrev = arr[i]
    }
  }
  return result;
}



// Digits explosion
// https://www.codewars.com/kata/585b1fafe08bae9988000314

function explode(str) {
  let strArr = [...str];
  for (let i = 0; i < strArr.length; i++) {
    let iVal = strArr[i]
    strArr[i] = strArr[i].repeat(iVal);
  }
  let result = strArr.join("");
  return result;
}



// Form the Largest
// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e

function maxNumber(n) {
  let result = [];
  let stringy = n.toString();
  let strArr = Array.from(stringy);
  let length1 = strArr.length;
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = Number(strArr[i]);
  };
  for (let j = 0; j < length1; j++) {
    let max = Math.max(...strArr);
    let maxInd = strArr.indexOf(Math.max(...strArr));
    strArr.splice(maxInd, 1);
    result.push(max);
    max = 0;
    maxInd = null;
  }
  result = result.join("");
  return Number(result);
}



// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(str) {
  if (str.length % 2 === 0) {
    let half = (str.length / 2)
    return str[half - 1] + str[half];
  } else {
    let half = ((str.length + 1) / 2)
    return str[half - 1]
  }
}




// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  var numString = num.toString();
  var result = [];
  for (var i = 0; i < numString.length; i++) {
    result[i] = Math.pow(numString[i], 2);
  } return Number(result.join(""));
}