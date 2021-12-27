import React, { Component } from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';
import "./Section3.css"
class Part extends Component {
    render() {
        return (
            <section className="Part">
                <article>
              <Leftside/>
              <Rightside/>
              </article>
            </section>
        );
    }
}

export default Part;
