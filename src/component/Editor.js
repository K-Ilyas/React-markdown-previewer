import React, { useState } from 'react'
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';



const styleMin = {
    minHeight: "300px"
};
const styleMax = {
    minHeight: "800px"
};

function Editor({ markdown, markdownFunc, hideView, handlePreviewer }) {

    const [minimize, setMinimize] = useState(true);
    const [maximize, setMaximize] = useState(false);

    const handleChange = () => {
        setMinimize(!minimize);
        setMaximize(!maximize);
        handlePreviewer();
    }

    return (
        <Row className="justify-content-center" >
            <Col xs lg="6" md="6">
                <Card style={hideView ? { display: 'none' } : { display: "inherit" }}>
                    <Card.Header className="card-window" ><p><i className="fab fa-free-code-camp"></i>Editor</p>
                        <p onClick={handleChange}>{minimize ? <i className="fas fa-arrows-alt"></i>
                            : maximize ? <i className="fas fa-compress"></i> : null}</p>
                    </Card.Header>
                    <Card.Body >
                        <textarea onChange={markdownFunc} value={markdown} style={minimize ? styleMin : maximize ? styleMax : null} name="" id="editor" >{markdown}</textarea>
                    </Card.Body>
                </Card>
            </Col>
        </Row>)
}

Editor.propTypes = {
    markdown: PropTypes.string.isRequired,
    hideView: PropTypes.bool.isRequired,
    markdownFunc: PropTypes.func.isRequired,
    handlePreviewer: PropTypes.func.isRequired
}
export default Editor