// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Cards from "./Cards";
import Deck from "./deck/deck";
import Controls from "./controls/control";
import Hand from "./hand/hand";
import mockdata from "./jsonData/mocData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockdata.cardData,
      splicedata: [],
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <Cards />
        <div className="main_div">
          <div>
            <Deck
              data={this.state.data}
              shuffleBtn={() => this.shufflehandler()}
            />
          </div>
          <div>
            <Controls
              count={this.state.count}
              drawbtn={() => this.drawHandler()}
              valuechange={(e) => this.inputValChange(e)}
              resetData={() => this.resetHandler()}
              saveData={() => this.saveHandler()}
            />
          </div>
          <div>
            <Hand data={this.state.splicedata} 
            sortData= {()=> this.sortData()} />
          </div>
        </div>
      </div>
    );
  }
  shufflehandler() {
    let j, x, i;
    let changeData = [...this.state.data];

    for (i = changeData.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = changeData[i];
      changeData[i] = changeData[j];
      changeData[j] = x;
    }
    this.setState((state, props) => ({
      data: changeData,
      count: state.count,
      splicedata: state.splicedata
    }));
  }
  inputValChange(event) {
    this.setState((state, props) => ({
      data: state.data,
      count: event.target.value,
      splicedata: state.splicedata
    }));
  }
  drawHandler() {
    const jsondata = [...this.state.data];
    let splicedata = jsondata.splice(jsondata.length - this.state.count, this.state.count);
    splicedata = [...splicedata, ...this.state.splicedata];
    this.setState((state, props) => ({
      data: jsondata,
      count: state.count,
      splicedata: splicedata
    }));
  }
  sortData(){
    const dataSort = [...this.state.splicedata]
    dataSort.sort(function(a, b) {
      return (a.cardName - b.cardName);
  }).sort(function(a, b) {
      return (a.priority - b.priority);
  });
  this.setState((state, props) => ({
    data: state.data,
    count: state.count,
    splicedata: dataSort
  }));
  }
  resetHandler(){
    this.setState((state, props) => ({
      data: mockdata.cardData,
      count: 0,
      splicedata: []
    }));
  }
  saveHandler(){
    window.localStorage.setItem('saveData',JSON.stringify(this.state));
    alert('DATA Is Stored ')
  }
}

export default App;
