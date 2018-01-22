import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

const SongList = ({ data: { songs, loading } }) => {
  const renderSongs = () => (
    songs.map(song => (
      <li key={song.id} className='collection-item'>
        {song.title}
      </li>
    ))
  )

  return (
    <div>
      {
        loading
        ? <div>loading...</div>
        : <ul className='collection'>{renderSongs()}</ul>
      }
      <Link
        to='/songs/new'
        className='btn-floating btn-large red right'
      >
        <i className='material-icons'>add</i>
      </Link>
    </div>

  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
