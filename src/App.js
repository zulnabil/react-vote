import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Collapse, CardBody, Card } from 'reactstrap';
import InputPaslon from './inputPaslon';
import RenderVote from './RenderVote';
import RenderPaslon from './RenderPaslon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paslon : [
        {
          presiden: 'Jokowi',
          wapres: 'Ma\'ruf Amin',
          img: 'http://cdn2.tstatic.net/wow/foto/bank/images/foto-jokowi-maruf-yang-akan-dipasang-di-kertas-suara.jpg',
          vote: 0,
          percent: 0
        },
        {
          presiden: 'Prabowo',
          wapres: 'Sandiaga',
          img: 'https://harianmerdeka.com/wp-content/uploads/2018/08/Fungsionaris-Gerindra-Nilai-Sandiaga-Tepat-Dampingi-Prabowo.jpg',
          vote: 0,
          percent: 0
        },
        {
          presiden: 'Nurhadi',
          wapres: 'Aldo',
          img: 'http://cdn2.tstatic.net/aceh/foto/bank/images/nurhadi-dan-aldo.jpg',
          vote: 0,
          percent: 0
        },
      ],
      jumlahsuara: 200,
      collapse: false,
      showCollapse: 'flex',
    }
  }

  addPaslon(presiden, wapres, img) {
    this.setState(({ paslon }) => ({
      paslon: paslon.concat({
        presiden: presiden,
        wapres: wapres,
        img: img,
        vote: 0,
        percent: 0
      })
    }))
  }

  votePaslon(paslon) {
    if (this.state.paslon[paslon.target.id].percent < 100 && this.state.jumlahsuara)  {
        let indexpaslon = paslon.target.id;
        const newPaslon = this.state.paslon.slice();
        newPaslon[indexpaslon].vote += 1;
        newPaslon[indexpaslon].percent = newPaslon[indexpaslon].vote / 200 * 100;
        this.setState({
          paslon: newPaslon,
          jumlahsuara: this.state.jumlahsuara - 1
        })
      }
  }
  
  toggle() {
    this.setState({
       collapse: !this.state.collapse,
       showCollapse: 'none' 
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody className="FormVote">
              <RenderVote paslon={this.state.paslon} votePaslon={this.votePaslon.bind(this)}/>
              <p>Jumlah Suara tersisa : {this.state.jumlahsuara}</p>
              </CardBody>
            </Card>
          </Collapse>
          <div style={{display: this.state.showCollapse}}>
            <InputPaslon addPaslon={this.addPaslon.bind(this)}/>
          </div>
          <br/>
          <Button onClick={this.toggle.bind(this)} style={{display: this.state.showCollapse}} >Mulai Vote</Button>
          <RenderPaslon paslon={this.state.paslon}/>
        </header>
      </div>
    );
  }
}

export default App;
