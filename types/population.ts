import { PrefCode, Prefectures } from './prefectures';

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

export type TotalPopulationInfo = {
  label: string;
  data: {
    year: number;
    value: number;
  }[];
  prefCode: PrefCode;
  prefName: Prefectures['result'][number]['prefName'];
};
