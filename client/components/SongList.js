import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSongs from '../queries/fetchSongs'

const SongList = ({ data: { songs, loading, refetch }, mutate }) => {
  const onSongDelete = id => (
    mutate({ variables: { id } })
      .then(() => refetch())
  )

  const renderSongs = () => (
    songs.map(({ id, title }) => (
      <li key={id} className='collection-item'>
        {title}
        <i
          className='material-icons'
          onClick={() => onSongDelete(id)}
        >
          delete
        </i>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`


export default graphql(mutation)(
  graphql(fetchSongs)(SongList),
)
