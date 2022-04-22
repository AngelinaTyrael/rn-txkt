import { Text, View, Button, ScrollView } from 'react-native';
import React, { Component } from 'react';
import IndexModel from '../models/Index';
import IndexSwiper from '../components/IndexSwiper';

const indexModel = new IndexModel();

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: []
    };
  }

  getCourseDatas() {
    indexModel.getCourseDatas().then(res => {
      const data = res.result;
      this.setState({
        swiperData: data.swipers,
        fieldData: data.fields,
        courseData: data.courses,
        recomCourseData: data.recomCourses
      })
    })
  }

  componentDidMount() {
    this.getCourseDatas();
  }

  render() {
    const { navigation } = this.props;
    const { swiperData, fieldData, courseData, recomCourseData } = this.state;
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
      >
        <IndexSwiper 
          swiperData={swiperData}
          navigation={navigation}
        />
      </ScrollView>
    )
  }
}

export default Home;