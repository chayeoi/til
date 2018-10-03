# 절대 경로 import를 사용할 때 저지르기 쉬운 실수

constants, 예약어, nodejs 빌트인 모듈, webpack bug

This is a known webpack bug(?), see [webpack/webpack#4159](https://github.com/webpack/webpack/issues/4159)
constants being a builtin module for node, thus having higher priority.

https://github.com/facebook/create-react-app/issues/2338

https://github.com/webpack/webpack/issues/4159



dan abramov

[@will-stone](https://github.com/will-stone)

This is a good example of why `NODE_PATH=src` is dangerous and we don’t officially recommend it 😉
I guess it would be reasonable for Webpack to completely blacklist this internal Node module, but it’s something we’ll need to discuss with Webpack.



They are supported and this issue is still open. Just saying this is a good example of why relying on them is fragile.



It looks like adding `node.constants: false` to the webpack config will fix this. Is this a possibility or would that break other stuff?



[@will-stone](https://github.com/will-stone) that might break any one of your packages that relies on it; however, this is the expected behavior because `node_modules/` or node internals always take precedence.

I'd be open to a PR which discloses less-obvious node internals to lookout for ([basically this list](https://github.com/substack/node-browserify#compatibility)).
This section would probably be best under absolute imports (the `NODE_PATH=src` hack) as one of the caveats.



`constants` is a node.js build-in module. node.js built-in modules have higher priority than your own modules (according to the node.js resolving algorithm).
Either rename the module or disable the built-in one (`node.constants: false`).

https://www.javascriptjanuary.com/blog/painless-paths-with-webpack-and-vsc
