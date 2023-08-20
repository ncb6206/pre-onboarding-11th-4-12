import styled from '@emotion/styled';
import { IClinicListItem } from '../../models/api';
import { SearchOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import ClinicWordContext from '../../contexts/ClinicWordContext';

const ClinicListItem = ({ item, focus }: IClinicListItem) => {
  const { clinic, setClinic } = useContext(ClinicWordContext);

  const onClickClinic = () => {
    setClinic(item.sickNm);
  };

  return (
    <ClinicListItemDiv focus={focus} onClick={onClickClinic}>
      <SearchOutlined />
      <span>
        {item.sickNm.split(clinic).map((part, index) =>
          index === item.sickNm.split(clinic).length - 1 ? (
            part
          ) : (
            <>
              <span>{part}</span>
              <HighLight>{clinic}</HighLight>
            </>
          ),
        )}
      </span>
    </ClinicListItemDiv>
  );
};

interface IClinicListItemDiv {
  focus: boolean;
}

const ClinicListItemDiv = styled.div<IClinicListItemDiv>`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;
  gap: 1rem;
  cursor: pointer;
  background-color: ${props => props.focus && '#dfdcdc'};

  > span {
    font-size: 20px;
  }
`;

const HighLight = styled.span`
  font-weight: 900;
`;

export default ClinicListItem;
