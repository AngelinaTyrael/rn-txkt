import React, { Component } from 'react';
import { Image} from 'react-native';
import styles from './styles';

export class Logo extends Component {
  render() {
    return (
      <Image style={styles.logo} 
        source={require('../../assets/img/logo.png')}
      />
    )
  }
}

export default Logo;