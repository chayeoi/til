# Accept-Language 요청 헤더

Accept-Language 요청 HTTP 헤더는 어떤 언어를 클라이언트가 이해할 수 있는지, 그리고 지역 설정 중 어떤 것이 더 선호되는지를 알려준다. [컨텐츠 협상](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation)을 사용하여 서버는 제안 중 하나를 선택한 뒤, 그것을 사용하고 Content-Language 응답 헤더와 함께 선택된 내용을 클라이언트에게 알려준다. 브라우저는 사용자 인터페이스 언어에 따라 해당 헤더에 적절한 값을 설정하며 사용자가 사용자 인터페이스 언어를 변경한 경우조차도, 헤더의 값이 변경되는 일은 거의 없다.

이 헤더는 서버가 언어를 결정할 다른 방도(명시적인 사용자 결정에 의한 구체적 URL과 같은)를 찾지 못한 경우 사용되는 힌트이다. 서버는 명시적인 결정을 결코 재정의해서는 안된다. Accept-Language의 내용은 대게 사용자에 의해 좌지우지되지 못한다.

## References

* [Accept-Language - MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept-Language)
* [Accept-Language used for locale setting - W3C](https://www.w3.org/International/questions/qa-accept-lang-locales)
