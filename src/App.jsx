import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Section/header/TopHeader/Header';
import Whole from './section2/Whole';
import Part from './Section3/Part';
import Part2 from './Section4/Part2';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Whole/>
                <Part/>
                <Part2 />
               <Footer/>
            </div>
        );
    }
}

export default App;
