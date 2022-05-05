export const options: {} = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: '都道府県別人口推移',
    },
    tooltip: {
      titleFont: { size: 13 },
      bodyFont: { size: 10 },
      titleMarginBottom: 10,
      backgroundColor: 'rgba(176,196,222,0.8)',
      titleColor: 'rgba(0,0,0,1)',
      bodyColor: 'rgba(0,0,0,1)',
    },
  },
};
