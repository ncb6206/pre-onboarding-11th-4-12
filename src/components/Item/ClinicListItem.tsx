import styled from '@emotion/styled';
import { IClinicListItem } from '../../models/api';
import { SearchOutlined } from '@ant-design/icons';

const ClinicListItem = ({ clinic, focus }: IClinicListItem) => {
  return (
    <ClinicListItemDiv focus={focus}>
      <SearchOutlined />
      <span>{clinic.sickNm}</span>
    </ClinicListItemDiv>
  );
};

interface IClinicListItemDiv {
  focus: boolean;
}

const ClinicListItemDiv = styled.div<IClinicListItemDiv>`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  background-color: ${props => (props.focus ? '#dfdcdc' : '#ffffff')};

  > span {
    font-size: 20px;
  }
`;

export default ClinicListItem;
