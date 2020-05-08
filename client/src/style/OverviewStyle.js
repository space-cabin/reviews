/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

import { Search } from '@styled-icons/evil/Search';
import { Star } from '@styled-icons/entypo/Star';

export const SearchIcon = styled(Search)`
  width: 18px;
  // color: rgb(170, 170, 170);
  color: rgb(72, 72, 72) !important;
`;

export const StarRating = styled(Star)`
  width: 13px;
  color: rgb(0, 132, 137);
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const OverviewContainer = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.44444em !important;
  font-color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

export const NoneFound = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  overflow-wrap: break-word !important;
  font-size: 12px !important;
  font-weight: 300 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

export const SomeFound = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  overflow-wrap: break-word !important;
  font-size: 12px !important;
  font-weight: 300 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;
export const Word = styled.span`
  font-size: 13px !important;
  font-weight: 400 !important;
  padding-left: 4px;
`;

export const GoBack = styled.a`
  color: #008489 ;
  font-family: var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  cursor: pointer;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  display: flex;
`;


// RATING
export const RatingContainer = styled.div`
  display:flex;
  flex-direction: column;
  // border: 2px solid black;
  margin: 0px;
  width: 40.6em;

`;

export const TotalRating = styled.div`
  padding: 5px;
  font-weight: 700 !important;
`;

export const AmountofReviews = styled.div`
  padding: 5px;
  font-weight: 700 !important;
`;

export const VerticalLine = styled.div`
  height: 13px !important;
  border-right: 1px solid rgb(235, 235, 235) !important;
`;

export const LineBreak = styled.div`
  border-bottom-width: 1px !important;
  border-bottom-color: #EBEBEB !important;
  border-bottom-style: solid !important;
  margin-top: 12px;
  margin-bottom: 10px;
}
`;

// SEARCH
export const SearchInnerWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const SearchReviews = styled.input`
  margin-bottom: 8px !important;
  font-size: 12px
  line-height: 22px !important;
  height: 1.2rem;
  width: 100%;
  font-weight: 400;
  color: rgb(72, 72, 72) !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  border-radius: 4px !important;
  outline: none;
  padding: 4px;
  :focus {
    border-width: 1.5px;
    border-color: rgb(0, 132, 137) !important;
  }
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
  width: 76vh;
  padding: 5px;
  margin: 0em;
  font: 400 11px system-ui;
  padding: 1px 7px 2px;
  margin-left: 43%;
`;

// PROGRESS BAR
export const ProgressContainer = styled.div`
  height: 5px;
  width: 100px;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 103%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 1s ease-in-out;
  width: 50px;
`;

export const Background = styled(BaseBox)`
  background: #D8D8D8;
  width: 100%;
  height:103%
`;

export const ProgressStatus = styled(BaseBox)`
  background: rgb(0, 132, 137);
  width: ${({ percent }) => percent}%;
`;

// TABLE
export const table6Cols = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin: 0 0 3em 0;
  padding: 0;
  width: 16.6%;
`;

export const RtableCell = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: rgb(72, 72, 72);
  width: 100%;  // default to full width
  padding: 0.8em 0.2em 1.2em 0.1em;
  overflow: hidden; // Or flex might break
  list-style: none;
  border: solid @bw white;
  font-size: 12px;
  width: 16.6%;
  display: inline-flex;
`;
