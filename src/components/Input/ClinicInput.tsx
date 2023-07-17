import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';
import { getClinic } from '../../service/search';
import { IClinic } from '../../models/api';
import ClinicList from '../List/ClinicList';
import ClinicWordContext from '../../contexts/ClinicWordContext';

const ClinicInput = () => {
  const [clinicList, setClinicList] = useState<IClinic[]>([]);
  const { clinic, onChangeClinic } = useContext(ClinicWordContext);

  const getClinicList = async () => {
    if (clinic) {
      const response = await getClinic(clinic);
      setClinicList(response.data);
    } else {
      setClinicList([]);
    }
    console.log(clinic, clinicList);
  };

  const onSubmitClinic = async () => {
    const response = await getClinic(clinic);
    setClinicList(response.data);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      getClinicList();
    }, 300);

    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clinic]);

  return (
    <ClinicInputDiv>
      <ClinicInputHead>
        <SearchOutlined />
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={clinic}
          onChange={onChangeClinic}
        />
        <Button onClick={onSubmitClinic}>
          <SearchOutlined />
        </Button>
      </ClinicInputHead>
      <ClinicInputBody>
        <ClinicList clinicList={clinicList} />
      </ClinicInputBody>
    </ClinicInputDiv>
  );
};

const ClinicInputDiv = styled.div`
  width: 490px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ClinicInputHead = styled.div`
  width: 100%;
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

const ClinicInputBody = styled.div`
  width: 100%;
`;

export default ClinicInput;
