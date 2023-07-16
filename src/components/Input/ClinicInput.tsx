import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';

export function ClinicInput() {
  return (
    <ClinicInputDiv>
      <SearchOutlined />
      <input type="text" placeholder="질환명을 입력해 주세요." />
      <Button>
        <SearchOutlined />
      </Button>
    </ClinicInputDiv>
  );
}

const ClinicInputDiv = styled.div`
  width: 490px;
  height: 71px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  border-radius: 42px;
  padding: 0 0 0 16px;
  margin: 0 auto;

  &:focus-within {
    border: 2px solid #007be9;
  }

  > input {
    width: 100%;
    border: 0;
    border-radius: 20px;
    font-size: 1rem;
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  width: 48px;
  height: 40px;
  padding: 5px;
  margin: 8px;
  background-color: #007be9;
  border-radius: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;

  > span > svg {
    width: 21px;
    height: 21px;
  }
`;
