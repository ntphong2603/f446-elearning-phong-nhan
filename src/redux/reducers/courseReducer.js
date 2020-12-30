import {
  GET_LIST_COURSE,
  GET_DETAIL_COURSE,
  GET_CATEGORIES_COURSE,
} from "../constants/courseConstant";

const initialState = {
  listCourse: [],
  detailCourse: {},
  categoriesCourse: [],
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_LIST_COURSE: {
      state.listCourse = actions.payload;
      return { ...state };
    }
    case GET_DETAIL_COURSE: {
      state.detailCourse = actions.payload;
      return { ...state };
    }
    case GET_CATEGORIES_COURSE: {
      state.categoriesCourse = actions.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default courseReducer;
