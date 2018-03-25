### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```

```javascript
// My Code
const insensitiveEqual = (a, b) => {
  return a.toLowerCase() === b.toLowerCase() ? true : false
}

// Solution
function insensitiveCompare(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
```

### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

```javascript
// My Code
const leftPad = (str, num) => {
  if (str.length < num) {
    let space = '';
    while (true) {
      space += ' ';

      if (space.length == num - str.length) {
        break;
      }
    }
    str = space + str;
  }
  return str;
}

// Solution
function leftPad(s, n) {
  if (s.length > n) {
    return s;
  } else {
    return ' '.repeat(n - s.length) + s;
  }
}
```

### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

```javascript
// My Code
const vowel = str => {
  let count = 0;
  for (const char of str) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
      default:
    }
  }
  return count;
}

// Solution
function countVowel(str) {
  let count = 0;
  for (let c of str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(c)) {
      count++;
    }
  }
  return count;
}
```

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```

```javascript
// My Code
const countChar = str => {
  const obj = {};
  const splitStr = str.split('');
  splitStr.forEach((item, index) => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = 1;
    } else {
      obj[item]++
    }
  })
  return obj;
}

// Solution
function countChar(str) {
  const obj = {};
  for (let c of str) {
    if (c in obj) {
      obj[c]++;
    } else {
      obj[c] = 1;
    }
  }
  return obj;
}
```

### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

```javascript
// My Code
const isPalindrome = str => {
  const reverse = str.split('').reverse().join('');
  return str === reverse ? true : false;
}

const isPalindrome2 = str => {
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {ㅁ
      return false;
    }
  }
  return true;
}

// Solution
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.lengh / 2); i++) {
    if (str[i] !== str[str.length -1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  const arr1 = Array.from(str);
  const arr2 = Array.from(str).reverse();
  for (let i = 0; i < Math.floor(arr1.length / 2); i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome3(str) {
  const spaceRemoved = str.replace(/\s/g, '').toLowerCase();
  return spaceRemoved === Array.from(spaceRemoved).reverse().join('');
}
```

### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

```javascript
// My Code
const subString = str => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr.push(str.substring(i, j));
    }
  }
  return arr;
}

// Solution
function subString(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  return arr;
}
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```
```javascript
// My Code
const removeDuplicates = str => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  
  const removedStr = arr.join('');
  return removedStr;
}

// Solution
function removeDuplicates(str) {
  let newStr = '';
  for (let c of str) {
    if (!newStr.includes(c)) {
      newStr += c;
    }
  }
  return newStr;
}
```

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

```javascript
// My Code
const hiddenId = str => {
  const atIndex = str.indexOf('@');
  const newEmail = ('*').repeat(atIndex) + '@' + str.substring(atIndex+1, str.length);
  return newEmail;
}

// Solution
function hideId(email) {
  let numOfId = 0;
  let atAppeared = false;
  let domain = '';
  for (let c of email) {
    if (c === '@') {
      atAppeared = true;
    } else if (!atAppeared) {
      numOfId++;
    } else {
      domain += c;
    }
  }
  let result = '';
  for (let i = 0; i < numOfId; i++) {
    result += '*';
  }
  result += '@';
  result += domain;
  return result;
}

function hideId2(eamil) {
  const arr = email.split('@');
  return '*'.repeat(arr[0].length) + '@' + arr[1];
}

function hideId3(email) {
  const [id, domain] = email.split('@');
  return '*'.repeat(id.length) + '@' + domain;
}
```

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

```javascript
// My Code
const reversedCase = str => {
  let reversedStr = '';

  for (const char of str) {
    if (char == char.toLowerCase()) {
      reversedStr += char.toUpperCase();
    } else {
      reversedStr += char.toLowerCase();
    }
  }
  return reversedStr;
}

// Solution
function changeCase(str) {
  let newStr = '';
  for (let c of str) {
    if (c.toLowerCase() === c) {
      newStr += c.toUpperCase();
    } else {
      newStr += c.toLowerCase();
    }
  }
  return newStr;
}
```

### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```javascript
// My Code
const toUpperFirst = str => {
  const splitStr = str.split(' ');
  const arr = [];
  for (const word of splitStr) {
    const upper = word[0].toUpperCase() + word.substring(1, word.length);
    arr.push(upper);
  }
  const upperFirst = arr.join(' ');
  return upperFirst;
}

// Solution
function capitalize(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
```

### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```javascript
// My Code
const longestWordIs = str => {
  const splitStr = str.split(' ');
  let len = 0;
  let longestWord = '';

  for (const word of splitStr) {
    if (word.length > len) {
      len = word.length;
      longestWord = word;
    }
  }
  return longestWord;
}

// Solution
function longestWord(str) {
  const arr = str.split(' ');
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
```

### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

```javascript
// My Code
const firstChars = (s, n) => s.substring(0, n);

const firstChars2 = (s, n) => {
  let cutStr = '';
  for (let i = 0; i < n; i++) {
    cutStr += s[i];
  }
  return cutStr;
}

// Solution
function firstChars(s, n) {
  let newStr = '';
  for (let i = 0; i < n && i < s.length; i++) {
    newStr += s[i];
  }
  return newStr;
}
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾸어주는 함수를 작성하세요.

```javascript
// My Code
const toSnakeCase = str => {
  let snakeStr = '';

  for (const char of str) {
    if (char == char.toLowerCase()) {
      snakeStr += char;
    } else {
      snakeStr += '_' + char.toLowerCase();
    }
  }
  return snakeStr;
}

// Solution
```

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾸어주는 함수를 작성하세요.

```javascript
// My Code
const toCamelCase = str => {
  const splitStr = str.split('_');
  let camelStr = '';

  for (const word of splitStr) {
    if (splitStr.indexOf(word) == 0) {
      camelStr += word;
    } else {
      camelStr += word[0].toUpperCase() + word.substring(1, word.length);
    }
  }
  return camelStr;
}

// Solution
```

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

```javascript
// My Code
const split = (str, sep) => {
  const arr = [];
  if (sep === undefined) {
    arr.push(str);
  } else if (sep === '') {
    for (const char of str) {
      arr.push(char);
    }
  } else {
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] != sep) {
        word += str[i];
        if (i == str.length - 1) {
          arr.push(word);
        }
      } else {
        arr.push(word);
        word = '';
      }
    }
  }
  return arr;
}

// Solution
```

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

```javascript
// My Code
const convertBinary = (binary) => {
  let decimal = 0;
  const binaryStr = typeof binary === 'string' ? binary : String(binary);

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      decimal += Number(binaryStr[i]) * (2 ** (binaryStr.length - i - 1))
    }
  }
  
  return decimal;
}

// Solution
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```

```javascript
// My Code
const insertHypen = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (str[i] % 2 == 0 && i < str.length - 1) {
      if (str[i+1] % 2 == 0) {
        newStr += "-";
      }
    }
  }
  return newStr;
}

// Solution
```