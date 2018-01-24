import React from 'react'
import { graphql } from 'react-apollo'

import likeLyric from '../mutations/likeLyric'

const LyricList = (props) => {
  const onLike = (id, likes) => (
    props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricLike',
          likes: likes + 1,
        },
      },
    })
  )

  const renderLyrics = () => (
    props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className='collection-item'>
        {content}
        <div className='vote-box'>
          <i
            className='material-icons'
            onClick={() => onLike(id, likes)}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ))
  )

  return (
    <ul className='collection'>
      {renderLyrics()}
    </ul>
  )
}

export default graphql(likeLyric)(LyricList)
