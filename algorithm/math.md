### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```javascript
// My Code
const circleArea = r => Math.PI * (r ** 2);

// Solution
```

<br />

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

<br />

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
  const len = String(int).length;
  const result = (Math.ceil(((int / 10 ** (len - 1)) * 2)) / 2) * (10 ** (len - 1))
  return result;
}

// Solution
```

<br />

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.

```javascript
// My Code

// Solution
```

<br />

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

<br />

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

<br />

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

<br />