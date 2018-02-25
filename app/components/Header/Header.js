import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
const Header = ({onPress}) => (
    <View style={styles.headerbar}>
        <TouchableOpacity style={styles.settings} onPress={onPress}>
            <Image style={styles.settingsicon} resizeMode="contain" source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>
);
Header.proptypes = {
    onPress: PropTypes.func,
};

export default Header;