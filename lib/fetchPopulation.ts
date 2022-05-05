import { Population, TotalPopulationInfo } from './../types/population';
import { PrefCode } from './../types/prefectures';

const URL_END_POINT = process.env
  .NEXT_PUBLIC_POPULATION_URL_END_POINT as string;
const API_SECRET_KEY = process.env.NEXT_PUBLIC_API_SECRET_KEY as string;

export const fetchPopulation = async (prefsCode: PrefCode) => {
  try {
    const res = await fetch(`${URL_END_POINT}?prefCode=${prefsCode}`, {
      headers: {
        'X-API-KEY': API_SECRET_KEY,
      },
    });
    const data: Population = await res.json();
    return data.result.data[0] as Omit<
      TotalPopulationInfo,
      'prefCode' | 'prefName'
    >;
  } catch (err) {
    alert(err);
  }
};
