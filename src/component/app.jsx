import React from 'react'
import {NavLink,Route} from 'react-router-dom'

import './app.css'
import '../clearstyle/reset.css'
import '../iconfont/css/all.css'
import NavList from '../views/navlist'

class App extends React.Component{
    render(){
        return(
            <div>
                <div className="top_bar">
                <div className="top_bar_left">萝卜多后台管理系统</div>
                <div className="top_bar_right">
                    <div>管理员</div>
                    <div>user</div>
                    <div className="fas fa-power-off" style={{lineHeight:'50px',color:'orange'}}></div>
                </div>
                </div>
                <div className="container">
                    <div className="nav_left">
                        <div>信息管理</div>
                        <div className="item">公司列表</div>
                        <div className="item">职位列表</div>
                        <div>Article管理</div>
                        <div className="item"><NavLink to='/navlist'>Article列表</NavLink></div>
                        <div>人才管理</div>
                        <div>推荐管理</div>
                        <div>后台管理</div>
                        <div className="item">模块管理</div>
                        <div className="item">角色管理</div>
                        <div className="item">密码修改</div>
                        <div className="item">账户管理</div>
                        <div>用户管理</div>
                        <div>内容管理</div>
                    </div>
                    <Route path='/navlist' component={NavList}/>
                </div>
            </div>
        )
    }
}

export default App