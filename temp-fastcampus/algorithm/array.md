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

