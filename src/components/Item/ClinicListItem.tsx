import styled from '@emotion/styled';
import { IClinic } from '../../models/api';
import { SearchOutlined } from '@ant-design/icons';

const ClinicListItem = ({ clinic }: { clinic: IClinic }) => {
  return (
    <ClinicListItemDiv>
      <SearchOutlined />
      <span>{clinic.sickNm}</span>
    </ClinicListItemDiv>
  );
};

const ClinicListItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;

  > span {
    font-size: 20px;
  }
`;

export default ClinicListItem;
