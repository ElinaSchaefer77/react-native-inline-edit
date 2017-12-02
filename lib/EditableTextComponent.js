import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const initialState = {
  text: '',
  editing: false,
};

class EditableText extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  startEditing() {
    if (this.props.isTextEditable) {
      this.setState({
        editing: true,
        text: this.props.text,
      });
    }
  }

  stopEditing() {
    this.props.sendText(this.state.text);
    this.setState({
      editing: false,
    });
  }

  renderText() {
    if (!this.state.editing) {
      return (
        <TouchableOpacity onPress={() => this.startEditing()}>
          <Text
            {...this.props.textProps}
          >
            {this.props.text}
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  renderTextInput() {
    if (this.state.editing) {
      return (
        <TextInput
          {...this.props.textInputProps}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          returnKeyType={'done'}
          onSubmitEditing={() => this.stopEditing()}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.renderText()}
        {this.renderTextInput()}
      </View>
    );
  }
}

EditableText.propTypes = {
  isTextEditable: PropTypes.bool,
  text: PropTypes.string.isRequired,
  sendText: PropTypes.func.isRequired,
  textProps: PropTypes.shape(),
  textInputProps: PropTypes.shape(),
};

EditableText.defaultProps = {
  isTextEditable: true,
  textProps: {},
  textInputProps: {},
};

export default EditableText;
