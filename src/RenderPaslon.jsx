import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

export default class RenderCandidate extends React.Component {
    render() {
        const { candidate } = this.props;
        return(
            <div>
                <Container>
                    <Row>
                        {candidate.map((candidate,index) => {
                            return (
                                <Col key={index} xs="4" className="grid-candidate">
                                    <Card>
                                    <CardImg top width="100%" src={candidate.img} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{candidate.president}</CardTitle>
                                    <CardSubtitle>{candidate.copresident}</CardSubtitle>
                                    <CardText>Pasangan Calon No. Urut {index+1}</CardText>
                                    </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                
            </div>
        )
    }
}