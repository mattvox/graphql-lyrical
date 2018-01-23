import React from 'react'
import { graphql } from 'react-apollo'

import fetchSong from '../queries/fetchSong'

const SongDetail = ({ data: { song, loading } }) => {
  return (
    <div>
      <h3>
        Song Detail
      </h3>
      {
        loading
        ? <div>loading...</div>
        : <div>{song.title}</div>
      }
    </div>
  )
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail)
