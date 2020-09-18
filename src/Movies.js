import React from 'react'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'

class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [
                { id: 1, name: 'The Godfather', watched: false },
                { id: 2, name: 'Kill Bill', watched: true },
                { id: 3, name: 'Bourne Ultimatum', watched: true }
            ]
        }
    }

    handleRemove = (id) => {
        const confirmRemove = window.confirm("Are you sure?")//alert and confirm are property and methods available on the global object in the  browser its called as the window object so i cannot do directly confirm i will have to do window.confirm
        if (confirmRemove) {
            this.setState(function (prevState) {
                return {
                    movies: prevState.movies.filter(function (ele) {
                        return ele.id != id
                    })
                }
            })
        }
    }

    addMovie = (formData) => {
        this.setState((prevState) => {
            return {
                movies: prevState.movies.concat(formData)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Movie List - {this.state.movies.length}</h1>
                <MoviesList movies={this.state.movies} handleRemove={this.handleRemove} />
                <MoviesForm addMovie={this.addMovie} />
            </div>
        )
    }
}

export default Movies