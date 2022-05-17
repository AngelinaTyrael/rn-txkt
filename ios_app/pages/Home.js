import {ScrollView} from 'react-native';
import React, {Component} from 'react';
import IndexModel from '../models/Index';
import IndexSwiper from '../components/IndexSwiper';
import MainTitle from '../components/MainTitle';
import RecomCourseList from '../components/RecomCourseList';

const indexModel = new IndexModel();

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: [],
    };
  }

  getCourseDatas() {
    indexModel.getCourseDatas().then(res => {
      const {courses, fields, recomCourses, swipers} = res.result;
      this.setState({
        swiperData: swipers,
        fieldData: fields,
        courseData: courses,
        recomCourseData: recomCourses,
      });
    });
  }

  renderMainTitle(data, title) {
    if (data) {
      return data && <MainTitle title={data && data.field_name} />;
    }

    return <MainTitle title={title} />;
  }

  componentDidMount() {
    this.getCourseDatas();
  }

  render() {
    const {navigation} = this.props;
    const {swiperData, fieldData, courseData, recomCourseData} = this.state;
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}>
        <IndexSwiper swiperData={swiperData} navigation={navigation} />
        {this.renderMainTitle(null, '推荐课程')}
        <RecomCourseList
          recomCourseData={recomCourseData}
          navigation={navigation}
        />
        {fieldData.map(item => {
          return this.renderMainTitle(item);
        })}
      </ScrollView>
    );
  }
}

export default Home;
