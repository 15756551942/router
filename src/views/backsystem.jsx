import React from 'react'

import './backsystem.css'

class BackSystem extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="item_back">模块管理</div>
                <div className="item_back">角色管理</div>
                <div className="item_back">密码修改</div>
                <div className="item_back">账户管理</div>
            </React.Fragment>
        )
    }
}

export default BackSystem