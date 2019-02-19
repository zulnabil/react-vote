import React from 'react';
import { Button } from 'reactstrap';
import PercentVote from './PercentVote';

class RenderVote extends React.Component {
    render() {
        const { paslon } = this.props;
        return (
            <div>
                {paslon.map((paslon,index) => {
                    return (
                        <div key={index}>
                            {paslon.presiden} & {paslon.wapres}
                            <PercentVote progress={paslon.vote / 200 * 100}/>
                            <br/>
                            <Button onClick={this.props.votePaslon} id={index}>Vote {paslon.presiden} & {paslon.wapres}</Button>
                            <br/>
                            <br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default RenderVote;