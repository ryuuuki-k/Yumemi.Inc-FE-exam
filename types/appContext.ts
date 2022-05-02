import { TotalPopulationInfo } from './population';
import { PrefCode, Prefectures } from './prefectures';

export type AppContext = {
  selectPrefs: PrefCode[];
  setSelectPrefs: React.Dispatch<React.SetStateAction<PrefCode[]>>;
  populationData: TotalPopulationInfo[];
  setPopulationData: React.Dispatch<React.SetStateAction<TotalPopulationInfo[]>>;
  prefectures: Prefectures['result'] | undefined;
};
