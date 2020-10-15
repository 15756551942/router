import React from 'react'

import './info.css'

class Info extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="item_info">公司列表</div>
                <div className="item_info">职位列表</div>
            </React.Fragment>
        )
    }
}

export default Info