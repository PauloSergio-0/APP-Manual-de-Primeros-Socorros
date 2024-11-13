import styled from 'styled-components/native';

export const Guia = styled.View`
  margin: 24px 20px 0;
  padding: 24px;
  border-color: #EEEEEE;
  border-width: 1px;
  border-radius: 12px;
  gap: 24px;
  background-color: #8176A3; 
`;


export const GuiaHeader = styled.View``;

export const GuiaDescription = styled.View``;

export const GuiaFooter = styled.View`
  flex-direction: row;
  justify-content: flex-end; /* Alinha todos os elementos à direita */
  align-items: center;
`;

export const GuiaActions = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const GuiaIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;