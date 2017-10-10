import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject } from '../actions/index';

class AddProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        title: {
          value: '',
          error: false,
        },
        image: {
          value: '',
          preview: '',
          error: false,
        },
        description: {
          value: '',
          error: false,
        },
        materials: {
          value: '',
          error: false,
        },
        tags: {
          value: '',
          error: false,
        },
        file: {
          value: '',
          error: false,
        },
      },
    };
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleMaterialsInput = this.handleMaterialsInput.bind(this);
    this.handleTagsInput = this.handleTagsInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleTitleInput(event) {
    this.setState({
      project: {
        ...this.state.project,
        title: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleImageInput(event) {
    const reader = new FileReader();
    const image = event.target.files[0];

    reader.readAsDataURL(image);

    reader.onloadend = () => {
      this.setState({
        project: {
          ...this.state.project,
          image: {
            preview: reader.result,
            value: image,
            error: false,
          },
        },
      });
    };
  }

  handleDescriptionInput(event) {
    this.setState({
      project: {
        ...this.state.project,
        description: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleMaterialsInput(event) {
    this.setState({
      project: {
        ...this.state.project,
        materials: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleTagsInput(event) {
    this.setState({
      project: {
        ...this.state.project,
        tags: {
          value: event.target.value,
          error: false,
        },
      },
    });
  }

  handleFileInput(event) {
    this.setState({
      project: {
        ...this.state.project,
        file: {
          value: event.target.files[0],
          error: false,
        },
      },
    });
  }

  render() {
    return (
      <Container className="mt-4">
        <div className="mb-4">
          <span className="h2">Adicionar novo projeto</span>
        </div>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.props.addProject({
            ...this.state.project,
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
              || this.state.project.title.error
              || this.state.project.description.error
              || this.state.project.materials.error
              || this.state.project.image.value === ''
              || this.state.project.title.value === ''
              || this.state.project.description.value === ''
              || this.state.project.materials.value === ''
              || this.state.project.file.value === ''
            }
          >Enviar Projeto</Button>
          { this.state.project.image.preview !== '' ? (
            <img
              alt="project"
              className="img-thumbnail"
              src={this.state.project.image.preview}
              style={{ maxWidth: 200 }}
            />) : ('')
          }
          <FormGroup>
            <Label for="projectImage">Imagem do projeto</Label>
            <Input
              onChange={this.handleImageInput}
              type="file"
              name="projectImage"
              accept="image/*"
            />
            <FormText color="muted">
              O arquivo deve ser de até 600kB.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="title">Nome do Projeto</Label>
            <Input
              value={this.state.project.title.value}
              onChange={this.handleTitleInput}
              state={this.state.project.title.error ? 'danger' : null}
              type="text"
              name="title"
              placeholder="Anemometro de baixa fricção"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Descrição</Label>
            <Input
              value={this.state.project.description.value}
              onChange={this.handleDescriptionInput}
              state={this.state.project.description.error ? 'danger' : null}
              type="textarea"
              name="description"
              style={{ minHeight: 200 }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="materials">Materiais</Label>
            <Input
              value={this.state.project.materials.value}
              onChange={this.handleMaterialsInput}
              state={this.state.project.materials.error ? 'danger' : null}
              type="textarea"
              name="materials"
              style={{ minHeight: 200 }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tags">Tags</Label>
            <Input
              value={this.state.project.tags.value}
              onChange={this.handleTagsInput}
              state={this.state.project.tags.error ? 'danger' : null}
              type="text"
              name="tags"
              placeholder="medidor, temperatura, vento"
            />
            <FormText color="muted">
              Separe as Tags usando vírgula.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="projectFile">Arquivo contendo o projeto</Label>
            <Input
              onChange={this.handleFileInput}
              type="file"
              name="projectFile"
              accept="application/zip"
            />
            <FormText color="muted">
              O arquivo deve ser .zip contendo até 5 MB.
            </FormText>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

AddProject.propTypes = {
  loading: PropTypes.bool.isRequired,
  addProject: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
const mapStateToProps = state => ({
  loading: state.addProject.addProjectLoading,
  uid: state.user.user.uid,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ addProject }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(AddProject);
