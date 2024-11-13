import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ primary, disabled }) => disabled ? '#999' : primary ? '#fa824c' : '#fff'};
  padding: 14px 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border-color: ${({ disabled }) => disabled ? '#999' : '#fa824c'};
  border-width: 1px;
`;