import React from 'react';
import { View, Text, ImageBackground, Image} from 'react-native';
import styles from './style';

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground resizeMode="contain" style={styles.containerImage}
                source={require('./images/background.png')}>
            <Image resizeMode="contain" style={styles.logo}
                    source={require('./images/logo.png')}>
            </Image>
        </ImageBackground>
        <Text style={styles.logotext}>Curr Con</Text>
        <Text style={styles.underlogotext}>(Your pocket Currency Converter.)</Text>
    </View>
);

export default Logo;