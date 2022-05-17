import {Text, View} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

export class mainTitle extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.mainTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default mainTitle;
