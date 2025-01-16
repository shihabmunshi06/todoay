import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Incomplete', 'Complete'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#FF6384', '#4CAF50'],
        borderColor: ['#FF6384', '#4CAF50'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='chart-wrapper'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
