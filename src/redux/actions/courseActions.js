import { connector } from "../../configs/restConnector";
import {
  GET_LIST_COURSE,
  GET_DETAIL_COURSE,
  GET_CATEGORIES_COURSE,
} from "../constants/courseConstant";

export const getListCourse = () => {
  return (dispatch) => {
    //   call api
    connector({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailCourse = (maKhoaHoc) => {
  return (dispatch) => {
    //   call api
    connector({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_DETAIL_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCategoriesCourse = () => {
  return (dispatch) => {
    //   call api
    connector({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_CATEGORIES_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCourse = (dataCourse) => {
  return (dispatch) => {
    connector({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
      method: "POST",
      data: dataCourse,
    })
      .then((res) => {
        alert("Thêm khóa học Thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
