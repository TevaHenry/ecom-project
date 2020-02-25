const INITIAL_STATE = { 
  sections: [{
    title: 'summer',
    gradient: 'linear-gradient(to bottom, #f6d365 0%, #fda085 100%)',
    id: 1,
    linkUrl: 'shop/summer'
  },
  {
    title: 'autumn',
    gradient: 'linear-gradient(to bottom, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    id: 2,
    linkUrl: 'shop/autumn'
  },
  {
    title: 'winter',
    gradient: 'linear-gradient(to top, #4facfe 0%, #00f2fe 100%)',
    id: 3,
    linkUrl: 'shop/winter'
  },
  {
    title: 'spring',
    gradient: 'linear-gradient(to bottom, #d4fc79 0%, #96e6a1 100%)',
    id: 4,
    linkUrl: 'shop/spring'
  }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;