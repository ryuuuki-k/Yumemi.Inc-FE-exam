import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { fetchPrefectures } from '../lib/fetchPrefectures';
import PrefecturesList from '../Components/PrefecturesList';
import Charts from '../Components/Charts';
import { PrefCode, Prefectures } from '../types/prefectures';
import { TotalPopulationInfo } from '../types/population';
import { AppContext } from '../types/appContext';

export const SelectPrefectures = React.createContext({} as AppContext);

const Home: NextPage = () => {
  const { data } = useQuery('prefData', fetchPrefectures);
  const prefectures = data?.result;
  const [selectPrefs, setSelectPrefs] = useState<PrefCode[]>([]);
  const [populationData, setPopulationData] = useState<TotalPopulationInfo[]>([]);

  const state: AppContext = {
    selectPrefs,
    setSelectPrefs,
    populationData,
    setPopulationData,
    prefectures,
  };

  return (
    <div>
      <Head>
        <title>Yumemi, Inc exam</title>
      </Head>

      <main>
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
        <SelectPrefectures.Provider value={state}>
          <PrefecturesList />
          <Charts />
        </SelectPrefectures.Provider>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
