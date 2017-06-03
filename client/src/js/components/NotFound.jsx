import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        const { location, children } = this.props;
        return (
            <div>
                Not found
            </div>
        );
    }
}

export default NotFound;
