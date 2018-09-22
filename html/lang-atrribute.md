# `lang` 속성

`lang` 속성을 다음과 같이 명시할 수 있다.

```html
<html lang="ko-KR">
</html>
```

여기서 `ko`는 'korean'의 약어로 언어(language) 정보를 의미한다. 반면 KR은 Republic of Korea 지역(locale) 정보를 뜻한다. `ko`만 사용하면 한국어를 통칭한다. 하지만 언어를 지역마다 구분해야 할 경우, 지역 정보를 추가하여 사용하는 것이 좋다. 예를 들어, `ko-KR`은 대한민국(남한)에서 사용하는 한국어를 의미한다. 반면 `ko-KP`는 조선 민주주의 인민공화국(북한)에서 사용하는 한국어를 말한다. 영문권에서는 지역마다 사용되는 영어가 달라 다음과 같이 표기하여 구분한다.

* `en-GB`: 영국 영어
* `en-US`: 미국 영어
* `en-CA`: 캐나다 영어

언어 조회는 [Language subtag lookup](https://r12a.github.io/app-subtags/)에서 할 수 있다.