import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      title: ''
    }
  }

  /* Methodes list */
  handleChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render () {
    return (
      <form 
        style={{ 
        display: 'flex',
        margin: '10px'
        }} 
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '10px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.handleChangeInput}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{
            flex: '1',
            display: 'inline-block',
            border: 'none',
            background: '#555',
            padding: '7px 20px',
            cursor: 'pointer',
          }}
        />
      </form>
    )
  }
}

AddTodo.propType = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo