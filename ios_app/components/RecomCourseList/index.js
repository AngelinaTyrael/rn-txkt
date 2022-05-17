import {View} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';

import CourseItem from './CourseItem';

export class RecomCourseList extends Component {
  render() {
    const {recomCourseData, navigation} = this.props;

    return (
      <View style={styles.recomCourseBoard}>
        {recomCourseData.map((item, index) => {
          return (
            <CourseItem
              data={item}
              styles={styles}
              key={index}
              navigation={navigation}
            />
          );
        })}
      </View>
    );
  }
}

export default RecomCourseList;
