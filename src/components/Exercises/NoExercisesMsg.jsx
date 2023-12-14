import { MsgContainer, MsgIcon, MsgText } from './NoExercisesMsg.styled';

const NoExercisesMsg = ({ name, variant }) => {
  return (
    <MsgContainer>
      <MsgIcon />
      <MsgText>
        Unfortunately, we haven't found any exercises by <span>{name}</span>
        &nbsp;
        {variant}
      </MsgText>
    </MsgContainer>
  );
};

export default NoExercisesMsg;
