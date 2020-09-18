import React from 'react' 
import TasksTable from './Table'
import axios from 'axios'
import TaskForm from './Form'

class Tasks extends React.Component {
componentDidMount(){
    axios.get( 'http://localhost:3033/tasks')
    .then((response) => {
        const tasks = response.data
        this.setState({tasks})
    })
}
    render(){
        return (
            <div>
                <h1>Listing Tasks - { this.state.tasks.length } </h1>

                <TasksTable data={this.state.tasks}/>
                <TaskForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default Tasks