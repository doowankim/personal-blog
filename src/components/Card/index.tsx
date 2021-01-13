import React from 'react';
import * as Styled from './styles';
import { useHistory } from 'react-router-dom';

interface cardProps {
	data?: any;
}

const Card = (props: cardProps) => {
	const history = useHistory();

	return (
		<>
			<Styled.BoardItem>
				<Styled.Wrapper>
					<Styled.Title onClick={() => history.push('/boardDetail')}>
						{props.data.title}
					</Styled.Title>
					<Styled.Description>{props.data.description}</Styled.Description>
					<Styled.Tag>#{props.data.tag}</Styled.Tag>
				</Styled.Wrapper>
			</Styled.BoardItem>
		</>
	);
};

export default Card;
