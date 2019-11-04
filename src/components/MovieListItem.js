import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import { Card, Image,  Divider , Grid, Icon} from 'semantic-ui-react'

class MovieListItem extends Component {
    render() {
        let { movie } = this.props
        return(
            <Link to={{ pathname: `/movie/${movie.id}`, state: {id: movie.id}}} >
                <Card className='item'>
                    <Image src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} wrapped ui={false} />
                    <Card.Content style={{background: '#f5f5f5'}}>
                        <Card.Header>{movie.title}</Card.Header>
                        <Divider></Divider>
                        <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Card.Description>
                                    <span>{movie.release_date}</span>
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Card.Description>
                                    <span> <Icon name='star outline'></Icon> {movie.vote_average} / 10</span>
                                </Card.Description>
                            </Grid.Column>
                        </Grid>
                    </Card.Content> 
                </Card>
            </Link>
        )
    }
}

export default MovieListItem