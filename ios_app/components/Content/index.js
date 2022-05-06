import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

export class Content extends Component {
  render() {
    console.log(this.props);
    const {contentText, onViewClick} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onViewClick}>
        <View style={styles.container}>
          <Text style={styles.text}>{contentText}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Content;
