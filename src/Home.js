import React from 'react'
import {Subscribe} from 'unstated'
import TaskContainer from './TaskContainer'
import {Formik, ErrorMessage} from 'formik'

class Home extends React.Component {
  addTaskCallback = () => {
    this.props.history.push('/results')
  }

  formValidation = (values, props) => {
    let errors = {}
    if (values.task.trim().length === 0) {
      errors.task = 'Required'
    }

    return errors
  }

  onSubmit = (values, args, next) => {
    next(values.task, this.addTaskCallback)
  }

  render() {
    return (
      <Subscribe to={[TaskContainer]}>
        {tasks => {
          return (
            <Formik
              initialValues={{task: ''}}
              validate={this.formValidation}
              onSubmit={(values, args) => this.onSubmit(values, args, tasks.addTasks)}
            >
              {formValues => {
                return (
                  <form onSubmit={formValues.handleSubmit}>
                    <input value={formValues.task} name="task" onChange={formValues.handleChange} />
                    <span className="error">
                      <ErrorMessage name="task" />
                    </span>
                    <button type="submit">Add task</button>
                  </form>
                )
              }}
            </Formik>
          )
        }}
      </Subscribe>
    )
  }
}

export default Home
