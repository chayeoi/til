# Algorithms

## Basic

### 문제 1

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.

```javascript
// My Code
const bigger = (a, b) => {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

// Solution
function larger2(x, y) {
  return x> y? x : y;
}
```

### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

```javascript
// My Code
const ispositive = (a, b, c) => {
  if (a * b * c > 0) {
    return true;
  } else if (a * b* c <= 0) {
    return false;
  } else {
    try {
      throw new Error('Error!')
    } catch(e) {
      console.log(e);
    }
  }
}

// Solution
function isPositive(x, y, z) {
  const product = x * y * z;
  if (product > 0) {
    return true;
  } else if (product <= 0) {
    return false;
  } else {
    throw new Error('입력값이 잘못되었습니다.')
  }
}
```

### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:
```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3
```

```javascript
// My Code
const limit = (min, max, input) => {
  if (min > input) {
    return min;
  } else if (max < input) {
    return max;
  } else {
    return input;
  }
};

// Solution 1
function limit(min, max, input) {
  if (input < min) {
    return min;
  } else if (input > max) {
    return max;
  } else {
    return input;
  }
}

// Solution 2
function limit2(min, max, input) {
  return (input < min ? min :
          input > max ? max :
          input);
}
```

### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

```javascript
// My Code
const even = (input) => {
  if (input % 2 == 0) {
    console.log(`${input}은 짝수입니다.`)
  } else {
    console.log(`${input}은 홀수입니다.`)
  }
}

for (let i = 1; i <= 20; i ++) {
  even(i);
}

// Solution
function printIfEvenOrOdd(x) {
  if (x % 2 === 0) {
    console.log(`${x}는 짝수입니다.`);
  } else {
    console.log(`${x}는 짝수입니다.`);
  }
}

for (let i = 20; i >= 1; i--) {
  printIfEvenOrOdd(i);
}

for (let i = 0; i < 20; i++) {
  printIfEvenOrOdd(i);
}
```

### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

```javascript
// My Code
const commonMultiple = (input) => {
  if (input % 3 == 0) {
    if (input % 5 == 0) {
      console.log(`${input}은 3과 5의 공배수입니다.`)
    }
  }
}

for (let i = 1; i <= 100; i++) {
  commonMultiple(i);
}

// Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 ==0) {
    console.log(i)
  }
}
```

### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

```javascript
// My Code
const divisor = (input) => {
  for (let i = 0; i <= input; i++) {
    if (input % i == 0) {
      console.log(`${i}은 ${input}의 약수입니다.`);
    }
  }
}
// Solution
function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
```

### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

```javascript
// My Code
const isPrimeNumber = (input) => {
  let count = 0;

  for (let i = 1; i <= input; i++) {
    if (input % i == 0) {
      count++;
    };
  };

  if (count == 2) {
    console.log(`${input}은 소수입니다.`);
    return true;
  } else {
    console.log(`${input}은 소수가 아닙니다.`);
    return false;
  };
};

// Solution
function isPrime(n) {
  for (let i = 2; i <= n -1; i++) {
    console.log(`${i}에 대해서 루프가 실행되었습니다.`)
    if (n % i === 0) {
      return false;
    }
  }
  // 소수다!
  return true;
}
```

### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

```javascript
// My Code
for (let i = 1; i <= 100; i++) {
  let str = i.toString();
  if (str.includes('3') || str.includes('6') || str.includes('9')) {
    console.log('짝!')
  } else {
    console.log(i);
  };
};

// Solution
for (let i = 1; i <= 100; i++) {
  const str = i.toString();
  if (str.includes('3') || str.includes('6') || str.includes('9')) {
    console.log('짝!')
  } else {
    console.log(i);
  };
};

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 ===0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
```

### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1을 입력받은 경우:
```
*
```

3을 입력받은 경우:
```
*
* *
* * *
```

5를 입력받은 경우:
```
*
* *
* * *
* * * *
* * * * *
```

```javascript
// My Code
const star = (input) => {
  let sum = '';

  for (let i = 1; i <= input; i++) {
    sum += '* ';
    console.log(sum);
  };
};

// Solution
```

### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1를 입력받은 경우:
```
*
```

3를 입력받은 경우:
```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:
```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```
```javascript
// My Code
const diamond = input => {

  for (let i = 1; i <= input; i++) {
    let sum = "";
    const space = " ";

    for (let j = 1; j <= input - i; j++) {
      sum += space;
    }

    sum += '*'

    for (let j = 1; j < i; j++) {
      sum += ' *';
    }

    console.log(sum);

  }

  for (let i = 1; i <= input - 1; i++) {
    let sum = "";
    const space = " ";

    for (let j = 1; j <= i; j++) {
      sum += space;
    }

    sum += "*";

    for (let j = 1; j <= input - i -1; j++) {
      sum += " *";
    }

    console.log(sum);
  }
};

// repeat 함수 만들기
const repeat = (str, re) => {
  
  if (typeof str != String) {
    str = str.toString()
  }
  
  let repeatedString = '';
  
  for (i = 0; i < re; i++) {
    repeatedString += str;
  }
  
  return repeatedString
}


// Solution
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '* '.repeat(i));
  }
  for (let i = n - 1; i > 0; i--) {
    console.log(' '.repeat(n - i) + '* '.repeat(i));
  }
}
```

### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

```javascript
// My Code

// Solution
```

### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

```javascript
// My Code
const biggest1 = (a, b, c) => {

  const arr = [a, b, c].sort((x, y) => y - x)
  console.log(arr[0])
  console.log(arr[1])
  console.log(arr[2])
}

const biggest2 = (a, b, c) => {
  const arr = [];
  if (a - b >= 0) {
    if (b >= c) {
      arr[0] = a;
      arr[1] = b;
      arr[2] = c;
    } else {
      if (a >= c) {
        arr[0] = a;
        arr[1] = c;
        arr[2] = b;
      } else {
        arr[0] = c;
        arr[1] = a;
        arr[2] = b;
      }
    }
  } else {
    if (a >= c) {
      arr[0] = b;
      arr[1] = a;
      arr[2] = c;
    } else {
      if (b >= c) {
        arr[0] = b;
        arr[1] = c;
        arr[2] = a;
      } else {
        arr[0] = c;
        arr[1] = b;
        arr[2] = a;
      }
    }
  }

  for (const i of arr) {
    console.log(i);
  }
}

// Solution
function sort(x, y, z) {
  // 큰 값을 뒤로 보낸다.
  if (x > y) {
    const temp = x;
    x = y;
    y = temp;
  };
  
  if (y > z) {
    const temp = y;
    y = z;
    z = temp;
  };
  
  // x와 y를 비교한다.
  if (x > y) {
    const temp = x;
    x = y;
    y = temp;
  };
  
  console.log(x, y, z);
}
```

### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.

```javascript
// My Code
const fibonacci = n => {

  if (n == 1) {
    console.log(0)
    return 0;
  } else if (n == 2) {
    console.log(0)
    console.log(1)
    return 1;
  } else {
    let next = 0;
    let cur = 1;
    let pre = 0;
    console.log(0)
    console.log(1)
    for (let i = 0; i < n - 2; i++) {
      next = pre + cur;
      pre = cur;
      cur = next;
      console.log(next)
    }
    return next;
  }
}

// Solution
function fibo(n) {
  let x = 0;
  let y = 1;
  let sum;
  // n === 1이면 한 단계도 실행하지 않는다.
  // n === 2이면 한 단계 실행한다.
  // n === 3이면 두 단계 실행한다.
  
  for (let i = 0; i < n - 1; i++) {
    sum = x + y;
    
    // [x, y] = [y, x + y];
    x = y;
    y = sum;
  }
  return x;
}
```

## Math

### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```javascript
// My Code
const circleArea = r => Math.PI * (r ** 2);

// Solution
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```javascript
// My Code
const randInt = (min, max) => {
  const arr = [];
  for (let i = min; i < max; i++) {
    arr.push(i);
  }

  const random = arr[Math.floor(Math.random() * arr.length)];

  return random;
}

// Solution
```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

```javascript
// My Code
const ceilBy5 = int => {
  const result = int % 5 === 0 ? int : int + (5 - (int % 5));
  return result;
}

// Solution
const ceilBy5 = x => Math.ceil(x / 5) * 5;
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.

```javascript
// My Code

// Solution
```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

```javascript
// My Code
const extractColor = () => {
  const colors = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * colors.length);
    color += colors[index];
  }
  return color;
}

// Solution
function randomHtmlColor() {
  const availableChars = '0123456789abcdef';
  let newStr = '#';
  
  for (let i = 0; i < 6; i++) {
    newStr += availableChars[Math.floor(Math.random() * 16)];
  }
}

function randomHtmlColor2() {
  const value = Math.random() * 256 * 256 * 256;
  return '#' + (Math.floor(value).toString(16);
}
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

```javascript
// My Code
const randomString = (n) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let newStr = '';
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * chars.length);
    newStr += chars[index];
  }
  return newStr;
}

// Solution
const str = '0123456789abcdefABCDEF!@#$%^&*()';
function randomString(n) {
  let newStr = '';
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    newStr += str[randomIndex];
  }
  return newStr;
}
```

### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

```javascript
// My Code
const sigma = (arr) => {
  const a = arr.map(item => item ** 2).reduce((pre, cur) => pre + cur, 0) / arr.length;
  const b = (arr.reduce((pre, cur) => pre + cur, 0) / arr.length) ** 2;
  const variance = a - b;
  return variance ** (1 / 2);
}

// Solution
```

## String

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

## Array

### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:
```
range(3, 6); -> [3, 4, 5, 6]
```

```javascript
// My Code
const range = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

// Solution
function range(start, end) {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}
```

### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.

```javascript
// My Code
const sum = arr => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
}

const sum2 = arr => {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
}

// Solution
function sumArray(arr) {
  let sum = 0;
  
  for (let item of arr) {
    sum += item;
  }
  
  return sum;
}
```

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```javascript
// My Code
const filter = arr => {
  return arr.filter((item, index) => {
    return !!item;
  });
};

const filter2 = arr => {
  let array = [];
  for (const item of arr) {
    if (item) {
      array.push(item);
    }
  }
  return array;
}

// Solution
function filter(arr) {
  const newArr = [];
  for (let item of arr) {
    if (item) {
      newArr.push(item);
    }
  }
  return newArr;
}
```

### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```javascript
// My Code
const set = arr => {
  arr.forEach((item, index) => {
    for (let i = arr.length - 1; i > index; i--) {
      if (item == arr[i]) {
        arr.splice(i, 1);
      }
    };
  })
   return arr;
}

// Solution
function removeDuplicates(arr) {
  const newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}
```

### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:
```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```

```javascript
// My Code
const addArray = (a, b) => {
  const newArray = [];
  const newLength = a.length < b.length ? a.length : b.length;

  for (let i = 0; i < newLength; i++) {
    newArray[i] = a[i] + b[i];
  }

  if (a.length > b.length) {
    for (let i = newLength; i < a.length; i++) {
      newArray[i] = a[i];
    }
  } else if (a.length < b.length) {
    for (let i = newLength; i < b.length; i++) {
      newArray[i] = b[i];
    }
  }

  return newArray;
}

// Reverse
const reverse = arr => {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  };
  return reversedArray;
};

// Solution
function addArray(arr1, arr2) {
  const newArr = [];
  const longArr = arr1.length > arr2.length ? arr1 : arr2;
  const shortArr = arr1.length > arr2.length ? arr2 : arr1;
  
  for (let i = 0; i < longArr.length; i++) {
    newArr.push(longArr[i]);
    if (shortArr[i] !== undefined) {
      newArr[i] += shortArr[i]
    }
  }
  return newArr;
}

// Reverse Solution
function reverse(arr) {
  const newArr = [];
  
  for (let i = arr.length - 1; i >= 0; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
```

### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

예:
```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
```

```javascript
// My Code
const combination = arr => {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const item = [];
      item.push(arr[i], arr[j]);
      result.push(item);
    }
  }
  return result;
}

// Solution
function combination(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push([arr[i], arr[j]]);
    }
  }
  return newArr;
}
```

### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.

예:
```
coins(163, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```

```javascript
// My Code
const coins = (money, coin) => {
  const sortedCoin = coin.sort((x, y) => y - x)
  let rest = money;
  let quotient = 0;

  for (let i = 0; i < sortedCoin.length; i++) {
    rest = i == 0 ? money : rest % sortedCoin[i - 1];
    quotient = Math.floor(rest / sortedCoin[i]);
    for (let j = 0; j < quotient; j++) {
      console.log(sortedCoin[i]);
    }
  }
}

// or
const coins2 = (money, coin) => {
  let rest = money;
  const sortedCoin = coin.sort((x, y) => y - x);

  for (const item of coin) {
    
    while (rest >= item) {
      rest -= item;
      console.log(item);
    }
  }
}

// Solution
function coins(amount, coinTypes) {
  let currentAmount = amount;
  for (let ct of coinTypes) {
    // 정수 나눗셈 방법
    const result = Math.floor(currentAmount / ct);
    
    // 코인타입을 result만큼 출력
    // ...
    for (let i = 0; i < result; i++) {
      console.log(ct)
    }
    // 빼기
    // ...
    currentAmount -= result * ct;
  }
}

// Solution 2
function coins2(amount, coinTypes) {
  let currentAmount = amount;
  for (let ct of coinTypes) {
    while (currentAmount - ct > 0) {
      console.log(ct);
      currentAmount -= ct;
    }
  }
}
```

### 문제 8

수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)

```javascript
// My Code
const sort = arr => {
  let temp;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log('배열이 변경되었습니다.')
}

// Solution
function sort(arr) {
  for (let i = 0; i< arr.length; i++) {
    let min = arr[i];
    let minIndx = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 지금 탐색중인 값이 최소값인지 검사하기
      if (min > arr[j]) {
        // 최소값과 인덱스를 기억하기
        min = arr[j];
        minIndex = j;
      }
    }
    // 자리 바꾸기
    // const temp = arr[minIndex];
    // arr[minIndex] = arr[i];
    // arr[i] = temp;
    
    [arr[i], arr[minIndex]] = [arr[miinIndex], arr[i]];
  }
}
```

