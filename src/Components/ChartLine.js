import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Minimum",
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
    },
    {
      label: "Maximum",
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
  ],
};

const ChartLine = ({chartData}) => {
  var labelArr =[], minTempArr = [], maxTempArr = [], humidity=[];

  for(let i=0;i<chartData.length;i++){
     labelArr.push(chartData[i].dt_txt.split(' ')[1]);
     minTempArr.push(chartData[i].main.temp_min);
     maxTempArr.push(chartData[i].main.temp_max);
     humidity.push(chartData[i].main.humidity);
  }

  let chartNewData = data;
  chartNewData.labels = labelArr;
  chartNewData.datasets[0].data = minTempArr;
  chartNewData.datasets[1].data = maxTempArr;
  
  return (
    <div style={{ width: 600, height: 300 }}>
      <Line options={options} data={chartNewData} />
    </div>
  );
};

export default ChartLine;