import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { observer, inject } from 'mobx-react';

@inject('genderStore') @observer
class SelectGender extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { values : []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/genders')
        .then(res => {
            this.props.genderStore.setGenders(res.data);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }

    menuItems(genders) {
       return genders.map((gender) => (
            <MenuItem
                key={gender.name}
                insetChildren={true}
                value={gender.id}
                primaryText={gender.name}
            />

      ));
    }
    
    handleChange = (event, index, values) => this.props.genderStore.setSelectedGenders(values);

    render() {
        var values = this.props.genderStore.genders;
        return (
           <SelectField
            multiple={true}
            hintText="Select a gender"
            id="genders"
            name="genders"
            onChange={this.handleChange.bind(this)}
            value={this.props.genderStore.selectedGenders}
            >
            { this.menuItems(values)}
        </SelectField>
        );
    }
}

export default SelectGender;