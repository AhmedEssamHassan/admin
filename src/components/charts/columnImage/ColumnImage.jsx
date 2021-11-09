import { Chart, Interval, Tooltip } from "bizcharts";

const data = [
  /*  { year: "1951 年", sales: 38 },
  { year: "1952 年", sales: 52 },
  { year: "1956 年", sales: 61 },
  { year: "1957 年", sales: 45 },
  { year: "1958 年", sales: 48 },
  { year: "1959 年", sales: 38 },
  { year: "1960 年", sales: 38 },
  { year: "1962 年", sales: 38 }, */
];

export default function Columnimagetop({ data }) {
  return (
    <Chart
      height={400}
      autoFit
      data={data.column}
      interactions={["active-region"]}
      padding={[30, 30, 30, 50]}
    >
      <Interval position="year*sales" />
      <Tooltip shared />
    </Chart>
  );
}
