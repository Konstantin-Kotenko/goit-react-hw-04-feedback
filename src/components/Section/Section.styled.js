import styled from 'styled-components';

export const Sections = styled.section`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.ml};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
