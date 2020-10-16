import React from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'

import './app.css'
import '../clearstyle/reset.css'
import '../iconfont/css/all.css'
import Art from '../views/art'
import BackSystem from '../views/backsystem'
import  NavList from '../views/navlist'
import Info from '../views/info'

class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         lists:[{num:1,name:'我做完了',type:'行业大图',pubtime:20200101,modtime:20200202,puber:'admin',sta:'在线',ope:'上线'}]
    //     }
    // }

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
                        <NavLink to='info' style={{textDecoration:'none'}}><div className='manager'>信息管理</div></NavLink>
                        <Switch>
                            <Route path='/info' component={Info}></Route>
                        </Switch>
                        <NavLink to='/art' style={{textDecoration:'none'}}><div className='manager'>Article管理</div></NavLink>
                        <Switch>
                            <Route path='/art' component={Art}></Route>
                        </Switch>
                        <NavLink to='/backsystem' style={{textDecoration:'none'}}><div className='manager'>后台管理</div></NavLink>
                        <Switch>
                            <Route path='/backsystem' component={BackSystem}></Route>
                        </Switch>
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