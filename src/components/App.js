import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            time:null
        };
        this.ctrlID=null;
    }

    comentDidMount(){
        this.ctrlID=setInterval(function () {
            let  event = new Date();
            this.setState({time:event.toLocaleTimeString('en-US')});
          }, 1000);
    }
    componentWillUnmount(){
    }
    render() {

        return(
            <>
              <div className="Clock">
                  <h3 id="time">
                      {this.state.time}
                  </h3>
              </div>

            </>
        )
    }
}


export default App;
