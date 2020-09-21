import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  display: flex;
  background: #fff;
  margin: 50px 0 20px;
  height: 80px;
  border-radius: 10px;
  align-items: center;
`;

export const Home = styled(Link)`
  display: flex;
  color: #000;
  text-decoration: none;

  h1 {
    margin-left: 40px;
    font-size: 36px;
    transition: background 0.8s;
    &:hover {
      color: ${darken(0.03, '#4169e1')};
    }
  }
`;
