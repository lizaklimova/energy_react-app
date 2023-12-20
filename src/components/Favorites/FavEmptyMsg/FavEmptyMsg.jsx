import { FavEmptyMsgDiv, EmptyFavsMsg } from './FavEmptyMsg.styled';

const FavEmptyMsg = () => {
  return (
    <FavEmptyMsgDiv>
      <EmptyFavsMsg>
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </EmptyFavsMsg>
    </FavEmptyMsgDiv>
  );
};

export default FavEmptyMsg;
