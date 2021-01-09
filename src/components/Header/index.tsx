import React from 'react';
import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faCode, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Styled.HeaderBox>
			<Link to="/">
				<Styled.Logo>
					<FontAwesomeIcon icon={faCode} /> <span>Kei</span>
				</Styled.Logo>
			</Link>
			<Styled.LeftMenu>
				<div>
					<FontAwesomeIcon icon={faAtom} />
				</div>
				<div>
					<Link to="/profile">
						<FontAwesomeIcon icon={faUserAlt} />
					</Link>
				</div>
				<span>
					<div onClick={() => window.open('https://github.com/doowankim')}>
						Github
					</div>
				</span>
			</Styled.LeftMenu>
		</Styled.HeaderBox>
	);
};

export default Header;
