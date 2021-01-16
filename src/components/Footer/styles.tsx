import styled from 'styled-components';
import * as color from '../color/index';

export const Container = styled.div`
	display: table;
	width: 100%;
	height: 100px;
	text-align: center;
	font-size: 12px;
	color: ${color.Colors.primary};
`;

export const Wrapper = styled.div`
	display: table-cell;
	vertical-align: middle;
`;
