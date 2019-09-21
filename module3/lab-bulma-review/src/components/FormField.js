import React from 'react';

class FormField extends React.Component {




    render(){
        return(
            <div className="field form-field">

                <label className="label">{this.props.theLabel}</label>

                <div className="control">
                    <input className="input"
                     type={this.props.whatType}
                     placeholder={this.props.theTextForThePlaceHolder}
                      />

                </div>
            </div>
        )
    }



}

export default FormField;