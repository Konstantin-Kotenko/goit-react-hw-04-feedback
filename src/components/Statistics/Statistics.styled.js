import styled from 'styled-components';

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.ml};
  }
`;

export const StatisticsList = styled.ul`
  margin-top: ${({ theme }) => theme.space.ml};
  list-style: none;
`;
