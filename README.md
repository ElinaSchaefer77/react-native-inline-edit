# react-native-inline-edit
React-Native component for text editing in-place and validation

## Usage

Import library
```javascript
import EditableText from 'react-native-inline-edit';
```

Add EditableText Component
```javascript
<EditableText
  text={'textOfTheField'}, //required
  sendText={() => sendText()}, //required

  loading: isLoading, //optional false
  isTextEditable: true, // optional true
  textProps: {}, // optional empty
  textInputProps: {}, //optional empty
/>
```

## License
*MIT*
