import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/themes';
import { connect } from 'react-redux';


const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    primaryColor: PropTypes.string,
  
  }
  handlePressTheme = (color) => {
    // console.log('press theme', color);
    this.props.dispatch(changePrimaryColor(color))
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          isSelected={true}
          checkmark={this.props.primaryColor == styles.$blue}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          isSelected
          checkmark={this.props.primaryColor == styles.$orange}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          isSelected
          checkmark={this.props.primaryColor == styles.$green}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          isSelected
          checkmark={this.props.primaryColor == styles.$purple}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  primaryColor: state.theme.primaryColor,
})
export default connect(mapStateToProps)(Themes);