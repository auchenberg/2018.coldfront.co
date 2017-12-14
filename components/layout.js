import React from 'react'
import { initGA, logPageView } from '../utils/ga'

import Header from './header'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}