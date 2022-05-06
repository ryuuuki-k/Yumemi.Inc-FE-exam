import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PrefecuturesListSSG from '../../Components/PrefecuturesListSSG';
import ChartsSSG from '../../Components/ChartsSSG';
import { fetchPopulation } from '../../lib/fetchPopulation';
import { fetchPrefectures } from '../../lib/fetchPrefectures';
import { TotalPopulationInfo } from '../../types/population';
import { Prefectures, PrefCode } from '../../types/prefectures';

interface Props {
  totalPopulationInfo: TotalPopulationInfo[];
}

const SSGPage: NextPage<Props> = ({ totalPopulationInfo }) => {
  const [selectPrefs, setSelectPrefs] = useState<
    TotalPopulationInfo['prefCode'][]
  >([]);

  return (
    <>
      <h1 className="text-center text-2xl my-5">
        <a
          href="https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yumemi, Inc. FrontEnd exam
          <OpenInNewIcon />
        </a>
      </h1>

      <div className="mx-5 my-10 items-center">
        {totalPopulationInfo.map(({ prefCode, prefName }) => (
          <PrefecuturesListSSG
            prefCode={prefCode}
            prefName={prefName}
            selectPrefs={selectPrefs}
            setSelectPrefs={setSelectPrefs}
            key={prefCode}
          />
        ))}
      </div>
      <ChartsSSG
        totalPopulationInfo={totalPopulationInfo}
        selectPrefs={selectPrefs}
      />
    </>
  );
};

export default SSGPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prefecturesData = (await fetchPrefectures()) as Prefectures;

  const totalPopulationInfo: TotalPopulationInfo[] = await Promise.all(
    prefecturesData.result.map(async ({ prefCode, prefName }) => {
      const prefCodeString: PrefCode = prefCode.toString() as PrefCode;
      const data = await fetchPopulation(prefCodeString);
      return {
        ...data!,
        prefCode: prefCodeString,
        prefName,
      };
    })
  );

  const props = {
    totalPopulationInfo,
  };

  return { props };
};
