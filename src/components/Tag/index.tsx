import React from 'react';
import * as Styled from './styles';

interface tagProps {
	body?: string;
	noMargin?: boolean;
	click?: boolean;
}

const Tag = (props: tagProps) => {
	return (
		<>
			<Styled.TagBox
				style={{
					marginRight: props.noMargin ? '0px' : '10px',
					cursor: props.click ? 'pointer' : '',
				}}
			>
				{props.body}
			</Styled.TagBox>
		</>
	);
};

export default Tag;
