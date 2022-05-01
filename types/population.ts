import { PrefCode } from './prefectures';

export interface Population {
  message: null;
  result: {
    boundaryYear: number;
    data: (
      | {
          label: string;
          data: {
            year: number;
            value: number;
          }[];
        }
      | {
          label: string;
          data: {
            year: number;
            value: number;
            rate: number;
          }[];
        }
    )[];
  };
}

export type TotalPopulation = {
  label: string;
  data: {
    year: number;
    value: number;
  }[];
  prefCode: PrefCode;
};
