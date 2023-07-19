import React, { ChangeEvent, Dispatch } from 'react';

export interface IClinic {
  sickCd: string;
  sickNm: string;
}

export interface IClinicListItem {
  item: IClinic;
  focus: boolean;
}

export interface IClinicWord {
  clinic: string;
  onChangeClinic: (event: ChangeEvent<HTMLInputElement>) => void;
  setClinic: (value: string) => void;
}

export interface IControlKeys {
  maxLength: number;
  setClinic: (value: string) => void;
  focusId: number;
  setFocusId: Dispatch<React.SetStateAction<number>>;
  clinicList: IClinic[];
}

export interface IClinicList {
  clinicList: IClinic[];
  maxLength: number;
  focusId: number;
}

export interface ISetCacheClinic {
  word: string;
  data: IClinic[];
}

export interface ICacheData {
  clinicList: IClinic[];
  timestamp: number;
}
