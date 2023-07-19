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
  
```tsx
export const getClinic = async (word: string) => {
  try {
    const response = await instance.get(`/sick?q=${word}`);
    if (response.status === 200) return response;
  } catch (error: any) {
    Modal.error({ content: error.message });
    return error;
  }
};
```

```tsx
  const getClinicList = async () => {
    if (clinic) {
      const cachedData = await getCachedClinic(clinic);

      if (cachedData) {
        setClinicList(cachedData);
      } else {
        const response = await getClinic(clinic);
        setCacheClinic({ word: clinic, data: response.data });
        setClinicList(response.data);
      }
    } else {
      setClinicList([]);
    }
    setFocusId(-1);
  };
```

```tsx
const ClinicList = ({ clinicList, maxLength, focusId }: IClinicList) => {
  const { clinic } = useContext(ClinicWordContext);

  return (
    <ClinicListDiv>
      {clinic && (
        <>
          <ClinicListTitle>
            <SearchOutlined />
            <p>{clinic}</p>
          </ClinicListTitle>
          <ClinicListCenter>
            <span>추천 검색어</span>
          </ClinicListCenter>
          <ClinicListUl>
            {clinicList.length !== 0 &&
              clinicList.slice(0, maxLength).map((item, index: number) => (
                <React.Fragment key={item.sickCd}>
                  <ClinicListLi>
                    <ClinicListItem item={item} focus={focusId === index} />
                  </ClinicListLi>
                </React.Fragment>
              ))}
          </ClinicListUl>
          {clinicList.length === 0 && (
            <ClinicListNotFound>
              <span>검색어 없음</span>
            </ClinicListNotFound>
          )}
        </>
      )}
      {!clinic && (
        <ClinicListNotFound>
          <span>검색어 없음</span>
        </ClinicListNotFound>
      )}
    </ClinicListDiv>
  );
};
```

사용자가 검색어를 입력하면 clinic이라는 변수에 저장됩니다. <br/>
getClinic함수에서 word로 검색어를 받으면 이에 대한 요청을 API에서 받아와 response를 넘겨 받습니다. <br/>
이 넘겨받은 response.data는 setClinicList를 통해 clinicList에 저장됩니다. <br/>
clinic이라는 검색어 변수가 없을 경우 검색어 없음이라고 화면에 표출해줍니다.

### API 호출별로 로컬 캐싱 구현
- 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
- expire time을 구현할 경우 가산점

#### cache storage를 사용하여 로컬 캐싱을 구현하였습니다.
```tsx
const isExpired = (timestamp: number) => {
  const expireTime = 60 * 60 * 1000;
  return new Date().getTime() - timestamp > expireTime;
};

export const setCacheClinic = async ({ word, data }: ISetCacheClinic) => {
  try {
    const cache = await caches.open('clinic');
    const dataSet = { ...data, timestamp: new Date().getTime() };
    const response = new Response(JSON.stringify(dataSet), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await cache.put(`/${word}`, response);
    return;
  } catch (error) {
    console.error('Error caching data:', error);
  }
};

export const getCachedClinic = async (word: string) => {
  try {
    const cache = await caches.open('clinic');
    const cachedResponse = await cache.match(`/${word}`);

    if (cachedResponse) {
      const data: ICacheData = await cachedResponse.json();
      const clinicList = Object.values(data).filter(
        value => typeof value === 'object',
      );
      if (isExpired(data.timestamp)) cache.delete(`/${word}`);
      return clinicList;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error caching data:', error);
  }
};
```
isExpired함수를 만들어서 캐시에 저장된 데이터가 1시간이 넣었으면 true를 반환하고 넘지 않았으면 false를 반환하는 것으로 expire time을 구현하였습니다. <br/>
setCacheClinic함수를 통해 clinic이라는 이름을 가진 캐시에 API에서 받아온 데이터와 현재 시간을 찍어주는 timestamp변수를 객체로 만들어 dataSet을 만들었습니다. 이 dataSet을 문자열로 만들어 header와 함께 검색어인 word를 경로로 하는 캐시에 response로 저장해줍니다. <br/>
getCachedClinic함수를 통해 clinic이라는 이름을 가진 캐시에서 검색어 변수인 word를 경로로 하는 캐시에서 저장된 객체를 cachedResponse에 저장합니다. <br/> cachedResponse가 없을 경우에는 null을 리턴해줍니다.  <br/> 
cachedResponse가 있을경우 JSON형식으로 변화를 시키고 이를 배열로 만들어 가져옵니다.  <br/>
이때 기존 데이터에 timestamp가 추가가 되었으므로 timestamp를 분리한 배열을 만들기 위해 객체의 value부분만 있는 배열에서 이 배열의 타입이 객체인 것만 filter를 해서 filter된 배열을 만들어 return 해 줍니다.  <br/> 
추가적으로 캐시에 저장된 시간이 1시간을 넘었는 지 확인하여 1시간이 넘었을 경우 해당하는 데이터를 캐시에서 삭제함으로 써 expire time을 구현하였습니다.

```tsx
  const getClinicList = async () => {
    if (clinic) {
      const cachedData = await getCachedClinic(clinic);

      if (cachedData) {
        setClinicList(cachedData);
      } else {
        const response = await getClinic(clinic);
        setCacheClinic({ word: clinic, data: response.data });
        setClinicList(response.data);
      }
    } else {
      setClinicList([]);
    }
    setFocusId(-1);
  };
```
getCachedClinic을 통해 검색어와 일치하는 캐시에 저장된 데이터를 가져옵니다. <br/>
만약에 캐시에 데이터가 저장되어 있으면 받아온 데이터를 바로 clinicList에 넣어 추가적인 API 호출이 발생하지 않게 합니다. <br/>
캐시에 저장된 데이터를 찾지 못했으면 getClinic API에서 데이터를 받아오고 받아온 데이터를 검색어와 함께 캐시에 저장합니다. 그리고 clinicList에 받아온 데이터를 넣어줍니다. <br/>

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

```tsx
  useEffect(() => {
    const debounce = setTimeout(() => {
      getClinicList();
    }, 400);

    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clinic]);
```

clinic이라는 질환명을 입력받는 변수를 useEffect의 의존성 배열에 넣어서 clinic이 변화 될 때마다 실행되게 합니다. <br/>
그러나 이렇게 할 시 입력마다 getClinicList()라는 함수가 계속 호출되므로 이를 줄이기 위해 debounce를 사용하였습니다. <br/>
사용자가 검색어를 입력하고 0.4초 동안 추가적인 입력이 없을경우 getClinicList()가 실행되도록 하여 API 호출 횟수를 줄이도록 하였습니다.

### API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
```tsx
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
```
instance.interceptors.request.use 안에 넣어 API 요청을 할 때 마다 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정하였습니다.

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

```tsx
const controlKeys =
  ({ maxLength, setClinic, focusId, setFocusId, clinicList }: IControlKeys) =>
  (event: KeyboardEvent<HTMLInputElement>) => {
    const clinicLength = clinicList.length;

    if (event.key === 'ArrowDown' && clinicLength > 0) {
      clinicLength > maxLength
        ? setFocusId(prev => (prev + 1) % maxLength)
        : setFocusId(prev => (prev + 1) % clinicLength);
    }
    if (event.key === 'ArrowUp' && clinicLength > 0) {
      clinicLength > maxLength
        ? setFocusId(prev => (prev - 1 > -1 ? prev - 1 : maxLength - 1))
        : setFocusId(prev => (prev - 1 > -1 ? prev - 1 : clinicLength - 1));
    }
    if (event.key === 'Escape') {
      setFocusId(-1);
    }
    if (event.key === 'Enter' && clinicLength > 0) {
      focusId >= 0 && setClinic(clinicList[focusId].sickNm);
    }
  };
```
기본적으로 추천 검색어가 존재할 시에 키보드 입력을 받을 수 있도록 하였습니다. <br/>
아래방향 키를 눌렀을 시 아래로 검색어의 focusId가 이동되게 하였습니다. <br/>
위방향 키를 눌렀을 시 위로 검색어의 focusId가 이동되게 하였습니다. <br/>
esc 키를 눌렀을 시 focusId가 -1이 되도록 하였습니다. <br/>
enter키를 눌렀을 시 추천 검색어 배열의 focusId번째 질환명이 검색창에 적용되도록 하였습니다.

## 기술 스택 & 사용 라이브러리

|구분| 스택 & 라이브러리|
|--|--|
|언어|<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">|
|메인 라이브러리|<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">|
|기타 라이브러리|<img alt="Static Badge" src="https://img.shields.io/badge/CSS-Emotion-%235A29E4?style=for-the-badge"><img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios">
|패키지 관리|<img alt="Static Badge" src="https://img.shields.io/badge/npm-%23CB3837?style=for-the-badge&logo=npm">|
|배포| <img src="https://img.shields.io/badge/vercel-232F3E?style=for-the-badge&logo=vercel&logoColor=white"> |
