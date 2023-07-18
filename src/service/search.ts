import { Modal } from 'antd';
import instance from './config';

export const getClinic = async (word: string) => {
  try {
    const response = await instance.get(`/sick?q=${word}`);
    if (response.status === 200) return response;
  } catch (error: any) {
    Modal.error({ content: error.message });
    return error;
  }
};
