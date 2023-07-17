import styled from '@emotion/styled';
import ClinicInput from '../components/Input/ClinicInput';

const HomePage = () => {
  return (
    <Main>
      <h2>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h2>
      <ClinicInput />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2.125rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
  }
`;

export default HomePage;
