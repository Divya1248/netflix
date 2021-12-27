import React, { Component } from 'react';
import Leftpart from './Leftpart';
import Rightpart from './Rightpart';
import "./Section2.css"
class Part2 extends Component {
    render() {
        return (
            <div>
                <Leftpart/>
                <Rightpart/>
            </div>
        );
    }
}

export default Part2;
