
import React from "react";
import { BarChart, Bar } from "recharts";



 const labelGraph =({graphcolor})=> {

    
    
    const data = [
        {
            name: "Page E",
            uv: 3,
            pv: 4800,
            amt: 6181
          },
          {
            name: "Page F",
            uv: 2,
            pv: 3800,
            amt: 2500
          },
          {
            name: "Page G",
            uv: 1,
            pv: 4300,
            amt: 2100
          },
        {
          name: "Page A",
          uv: 1,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 2,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 3,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv:4,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 3,
          pv: 4800,
          amt: 6181
        },
        {
          name: "Page F",
          uv: 2,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 1,
          pv: 4300,
          amt: 2100
        },
        {
            name: "Page E",
            uv: 3,
            pv: 4800,
            amt: 6181
          },
          {
            name: "Page F",
            uv: 2,
            pv: 3800,
            amt: 2500
          },
          {
            name: "Page G",
            uv: 1,
            pv: 4300,
            amt: 2100
          }
      ];


  return (
    <BarChart width={70} height={40} data={data}>
      <Bar  dataKey="uv" fill={graphcolor} />
    </BarChart>
  );
}
export default labelGraph;