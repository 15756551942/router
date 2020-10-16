import React from 'react'

import './navlist.css'

class NavList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        tit:['ID','名称','类型','发布时间','修改时间','发布者','状态','操作'],
        lists:[1,'我做完了','行业大图',20200101,20200202,'admin','在线','上线']
        }
    }
    render(){
        const tit = this.state.tit
        const lists = this.state.lists// eslint-disable-line no-unused-vars
        return(
            <div>
                <div className="content_right">
                    <div className="content_right_top">
                </div>
                <div className="content_right_bottom">
                    <div className="list_top">
                        <div>Article列表</div>
                        <button>新增</button>
                    </div>
                    <div>
                        <table  className="list_bottom">
                            <thead>
                                <tr>
                                    {
                                        tit.map((name,index) => <th key={index}>{name}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        lists.map((name,index) => <td key={index}>{name}</td>)
                                    }
                                </tr>
                                <tr>
                                    {
                                        lists.map((name,index) => <td key={index}>{name}</td>)
                                    }
                                </tr>
                                <tr>
                                    {
                                        lists.map((name,index) => <td key={index}>{name}</td>)
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavList