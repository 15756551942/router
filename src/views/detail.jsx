import React from 'react'

import './detail.css'

class Detail extends React.Component{
    render(){
        return(
            <div className='inscon'>
                <div className='serach'>
                    <div className='lists'>
                        <div>发布时间</div>
                        <input type="text" className='inp'/>
                    </div>
                    <div className='lists'>
                        <div>类型</div>
                        <input type="text" className='inp'/>
                    </div>
                    <div className='lists'>
                        <div>状态</div>
                        <input type="text" className='inp'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail