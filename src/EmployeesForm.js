import React from 'react' 

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            gender: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

   
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name, 
            email: this.state.email,
            gender: this.state.gender
        }
        console.log(formData)
    }

    render(){
        return (
            <div>
                <h2>Add Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>name</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /> <br/> 

                    <label>email</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /> <br /> 

                    <label>gender</label>
                   
                    
                    <input type="submit" value="add employee details" />
                </form>
            </div>
        )
    }
    
}

export default EmployeeForm