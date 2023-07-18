import { ICacheData, ISetCacheClinic } from '../../../models/api';

const isExpired = (timestamp: number) => {
  const expireTime = 60 * 60 * 1000;
  return new Date().getTime() - timestamp > expireTime;
};

export const setCacheClinic = async ({ word, data }: ISetCacheClinic) => {
  try {
    const cache = await caches.open('clinic');
    const dataSet = { ...data, timestamp: new Date().getTime() };
    const response = new Response(JSON.stringify(dataSet), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await cache.put(`/${word}`, response);
    return;
  } catch (error) {
    console.error('Error caching data:', error);
  }
};

export const getCachedClinic = async (word: string) => {
  try {
    const cache = await caches.open('clinic');
    const cachedResponse = await cache.match(`/${word}`);

    if (cachedResponse) {
      const data: ICacheData = await cachedResponse.json();
      const clinicList = Object.values(data).filter(
        value => typeof value === 'object',
      );
      if (isExpired(data.timestamp)) cache.delete(`/${word}`);
      return clinicList;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error caching data:', error);
  }
};
