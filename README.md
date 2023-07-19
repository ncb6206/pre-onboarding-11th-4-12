# 원티드 프리온보딩 프론트엔드 인턴십 - 4주차 과제

## 📌 프로젝트 목표

검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- [**`배포링크`**](https://pre-onboarding-11th-4-12.vercel.app/)

<br>
<br>

## 📌 프로젝트 시작

```
npm install
npm start
```

### .env파일 설정

```
REACT_APP_BASE_URL= http://localhost:4000
```

<br>
<br>

## 📌 필수 요구 사항

### 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- 검색어가 없을 시 “검색어 없음” 표출

### API 호출별로 로컬 캐싱 구현
- 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
- expire time을 구현할 경우 가산점

```tsx

```

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

### API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현
