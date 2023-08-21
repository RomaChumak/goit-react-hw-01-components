import styled from 'styled-components';
export const ProfList = styled.ul`
 display: flex;
 background-color: #F4F4FD;
 width: 390px;
 padding: 0;
 margin: 0 auto;
 `;

export const ProfItem = styled.li`
 width: 130px;
 height: 100px;
 display: flex;
 flex-direction: column;
 border: 1px solid #cccccc;
 justify-content: center;
 align-items: center;
 gap: 8px;
 color: #9A9A9A;
 font-size: 20px;
 `;

export const BoldText = styled.span`
 color: #000;
 font-weight: bold;
 `