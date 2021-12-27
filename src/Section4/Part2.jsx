import React, { Component } from 'react';
import Leftpart from './Leftpart';
import Rightpart from './Rightpart';
import "./Section4.css"
class Part2 extends Component {
    render() {
        return (
          <section className="Second">
            <article>
        
                <Leftpart />
                <Rightpart />
             
            </article>
          </section>
        );
    }
}

export default Part2;
