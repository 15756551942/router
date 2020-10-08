import React from 'react'
import './backgroundpage.css'
import '../../clearstyle/reset.css'
import '../../iconfont/css/all.css'

class BackgroundPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isshow:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        var isshow = !this.state.isshow
        this.setState({isshow:isshow})
    }

    render() {
        return(
            <div className='container'>
                <div className='nav_left'>
                    <div className='nav_title'>萝卜多后台管理系统</div>
                    <div className='nav_list'>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>信息管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className='list' onClick={this.handleClick}>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>Article管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className={this.state.isshow?'art_list_show':'art_list_hidden'}>Article列表</div>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>人才管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>推荐管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>后台管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>用户管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                        <div className='list'>
                            <div className='list_left'>
                                <div className='fas fa-pencil-alt'></div>
                                <div className='nav_list'>内容管理</div>
                            </div>
                            <div className='fas fa-angle-right'></div>
                        </div>
                    </div>
                </div>
            </div>
        )         
    }
}
export default BackgroundPage