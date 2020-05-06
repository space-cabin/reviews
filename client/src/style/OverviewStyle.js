import styled from 'styled-components';
// import @styled-icons/boxicons-logos/Airbnb
// import {Search} from '@styled-icons/feather/Search';

// export const SearchIcon = styled(Search)`
// color:red;
// `;

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
`;

// SEARCH
export const SearchReviews = styled.input`
  margin-bottom: 8px !important;
  font-size: 12px
  line-height: 22px !important;
  height: 2rem;
  width: 100%;
  // font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  font-weight: 400;
  color: rgb(72, 72, 72) !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  border-radius: 4px !important;
  outline: none;
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
  margin-left: 43%;
`;

// RATING
export const RatingLevelContainer = styled.div`
  display:flex;
`;

export const RatingContainer = styled.div`
  display:flex;
  flex-direction: column;
  border: 2px solid black;
  margin: 0px;
`;

export const NameandRating = styled.div`
  display: flex;
  width: 46%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const NameandProgress = styled.div`
  display: flex;
  width: 100% !important;
  height: 50%;
  align-items: center;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px;
  overflow-wrap: break-word !important;
  font-weight: 300 !important;
  line-height: 6.375em !important;
  color: rgb(72, 72, 72) !important;
  justify-content: stretch;
`;

// PROGRESS BAR
export const ProgressContainer = styled.div`
  height: 5px;
  width: 100px;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 102%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
  width: 50px;
`;

export const Background = styled(BaseBox)`
  background: #D8D8D8;
  width: 100%;
`;

export const ProgressStatus = styled(BaseBox)`
  background: rgb(0, 132, 137);
  width: ${({ percent }) => percent}%;
`;
