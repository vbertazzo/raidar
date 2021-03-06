import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  header {
    margin-top: 50px;

    h1 {
      color: ${colors.first};
      font-size: 36px;
      font-weight: 900;
    }

    span {
      color: ${colors.gray[600]};
      font-size: 18px;
    }
  }
`;
