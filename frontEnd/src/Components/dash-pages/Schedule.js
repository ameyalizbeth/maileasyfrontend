import React from 'react';
import './schedule.css'
import {initData} from './data'

function Schedule(){
    return (
        <div>
            <div style={{marginBottom:20}}>Scheduled Emails</div>
            {initData.map((item)=>{
                return(
                    <div className="sche-card">
                        <div>
                            <div className="mail-desc">{item.qst}</div>
                            <div className="sche-time">Time | Date</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Schedule;