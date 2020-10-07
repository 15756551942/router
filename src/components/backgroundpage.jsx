import React from 'react'
import '../CSS/backgroundpage.css'
import '../clearstyle/reset.css'
import '../iconfont/css/all.css'
class BackgroundPage extends React.Component{
    render() {
        return(
            <div className='nav_left'>
                <div className='nav_title'>萝卜多后台管理系统</div>
                <ul className='nav_list'>
                    <li>信息管理</li>
                    <li>Article管理</li>
                    <li>人才管理</li>
                    <li>推荐管理</li>
                    <li>后台管理</li>
                    <li>用户管理</li>
                    <li>内容管理</li>
                </ul>
            </div>
        );         
    }
}
export default BackgroundPage