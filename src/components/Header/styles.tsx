import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  header {
    margin-top: 50px;

    a {
      h1 {
        color: ${colors.first};
        font-size: 36px;
      }
    }

    span {
      color: ${colors.gray[600]};
      font-size: 18px;
    }
  }
`;
