import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import  { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';


class Home extends Component {
  static propTypes = { 
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
    // backgroundColor: PropTypes.string,
    // textColor: PropTypes.string,
  }
  handleChangeText = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handlePressBaseCurrency = () => {
    // console.log('press base currency');
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'});
  };

  handlePressQuoteCurrency = () => {
    // console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'});
    
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };
  
  handleSettingPress = () => {
    // console.log('Settings icon pressed.');
    this.props.navigation.navigate('Options');
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if(this.props.isFetching){
      quotePrice = '...';
    }
    if(isNaN(this.props.amount)){
      this.props.amount="";
      quotePrice="";
    }
    return (
      <Container backgroundColor = {this.props.primaryColor}>
        <StatusBar backgroundColor="red" barStyle="dark-content" />
        <Header onPress={this.handleSettingPress}/>  
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor= {this.props.primaryColor}/>
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice.toString()}
            textColor={this.props.primaryColor}
          />
          <LastConverted 
            base={this.props.baseCurrency}
            conversionRate = {this.props.conversionRate}
            quote = {this.props.quoteCurrency}
            date = {this.props.lastConvertedDate}
            />
                        
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return{
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  }
};
export default connect(mapStateToProps)(Home);