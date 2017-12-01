import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const initialState = {
  text: '',
};

class EditableText extends React.Component {

  contructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <View>
        <Text
          style={this.props.textStyle}
        >
          {this.props.text}
        </Text>
        <TextInput
          style={this.props.textInputStyle}
          onChangeText={() => this.setState()}
          value={this.state.text}
        />
      </View>
    );
  }
}

EditableText.propTypes = {
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.shape(),
  textInputStyle: PropTypes.shape(),
};

EditableText.defaultProps = {
  textStyle: {},
  textInputStyle: {},
};

export default EditableText;
