import React from 'react';
import { Button } from 'reactstrap';
import PercentVote from './PercentVote';

class RenderVote extends React.Component {
    render() {
        const { candidate } = this.props;
        return (
            <div>
                {candidate.map((candidate,index) => {
                    return (
                        <div key={index}>
                            {candidate.president} & {candidate.copresident}
                            <PercentVote progress={candidate.vote / 200 * 100}/>
                            <br/>
                            <Button onClick={this.props.voteCandidate} id={index}>Vote {candidate.president} & {candidate.copresident}</Button>
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