import { KeyboardEvent } from 'react';
import { IControlKeys } from '../../../models/api';

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

export default controlKeys;
