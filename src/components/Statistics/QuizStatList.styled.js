import styled from 'styled-components';
import { getRandomColor } from '../randomColor';
export const StatList = styled.ul`
display: flex;
 width: 390px;
 padding: 0;
 margin: 0 auto;
`;

export const StatItem = styled.li`
width: 78px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
margin: 0px;
padding: 16px;
color: #fff; 
background-color:${getRandomColor}; 
`;

export const StatBoldText = styled.span`
font-weight: bold;
`
