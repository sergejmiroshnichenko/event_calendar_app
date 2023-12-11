import theme from 'styles/theme.ts';
import { styled } from 'styled-components';

export const inputStyles = `
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  color: ${theme.colors.blackDefault};
  outline: unset;
  border-bottom: 2px solid #e3e3e3;
  letter-spacing: 0.05em;
`;

export const EventTitle = styled.input`
  ${inputStyles};
  margin: 40px 0 5px;
  width: 100%;
`;

export const TitleError = styled.span`
  color: ${theme.colors.error};
  position: absolute;
  left: 0;
  bottom: -20%;
`;

export const EventDescription = styled.textarea`
  ${inputStyles};
  resize: none;
  width: 100%;
  margin: 13% 0;
`;

export const EventDate = styled.input`
  ${inputStyles};
  width: 55%;
  position: relative;
`;

export const EventTime = styled.input`
  ${inputStyles};
  width: 30%;
  margin-left: 15%;
`;

export const EventDescriptionWrapper = styled.div`
  position: relative;
`;

export const EventTitleWrapper = styled.div`
  position: relative;
`;

export const UpdateIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

export const EventStatus = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 0.85rem;
  font-style: italic;
`;

export const ActionButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const ActionButton = styled.button`
  padding: 0.5em 1em;
  background: ${theme.colors.bgDefault};
  height: 40px;
  align-items: center;
`;
