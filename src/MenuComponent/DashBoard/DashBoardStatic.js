import React from 'react'
import { InputPicker } from 'rsuite';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const DashBoardStatic = () => {
    const [dashinput,setDashInput] = React.useState('')
    const [dashArray,setDashArray] = React.useState([{
        "name": "Jan",
        "Products sold": 4000,
        "Total views": 2400,
        "amt": 2400
      },
      {
        "name": "Feb",
        "Products sold": 3000,
        "Total views": 1398,
        "amt": 2210
      },
      {
        "name": "Mar",
        "Products sold": 2000,
        "Total views": 9800,
        "amt": 2290
      },
      {
        "name": "Aprl",
        "Products sold": 2780,
        "Total views": 3908,
        "amt": 2000
      },
      {
        "name": "May",
        "Products sold": 1890,
        "Total views": 4800,
        "amt": 2181
      },
      {
        "name": "Jun",
        "Products sold": 2390,
        "Total views": 3800,
        "amt": 2500
      }])

  const data =  [
        {
          "label": "Last 1 months",
          "value": "1",
          
        },
        {
          "label": "Last 2 months",
          "value": "2",
          
        },
        {
          "label": "Last 3 months",
          "value": "3",
          
        },
        {
          "label": "Last 4 months",
          "value": "4",
          
        },
        {
          "label": "Last 5 months",
          "value": "5",
          
        },
        {
          "label": "Last 6 months",
          "value": "6",
          
        },
        {
          "label": "Last 7 months",
          "value": "7",
          
        },
        {
          "label": "Last 8 months",
          "value": "8",
          
        },
        {
          "label": "Last 9 months",
          "value": "9",
          
        },
        {
          "label": "Last 10 months",
          "value": "10",
          
        },
        {
            "label": "Last 11 months",
            "value": "11",
            
          },
          {
            "label": "Last 12 months",
            "value": "12",
            
          },
    ]


const oData = [
    {
      "name": "Jan",
      "Products sold": 4000,
      "Total views": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "Products sold": 3000,
      "Total views": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "Products sold": 2000,
      "Total views": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "Products sold": 2780,
      "Total views": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "Products sold": 1890,
      "Total views": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "Products sold": 2390,
      "Total views": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "Products sold": 3490,
      "Total views": 4300,
      "amt": 2100
    },
    {
        "name": "Aug",
        "Products sold": 4000,
        "Total views": 2400,
        "amt": 2400
      },
      {
        "name": "Sep",
        "Products sold": 3000,
        "Total views": 1398,
        "amt": 2210
      },
      {
        "name": "Oct",
        "Products sold": 2000,
        "Total views": 9800,
        "amt": 2290
      },
      {
        "name": "Nov",
        "Products sold": 2780,
        "Total views": 3908,
        "amt": 2000
      },
      {
        "name": "Dec",
        "Products sold": 1890,
        "Total views": 4800,
        "amt": 2181
      },
      

  ]

  const getSelected = (el) => {
  const data=  oData.slice(0,el)
   setDashArray(data)
    
    setDashInput(el)
}
const getClose = () => {
  setDashArray([{
    "name": "Jan",
    "Products sold": 4000,
    "Total views": 2400,
    "amt": 2400
  },
  {
    "name": "Feb",
    "Products sold": 3000,
    "Total views": 1398,
    "amt": 2210
  },
  {
    "name": "Mar",
    "Products sold": 2000,
    "Total views": 9800,
    "amt": 2290
  },
  {
    "name": "Aprl",
    "Products sold": 2780,
    "Total views": 3908,
    "amt": 2000
  },
  {
    "name": "May",
    "Products sold": 1890,
    "Total views": 4800,
    "amt": 2181
  },
  {
    "name": "Jun",
    "Products sold": 2390,
    "Total views": 3800,
    "amt": 2500
  }])

}

console.log(dashinput)
console.log(dashArray)
  
   
    return (
        <div className='dbStatic'>
         <div className='dbStatticheading'>
             <div>Statistics</div>
             <InputPicker placeholder={'last 6 month'} data={data} style={{ width:150 }}  onSelect={getSelected} onClean={getClose} />

         </div>
         
    <AreaChart width={730} height={250} data={dashArray}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="bottom"align='left' height={36}/>
  <Area type="monotone" dataKey="Products sold" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Total views" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>
    )
}
