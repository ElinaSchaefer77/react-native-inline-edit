import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const initialState = {
  text: '',
  editing: false,
};

const styles = {
  spinnerStyle: {
    position: 'absolute',
  },
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
    if (!this.state.editing && !this.props.loading) {
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
    if (this.state.editing || this.props.loading) {
      return (
        <View>
          <View>
            <TextInput
              opacity={this.state.editing ? 1 : 0.1}
              {...this.props.textInputProps}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              returnKeyType={'done'}
              onSubmitEditing={() => this.stopEditing()}
              onBlur={() => this.stopEditing()}
            />
          </View>
          {this.renderActivtyIndicator()}
        </View>
      );
    }
    return null;
  }

  renderActivtyIndicator() {
    if (this.props.loading) {
      return (
        <View
          style={styles.spinnerStyle}
        >
          <ActivityIndicator size={'small'} />
        </View>
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
  loading: PropTypes.bool,
};

EditableText.defaultProps = {
  isTextEditable: true,
  textProps: {},
  textInputProps: {},
  loading: false,
};

export default EditableText;
