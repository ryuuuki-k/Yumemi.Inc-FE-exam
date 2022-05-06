import { NextPage } from 'next';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { TotalPopulationInfo } from '../types/population';
import { PrefCode } from '../types/prefectures';

interface Props {
  prefCode: TotalPopulationInfo['prefCode'];
  prefName: TotalPopulationInfo['prefName'];
  selectPrefs: TotalPopulationInfo['prefCode'][];
  setSelectPrefs: Dispatch<SetStateAction<TotalPopulationInfo['prefCode'][]>>;
}

const PrefecuturesListSSG: NextPage<Props> = ({
  prefCode,
  prefName,
  selectPrefs,
  setSelectPrefs,
}) => {
  const handleChangePrefs = (e: ChangeEvent<HTMLInputElement>) => {
    const addPrefCode = e.target.value as PrefCode;
    const isAlreadyCheck = selectPrefs.some(
      (prefCode) => prefCode === addPrefCode
    );
    if (isAlreadyCheck) {
      setSelectPrefs(selectPrefs.filter((prefCode) => prefCode !== addPrefCode))
    } else {
      setSelectPrefs([...selectPrefs, addPrefCode]);
    }
  };

  return (
    <div className="inline-flex m-1">
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
  );
};

export default PrefecuturesListSSG;
