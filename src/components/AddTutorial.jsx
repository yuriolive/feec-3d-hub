import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Form, FormGroup, Label, Input, FormText, Card, CardBlock, CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/mode/markdown/markdown';
import { addTutorial } from '../actions/index';

const ImageInputButtonLoading = () => (
  <span>
    <i className="fa fa-refresh fa-spin fa-fw" /> Fazendo upload
  </span>);

const ImageInputButton = () => (
  <span>
    <i className="fa fa-upload" /> Adicionar imagem
  </span>);

class AddTutorial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageInputLoading: false,
      tutorial: {
        title: {
          value: '',
          error: false,
        },
        tags: {
          value: '',
          error: false,
        },
        content: {
          value: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
          error: false,
        },
      },
    };
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleTagsInput = this.handleTagsInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
    this.handleImageInputClick = this.handleImageInputClick.bind(this);
  }

  handleTitleInput(event) {
    this.setState({
      tutorial: {
        ...this.state.tutorial,
        title: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleTagsInput(event) {
    this.setState({
      tutorial: {
        ...this.state.tutorial,
        tags: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleContentInput(editor, data, value) {
    this.setState({
      tutorial: {
        ...this.state.tutorial,
        content: {
          value,
          error: false,
        },
      },
    });
  }

  handleImageInput(event) {
    const image = event.target.files[0];
    const imgur = {
      clientid: '70329aef151a732',
    };
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Client-ID ${imgur.clientid}`,
      },
    };
    const formData = new FormData();
    formData.append('image', image);

    /* const imgurAPI = axios.create({
      baseURL: 'https://api.imgur.com/3/',
      timeout: 1000,
      headers: {
        Authorization: `Client-ID ${imgur.clientid}`,
        'Content-Type': 'multipart/form-data',
      },
    }); */

    this.setState({ imageInputLoading: true });

    axios.post('https://api.imgur.com/3/image', formData, config)
      .then((response) => {
        console.log(response);
        this.setState({
          imageInputLoading: false,
          tutorial: {
            ...this.state.tutorial,
            content: {
              value: `${this.state.tutorial.content.value}\n\n![Descrição da Imagem](${response.data.data.link})`,
              error: false,
            },
          },
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ imageInputLoading: false });
      });
  }

  handleImageInputClick() {
    this.imageInputElement.click();
  }

  render() {
    return (
      <Container className="mt-4">
        <div className="mb-4">
          <span className="h2">Adicionar novo tutorial</span>
        </div>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.props.addTutorial({
            ...this.state.tutorial,
            uid: this.props.uid,
          });
        }}
        >
          <Button
            className="pull-right"
            type="submit"
            color="primary"
            disabled={
              this.props.loading
              || this.state.tutorial.title.error
              || this.state.tutorial.content.error
              || this.state.tutorial.title.value === ''
              || this.state.tutorial.content.value === ''
            }
          >Enviar Tutorial</Button>
          <FormGroup>
            <Label for="title">Nome do Tutorial</Label>
            <Input
              value={this.state.tutorial.title.value}
              onChange={this.handleTitleInput}
              state={this.state.tutorial.title.error ? 'danger' : null}
              type="text"
              name="title"
              placeholder="Anemometro de baixa fricção"
            />
          </FormGroup>
          <FormGroup>
            <Label for="tags">Tags</Label>
            <Input
              value={this.state.tutorial.tags.value}
              onChange={this.handleTagsInput}
              state={this.state.tutorial.tags.error ? 'danger' : null}
              type="text"
              name="tags"
              placeholder="medidor, temperatura, vento"
            />
            <FormText color="muted">
              Separe as Tags usando vírgula.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="description">
              Conteúdo
              <Button
                size="sm"
                color="success"
                className="ml-3"
                disabled={this.state.imageInputLoading}
                onClick={this.handleImageInputClick}
              >
                { this.state.imageInputLoading ?
                  <ImageInputButtonLoading /> : <ImageInputButton />
                }
              </Button>
              <input
                onChange={this.handleImageInput}
                type="file"
                name="addImage"
                accept="image/*"
                ref={(imageInput) => { this.imageInputElement = imageInput; }}
                style={{ display: 'none' }}
              />
            </Label>
            <CodeMirror
              value={this.state.tutorial.content.value}
              onBeforeChange={this.handleContentInput}
              options={{
                lineNumbers: true,
                mode: 'markdown',
                theme: '3024-night',
              }}
            />
          </FormGroup>
        </Form>
        <Card>
          <CardHeader>Prévia</CardHeader>
          <CardBlock>
            <ReactMarkdown
              escapeHtml
              source={this.state.tutorial.content.value}
            />
          </CardBlock>
        </Card>
      </Container>
    );
  }
}

AddTutorial.propTypes = {
  loading: PropTypes.bool.isRequired,
  addTutorial: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
const mapStateToProps = state => ({
  loading: state.addTutorial.addTutorialLoading,
  uid: state.user.user.uid,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ addTutorial }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(AddTutorial);
