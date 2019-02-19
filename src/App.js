import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Collapse, CardBody, Card } from 'reactstrap';
import InputCandidate from './inputPaslon';
import RenderVote from './RenderVote';
import RenderCandidate from './RenderPaslon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: [
        {
          president: 'Jokowi',
          copresident: 'Ma\'ruf Amin',
          img: 'http://cdn2.tstatic.net/wow/foto/bank/images/foto-jokowi-maruf-yang-akan-dipasang-di-kertas-suara.jpg',
          vote: 0,
          percent: 0
        },
        {
          president: 'Prabowo',
          copresident: 'Sandiaga',
          img: 'https://harianmerdeka.com/wp-content/uploads/2018/08/Fungsionaris-Gerindra-Nilai-Sandiaga-Tepat-Dampingi-Prabowo.jpg',
          vote: 0,
          percent: 0
        },
        {
          president: 'Nurhadi',
          copresident: 'Aldo',
          img: 'http://cdn2.tstatic.net/aceh/foto/bank/images/nurhadi-dan-aldo.jpg',
          vote: 0,
          percent: 0
        },
      ],
      quotavote: 200,
      collapse: false,
      showCollapse: 'flex',
    }
  }

  addCandidate(president, copresident, img) {
    this.setState(({ candidate }) => ({
      candidate: candidate.concat({
        president: president,
        copresident: copresident,
        img: img,
        vote: 0,
        percent: 0
      })
    }))
  }

  voteCandidate(candidate) {
    if (this.state.candidate[candidate.target.id].percent < 100 && this.state.quotavote)  {
        let index = candidate.target.id;
        const newCandidate = this.state.candidate.slice();
        newCandidate[index].vote += 1;
        newCandidate[index].percent = newCandidate[index].vote / 200 * 100;
        this.setState({
          candidate: newCandidate,
          quotavote: this.state.quotavote - 1
        })
      }
  }
  
  toggle() {
    this.setState({
       collapse: !this.state.collapse,
       showCollapse: 'none' 
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody className="FormVote">
              <RenderVote candidate={this.state.candidate} voteCandidate={this.voteCandidate.bind(this)}/>
              <p>Jumlah Suara tersisa : {this.state.quotavote}</p>
              </CardBody>
            </Card>
          </Collapse>
          <div style={{display: this.state.showCollapse}}>
            <InputCandidate addCandidate={this.addCandidate.bind(this)}/>
          </div>
          <br/>
          <Button onClick={this.toggle.bind(this)} style={{display: this.state.showCollapse}} >Mulai Vote</Button>
          <RenderCandidate candidate={this.state.candidate}/>
        </header>
      </div>
    );
  }
}

export default App;
