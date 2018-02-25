import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'


// // import Home from './screens/Home';
// // import CurrencyList from './screens/CurrencyList';
// // import Options from './screens/Options';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#008090',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
  
  $white: '#FFFFFF',
  $inputText: '#797979',
  $border: '#e2e2e2',
  $lightGray: '#F0F0F0',
  $seperatorcolor: '#C2C2C2',
});


export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null}/>
    </AlertProvider>
  </Provider>
);
