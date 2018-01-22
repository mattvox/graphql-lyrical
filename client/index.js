/* global document */

import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({})

const Root = () => (
  <ApolloProvider client={client}>
    <div>Lyrical</div>
  </ApolloProvider>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
)
