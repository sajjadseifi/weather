import { ChartData } from "chart.js";

const labels = [...Array(7)].map((_,idx)=>idx.toString());

export const data: ChartData<"bar", number[], string> = {
  labels: labels,
  datasets: [{
    barThickness: 8,
    maxBarThickness: 10,
    minBarLength: 4,
    borderRadius:10,
    label: '',
    data: [20, 50, 40, 60, 50, 50, 50],
    backgroundColor:'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgb(75, 192, 192)',
    borderWidth: 1,
}]
};