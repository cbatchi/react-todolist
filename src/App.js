import React from 'react'
// import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import { 
  JsonPlaceholderApi as Api,
  fetchData as Fetch
 } from './components/libs/libs'

import Todos from './components/Todos/Todos'
import Header from './components/Layout/Header'
import AddTodo from './components/AddTodo/AddTodo'
import About from './components/Pages/About'

import './app.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    Fetch(Api.url + Api.paths[4] + '?_limit=10', res =>  {
      this.setState({ todos: res })
    })
  }

  // Toggle Complete
  markComplete = (id) => {
    const { todos } = this.state
    this.setState({ todos: todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
    console.log(id)
  }

  // Add Todo
  addTodo = title => {
    axios.post(Api.url + Api.paths[4], { title, completed: false })
    .then(res =>this.setState({ todos: [...this.state.todos, res.data] }) )
  }

  /* Delete todo */
  deleteTodo = (id) => {
    axios.delete(Api.url + Api.paths[4] + id)
    .then
    (
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    )
  }

  render () {
    const { todos } = this.state
    return (
      <Router>
        <div className="app">
          <div className="container">
            <div style={{ padding: '0 1rem' }}>
              <Route path='/' render={props => (
                <React.Fragment>
                  <Header />
                  <AddTodo addTodo={this.addTodo} />
                  <Todos 
                    todos={todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )} />
              <Route path='/about' component={About} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}