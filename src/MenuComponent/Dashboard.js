import React from 'react'
import '../Component/ComponentCss/DashBoard.css'
import { DashBoardOverView } from './DashBoard/DashBoardOverView';
import { DashBoardStatic } from './DashBoard/DashBoardStatic';
import DashBoardTable from './DashBoard/DashBoardTable'
export const Dashboard = () => {
    return (
        <>
        <div className ={'dbOverViewTitle'} >Overview</div>
        <div  className ={'dbContainer'} >
                
                <DashBoardOverView 
                title='Total Views' 
                value='246K'
                 rating='13.8%'
                 bgcolor='#55d8fe' 
                 color='rgb(211, 0, 0)'
                 graphColor ='#55d8fe'
                 />
                 <DashBoardOverView 
                title='Products Sold' 
                value='246K'
                 rating='13.8%'
                 bgcolor='#55d8fe' 
                 color='rgb(59, 201, 118)'
                 graphColor ='#a3a0fb'
                 />
                 <DashBoardOverView 
                title='Total Earnings' 
                value='246K'
                 rating='13.8%'
                 bgcolor='#55d8fe' 
                 color='rgb(211, 0, 0)'
                 graphColor ='#55d8fe'
                 />
                    
                      <DashBoardStatic  className ={'dbAreaChart'}/>
                    
                    <DashBoardTable className ='dbTable'/>
                  
                   
               
            </div>
        </>
    )
}
export default Dashboard;