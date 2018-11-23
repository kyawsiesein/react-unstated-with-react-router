import {Container} from 'unstated'

/**
 * Lets say the functions are reducers in Redux;
 * Functions should be async funcs
 * otherwise, this state is not updated.
 */
class TaskContainer extends Container {
  state = {
    tasks: [],
  }

  addTasks = async (value, callback) => {
    await this.setState({tasks: [...this.state.tasks, value]})
    callback()
  }

  removeTasks = value => {
    const index = this.state.tasks.indexOf(value)
    const newValues = this.state.tasks.splice(index, 1)
    this.setState({tasks: newValues})
  }
}

export default TaskContainer
