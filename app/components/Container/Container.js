import PropTypes from 'prop-types';
import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

//The component which wraps other components has a children specified as their child as done here.
const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if(backgroundColor){
    containerStyles.push({ backgroundColor });
  }
  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Container;