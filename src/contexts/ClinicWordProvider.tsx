import { Dispatch, ReactNode, SetStateAction } from 'react';
import useInput from '../hooks/useInput';
import ClinicWordContext from './ClinicWordContext';

const ClinicWordProvider = ({ children }: { children: ReactNode }) => {
  const [clinic, onChangeClinic, setClinic] = useInput('');

  return (
    <ClinicWordContext.Provider
      value={{
        clinic,
        onChangeClinic,
        setClinic: setClinic as Dispatch<SetStateAction<string>>,
      }}
    >
      {children}
    </ClinicWordContext.Provider>
  );
};

export default ClinicWordProvider;
