import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSong from '../queries/fetchSong'

import AddLyrics from './AddLyrics'
import LyricList from './LyricList'

const SongDetail = ({ data: { song, loading }, params }) => {
  const renderSong = () => (
    <div>
      <Link to='/'>Back to Home</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <AddLyrics songId={params.id} />
    </div>
  )

  return (
    loading
      ? <div>loading...</div>
      : renderSong()
  )
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail)
