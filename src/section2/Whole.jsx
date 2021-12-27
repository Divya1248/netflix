import React, { Component } from 'react';
import Leftblock from './LeftBlock';
import Rightblock from './RightBlock';
import "./Section2.css"
class Whole extends Component {
    render() {
        return (
            <section className="Second">
                <article>
                <Leftblock/>
                <Rightblock/>
                </article>
            </section>
        );
    }
}

export default Whole;
