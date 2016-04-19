// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as TreeActionTypes from 'actions/tree';

const initialState = {
  isLoaded: false,
  isFetching: false,
  assays: [],
  classes: [],
  methods: [],
  centers: [],
  popularity: [],
  dates: [],
  dateDatasetMap: {},
  error: null,
};

export default (state = initialState, action) => {
  const p = action.payload;
  switch (action.type) {
    case TreeActionTypes.TREE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case TreeActionTypes.TREE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        error: null,
        assays: p.assays,
        classes: p.classes,
        methods: p.methods,
        centers: p.centers,
        popularity: p.popularity,
        dates: p.dates,
        dateDatasetMap: p.dateDatasetMap,
      };
    case TreeActionTypes.TREE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
