# 한국임상정보 검색 프로젝트

## 📌 프로젝트 목표

한국임상정보 사이트의 검색창 + 검색어 추천 기능 + 캐싱 기능을 구현하기 위한 프로젝트입니다.

- [**`배포링크`**](https://pre-onboarding-11th-4-12.vercel.app/)

<details>
<summary>디렉터리 구조</summary>
<div markdown="1">

```
📦 pre-onboarding-11th-4-12
├─ db.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ Common
│  │  │  └─ Utils
│  │  │     ├─ cacheClinic.ts
│  │  │     └─ controlKey.ts
│  │  ├─ Input
│  │  │  └─ ClinicInput.tsx
│  │  ├─ Item
│  │  │  └─ ClinicListItem.tsx
│  │  ├─ Layout
│  │  │  └─ Layout.tsx
│  │  └─ List
│  │     └─ ClinicList.tsx
│  ├─ contexts
│  │  ├─ ClinicWordContext.tsx
│  │  └─ ClinicWordProvider.tsx
│  ├─ hooks
│  │  ├─ useInput.ts
│  │  └─ useModal.ts
│  ├─ index.tsx
│  ├─ models
│  │  └─ api.ts
│  ├─ pages
│  │  ├─ Home.tsx
│  │  └─ NotFound.tsx
│  ├─ routes
│  │  └─ Router.tsx
│  ├─ service
│  │  ├─ config.ts
│  │  └─ search.ts
│  └─ styles
│     └─ Global.tsx
└─ README.md
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)
</div>
</details>

<br/>

## 📌 기능 목록

## 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  
| 데모영상  | 
| --------------------------------- | 
| <img width=600 src="https://github.com/ncb6206/pre-onboarding-11th-4-12/assets/62326659/127849d3-6c92-4f50-92ad-39db70d51aa1"/> |    

<br/> · **`검색어 없음` 메시지 표시** : 검색어 입력이 없을 경우, `검색어 없음`이라는 메시지를 표시하여 사용자에게 명확한 안내를 제공합니다. <br/><br/> · **실시간 질환명 검색** : 검색창에 질환명을 입력하면, API 호출을 통해 해당 질환명을 받습니다. <br/><br/>  · **입력에 대한 `debounce` 적용** : 더 나은 사용자 경험을 제공하기 위해 `debounce`를 적용하여, 사용자의 연속적인 입력에 대한 API 호출을 일정 시간 간격으로 제한함으로써 서버 부하를 관리하고 성능 최적화에 기여합니다. <br/><br/>  · **로컬 캐싱 구현** : `cache storage`를 활용하여 API 호출 결과를 로컬에서 캐싱함으로써, 동일한 요청에 대해서는 네트워크 호출 없이 빠른 데이터 접근성을 보장하였습니다. 이로 인해 네트워크 트래픽과 처리 시간이 줄어들었습니다. <br/><br/> · **캐싱된 데이터에 대한 `expire time` 구현** : 캐싱된 데이터는 1시간 후 자동 삭제되며, 이후 동일한 요청이 들어올 경우 최신 데이터를 다시 가져오도록 `expire time`을 구현하였습니다. <br/><br/> 

## 키보드만으로 추천 검색어들로 이동 가능하도록 구현

| 데모영상  | 
| ------------------- | 
| <img width=600 src="https://github.com/ncb6206/pre-onboarding-11th-4-12/assets/62326659/b6da35a9-45b7-446a-b4ba-903c32dfcc72"/> |  

· **추천 검색어 제공** : 사용자가 키보드 입력을 통해 추천 검색어를 선택하고 검색할 수 있도록 구현하였습니다. <br/><br/> · **방향키를 이용한 포커스 이동** : 사용자의 편의성을 고려하여 위, 아래 방향키를 사용하여 포커스가 이동할 수 있는 인터랙션을 설계하였습니다. <br/><br/>  · **초기화 기능 구현** : `esc` 키 입력 시, 현재 설정된 포커스를 초기화하는 기능을 구현하여 사용자의 조작 오류를 최소화하였습니다. <br/><br/> · **자동 적용 기능 추가** : `enter`키 입력 시, 사용자의 원활한 검색 경험을 위해 현재 포커스된 질환명이 검색창에 자동으로 적용되도록 로직을 개선하였습니다.

## 📌 개발 환경 설정

```
$ npm install
$ npm start
```

### .env파일 설정

```
REACT_APP_BASE_URL= 
```

<br>

## 📌 json-server 배포

로컬에서 실행할 때는 localhost:4000을 통해 json-server를 사용할 수 있었지만, 배포 시에는 해당 기능을 활용할 수 없었습니다. <br/>
따라서 추가적으로 Vercel에서 별도의 json-server 인스턴스를 생성하여 사용하였습니다.

## 📌 기술 스택 & 사용 라이브러리

|구분| 스택 & 라이브러리|
|--|--|
|언어| <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">|
|메인 라이브러리|<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">|
|기타 라이브러리|<img alt="Static Badge" src="https://img.shields.io/badge/Emotion-%235A29E4?style=for-the-badge"> <img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge">
|패키지 관리|<img alt="Static Badge" src="https://img.shields.io/badge/npm-%23CB3837?style=for-the-badge&logo=npm">|
|배포| <img src="https://img.shields.io/badge/vercel-232F3E?style=for-the-badge&logo=vercel&logoColor=white"> |
