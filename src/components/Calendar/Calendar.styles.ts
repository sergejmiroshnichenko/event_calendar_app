import { styled } from 'styled-components';

export const GridWrapper = styled.div<{
  $isHeader?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //width: 968px;
  //margin: 0 auto;
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : '#e3e3e3')};
  gap: 2px;
  padding: ${({ $isHeader }) => ($isHeader ? '' : 1)};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
`;
