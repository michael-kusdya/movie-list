import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

class Loader extends Component{
    render(){
        return(
            <div className='loader'>
                <h3>Please wait</h3>
                <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#4183c4'}
                    loading={this.props.loading}
                />
            </div> 
        )
    }
}

export default Loader