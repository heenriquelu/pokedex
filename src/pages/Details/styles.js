import styled from 'styled-components';
import { darken } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const PokemonDetail = styled.div`
  padding: 2px;
  background: ;
  border-radius: 40px;
  width: 800px;
  margin: 0 auto;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 2px;

    .imgBack {
      img {
      }
    }

    img {
      align-self: center;
      max-width: 150px;
    }

    strong {
      font-size: 24px;
      text-transform: capitalize;
    }
    > strong {
      font-size: 16px;
      line-height: 26px;
      color: #333;
      margin: 10px 0 5px;
    }

    > span {
      font-size: 14px;
      margin: 6px 0 6px;

      li {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 8px;
        border: 1px #c0c0c0 solid;
        display: grid;
        grid-template-columns: 180px 180px 180px;
        margin-right: 250px;
        margin-top: 5px;
      }
    }
    p {
      color: #08546f;
      font-size: 15px;
      text-align: left;
      padding: 3px;
      line-height: 16px;
      text-transform: capitalize;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        width: 600px;
        text-align: center;
        text-decoration: none;
        background: #4169e1;
        color: #fff;
        border-radius: 4px;
        padding: 10px;
        margin: 40px 0 2px;
        font-size: 16px;
        transition: background 0.2s;
        cursor: pointer;

        &:hover {
          background: ${darken(0.03, '#4169e1')};
        }
      }
    }
  }
`;
