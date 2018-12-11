# ESLint Config 커스터마이징

1. ESLint 설정 환경을 초기화한다.

   ```bash
   eslint --init
   ```

2. .eslintrc.json을 아래와 같이 설정한다.

   ```json
   {
     "parser": "babel-eslint",
     "settings": { "import/resolver": { "node": { "paths": ["src"] } } },
     "env": {
       "browser": true,
       "jest": true
     },
     "extends": "airbnb",
     "rules": {
       "semi": ["error", "never"],
       "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
       "react/forbid-prop-types": ["off"],
       "react/jsx-one-expression-per-line": ["off"],
       "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.stories.js", "**/*.test.js"] }],
       "import/prefer-default-export": ["off"],
       "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
       "jsx-a11y/anchor-is-valid": [ "error", { "components": ["Link"], "specialLink": ["to"] } ],
       "no-useless-escape": ["off", "always"]
     }
   }
   ```

   1. Airbnb 스타일가이드 적용 (Line 8)
   2. `babel-eslint` 적용: 아직은 실험적인 기능인 `Class Fields`와 같은 최신 문법에 대해 ESLint가 에러를 내뱉는 일 없이 사용하기 위함 (Line 2)
   3. `NODE_PATH=src` 적용: 절대 경로로 import할 ESLint가 때 루트 디렉토리를 `src`로 인식하기 위함 (Line 3)
   4. 브라우저 및 테스트 실행 환경 적용: 브라우저 실행 환경 및 테스트 실행 환경에서 사용되는 전역 프로퍼티 및 함수를 경고없이 사용하기 위함(ex: `window`, `describe`, `it`...) (Line 4 ~ 7)
   5. 세미콜론 사용하지 않음 (Line 10)
   6. 파일 확장자 '.js'만 허용 (Line 11)
   7. Type Checking을 위한 PropTypes 사용 (Line 12)
   8. **예외 경우에 한하여** No Extraneous Dependencies 적용 해제: devDependency로 추가된 패키지의 함수를 사용하는 것에 대하여 ESLint가 경고를 표시하지 않도록 하기 위함 (Line 13)
   9. Redux Devtools 설정 변수에 언더스코어(_) 문자로 시작하는 변수명 허용 (Line 14)
   10. **예외 경우에 한하여** Prefer Default Export 적용 해제: 프로젝트 초기 구성 단계에서 `src/components/index.js`, `src/containers/index.js`와 같은 파일에서 내보내는 파일이 하나만 존재할 경우에 ESLint가 에러를 내보내는데, 이런 경우에 한해서 Inline Comments를 통해 Prefer Default Export 적용 해제하도록 함
3. .eslintignore를 아래와 같이 작성한다.

   ```plain
   build/
   config/
   scripts/
   src/registerServiceWorker.js
   ```
