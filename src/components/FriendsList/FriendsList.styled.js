import { styled } from "styled-components";

export const FriendList = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
width: 390px;
margin: 0 auto;
padding: 0;
`;

export const FriendItem = styled.li`
background-color: #fff; 
display: flex;
align-items: center;
padding: 10px;
gap: 15px;
border: 1px solid #ccc;
border-radius: 8px;
margin: 5px 0;
width: 350px;
`

export const FriendText = styled.p`
font-weight: 500;
`

const getStatusBcgColor = props => {
  return props.$isOnline ? 'green' : 'red';
};


export const Status = styled.span`
  color: ${getStatusBcgColor};
`;