import React, {PureComponent} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class Splash extends PureComponent {
  render() {
    const {container} = styles;
    return (
      <SafeAreaView style={container}>
        <View>
          <Text>Welcome to Splash Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
