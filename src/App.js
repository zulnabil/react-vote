import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import PercentVote from './PercentVote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentJokowi: 0,
      percentPrabowo: 0,
      jumlahsuara: 400
    }
  }

  handleClickJokowi() {
    if (this.state.percentJokowi < 100 && this.state.jumlahsuara) {
      this.setState({
        percentJokowi: this.state.percentJokowi+1 / 400 * 100,
        jumlahsuara: this.state.jumlahsuara-1
      })
    }
  }

  handleClickPrabowo() {
    if (this.state.percentPrabowo < 100 && this.state.jumlahsuara) {
      this.setState({
        percentPrabowo: this.state.percentPrabowo+1 / 400 * 100,
        jumlahsuara: this.state.jumlahsuara-1
      })
    }
  }

  handleClickReset() {
    this.setState({
      percentJokowi: 0,
      percentPrabowo: 0,
      jumlahsuara: 400
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Jokowi & Ma'ruf Amin
          <PercentVote progress={this.state.percentJokowi} />
          <br/>
          <Button onClick={this.handleClickJokowi.bind(this)}>Vote Jokowi</Button>
          <br/>
          Prabowo & Sandiaga
          <PercentVote progress={this.state.percentPrabowo} />
          <br/>
          <Button onClick={this.handleClickPrabowo.bind(this)}>Vote Prabowo</Button>
          <br/>
          <p>Jumlah Suara tersisa : {this.state.jumlahsuara}</p>
          <Button onClick={this.handleClickReset.bind(this)} color="danger">Reset</Button>
        </header>
        
      </div>
    );
  }
}

export default App;
