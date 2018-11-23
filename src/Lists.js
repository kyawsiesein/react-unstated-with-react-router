import React from 'react'
import {Subscribe} from 'unstated'
import TaskContainer from './TaskContainer'

const Lists = props => {
  return (
    <Subscribe to={[TaskContainer]}>
      {container => {
        return (
          <ul>
            {container.state.tasks.map((task, index) => {
              return <li key={`${task}${index}`}>{task}</li>
            })}
          </ul>
        )
      }}
    </Subscribe>
  )
}

export default Lists
