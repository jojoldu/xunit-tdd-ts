# xUnit 테스트 프레임워크 TDD로 구현하기 (by TypeScript)

```bash
npm i typescript -g
```

```bash
yarn init -y
```

```bash
tsc --init  
```

```bash
git init
```

```bash
yarn add prettier eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser ts-node --dev
```


## 0. 테스트 프레임워크 Todo

테스트 프레임워크의 테스트 메소드가 할 일은 다음과 같다.

* 먼저 `setup` 호출하기
* 테스트 메소드가 끝나고 난뒤 `tearDown` 호출하기
* 테스트 메소드가 실패하더라도 `tearDown` 호출하기
* 여러개의 테스트 메소드 실행하기
* 수집된 결과를 출력하기




## 1. WasRun

```ts
function xunitRun() {
  const wasRun = new WasRun();
  console.log(wasRun.wasRun); // false여야함
  wasRun.testMethod();
  console.log(wasRun.wasRun); // true여야함
}

xunitRun();
```

