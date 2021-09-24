import React from 'react'
 import LabelGraph from './Graphs/labelGraph'

export const DashBoardOverView = ({title,value,rating, graphColor ,color}) => {
  //  console.log(graphColor)
    return (
        <>
     <div className = {'dbOverviewContainer'} > 
        <div className='dbOverViewMaindiv'>
            <div className={"dbOverViewLabel"} >{title}</div>
            <div className={"dbValue"} >{value}</div>
            <div className='dbOverViewGraphMaindiv'>
                <div style ={{color : color}} className={"dbOverViewRating"}>{rating}</div>
                <div className ='dbOverviewGraph'><LabelGraph  graphcolor ={graphColor} /></div>
            </div>
        </div>
    </div>
    
    </>
    )
}
