import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component.jsx'
import DIRECTORY_DATA from './directory.data.js'

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: DIRECTORY_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;


