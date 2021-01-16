import React from 'react';
import * as Styled from './styles';

const Footer = () => {
	const Year = new Date().getFullYear();
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<div>Copyright {Year}. doowankim </div>
				<div>All rights reserved.</div>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default Footer;
