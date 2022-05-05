import { Prefectures } from './../types/prefectures';

const URL_END_POINT = process.env
  .NEXT_PUBLIC_PREFECTURES_URL_END_POINT as string;
const API_SECRET_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY as string;

export const fetchPrefectures = async () => {
  try {
    const res = await fetch(URL_END_POINT, {
      headers: {
        'X-API-KEY': API_SECRET_KEY,
      },
    });
    const data: Prefectures = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};
