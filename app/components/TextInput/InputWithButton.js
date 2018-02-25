import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );
  const buttonStyles = [styles.buttonText];
  if(props.textColor){
    buttonStyles.push({ color: props.textColor});
  }
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  //this whole block is a expression if return was not specifed here then the value returned by all the statements would have been returned.
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}>

        <Text style={buttonStyles}>{props.buttonText}</Text>

      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  textColor: PropTypes.string,
};

export default InputWithButton;