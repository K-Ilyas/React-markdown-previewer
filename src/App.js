
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/style.css';
import React from 'react';
import NavbarItem from './component/NavbarItem';
import Editor from './component/Editor';
import Previewer from './component/Previewer';
import { MARDOWN } from './data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: MARDOWN,
      previewer: '',
      hidePerviewer: false,
      hideEditor: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePreviewer = this.handlePreviewer.bind(this);
    this.handleEditor = this.handleEditor.bind(this);

  }

  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
    console.log(this.state.markdown);
  }
  handlePreviewer = () => {
    this.setState((state) => ({
      hidePerviewer: !state.hidePerviewer
    }))
  }
  handleEditor = () => {
    this.setState((state) => ({
      hideEditor: !state.hideEditor
    }))
  }


  render() {
    return (
      <React.Fragment>
        <NavbarItem />
        <Container fluid>
          <Editor markdown={this.state.markdown} markdownFunc={this.handleChange} hideView={this.state.hideEditor} handlePreviewer={this.handlePreviewer} />
          <Previewer markdown={this.state.markdown} hideView={this.state.hidePerviewer} handleEditor={this.handleEditor} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
