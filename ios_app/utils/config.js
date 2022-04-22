const BASE_URL = 'http://127.0.0.1:8080/';

const API = {
  getCourseDatas: BASE_URL + 'course/v2/get_course_datas',
  getCourses: BASE_URL + 'course/v2/get_courses/',
  getCourseFields: BASE_URL + 'course/v2/get_course_fields',
};

export {
  API
};