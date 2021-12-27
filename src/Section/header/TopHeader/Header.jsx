import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';
import "./Header.css"
class Header extends Component {
    render() {
        return (
            <section className="Block">
                <article>
                    <div>
            <Left/>
            <Right/>
            </div>
            <div className="middleBlock">
                <h1>Unlimited movies, TV <br />shows and more.</h1>
               </div>
               <div className="middle"> 
                <h4 >Watch anywhere, Cancel anytime.</h4>
              </div>
              <div className="middle1">
               <p >Ready to Watch? Enter your email to create or restart
                your membership</p>
                </div>
                <form id="formBlock">
                    <span>
                    <input type="email" id="name" placeholder=" Email address"/>
                    <button>Get Started</button>
                   
                    </span>
                </form>

        
            </article>
            </section>
        );
    }
}

export default Header;
