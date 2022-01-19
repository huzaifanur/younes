import React, { Component } from "react";
class CartCounter extends React.Component {
      constructor(props) {
        super(props);
    this.state = {
    count:0
    };
    // Change code below this line
     this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // Change code above this line
      }
      // Change code below this line
      increment() {
        this.setState(state => ({
          count: this.state.count+1
        }));
      };
      decrement() {
        this.setState(state => ({
          count: this.state.count-1
        }));
      };
      reset() {
        this.setState(state => ({
          count: 0
        }));
      };
    
      // Change code above this line
      render() {
        return (
          <div>
            
            <button className='dec' onClick={this.decrement}>-</button>
           {this.state.count}
             <button className='inc' onClick={this.increment}>+</button>
            <button className='reset' onClick={this.reset}>x</button>
          
          </div>
        );
      }
    };

export default CartCounter;
