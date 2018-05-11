const initialState = {
  Curriculums: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRICULUM':
      return {
        ...state,
        Curriculums: action.payload.data
      }
    default:
      return state;
  }
}
