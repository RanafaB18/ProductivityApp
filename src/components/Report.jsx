import { Line } from "react-chartjs-2";
import Chart, { CategoryScale } from "chart.js/auto";
import { useEffect, useState } from "react";
import { getWeeklyReport } from "../services/crud";
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
  useEffect(() => {
    async function fetchWeeklyReport() {
      return await getWeeklyReport();
    }
    fetchWeeklyReport().then((res) => {
      const percentages = [];
      console.log("Response", res.data.days);
      for (let i = 0; i < 7; i++) {
        percentages.push(res.data.days[daysArray[i]].completed_task_percentage);
      }
      setData(percentages);
    });
  }, []);
  return (
    <main className="shadow-md border rounded-lg">
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
