import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import { Home, Profile, BoardView, BoardDetail } from '../containers';

const Router = () => {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Wrapper>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/board">
							<BoardView />
						</Route>
						<Route exact path="/boardDetail">
							<BoardDetail />
						</Route>
					</Switch>
				</Wrapper>
			</>
		</BrowserRouter>
	);
};

const Wrapper = styled.div`
	width: 630px;
	min-width: 480px;
	margin: 0 auto;
`;

export default Router;
