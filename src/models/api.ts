import { ChangeEvent } from 'react';

export interface IClinic {
  sickCd: string;
  sickNm: string;
}

export interface IClinicWord {
  clinic: string;
  onChangeClinic: (event: ChangeEvent<HTMLInputElement>) => void;
  setClinic: (value: string) => void;
}
