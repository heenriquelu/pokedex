import styled from 'styled-components';
import { darken } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    border: 1px #c0c0c0 solid;
    text-transform: capitalize;

    img {
      align-self: center;
      max-width: 100px;
    }

    > strong {
      font-size: 18px;
      line-height: 26px;
      color: #333;
      margin-bottom: 15px;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #fff;
    }

    button {
      background: #4169e1;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 5px;
      text-align: center;
      font-size: 16px;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: ${darken(0.03, '#4169e1')};
      }
    }
  }
`;
