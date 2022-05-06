import { NextPage } from 'next';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { TotalPopulationInfo } from '../types/population';
import { borderColors } from '../lib/colors';
import { options } from '../lib/chartOptions';

interface Props {
  selectPrefs: TotalPopulationInfo['prefCode'][];
  totalPopulationInfo: TotalPopulationInfo[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartsSSG: NextPage<Props> = ({ totalPopulationInfo, selectPrefs }) => {
  const displayPopulations = totalPopulationInfo.filter((pref) =>
    selectPrefs.includes(pref.prefCode)
  );

  const datasets = displayPopulations.map(({ prefName, prefCode, data }) => ({
    label: prefName,
    data: [data.map(({ value }) => value)],
    fill: true,
    lineTension: 0.1,
    backgroundColor: borderColors[parseInt(prefCode) - 1],
    borderColor: borderColors[parseInt(prefCode) - 1],
    borderCapStyle: 'round',
    borderDash: [],
    borderJoinStyle: 'square',
    pointBorderColor: borderColors[parseInt(prefCode) - 1],
    pointBackgroundColor: '#eee',
    pointBorderWidth: 5,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: borderColors[parseInt(prefCode) - 1],
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 1,
    pointRadius: 1,
    pointHitRadius: 10,
  }));

  const data = {
    labels: [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
    datasets,
  };

  return (
    <div className=" mx-20">
      {selectPrefs.length ? (
        <Line
          data={data}
          options={options}
          id="chart-key"
          height={400}
          width={500}
        />
      ) : (
        <h3 className="text-center">※ 都道府県を選択してください</h3>
      )}
    </div>
  );
};

export default ChartsSSG;
