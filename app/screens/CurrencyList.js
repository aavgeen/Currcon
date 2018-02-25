import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, FlatList, Text, StatusBar } from 'react-native';
import {ListItem, Separator} from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import  { connect } from 'react-redux';

class CurrencyList extends Component {
    static propTypes= {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    }
    pressCurrency = (currency) => {
        // console.log('Currency Pressed.');
        const { type } = this.props.navigation.state.params;
        if( type === 'base'){
            this.props.dispatch(changeBaseCurrency(currency))
        }
        else if (type === 'quote'){
            this.props.dispatch(changeQuoteCurrency(currency))            
        }
        this.props.navigation.goBack(null);
    }
    render(){
        let presentCurrency = (this.props.navigation.state.params.type === 'quote') ? this.props.quoteCurrency : this.props.baseCurrency;
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="rgb(255, 0, 255)" barStyle="dark-content" />
                <FlatList
                    data={currencies}
                    renderItem={({item}) => (
                                <ListItem
                                    text={item}
                                    onPress={() => this.pressCurrency(item)}
                                    isSelected = {item === presentCurrency}
                                    iconBackground = {this.props.primaryColor}       
                    />)}
                    keyExtractor={item => item} 
                    ItemSeparatorComponent={Separator} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
})
export default connect(mapStateToProps)(CurrencyList);