const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
  comments: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
