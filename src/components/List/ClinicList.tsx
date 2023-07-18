import styled from '@emotion/styled';
import ClinicListItem from '../Item/ClinicListItem';
import { IClinicList } from '../../models/api';
import React, { useContext } from 'react';
import ClinicWordContext from '../../contexts/ClinicWordContext';
import { SearchOutlined } from '@ant-design/icons';

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
          <span>추천 검색어</span>
          {clinicList.length !== 0 &&
            clinicList.slice(0, maxLength).map((clinic, index: number) => (
              <React.Fragment key={clinic.sickCd}>
                <ClinicListItem clinic={clinic} focus={focusId === index} />
              </React.Fragment>
            ))}
          {clinicList.length === 0 && <p>검색어 없음</p>}
        </>
      )}
      {!clinic && <span>검색어 없음</span>}
    </ClinicListDiv>
  );
};

const ClinicListDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  border-radius: 20px;
  padding: 1.5rem;
  gap: 1rem;
  z-index: 1;
  margin: 0 auto;

  > span {
    font-size: 1.5rem;
  }
`;

const ClinicListTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 20px;
  font-weight: 700;
`;

export default ClinicList;
