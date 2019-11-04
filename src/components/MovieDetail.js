import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import { Grid, Image, Label, Icon, Container, Divider } from 'semantic-ui-react' 
import axios from 'axios'
import { withRouter } from "react-router";
import Loader from './Loader';

class MovieDetail extends Component {

    state = {
        detail: {},
        loading: true
    }

    renderTags = () => {
        return this.state.detail.genres.map((item) => {     
            return(
                <Label className="tags" style={{margin: '5px'}}>
                    {item.name}
                </Label>
            )
        })
    }

    componentDidMount = () => {
        const base_url = 'https://api.themoviedb.org/3'
        const api_key = 'b4acfa189497f2d7a54a914a255c17c5'
        const { id } = this.props.location.state

        axios.get(`${base_url}/movie/${id}?api_key=${api_key}`)
            .then(response => {
                this.setState({ detail: response.data, loading: false });
            }).catch(error => {
                alert(error);
                this.props.history.push("/");
           });
    }

    render() {
        let { overview, poster_path, title, release_date, runtime } = this.state.detail
        
        if(this.state.loading){
            return(
                <Loader loading={this.state.loading}/>
            )        
        }
        return (
            <Container>
                <Grid style={{margin: '0'}}>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={16} computer={6}>
                            <Image src={`http://image.tmdb.org/t/p/w342/${poster_path}`} className='poster-detail' />
                        </Grid.Column>
                        <Grid.Column  only='computer' computer={10} className="detail">
                            <h1>{title}</h1>
                            <p> {this.renderTags()} | {release_date} | {runtime} min </p>
                            <p>{overview}</p>
                            <p><Link to='/'> <Icon name="arrow left"></Icon> Back</Link></p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column only='mobile tablet' mobile={16} tablet={16} className="detail">
                            <h1>{title}</h1>
                            {this.renderTags()} 
                            <p style={{margin: '20px 0'}}>{release_date} | {runtime} min </p>
                            <p>{overview}</p>
                            <p><Link to='/'> <Icon name="arrow left"></Icon> Back</Link></p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> 
            </Container>          
        );

    }
}

export default withRouter(MovieDetail);