import { styled } from 'styled-components';
import { MdOutlineSearchOff } from 'react-icons/md';

export const MsgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 50px;

  @media screen and (min-width: 1440px) {
    width: 900px;
    padding-left: 30%;
  }
`;

export const MsgText = styled.p`
  text-align: center;

  span {
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const MsgIcon = styled(MdOutlineSearchOff)`
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
