import React, {PropTypes} from 'react'
import {
  TextField,
  RadioButtonGroup,
  RadioButton,
  RaisedButton,
  Checkbox,
  Utils
} from 'material-ui'
import _ from 'lodash'
import {contextTypes} from '../../decorators'

let { ColorManipulator } = Utils;

@contextTypes({
  muiTheme: React.PropTypes.object
})

class Filter extends React.Component {
  style() {
    return {
      label: {
        color: ColorManipulator.fade(this.context.muiTheme.palette.textColor, .6),
        float: 'left',
        lineHeight: '180%',
        paddingRight: '20px'
      },
      muiTextField: {},
      muiRadioButtons: {
        marginTop: '40px'
      },
      muiButtonGroup: {
        float: 'left',
        width: 'initial'
      },
      muiRadioButton: {
        float: 'left',
        width: 'initial',
        marginRight: '20px'
      },
      muiCheckBox: {},
      muiRaisedButton: {},
    }
  }
  getFilterByType(type) {
    switch(type) {
      case 'muiTextField':
        return <TextField style={this.props.style}
                          floatingLabelText={this.props.label}
                          onChange={this.props.onChange(this.props)} />
      case 'muiRadioButtons':
        return  <div style={_.assign(this.style().muiRadioButtons, this.props.style)}>
                  <span style={_.assign(this.style().label, this.props.labelStyle )}>{this.props.label}</span>
                  <RadioButtonGroup name={this.props.name}
                                    style={_.assign(this.style().muiRadioGroup, this.props.groupStyle)}
                                    onChange={this.props.onChange(this.props)}>
                    {_.map( this.props.options, button =>
                      <RadioButton  value={button.value}
                                    label={button.label}
                                    style={_.assign(this.style().muiRadioButton, button.style)}
                                    defaultChecked={button.defaultChecked}/>
                    )}
                  </RadioButtonGroup>
                </div>
      case 'muiCheckBox':
        return <Checkbox  defaultChecked={this.props.defaultChecked}
                          onCheck={this.props.onChange(this.props)}
                          value={this.props.value}
                          style={_.assign(this.style().muiCheckBox, this.props.style)}
                          label={this.props.label}/>
    }
  }
  render() {
    return (
      <div>{this.getFilterByType(this.props.type)}</div>
    )
  }
}

Filter.defaultProps = { onChange: function() {} }

export default Filter;
