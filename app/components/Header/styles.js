import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    headerbar : {
        position: 'absolute',
        left: 0,
        right:0,
        top: 0,
        '@media ios':{
            paddingVertical:20,
        },
        '@media android':{
            paddingVertical: 0,
        }
    },
    settings : {
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    settingsicon: {
        width: 25,
        height: 25,
    },
    
});