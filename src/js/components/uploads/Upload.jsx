import React, { Component } from 'react';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SelectGender from './SelectGender'
import CustomInputFile from './CustomInputFile'
import { observer, inject } from 'mobx-react';
import Cover from './Cover';
import * as actions from '../../actions';
import TextFieldForm from './TextFieldForm';
import CheckboxForm from './CheckBoxForm';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


@inject('uploadFormStore', 'genderStore') @observer
class Upload extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            open : false
        }
    }
    onClick(e) {
        e.event
        this.props.uploadFormStore.setIsFileLoaded(!this.props.uploadFormStore.isFileLoaded)
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
            // this.state.isFileloaded = true;
            // this.setState(this.state);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.warn('shouldComponentUpdate');
        // console.warn(nextProps, nextState);
        return true
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.props.uploadFormStore.setIsNew((this.props.match.path === '/uploads/new'))
        this.props.uploadFormStore.setIsFileLoaded((this.props.match.path !== '/uploads/new'))
        // console.warn(this.props.match.params.number)
        if (!this.props.uploadFormStore.isNew) {
            axios({
                method: 'get',
                url: "http://localhost:3001/api/audiofiles/" + this.props.match.params.number
            }).then(res => {
                this.props.uploadFormStore.setIsFileLoaded(true);
                document.getElementById('image_cover').style.backgroundImage = 'url(' + "http://localhost:3001/api/audiofiles/" + this.props.match.params.number + '/cover)';
                document.getElementById('show_image').style.display = "block"
                this.props.uploadFormStore.setForm(res.data);
                this.props.genderStore.setSelectedGenders(res.data.Genders);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
            }).catch(error => {
                console.warn(error);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // var audiodata = document.querySelector('input[type="file"]#audiofile').files[0];
        var data = new FormData(document.audiofileform);
        data.append('genders', this.props.genderStore.selectedGenders);
        var url = "http://localhost:3001/api/audiofiles";
        var method = "post";
        if (!this.props.uploadFormStore.isNew) {
            url = "http://localhost:3001/api/audiofiles/" + this.props.match.params.number
            method = "put"
        }
        axios({
            method: method,
            url: url,
            data: data
        }).then(res => {
            console.warn(res);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
        // this.props.history.push("/uploads/4")
    }

    handleDelete(e) {
        e.preventDefault();
        console.warn('delete');
        axios({
            method: "DELETE",
            url: "http://localhost:3001/api/audiofiles/" + this.props.match.params.number
        }).then(res => {
            console.warn(res);
            this.setState({open: false});
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleDelete.bind(this)}
            />
            
        ];
        return (
            <form id="audiofileform" name="audiofileform" onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                    <Col xs={12} sm={6} md={4} >
                        {
                            this.props.uploadFormStore.isNew ?      
                            <CustomInputFile accept="audio/*" name="audio_file" onchange={ this.onChangeAudioFile.bind(this)}>
                                <FontIcon className="fa fa-music" />
                            </CustomInputFile> :
                                ""
                        }
                        {
                            this.props.uploadFormStore.isFileLoaded ?      
                            <Cover/> :
                            ""
                        }
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <div>
                            <TextFieldForm name="title"  style={{ marginTop : "-5px"}}/>
                        </div>
                        <SelectGender />
                        <div>
                            <TextFieldForm 
                                name="description" 
                                style={{ marginTop : "-15px"}}
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                            />
                        </div>
                        <div>
                            <TextFieldForm name="artist"  style={{ marginTop : "-5px"}}/>
                        </div>
                        <div>
                            <TextFieldForm name="composer"  style={{ marginTop : "-5px"}}/>
                        </div>
                        <div>
                            <TextFieldForm
                                name="creation_date"
                                type="date"
                                style = {{ marginTop : "-5px" }}
                            />
                            
                        </div>
                        <div>
                            <TextFieldForm
                                name="duration"
                                type="time"
                                step='1' min="00:00:00" max="24:60:60"
                                style = {{ marginTop : "-5px" }}
                            />
                        </div>
                        
                    </Col>
                    <Col xs={12} sm={12} md={4} >
                        <div>
                            <CheckboxForm
                                name="explicit_content" store={this.props.uploadFormStore}
                            />
                            <CheckboxForm
                                name="download_authorization" store={this.props.uploadFormStore}
                            />
                        </div>
                        <div className="upload-action-button">
                            <FlatButton
                                icon={<FontIcon className="fa fa-cloud-upload" />}
                                primary={true}
                                onTouchTap={this.handleSubmit.bind(this)}
                            />

                            {
                                !this.props.uploadFormStore.isNew ?  
                                <FlatButton
                                    icon={<FontIcon className="fa fa-trash-o" />}
                                    primary={true}
                                    onTouchTap={this.handleOpen.bind(this)}
                                /> :
                                "" 
                            }
                            
                        </div>
                    </Col>
                </Row>
                <Dialog
                    title="Are you really really sure"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                </Dialog>
            </form>
        );
    }
}

export default Upload;
