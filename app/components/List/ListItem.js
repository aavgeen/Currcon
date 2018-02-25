import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from './Icon'
import { TouchableHighlight, Text, View } from 'react-native';

const ListItem = ({text, onPress, checkmark = true, isSelected = false, visible = true, customIcon = null, iconBackground,}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.currText}>{text}</Text>
            {isSelected ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} /> : <Icon />}
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    inPress: PropTypes.func,
    isSelected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
}

export default ListItem;