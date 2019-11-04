import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail';
import './App.css'

function App() {
	return (
		<Router>
        	<div className="App">
        		<Switch>
        			<Route path="/" exact component={MovieList} />
        			<Route path="/movie/:id" exact component={MovieDetail} />
        		</Switch>
        	</div>
      	</Router>
	);
}

export default App;
