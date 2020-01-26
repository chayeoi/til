# Axios를 활용하여 API 캐시 적용하기

SPA에서는 화면을 렌더링하는 로직은 모두 클라이언트에서 처리하고 서버로부터 화면을 그리는 데 필요한 데이터만 통신하는 방식으로 앱을 구동한다. 이렇게 함으로써 MPA보다 사용자에게 더 좋은 반응성을 제공해줄 수 있는 장점이 있다. 그러나 SPA에서도 여전히 브라우저의 "뒤로 가기" 또는 "앞으로 가기" 동작을 수행 시 이미 한 번 불러왔던 데이터를 다시 불러오는 불필요한 로딩이 발생하게 되는데, 이때 API Cache를 적용하여 불필요한 API 통신을 발생시키지 않음으로써 사용자에게 더 좋은 반응성을 제공할 수 있다.

[Axios](https://github.com/axios/axios)는 어댑터(Adapter)를 통해 요청을 커스텀 핸들링할 수 있는 방법을 제공한다. [Axios Extensions](https://github.com/kuitos/axios-extensions)에서 제공하는 `cacheAdapterEnhancer`를 활용하면 API 요청을 캐싱하기 위한 어댑터를 매우 쉽게 생성할 수 있다.

```javascript
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  Accept: 'application/json',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

http.get('/users'); // ①
http.get('/users'); // ②
http.get('/users', { cache: false }); // ③
```

①: `GET /users` 요청이 처음 발생한 것이므로 실제 네트워크 요청이 만들어진다.

②: `GET /users` 요청이 이미 ①에서 캐싱되었으므로 실제 요청을 생성하지 않고 ①에서 캐싱된 데이터를 반환한다.

③: `cacheAdapterEnhancer`의 기본 설정값은 모든 요청을 캐싱하는 것이다. 그러나 처음 캐싱이 일어난 후의 요청에 대해 실제 네트워크 요청을 만들고 싶다면 `cache: false` 옵션을 전달하면 된다. 그렇기 때문에 이 단계에서는 실제 네트워크 요청이 발생한다. 참고로 `cache` 필드의 이름은 `cacheAdapterEnhancer`를 통한 어댑터 생성 시점에서 커스터마이징할 수 있다.

위와 같은 방식으로 캐시 어댑터를 적용하게 되면 모든 네트워크 요청이 캐싱되므로, 사용자가 데이터를 갱신하고 싶은 상황에서 문제가 될 수 있다. 따라서 링크를 직접 클릭하는 상황에서는 데이터를 새로 받아오도록 하고, 뒤로 가기 또는 앞으로 가기 동작 수행 시에만 캐싱된 데이터를 사용하도록 하는 게 가장 좋은 방법일 것이다.

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const http = axios.create({
  Accept: 'application/json',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false }),
});

const Pokemon = ({ history }) => {
  const [pokemon, setPokemon] = useState(null);
  
  useEffect(() => {
    const fetchPokemon = async (num) => {
      const response = await http.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`,
        { forceUpdate: history.action === 'PUSH', cache: true },
      );
  
      setPokemon(response.data);
    };
  
    fetchPokemon(1);
  }, [history.action]);

  return (
    <div>
      {pokemon && (
        <div>
          <figure>
            <img src={pokemon.sprites.front_default} alt=""/>
            <figcaption>{pokemon.name}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};
```

먼저 `enabledByDefault` 옵션을 `false`로 설정하여 모든 네트워크 요청에 대해 캐싱된 데이터를 사용하지 않도록 한다. 이후에 실제 요청을 발생시키는 시점에서 `history.action`을 통해 사용자가 링크를 클릭한 것인지, 뒤로 가기 또는 앞으로 가기 동작을 수행한 것인지 판단하여 캐싱된 데이터를 사용하도록 할 것인지 여부를 결정할 수 있다. (링크를 클릭하는 동작이 발생할 경우 `history.action`은 `PUSH`이고, 뒤로 가기 또는 앞으로 가기 동작 수행 시 `history.action`은 `POP`이다.)

> 현 시점에서 Axios 최신 버전인 v0.19.0에서는 [커스텀 설정 옵션과 관련한 버그](https://github.com/axios/axios/pull/2207)가 있어서 `forceUpdate` 옵션을 사용할 수 없다. 이 옵션을 사용하려면 v0.18.1 버전을 사용해야 한다.

## 참고 {docsify-ignore}

* [React SPA 뒤로가기 API Cache 적용 | dohoons](https://dohoons.com/blog/1810/)
* [kuitos/axios-extensions](https://github.com/kuitos/axios-extensions)
