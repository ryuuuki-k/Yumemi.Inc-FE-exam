import { ChangeEvent, useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { fetchPrefectures } from '../lib/fetchPrefectures';
import { SelectPrefectures } from '../pages/index';
import { fetchPopulation } from '../lib/fetchPopulation';
import { TotalPopulationInfo } from '../types/population';
import { PrefCode } from '../types/prefectures';

const PrefecturesList = () => {
  const { data, error, isLoading } = useQuery('prefData', fetchPrefectures);

  const {
    prefectures,
    selectPrefs,
    setSelectPrefs,
    populationData,
    setPopulationData,
  } = useContext(SelectPrefectures);

  const handleChangePrefs = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const addPrefCode = e.target.value as PrefCode;
      setSelectPrefs([...selectPrefs, addPrefCode]);

      const isAlredyFetched = populationData.some(
        (data) => data.prefCode === addPrefCode
      );
      if (isAlredyFetched) return;

      const addPrefecture = prefectures?.find(
        ({ prefCode }) => prefCode === parseInt(addPrefCode)
      );

      const newPrefPopulationData = await fetchPopulation(addPrefCode);
      if (typeof newPrefPopulationData !== 'undefined') {
        const populationDataWithCode: TotalPopulationInfo = {
          ...newPrefPopulationData,
          prefCode: addPrefCode,
          prefName: addPrefecture?.prefName!,
        };
        setPopulationData([...populationData, populationDataWithCode]);
      }
    } else {
      const removedPrefsCodes = selectPrefs.filter(
        (pref) => pref !== e.target.value
      );
      setSelectPrefs(removedPrefsCodes);
    }
  };

  return (
    <div className="mx-5 my-10 items-center">
      <ul>
        {data?.result?.map(({ prefName, prefCode }) => (
          <div className="inline-flex m-1" key={prefCode}>
            <label className="flex items-baseline">
              <input
                onChange={handleChangePrefs}
                value={prefCode}
                type="checkbox"
                className="mx-1"
              />
              <p className="">{prefName}</p>
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PrefecturesList;
