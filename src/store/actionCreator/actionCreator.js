import {
  FETCH_CLASS_LIST,
  FETCH_CLASS_DETAIL,
  FETCH_INSTRUCTURE_LIST,
  FETCH_INSTRUCTURE_DETAIL,
  SET_LOADING,
  SET_ERROR,
} from "../actionTypes/actionType";

export const fetchClassList = () => {
  return (dispatch) => {
    fetch("https://api.cariilmu.co.id/api/v1/public/course?page=1&limit=10")
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            dispatch(classList(data));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const fetchClassDetail = (id) => {
  return (dispatch) => {
    fetch(`https://api.cariilmu.co.id/api/v1/public/course/${id}`)
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            dispatch(classDetail(data));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const fetchInstructureList = () => {
  return (dispatch) => {
    fetch("https://api.cariilmu.co.id/api/v1/public/instructor?page=1&limit=10")
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            dispatch(instructureList(data));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const fetchInstructureDetail = (id) => {
  return (dispatch) => {
    fetch(`https://api.cariilmu.co.id/api/v1/public/instructor/${id}`)
      .then((res) => {
        return res.json().then((data) => {
          if (res.ok) {
            dispatch(instructureDetail(data));
          } else {
            return Promise.reject(data);
          }
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};

export const classList = (payload) => {
  return {
    type: FETCH_CLASS_LIST,
    payload: payload,
  };
};

export const classDetail = (payload) => {
  return {
    type: FETCH_CLASS_DETAIL,
    payload: payload,
  };
};

export const instructureList = (payload) => {
  return {
    type: FETCH_INSTRUCTURE_LIST,
    payload: payload,
  };
};

export const instructureDetail = (payload) => {
  return {
    type: FETCH_INSTRUCTURE_DETAIL,
    payload: payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload: payload,
  };
};
