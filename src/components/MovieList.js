import React, { Component } from 'react';
import { Grid, Message } from 'semantic-ui-react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import MovieListItem from './MovieListItem'
import Loader from './Loader'

class MovieList extends Component {
    
    state = {
        movieList: [],
        loading: true,
        error: false    
    }

    componentDidMount = () => {
        const base_url = 'https://api.themoviedb.org/3'
        const api_key = 'b4acfa189497f2d7a54a914a255c17c5'

        axios.get(`${base_url}/trending/movie/week?api_key=${api_key}`)
            .then(response => {
                this.setState({ movieList: response.data.results, loading: false });
            }).catch(error => {
                this.setState({ loading: false});
                 alert(error);
            });
    }

    renderList = () => {
        return this.state.movieList.map(movie => {
            return(
                <Grid.Column mobile={8} tablet={5} computer={4}>
                    <MovieListItem movie = { movie }/>
                </Grid.Column>
            )
        })
    }

    render() {
        if(this.state.loading){
            return <Loader loading={this.state.loading} />
        }
        return (
            <Container>
                <h2 style={{margin: '20px 0'}}>TRENDING MOVIES</h2>
                <Grid>
                    {this.renderList()}
                </Grid>
            
            </Container>
        );
    }
}

export default MovieList;