import {
  FETCH_CLASS_LIST,
  FETCH_CLASS_DETAIL,
  FETCH_INSTRUCTURE_LIST,
  FETCH_INSTRUCTURE_DETAIL,
  SET_LOADING,
  SET_ERROR,
  SET_LOGIN,
} from "../actionTypes/actionType";

const initialState = {
  classList: [],
  classDetail: [],
  instructureList: [],
  instructureDetail: [],
  loading: true,
  error: null,
  isLogin: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_CLASS_LIST) {
    return {
      ...state,
      classList: action.payload,
    };
  } else if (action.type === FETCH_CLASS_DETAIL) {
    return {
      ...state,
      classDetail: action.payload,
    };
  } else if (action.type === FETCH_INSTRUCTURE_LIST) {
    return {
      ...state,
      instructureList: action.payload,
    };
  } else if (action.type === FETCH_INSTRUCTURE_DETAIL) {
    return {
      ...state,
      instructureDetail: action.payload,
    };
  } else if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  } else if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  } else if (action.type === SET_LOGIN) {
    return {
      ...state,
      isLogin: action.payload,
    };
  }
  return state;
}

export default rootReducer;
