// ---------- reverse a string ----------
function reverseString(str) {
  str= str.split("").reverse().join("");      // adding a space between quotes will separate by word. no space separates by individual characters
  return str;
}

// ---------- finding the longest word in a string ----------
function findLongestWord(str) {
  var longestWord= str.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord: longest;
  }, " ");
  return longestWord.length;
}

// ---------- title case a sentence ----------
function titleCase(str) {
  str= str.toLowerCase().split(" ");
  for (var i= 0; i < str.length; i++) {
    str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

// ---------- slice and splice ----------
function frankenSplice(arr1, arr2, n) {
  let localArray= arr2.slice();
  for (var i= 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// ---------- falsy bouncer ----------
function bouncer(arr) {
  return arr.filter(Boolean);
}

// ---------- where do i belong ----------
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });
  for (var i= 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

// ---------- mutations ----------
function mutation(arr) {
  var str1= arr[0].toLowerCase();
  var str2- arr[1].toLowerCase();
  for (var i= 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i] < 0) return false;
  }
  return true;
}

// ---------- sort an array alphabetically ----------
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : n < b ? -1 : 1;
  };
}

// ---------- return a sorted array without changing original array ----------
function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

// ---------- sum all numbers in a range ----------
function sumAll(arr) {
  let result= 0;
  for (let i= Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}

// ---------- diff two arrays ----------
function diffArray(arr1, arr2) {
  var newArr= [];
  var orderArr= arr1.concat(arr2).sort();
  for (var i= 0; i < orderArr.length; i++) {
    if (orderArr[i] !== orderArr[i + 1] && orderArr[i] !== orderArr[i - 1]) {
      newArr.push(orderArr[i]);
    }
  } return newArr;
}

// ---------- spinal tap case ----------
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])|[_|\s]+/g,"$1-$2").toLowerCase();
}

// ---------- pig latin ----------
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return str + "way";
  }
  const consonantStr= str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantStr.length) + consonantStr + "ay";
}

// ---------- DNA pairing ----------
function pairElement(str) {
  var basePairs= {
    "A" : "T",
    "T" : "A",
    "G" : "C",
    "C" : "G"
  }
  return str.split("").map(function(key) {
    return [key, basePairs[key]];
  });
}

// ---------- missing letters ----------
function fearNotLetters(str) {
  for (var i= 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) !== 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
  return undefined;
}

// ---------- convert HTML entities ----------
function convertHTML(str) {
  var chars= {
    "&" : "&amps;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : '&quot;',
    "'" : "&apos;"
  }
  return str.replace(/[&<>"']/g, key => chars[key])
}

