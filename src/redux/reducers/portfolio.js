import items from '../../api/portfolio'

const initialState = {
  portfolios: items,
}

const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return state
    default:
      return state
  }
}

export default portfolio
