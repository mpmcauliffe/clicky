import React from 'react'
import Card from './Card'
import Navebar from './Navbar'
import Header from './Header'
import Footer from './Footer'
//import GameModal from './GameModal'
import shuffle from "shuffle-array"

export default class RetroReact extends React.Component {
    state = {
        currentScore: 0,
        topScore: 0,
        imageCards: Array.apply(null, {length: 12}).map(Number.call, Number),
        selections: [],
        message: "Click each image exactly once"
    };

    handleSelection = (e) => {
        let selectId = parseInt(e.target.id);
        let finder   = false;

        this.state.selections.forEach((item) => {
            if(item === selectId) {
                finder = true;
            }
        })
       
        this.handleNavUpdate(finder, selectId);
    };
    handleNavUpdate = (finder, selectId) => {
        if(finder) {
            this.setState(() => {
                return {
                    message: "You are incorrect",
                    currentScore: 0,
                    selections: []
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    message: "You are correct",
                    currentScore: prevState.currentScore + 1,
                    selections: prevState.selections.concat([selectId]),
                    topScore: prevState.currentScore + 1 >= prevState.topScore ? prevState.currentScore + 1 : prevState.topScore
                }
            });
        }
        this.componentWillMount()
    };

    componentWillMount() {
        this.setState({ imageCards: shuffle(this.state.imageCards)});
    };
 
    render() {
        return (
            <div>
                <Header />
                <Navebar 
                    message={this.state.message}
                    score={this.state.currentScore} 
                    topScore={this.state.topScore}  
                />
                
                <div className="container">
                    <Card handleSelection={this.handleSelection} imageCards={this.state.imageCards} />
                </div>
                <Footer />
            </div>
        );
    }
}

// <GameModal currentScore={this.currentScore} handleModalClear={this.handleModalClear} />
// handleModalClear = () => {
//     this.setState(() => ({ currentScore: 0 }));
// };