import React from 'react' 
//npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'   
//import Tasks from './components/tasks/Tasks'
import Home from './components/static/Home'
import About from './components/static/About'
import UsersList from './components/static/UsersList'
import UserShow from './components/static/UserShow'
import Services from './components/static/Services'
import Contact from './components/static/Contact'

function App () {
    return (
        <BrowserRouter>
        <div>
            <h1> My App </h1>
            <Link to="/">Home</Link> -
            <Link to="/about">About</Link> -
            <Link to="/users">UsersList</Link> -
            <Link to="/services"> Services </Link> -
            <Link to="/contact">Contact</Link>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>


        </div>
        </BrowserRouter>
    )
}

export default App
/*
import React from 'react'
import Tips from './Tips'
import Movies from './Movies'
import UserList from './UserList'
import Employees from './Employees'
function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>React is a fantastic ui library built for front end</p>
            <p> AWESOME </p>
            <Tips />
            <Movies />
            <UserList/>
            <Employees/>
        </div>
    )
}

export default App
*/