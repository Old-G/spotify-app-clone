export const initialState = {
  user: null,
  playlists: [],
  playings: false,
  item: null,
  // remove after finishing developing
  token:
    'BQBpprjuPmc3W8pwIeMntMlpaij4pbdcOAytG88ggqr5MGabez4DcY7Zxe561Bxgoe9qjtxyQid0dNY51zVu7qj5Y_zZZm8kSsXWb4CA7emJoVsltkslnVB2-VVonsUJl7QQFKVVbExd7qLFTkx6j22E-WatAaI',
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state
  }
}

export default reducer
