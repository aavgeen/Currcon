import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2;


export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage:{
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width:imageWidth/2,
    },
    logotext: {
        color: '$white',
        fontSize: 38,
        marginTop: 15,
        letterSpacing: -0.5,
        fontWeight: '600'
    },
    underlogotext: {
        color: '$white',
        fontSize: 15,
        marginTop: 3,
        fontWeight: '100'
    }
})
