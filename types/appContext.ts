import { TotalPopulation } from './population';
import { PrefCode } from './prefectures';

export type AppContext = {
  selectPrefs: PrefCode[];
  setSelectPrefs: React.Dispatch<React.SetStateAction<PrefCode[]>>;
  populationData: TotalPopulation[];
  setPopulationData: React.Dispatch<React.SetStateAction<TotalPopulation[]>>;
};
