import axiosClient from './api.service';

export const getListCourses = (data) => {
  console.log(data);
  return axiosClient
    .get('courses', { params: { pageIndex: data.pageIndex, pageSize: data.pageSize } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getDetailCourse = (data) => {
  return axiosClient
    .get(`courses/${data.courseId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewCourse = (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append('courseName', data.courseName);
  formData.append('subCateId', data.subCateId);
  formData.append('price', data.price);
  formData.append('isFree', data.isFree);
  formData.append('description', data.description);
  formData.append('file', data.file);

  return axiosClient
    .post('courses/', formData, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDM2MTNhMC01MzlkLTExZWUtYmUwZS0xN2YyZDVjNjFkYjkiLCJ1c2VybmFtZSI6ImxlY3R1cmVyMSIsImlhdCI6MTY5NDc3MzkwNiwiZXhwIjoxNjk1NjM3OTA2fQ.enXE3Yv3ej08fGbqK312T5K_DfZkV2so6ccvE0r-Voo`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewSection = (data) => {
  console.log(data);
  return axiosClient
    .post(
      'sections/',
      {
        sectionName: data.sectionName,
        courseId: 'ffa08870-53b9-11ee-b2b4-3fb8c5bea852',
      },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewLesson = (data) => {
  const formData = new FormData();
  formData.append('lessonName', data.lessonName);
  formData.append('grade', 1);
  formData.append('courseId', 'ffa08870-53b9-11ee-b2b4-3fb8c5bea852');
  formData.append('file', data.file);
  console.log(data);
  return axiosClient
    .post('lessons/', formData, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListCategory = (data) => {
  console.log(data);
  return axiosClient
    .get('categories', {
      params: { pageIndex: 1, pageSize: data.pageSize },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
