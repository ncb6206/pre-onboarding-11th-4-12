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

const ClinicListDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  background-color: #ffffff;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  border-radius: 20px;
  gap: 1rem;
  z-index: 1;
  margin: 0 auto;
`;

const ClinicListTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.5rem;
  gap: 16px;
  font-size: 20px;
  font-weight: 700;
`;

const ClinicListCenter = styled.div`
  padding: 0 1.5rem;
  font-size: 1.5rem;
`;

const ClinicListUl = styled.ul`
  gap: 1rem;
`;

const ClinicListLi = styled.li``;

const ClinicListNotFound = styled.div`
  padding: 0 1.5rem;
  font-size: 1rem;
`;

export default ClinicList;
