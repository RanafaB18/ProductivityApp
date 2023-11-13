import { Line } from "react-chartjs-2";
import Chart, { CategoryScale } from "chart.js/auto";
import { useEffect, useState } from "react";
import { client, getWeeklyReport } from "../services/crud";
import { useNavigate } from "react-router-dom";
Chart.register(CategoryScale);
const Report = () => {
  const daysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchWeeklyReport() {
      return await getWeeklyReport();
    }
    console.log(client.defaults.headers['Authorization']);
    fetchWeeklyReport().then((res) => {
      const percentages = [];
      console.log("Response", res.data.days);
      for (let i = 0; i < 7; i++) {
        percentages.push(res.data.days[daysArray[i]].completed_task_percentage);
      }
      setData(percentages);
    });
  }, []);
  function goBackHandler() {
    navigate(-1)
  }
  return (
    <main className="shadow-md w-96 h-96 md:w-[600px] md:h-[400px] border rounded-lg">
      <button onClick={goBackHandler} className="absolute top-[5%] left-[5%] hover:underline hover:text-blue-400">Go Back</button>
      <Line
        width={600}
        height={400}
        options={{ maintainAspectRatio: true }}
        data={{
          labels: daysArray,
          datasets: [
            {
              label: "Days",
              data: data,
              borderColor: "rgb(75, 192, 192)",
              fill: false,
              tension: 0.1,
            },
          ],
        }}
      />
    </main>
  );
};

export default Report;
