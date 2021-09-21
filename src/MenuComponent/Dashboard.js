import React from 'react'
import '../Component/ComponentCss/DashBoard.css'
import { DashBoardOverView } from './DashBoard/DashBoardOverView';
export const Dashboard = () => {
    return (
        <div className ={'dbContainer'} >
            <div>
                <DashBoardOverView 
                title='Total Views' 
                value='246K'
                 rating='13.8%'
                 color='#55d8fe' 
                 />
            </div>
            
        </div>
    )
}
export default Dashboard;