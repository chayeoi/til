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



