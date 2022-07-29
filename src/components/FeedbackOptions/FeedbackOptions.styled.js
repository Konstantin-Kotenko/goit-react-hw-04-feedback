import styled from 'styled-components';

export const FeedbackDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.ml};
`;

export const Button = styled.button`
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.normal};
  margin-right: ${({ theme }) => theme.space.m};
  cursor: pointer;
  padding: 5px;
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
