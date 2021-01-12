import styled from 'styled-components';
import * as color from '../color/index';
import { darken } from 'polished';

export const TagBox = styled.div`
	width: max-content;
	padding: 8px 15px;
	border-radius: 15px;
	background: ${color.Colors.skyblue};
	color: ${color.Colors.blue};
	transition: 0.35s;

	&:hover {
		background: ${darken(0.1, `${color.Colors.skyblue}`)};
		transition: 0.35s;
	}
`;
