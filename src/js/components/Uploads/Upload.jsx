import React, { Component } from 'react';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Upload extends Component {

    onChangeFile(e) {
        console.warn(e);
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        const styles = {
        };
        return (
             <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="audiofile">
                        <FileCloudUpload className="material-icons.md-30"style={styles} id="audio_file" name="audio_file"/>
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
