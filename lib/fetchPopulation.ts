import { Population, TotalPopulation } from './../types/population';
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
    return data.result.data[0] as Omit<TotalPopulation, 'prefCode'>;
  } catch (err) {
    alert(err);
  }
};

export const DUMMY_DATA = {
  message: null,
  result: {
    boundaryYear: 2015,
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1980,
            value: 12817,
          },
          {
            year: 1985,
            value: 12707,
          },
          {
            year: 1990,
            value: 12571,
          },
          {
            year: 1995,
            value: 12602,
          },
          {
            year: 2000,
            value: 12199,
          },
          {
            year: 2005,
            value: 11518,
          },
          {
            year: 2010,
            value: 10888,
          },
          {
            year: 2015,
            value: 10133,
          },
          {
            year: 2020,
            value: 9275,
          },
          {
            year: 2025,
            value: 8431,
          },
          {
            year: 2030,
            value: 7610,
          },
          {
            year: 2035,
            value: 6816,
          },
          {
            year: 2040,
            value: 6048,
          },
          {
            year: 2045,
            value: 5324,
          },
        ],
      },
    ],
  },
};
