import { styled } from 'styled-components';

export const GridWrapper = styled.div<{
  $isHeader?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : '#e3e3e3')};
  gap: 2px;
  padding: ${({ $isHeader }) => ($isHeader ? '' : '1px')};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
`;
