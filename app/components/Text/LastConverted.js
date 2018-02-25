import React from 'react';
import PropTypes from 'prop-types';

import {Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const LastConverted = ({base, conversionRate, quote, date}) => (
    <Text style={styles.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM DD, YYYY')}
    </Text>
);

React.propTypes = {
    base : PropTypes.string,
    conversionRate: PropTypes.number,
    quote: PropTypes.string,
    date: PropTypes.object,
}
export default LastConverted;
