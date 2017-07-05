import React, { Component } from 'react';


class UploadPreview extends Component {
    constructor(props, context) {
        super(props, context);
        console.warn(this.props);
    }

    render() {
        return (
            <li className="preview">
             <div className="cover">
                <img width="100" height="75" src={'/images/cover/' + this.props.preview.cover}/>
             </div>
             <div className="action">
                Actions
             </div>
             <div className="line">
                <div className="first_line">
                    { this.props.preview.title }
                </div>
                <div className="second_line">
                    { this.props.preview.composer}
                </div>
                <div className="third_line">
                </div>
             </div>
            </li>
        );
    }
}

export default UploadPreview;
