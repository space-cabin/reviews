import styled from 'styled-components';

export const Picture = styled.img`
  height: 45px;
  width: 45px;
  vertical-align: middle !important;
  display: block !important;
  border-radius: 50% !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgb(255, 255, 255) !important;
  overflow: hidden !important;
  padding: 3px;
  src: url(${(props) => props.src});
`;

export const User = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  padding: 3px;
  margin: 0px !important
`;

export const Date = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
  padding: 3px;
  margin: 0px !important;
`;

export const Post = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 15px !important;
  font-weight: 300 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  margin-bottom: 2%;
  margin: 0px !important;
`;

export const PostContainer = styled.div`
  overflow-wrap: break-word !important;
  margin: 0px !important;
`;

export const ReviewHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const NameandDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const LineBreak = styled.div`
  border-bottom-width: var(--border-rule-border-width, 1px) !important;
  border-bottom-color: var(--color-divider, #EBEBEB) !important;
  border-bottom-width: 1px !important;
  border-bottom-style: solid !important;
  margin-top: 4%;
`;
