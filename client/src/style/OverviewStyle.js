import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
`;

export const LineBreak = styled.div`
  border-bottom-width: var(--border-rule-border-width, 1px) !important;
  border-bottom-color: var(--color-divider, #EBEBEB) !important;
  border-bottom-width: 1px !important;
  border-bottom-style: solid !important;
`;

export const SearchReviews = styled.input`
  margin-bottom: 8px !important;
  font-size: 12px;
  line-height: 22px !important;
  height: 5vh;
  width: 100%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  font-weight: 400;
  color: rgb(72, 72, 72) !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  border-radius: 4px !important;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  height: 27px;
  margin-left: -27px;
`;

export const SearchForm = styled.form`
  border-width: 1px !important;
  border-style: initial !important;
  border-color: #EBEBEB !important;
  width: 26vh;
`;
