## 📚 기술 스택

- React (Create React App)
- Typescript
- redux-toolkit
- RTK-query
- styled-component
- Jest
- jest-fetch-mock
- react-testing-library
- ESLint
- Prettier

## Commit 및 Git Branch 컨벤션

### Commit

```
- feat: 새로운 기능 추가
- chore: 코드의 변경이 없는 경우 (패키지 설치 및 설정)
- refactor: 코드 개선
- test: 테스트 코드 관련
- fix: 버그 수정
- doc: 문서 업데이트
```

### Git Branch

- 페이지 별로 `feature/페이지이름` 생성
- 테스트 코드 파일 마다 `test/테스트 진행하는 파일 이름` 생성
- 각 작업이 완료된 branch들은 `develop` branch에서 merge 후 뻗어 나감
- 최종적으로 `main` branch에 merge

## 📖 프로젝트 실행 방법

#### 1. 패키지 설치

```
yarn install
```

#### 2. Server 실행

```
yarn server
```

### 3. 프로젝트 실행

```
yarn start
```

### 4. 테스트 실행

- 특정 테스트 코드 확인

```
yarn test 파일이름
```

- 모든 상세 테스트 케이스 확인

```
yarn test:all
```

- 테스트 커버리지 확인

```
yarn test . --coverage
```

## 🧪 테스트

- **유닛** 테스트 및 **통합** 테스트를 진행했습니다
  .
  ![image](https://github.com/Yongveloper/minesweeper/assets/64254228/e068727e-2dcc-44e8-aa97-50e0220594f7)

- 테스트를 위한 컴포넌트의 렌더링을 진행할 때, `Redux Provider`, `BrowserRouter`, `ThemeProvider` 와 같은 Provider들이 필요하기 때문에 `renderWithProvider.tsx`를 작성하고 이를 통해서 렌더링을 진행
- 서버 호출 관련 테스트가 필요할 때는 `fetch`에 대한 요청을 가로채는 `jest-fetch-mock`을 사용
  - 서버 호출은 `RTK-query`를 통해 진행되고 `RTK-query`는 기본적으로 `fetch`함수를 통해서 진행되기 때문에 다른 라이브러리에 비해서 가벼운 것을 선택

## 💻 기능 구현

### Home Page

![home](https://github.com/Yongveloper/minesweeper/assets/64254228/456685e1-4d4d-4ee5-ab43-4d86ee7281d4)

- 주문하러 가기 클릭시 '/order' 페이지로 이동
  - `Link`태그 사용

### Order Page

![order](https://github.com/Yongveloper/minesweeper/assets/64254228/10c79d95-b3d5-4248-a968-2d8ba6ed9df8)

![loading_error](https://github.com/Yongveloper/minesweeper/assets/64254228/ece9ebff-f789-45ed-8778-15f32cac5076)

- `cartSlice`에 각 리듀서를 생성하고 상태를 관리
  - `addToCart`: 장바구니에 상품 추가
  - `removeFromCart`: 장바구니에서 상품 꺼내기
  - `resetCart`: 장바구니 초기화
- 주문하기가 완료되면 `resetCart()`를 통해 장바구니 초기화 진행
- `RTK`를 사용함으로써 내장된 `RTK-query`를 사용하여 서버의 데이터를 불러오고 캐싱함
- `useGetProductsQuery`Hook을 통해서 데이터를 불러오고 `isLoading`과 `isError`로 로딩과 에러 컴포넌트 보여줌
- 서버의 응답 속도가 빠르기 때문에 '로딩 상태'를 보여주기 위해 `setTimeout`으로 `1500ms`지연을 시킴

### Complete Page And Error Page

![complete](https://github.com/Yongveloper/minesweeper/assets/64254228/db6f2577-e3ea-48e8-92a3-002ac38ea445)
![error](https://github.com/Yongveloper/minesweeper/assets/64254228/29228f00-de63-4f1f-b08a-57838e2d08e2)

- **특정 시간**이 지나면 **특정 경로**로 이동하는 `useAutoRedirect` 커스텀 훅 생성하여 재사용성 높임
- 즉, `useAutoRedirect` 훅을 사용하여 3초 뒤에 '/order' 페이지로 이동하게 구현
