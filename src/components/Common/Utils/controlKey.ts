import { KeyboardEvent, useState } from 'react';
import { ILength } from '../../../models/api';

const controlKeys =
  ({ maxLength, clinicLength }: ILength) =>
  (event: KeyboardEvent<HTMLInputElement>) => {
    const [focusId, setFocusId] = useState(-1);

    if (event.key === 'ArrowDown') {
      clinicLength > 0 && clinicLength > maxLength
        ? setFocusId(prev => (prev + 1) % maxLength)
        : setFocusId(prev => (prev + 1) % clinicLength);
    }
    if (event.key === 'ArrowUp') {
      clinicLength > 0 && clinicLength > maxLength
        ? setFocusId(prev => (prev - 1) % maxLength)
        : setFocusId(prev => (prev - 1) % clinicLength);
    }
    if (event.key === 'Escape') {
      setFocusId(-1);
    }
    // if (event.key === 'Enter') {
    // }

    return { focusId };
  };

export default controlKeys;
