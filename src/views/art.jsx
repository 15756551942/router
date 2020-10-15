import React from 'react'
import {NavLink} from 'react-router-dom'

import './art.css'

class Art extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavLink to='/navlist'><div className="item_art">Article列表</div></NavLink>
            </React.Fragment>
        )
    }
}

export default Art