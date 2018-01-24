import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import addLyricToSong from '../mutations/addLyricToSong'

class AddLyrics extends Component {
  constructor(props) {
    super(props)

    this.state = { content: '' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    }).then(() => this.setState({ content: '' }))
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add some lyrics</label>
        <input
          onChange={this.handleChange}
          value={this.state.content}
        />
      </form>
    )
  }
}

export default graphql(addLyricToSong)(AddLyrics)
