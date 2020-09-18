import React from 'react'
import EmployeesForm from './EmployeesForm'
import EmplyoeesTable from './EmployeesTable'

class Employees extends React.Component { 
    state = {
        employees: [
            { id: 'emp001', name: 'abhi', gender: 'male' },
            { id: 'emp002', name: 'sahana', gender: 'female' },
            { id: 'emp003', name: 'srujan', gender: 'male' },
        ]
    }

    render() {
        return (
            <div>
                <h2>Listing Employees - { this.state.employees.length } </h2> 
            <EmployeesForm/>
            <EmplyoeesTable data={this.state.employees}/>
            </div> 
        )
    }
}

export default Employees