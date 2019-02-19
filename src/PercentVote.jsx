import React from 'react';
import { Progress } from 'reactstrap';

export default class PercentVote extends React.Component {
    render() {
        const { progress } = this.props
        return(
            <div>
            <div className="text-center">
            <Progress value={progress}>{progress}%</Progress>
            </div>
            </div>
        )
    }
    
}