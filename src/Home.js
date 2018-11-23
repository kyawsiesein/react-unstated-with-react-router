import React from 'react'
import {Subscribe} from 'unstated'
import TaskContainer from './TaskContainer'

class Home extends React.Component {
  state = {
    taskValue: '',
  }

  onChange = e => {
    this.setState({taskValue: e.target.value})
  }

  addTaskCallback = () => {
    this.props.history.push('/results')
  }

  render() {
    return (
      <Subscribe to={[TaskContainer]}>
        {tasks => {
          return (
            <div>
              <input value={this.state.taskValue} onChange={this.onChange} />
              <button onClick={() => tasks.addTasks(this.state.taskValue, this.addTaskCallback)}>
                Add task
              </button>
            </div>
          )
        }}
      </Subscribe>
    )
  }
}

export default Home
