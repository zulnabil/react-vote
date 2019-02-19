import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

export default class RenderPaslon extends React.Component {
    render() {
        const { paslon } = this.props;
        return(
            <div>
                <Container>
                    <Row>
                        {paslon.map((paslon,index) => {
                            return (
                                <Col key={index} xs="4" className="grid-paslon">
                                    <Card>
                                    <CardImg top width="100%" src={paslon.img} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle>{paslon.presiden}</CardTitle>
                                    <CardSubtitle>{paslon.wapres}</CardSubtitle>
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