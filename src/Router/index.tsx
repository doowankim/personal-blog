import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Main from '../components/Main';
import PostDetail from '../components/PostDetail';
import Profile from '../components/Profile';
import Board from '../components/Board';

const Router = () => {
	return (
		<BrowserRouter>
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/main" component={Main} />
					<Route path="/postDetail" component={PostDetail} />
					<Route path="/profile" component={Profile} />
					<Route path="/board" component={Board} />
				</Switch>
			</>
		</BrowserRouter>
	);
};

export default Router;
