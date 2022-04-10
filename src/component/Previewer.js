import React, { useState } from 'react'
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import { marked } from 'marked';

function Previewer({ markdown, hideView, handleEditor }) {

    const [minimize, setMinimize] = useState(true);
    const [maximize, setMaximize] = useState(false);

    const handleChange = () => {
        setMinimize(!minimize);
        setMaximize(!maximize);
        handleEditor();
    }

    marked.setOptions({
        renderer: new marked.Renderer(),
        langPrefix: 'hljs language-',
        highlight: function (code, lang) {
            const hljs = require('//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js');
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
        pedantic: true,
        gfm: true,
        breaks: true,
        sanitize: true,
        smartLists: true,
        smartypants: true,
        xhtml: false
    });


    return (
        <Row className="justify-content-center">
            <Col xs lg="8" md="8">
                <Card style={hideView ? { display: 'none' } : { display: "inherit" }} >
                    <Card.Header className="card-window" ><p><i className="fab fa-free-code-camp"></i>Previewer</p>
                        <p onClick={handleChange}>{minimize ? <i className="fas fa-arrows-alt"></i>
                            : maximize ? <i className="fas fa-compress"></i> : null}</p>
                    </Card.Header>
                    <Card.Body id="preview" style={{ overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: marked.parse(markdown, { breaks: true }) }}>
                    </Card.Body>
                </Card>
            </Col>
        </Row >);
}
Previewer.propTypes = {
    markdown: PropTypes.string.isRequired,
    hideView: PropTypes.bool.isRequired,
    handleEditor: PropTypes.func.isRequired
}
export default Previewer