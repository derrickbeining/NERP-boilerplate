import {combineReducers} from 'redux'

const dummyReducer = (dummyData = [], action) => {
  switch (action.type) {
    default: return dummyData
  }
}
export default combineReducers({
  dummies: dummyReducer
})
