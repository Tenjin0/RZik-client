import React, { Component } from 'react';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import FontIcon from 'material-ui/FontIcon';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Upload extends Component {

    onChangeFile(e) {
        var url = $(this.target).val();
        // var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        console.warn(e.target.value);
        var audiodata = document.querySelector('input[type="file"]#audiofile').files[0];
        var data = new FormData();
        data.append('audio_file',audiodata)
        // fetch("http://localhost:3001/api/audiofiles/metadata", {
        //     mode: 'no-cors',
        //     method: "POST",
        //     body: data
        // })
        // // .then((resp) => resp.json())
        // .then(function (data) {
        //     console.warn(data)
        //         // if (res.ok) {
        //         //     alert("Perfect! ");
        //         // } else if (res.status == 401) {
        //         //     alert("Oops! ");
        //         // }
        //         // }, function (e) {
        //         //     alert("Error submitting form!");
        //     }).catch(function(err) {
        //         console.warn(err);
        //     })
        axios({
            method: 'post',
            url: "http://localhost:3001/api/audiofiles/metadata",
            data: data
        }).then(res => {
            console.warn(res);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        var audiodata = document.querySelector('input[type="file"]#audiofile').files[0];
        var data = new FormData();
        data.append('title', 'In the End');
        data.append('audio_file',audiodata)
        axios({
            method: 'post',
            url: "http://localhost:3001/api/audiofiles/metadata",
            data: data
        }).then(res => {
            console.warn(res);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/genders')
        .then(res => {
            console.warn(res);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
    render() {
        const styles = {
        };
        return (
             <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="audiofile">
                        <i className="fa fa-cloud-upload fa-3x"></i> 
                    </label>
                    <input accept="audio/*" type="file" id="audiofile" name="audio_file" onChange={this.onChangeFile.bind(this)}/>
                </div>
                <div>
                    <RaisedButton  type="submit" label="Submit" primary />
                </div>
            </form>
                
        );
    }
}

export default Upload;
