import React from 'react'
import '../Component/ComponentCss/DashBoard.css'
import { DashBoardOverView } from './DashBoard/DashBoardOverView';
import DashBoardTable from './DashBoard/Table/DashBoardTable';
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
                    <div className ={'dbAreaChart'}>
                    
                    </div>
                  
                    <DashBoardTable/>
                   
               
            </div>
        </>
    )
}
export default Dashboard;