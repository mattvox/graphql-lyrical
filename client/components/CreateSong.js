import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

class CreateSong extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '' }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    }).then(() => hashHistory.push('/'))
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <Link to='/'>Back to Home</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title</label>
          <input
            onChange={this.handleChange}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export default graphql(mutation)(CreateSong)
