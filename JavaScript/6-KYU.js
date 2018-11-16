// Consecutive Strings 
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  if (!strarr.length || k > strarr.length || k <= 0) return "";

  else if (k === 1) {
    return strarr
      .slice()
      .filter(e => e.length === Math.max.apply(null, strarr.map(e => e = e.length)))
      .toString();

  } else {
    let copyLengths = strarr.map(e => e = e.length);
    let maxLength = 0;
    let tgtIndex;

    for (let i = 0; i < strarr.length; i++) {
      let thisIterationLength = copyLengths
        .slice(i, i + k)
        .reduce((total, current) => total + current);

      if (thisIterationLength > maxLength) {
        maxLength = thisIterationLength;
        tgtIndex = i;
      }
    }
    return strarr.slice(tgtIndex, tgtIndex + k).join('');
  }
}



// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  arr.sort();
  if (arr[0] === arr[1]) return arr[arr.length - 1];
  return arr[0];
}



// Multiples by permutations
// https://www.codewars.com/kata/55f1a53d9c77b0ed4100004e

function search_permMult(nMax, k) {
  let result = 0;
  for (let i = 1035; ((i * k) <= nMax); i++) {
    let multiple = (i * k).toString().split('').sort((a, b) => +a - +b).join('');
    let base = i.toString().split('').sort((a, b) => +a - +b).join('');
    if (multiple === base) result++
  }
  return result;
}



// Build a pile of Cubes 
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let result = 0;
  for (let i = 1; i < Math.cbrt(m); i++) {
    result += Math.pow(i, 3)
    if (result === m) return i;
  }
  return (-1);
}



// Build Tower 
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let result = [];
  let spaces = String.fromCharCode(32).repeat(nFloors - 1);
  let added = '*';
  for (let i = 0; i < (nFloors * 2); i += 2) {
    result.push(`${spaces}${added}${spaces}`)
    spaces;
    spaces = spaces.split('').slice(1, spaces.length).join('');
    added += '**';
  }
  return result;
}



// Persistent Bugger 
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let counter = 0;
  let numStrArr = num.toString().split('');
  let newNum;

  function numPersistence(num) {
    newNum = num.toString().split('').reduce((a, b) => a *= b);
    if (newNum.toString().length > 1) numPersistence(newNum);
    return ++counter;
  }

  if (numStrArr.length === 1) {
    return counter;
  } else {
    numPersistence(num)
  }
  return counter;
}



// Prime Word 
// https://www.codewars.com/kata/5b1e2c04553292dacd00009e

function primeWord(arr) {
  let charCodes = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    charCodes[i] = [];
    for (let j = 0; j < arr[i][0].length; j++) {
      charCodes[i].push(arr[i][0].charCodeAt(j) + arr[i][1])
    }
  }

  const isPrime = function (num) {
    let start = 2;
    const limit = Math.sqrt(num);
    while (start <= limit) {
      if (num % start++ < 1) return false;
    }
    return num > 1;
  }

  for (let name in charCodes) {
    charCodes[name] = charCodes[name].filter((e) => isPrime(e))
    charCodes[name].length ? result.push(1) : result.push(0);
  }
  return result;
}



// Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let result = {};
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    result.hasOwnProperty(string[i]) ? result[string[i]]++ : result[string[i]] = 1;
  }
  return result;
}



