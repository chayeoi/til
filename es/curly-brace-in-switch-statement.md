# Curly brace in switch statement

switch 문 내에 curly brace를 사용할 수 있었다니..

```javascript
switch (type) {
  case A: {
    return {
      ...state,
    }
  }
  case B: {
    return {
      ...state,
    }
  }
  default: {
    return {
      ...state,
    }
  }
}
```

