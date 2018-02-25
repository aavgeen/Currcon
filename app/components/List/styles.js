import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
    $underlayColor: '$border',
    row:{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
        backgroundColor: '$white',
        alignContent: 'center',
    },
    seperator: {
        marginHorizontal: 20,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '$seperatorcolor',
    },
    currText: {
        fontSize: 16,
        color: 'black',
    },
    icon: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconVisible: {
        backgroundColor: '$primaryBlue',
      },
      checkIcon: {
        width: 18,
      },
});