/* global document */

import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import './style/style.css'

import App from './components/App'
import CreateSong from './components/CreateSong'
import SongList from './components/SongList'
import SongDetail from './components/SongDetail'

const client = new ApolloClient({})

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SongList} />
        <Route path='songs/new' component={CreateSong} />
        <Route path='songs/:id' component={SongDetail} />
      </Route>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
)
