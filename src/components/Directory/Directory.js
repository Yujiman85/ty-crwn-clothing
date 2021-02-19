import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import SECTIONS_DATA from './sections.data';
import './Directory.scss';

class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;