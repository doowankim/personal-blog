import React from 'react';
import * as Styled from './styles';

interface SkillProps {
	body: string;
}

const SkillTabBox = (props: SkillProps) => {
	return (
		<Styled.Container>
			<Styled.SkillBox>
				<Styled.Skill>{props.body}</Styled.Skill>
			</Styled.SkillBox>
		</Styled.Container>
	);
};

export default SkillTabBox;
