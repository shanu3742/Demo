import React from 'react'
import '../Component/ComponentCss/DashBoard.css'
import { DashBoardOverView } from './DashBoard/DashBoardOverView';
import { DashBoardStatic } from './DashBoard/DashBoardStatic';
export const Dashboard = () => {
    return (
        <div className ={'dbContainer'} >
           <h4>Overview</h4>
                <DashBoardOverView 
                title='Total Views' 
                value='246K'
                 rating='13.8%'
                 color='#55d8fe' 
                 />
            <DashBoardStatic />


        </div>
    )
}
export default Dashboard;