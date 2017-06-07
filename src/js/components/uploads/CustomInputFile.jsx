import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
class CustomInputFile extends Component {

    handleChooseFileClick() {
        setTimeout(() => {
            this._inputLabel.click();
        }, 0);
    }

    render() {
        return (
            <div className={this.props.className}>
                <label htmlFor={this.props.name} ref={x => this._inputLabel = x}>
                    <FloatingActionButton onTouchTap={this.handleChooseFileClick.bind(this)}>
                        { this.props.children }
                    </FloatingActionButton> 
                </label>
                <input accept={this.props.accept} type="file" id={this.props.name} name={this.props.name} onChange={this.props.onchange}/>
            </div>
        );
    }
}

export default CustomInputFile;
