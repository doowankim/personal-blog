import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Main from '../Main';
import PostDetail from '../PostDetail';
import Profile from '../Profile';
import Board from '../Board';

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
