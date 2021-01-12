import React from 'react';
import * as Styled from './styles';
import { useHistory } from 'react-router-dom';

interface cardProps {
	title?: string;
	description?: string;
}

const Card = (props: cardProps) => {
	const history = useHistory();
	const data = { ...props };

	return (
		<>
			<Styled.Card onClick={() => history.push('/boardDetail')}>
				<Styled.CardWrapper>
					<Styled.CardTitle>{props.title}</Styled.CardTitle>
					<Styled.CardDescription>{props.description}</Styled.CardDescription>
				</Styled.CardWrapper>
			</Styled.Card>
		</>
	);
};

export default Card;
