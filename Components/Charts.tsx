import React, { useContext } from 'react';
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
import { SelectPrefectures } from '../pages/index';
import { borderColors } from '../lib/colors';
import { options } from '../lib/chartOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const { selectPrefs, populationData } = useContext(SelectPrefectures);

  const printChartDatas = populationData.filter(({ prefCode }) =>
    selectPrefs.includes(prefCode)
  );

  const datasets = printChartDatas.map(({ prefName, data }, i) => {
    return {
      label: prefName,
      data: data.map(({ value }) => value),
      fill: true,
      lineTension: 0.1,
      backgroundColor: borderColors[i],
      borderColor: borderColors[i],
      borderCapStyle: 'round',
      borderDash: [],
      borderJoinStyle: 'square',
      pointBorderColor: borderColors[i],
      pointBackgroundColor: '#eee',
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: borderColors[i],
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
    };
  });

  const data = {
    labels: [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
    datasets,
  };

  return (
    <div className=" mx-20">
      {data.datasets.length ? (
        <Line
          height={400}
          width={500}
          data={data}
          options={options}
          id="chart-key"
        />
      ) : (
        <h3 className="text-center">※ 都道府県を選択してください</h3>
      )}
    </div>
  );
};

export default Charts;
