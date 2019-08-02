import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '../../styles/colors';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const NoResults = styled.h2`
  margin-top: 50px;
  color: ${colors.gray[300]};
`;

export const Container = styled.div``;

export const Streams = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 20px;
  margin-top: 30px;

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const Stream = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
`;

export const StreamPreview = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 180px;
    border-radius: 4px;
    background: ${colors.gray[700]};
  }
  
  div {
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 4px;
    padding: 3px 4px;
    background: rgba(0, 0, 0, 0.4);
    border: 0;
    position: absolute;
    top: 8px;
    left: 8px;

    span {
      margin-left: 4px;
      color: ${colors.white}
    }
  }
`;

export const StreamInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 15px;
  
  a {
    margin-bottom: 10px;

    strong {
      color: ${colors.gray[300]};
      font-size: 16px;

      :hover {
      color: ${colors.first};
    }
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
  justify-content: center;
  margin-top: auto;

  input {
    height: 36px;
    width: 100%;
    border-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: ${colors.transparent};
    border: 1px solid ${colors.first};
    border-right: none;
    color: ${colors.first};
    padding: 10px 15px;
    font-weight: bold;
  }

  button {
    align-self: center;
    height: 36px;
    border: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: ${colors.first};
    color: ${colors.second};
    padding: 5px 10px;
    min-width: 70px;
    transition: background 0.2s;

    :hover {
      background: ${lighten(0.12, colors.first)};
    }

    ::after {
      font-weight: 500;
      content: 'COPIAR';
    }
  }
`;
