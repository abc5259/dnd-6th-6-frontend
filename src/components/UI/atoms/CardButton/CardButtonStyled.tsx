import styled from 'styled-components';

export const StyledCardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.meComplete {
    font-weight: 700;
    width: 40px;
    height: 20px;
    font-size: 12px;
    color: #11d78f;
    border: 1px solid #11d78f;
    border-radius: 40px;
  }
  &.meIncomplete {
    font-weight: 700;
    font-size: 12px;
    width: 50px;
    height: 20px;
    border: 1px solid #9ca3ab;
    color: #9ca3ab;
    border-radius: 40px;
  }
  &.houseComplete {
    font-weight: 700;
    font-size: 9px;
    width: 38px;
    height: 16px;
    background: #11d78f;
    color: #ffffff;
    border-radius: 4px;
  }
  &.houseInomplete {
    font-weight: 700;
    font-size: 9px;
    width: 38px;
    height: 16px;
    background: #5d9eff;
    color: #ffffff;
    border-radius: 4px;
  }
`;