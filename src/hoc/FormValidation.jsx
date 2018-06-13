import React, { Component } from 'react';


const FormValidation = (WrapppedComponent, options) => {
    return class extends Component {
        validateRules = options.validate;

        state = options.fields.reduce((result, field) => {
            result.fields[field] = {
                error: '',
                value: '',
                touched: false
            }

            return result
        }, { fields: {} })

        onBlur = (field) => {
            let fields = this.state.fields;

            fields[field].touched = true;

            this.setState({
                fields: fields
            })

            this.validateFields()
        }
        
        onChange = (field, event) => {
            let fields = this.state.fields;
            
            fields[field].value = event.target.value.trim();

            this.setState({
                fields: fields  
            })

            this.validateFields();
        }

        validateFields = () => {
            this.setState(this.validateRules(this.state.fields))
        }

        validateOnSubmit = () => {
            let validated = true,
                fields = this.state.fields;
            
            this.validateFields();

            for (let field in fields) {
                fields[field].touched = true;
                if (fields[field].error) validated = false;
            }
                 
            return validated;
        }

        mapStateToProps = (state) => {       
            for (let field in state.fields) {
                state.fields[field].onBlur = this.onBlur.bind(this, field)
                state.fields[field].onChange = this.onChange.bind(this, field)
            }

            return state.fields;
        }

        setGroupDataOnState(data) {
            let fields = this.state.fields;

            for (let field in fields) {
                fields[field].value = data[field]
            }
            
            this.setState({
                 fields: fields
            })
        }

        componentDidMount() {
            if (this.props.dataForEdit){
                this.setGroupDataOnState(this.props.dataForEdit);
            }
        }

        render() {
            return (
                <WrapppedComponent {...this.props} {...this.mapStateToProps(this.state)}></WrapppedComponent>
            );
        }
    }
}
export default FormValidation;
