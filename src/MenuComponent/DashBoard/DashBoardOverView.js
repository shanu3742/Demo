import React from 'react'

export const DashBoardOverView = ({title,value,rating,color}) => {
    return (
        <div className='dbOverViewMaindiv'>
            <h6>{title}</h6>
            <div>{value}</div>
            <div className='dbOverViewGraphMaindiv'>
                <div>{rating}</div>
                <div>Graph</div>
            </div>

        </div>
    )
}
