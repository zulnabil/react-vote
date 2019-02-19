import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class InputPaslon extends React.Component {
    constructor(props) {
        super(props);
        this.presidenInput = React.createRef();
        this.wapresInput = React.createRef();
        this.imgInput = React.createRef();
    }

    handleClick(e) {
        e.preventDefault()
        this.props.addPaslon(this.presidenInput.current.value, this.wapresInput.current.value, this.imgInput.current.value);
        this.myForm.reset()
    }

    render() {
        return (
            <form ref={myform => this.myForm = myform}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input innerRef={this.presidenInput} placeholder="Nama Presiden" />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input innerRef={this.wapresInput} placeholder="Nama Wapres" />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">http://</InputGroupAddon>
                    <Input innerRef={this.imgInput} placeholder="Link Foto Paslon" />
                </InputGroup>
                <br />
                <Button color="primary" onClick={this.handleClick.bind(this)}>
                Tambah Paslon
                </ Button>
             </form>
        )
    }
}

export default InputPaslon;