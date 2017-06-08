import React, { Component } from 'react';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectGender from './SelectGender'
import CustomInputFile from './CustomInputFile'
import Checkbox from 'material-ui/Checkbox';
import { observer, inject } from 'mobx-react';
import Cover from './Cover';

@inject('uploadFormStore') @observer
class Upload extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.props.uploadFormStore.setIsNew((this.props.match.path === '/uploads/new'))
        this.props.uploadFormStore.setIsFileLoaded(false)
        this.state = {
            isFileloaded : true
        }
    }

    onChangeAudioFile(e) {
        var url = $(this.target).val();
        // var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        var audiodata = document.querySelector('input[type="file"]#audio_file').files[0];
        var data = new FormData();
        data.append('audio_file',audiodata)
        axios({
            method: 'post',
            url: "http://localhost:3001/api/audiofiles/metadata",
            data: data
        }).then(res => {
            this.props.uploadFormStore.setIsFileLoaded(true);
            this.state.isFileloaded = true;
            this.setState(this.state);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // var audiodata = document.querySelector('input[type="file"]#audiofile').files[0];
        var data = new FormData(document.audiofileform);
        data.append('genders', this.props.genderStore.SelectGender);
        axios({
            method: 'post',
            url: "http://localhost:3001/api/audiofiles",
            data: data
        }).then(res => {
            console.warn(res);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
    
    render() {
        return (
            <form id="audiofileform" name="audiofileform" onSubmit={this.handleSubmit.bind(this)}>      
                <Row>
                    <Col xs={12} sm={6} md={4} >
                        <CustomInputFile accept="audio/*" name="audio_file" onchange={ this.onChangeAudioFile.bind(this)}>
                            <FileCloudUpload />
                        </CustomInputFile>
                        {
                            this.state.isFileloaded ?      
                        <Cover/> :
                         ""
                        }
                  
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <div>
                            <TextField
                                id="title"
                                name="title"
                                hintText="choose a title"
                                style = {{ marginTop : "-10px" }}
                                floatingLabelText="Title"
                                floatingLabelFixed={true}
                            />
                        </div>
                        <SelectGender />
                        <div>
                            <TextField
                                id="description"
                                name="description"
                                floatingLabelText="description"
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                                style = {{ marginTop : "-20px"}}
                                floatingLabelFixed={true}
                            />
                        </div>
                        <div>
                            <TextField
                                id="artist"
                                name="artist"
                                hintText=""
                                floatingLabelText="artist"
                                floatingLabelFixed={true}
                                style = {{ marginTop : "-10px" }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="composer"
                                name="composer"
                                hintText="composer"
                                floatingLabelText="composer"
                                floatingLabelFixed={true}
                                style = {{ marginTop : "-10px" }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="creation_date"
                                name="creation_date"
                                type="date"
                                floatingLabelText="creation_date"
                                floatingLabelFixed={true}
                                style = {{ marginTop : "-10px" }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="duration"
                                name="duration"
                                type="time"
                                step='1' min="00:00:00" max="24:60:60"
                                floatingLabelText="duration"
                                floatingLabelFixed={true}
                                style = {{ marginTop : "-10px" }}
                            />
                        </div>
                        
                    </Col>
                    <Col xs={12} sm={12} md={4} >
                        <div>
                            <Checkbox
                                label="Contenu explicite"
                                id="explicit_content"
                                name="explicit_content"
                            />
                            <Checkbox
                                label="Autoriser le téléchargement"
                                id="download_authorization"
                                name="download_authorization"
                            />
                        </div>
                        <div>
                            <RaisedButton  style={{marginTop: '10px'}}type="submit" label="Submit" primary />
                        </div>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default Upload;
