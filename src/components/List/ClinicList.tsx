import styled from '@emotion/styled';
import ClinicListItem from '../Item/ClinicListItem';
import { IClinic } from '../../models/api';
import React, { useContext } from 'react';
import ClinicWordContext from '../../contexts/ClinicWordContext';

const ClinicList = ({ clinicList }: { clinicList: IClinic[] }) => {
  const { clinic } = useContext(ClinicWordContext);

  return (
    <ClinicListDiv>
      {clinicList.length !== 0 && (
        <>
          <p>{clinic}</p>
          <span>추천 검색어</span>
          {clinicList.slice(0, 10).map(clinic => (
            <React.Fragment key={clinic.sickCd}>
              <ClinicListItem clinic={clinic} />
            </React.Fragment>
          ))}
        </>
      )}
      {clinicList.length === 0 && <span>검색어 없음</span>}
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

  > p {
    font-size: 20px;
    font-weight: 700;
  }

  > span {
    font-size: 1.5rem;
  }
`;

export default ClinicList;
