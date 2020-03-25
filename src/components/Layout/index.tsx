import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import {Header} from '../Header'
import {Footer} from '../Footer'

interface Props{
  title:string
}
const Layout: FunctionComponent<Props | any> = ({ title,children }) => <div>
  <Header >{title}</Header>
  {children}
  <Footer> </Footer>
</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
