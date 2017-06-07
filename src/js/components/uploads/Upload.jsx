import React, { Component } from 'react';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import AddPhoto from 'material-ui/svg-icons/image/crop-original';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectGender from './SelectGender'
import CustomInputFile from './CustomInputFile'
import Checkbox from 'material-ui/Checkbox';
import { observer, inject } from 'mobx-react';

@inject('genderStore', 'uploadFormStore') @observer
class Upload extends Component {
    
    constructor(props, context) {
        super(props, context);

    }

    onChangeAudioFile(e) {
        var url = $(this.target).val();
        // var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        var audiodata = document.querySelector('input[type="file"]#audiofile').files[0];
        var data = new FormData();
        data.append('audio_file',audiodata)
        axios({
            method: 'post',
            url: "http://localhost:3001/api/audiofiles/metadata",
            data: data
        }).then(res => {
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }

    onChangeCoverFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
  
        reader.onload = function(event) {
            document.getElementById('image_cover').src = event.target.result;
        }

        reader.readAsDataURL(file);
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
                    <Col xs={12} md={4} >
                        <CustomInputFile accept="audio/*" name="audio_file" onchange={ this.onChangeAudioFile.bind(this)}>
                            <FileCloudUpload />
                        </CustomInputFile>
                        <CustomInputFile accept="image/*" className="margin-top" name="cover" onchange={ this.onChangeCoverFile.bind(this)}>
                            <AddPhoto />
                        </CustomInputFile>
                        <img id="image_cover"></img>
                    </Col>
                    <Col xs={12} md={4} >
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
                    <Col xs={12} md={4} >
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
               
                <div>
                    
                </div>
            </form>
        );
    }
}

export default Upload;
