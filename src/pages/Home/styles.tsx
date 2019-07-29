import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
`;

export const Streams = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  margin-top: 30px;
`;

export const Stream = styled.ul`
  width: 300px;
`;

export const StreamInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  
  a {
    margin-bottom: 10px;

    strong {
      color: ${colors.gray[300]};
      font-size: 16px;
    }
  }

  span {
    color: ${colors.gray[600]};
    font-size: 14px;
  }
`;

export const RaidCopy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    height: 30px;
    width: 100%;
    border-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: ${colors.transparent};
    border: 1px solid ${colors.first};
    color: ${colors.first};
    padding: 10px;
    font-weight: bold;
  }

  button {
    align-self: center;
    height: 30px;
    border: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: ${colors.first};
    color: ${colors.second};
    padding: 5px;

    :hover {
      background: ${lighten(0.05, colors.first)};
    }
  }
`;
