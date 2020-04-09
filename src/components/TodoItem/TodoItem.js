import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {

  getStyle = () => {
    return {
      backgroundColor: '#ffffff',
      padding: '20px',
      margin: '10px',
      borderBottom: '1px dotted #cccccc',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none',
      boxShadow: '2px 2px 10px #222222'
    }
  }

  btnStyle = () => {
    return {
      backgroundColor: '#ff0000',
      color:'#ffffff',
      border: 'none',
      padding: '5px 8px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right',
      outline: 'none'
    }
  }

  render () {
    const { todo, markComplete,deleteTodo } = this.props
    const { id, title } = todo

    return (
      <div style={this.getStyle()}>
        <p>
          <input 
            type="checkbox"
            onChange={ markComplete.bind(this, id) } 
          />{' '}
          { title }
          <button 
            style={this.btnStyle()}
            onClick={ deleteTodo.bind(this, id) }
          >X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default TodoItem