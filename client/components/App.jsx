import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <h1>DBB</h1>
      <div className='app'>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
