import { ChangeEvent, createContext } from 'react';

const ClinicWordDefault = {
  clinic: '',
  onChangeClinic: (event: ChangeEvent<HTMLInputElement>) => {},
  setClinic: (value: string) => {},
};

const ClinicWordContext = createContext(ClinicWordDefault);

export default ClinicWordContext;
