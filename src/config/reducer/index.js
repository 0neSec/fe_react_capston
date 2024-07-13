// reducer.js
const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: [],
  artikelData: [],
  prediction: null,
  error: null,
  artikelDetail:[]
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_POPUP':
      return {
        ...state,
        popup: action.value,
      };
    case 'CHANGE_ISLOGIN':
      return {
        ...state,
        isLogin: action.value,
      };
    case 'CHANGE_ISLOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'CHANGE_USER':
      return {
        ...state,
        user: action.value,
      };
    case 'SET_ARTIKEL':
      return {
        ...state,
        artikelData: action.value,
      };
    case 'SET_SELECTED_ARTIKEL':
      return {
        ...state,
        selectedArtikel: action.value,
      };
    case 'UPLOAD_IMAGE_SUCCESS':
      return {
        ...state,
        prediction: action.payload,
        error: null,
      };
    case 'UPLOAD_IMAGE_FAILURE':
      return {
        ...state,
        prediction: null,
        error: action.payload,
      };
      case 'SET_ARTIKEL_DETAIL':
        return {
          ...state,
          artikelDetail: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
