import React from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'

import './app.css'
import '../clearstyle/reset.css'
import '../iconfont/css/all.css'
import Art from '../views/art'
import BackSystem from '../views/backsystem'
import  NavList from '../views/navlist'

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
                        <NavLink to='info' style={{textDecoration:'none'}}><div>信息管理</div></NavLink>
                        <NavLink to='/art' style={{textDecoration:'none'}}><div>Article管理</div></NavLink>
                        <Switch>
                            <Route path='/art' component={Art}></Route>
                        </Switch>
                        <NavLink to='rencai' style={{textDecoration:'none'}}><div>人才管理</div></NavLink>
                        <NavLink to='tuijian' style={{textDecoration:'none'}}><div>推荐管理</div></NavLink>
                        <NavLink to='/backsystem' style={{textDecoration:'none'}}><div>后台管理</div></NavLink>
                        <Switch>
                            <Route path='/backsystem' component={BackSystem}></Route>
                        </Switch>
                        <NavLink to='user' style={{textDecoration:'none'}}><div>用户管理</div></NavLink>
                        <NavLink to='content' style={{textDecoration:'none'}}><div>内容管理</div></NavLink>
                        {/* <div className="item">公司列表</div>
                        <div className="item">职位列表</div>
                        <div className="item"><NavLink to='/navlist'>Article列表</NavLink></div>
                        <div className="item">模块管理</div>
                        <div className="item">角色管理</div>
                        <div className="item">密码修改</div>
                        <div className="item">账户管理</div> */}
                    </div>
                    <div>
                        <Route path='/navlist' component={NavList}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App