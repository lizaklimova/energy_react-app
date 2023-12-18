import sprite from 'assets/img/sprite.svg';
import { MainContainer } from 'components/App/App.styled';
import {
  FeedModalBackdrop,
  FeedModal,
  FeedModalCloseBtn,
  FeedModalCloseIcon,
  FeedModalRatDiv,
  FeedModalRatTitle,
  FeedModalRatValue,
  FeedModalRatListWrap,
  FeedModalRatList,
  FeedModalRatStar,
  FeedModalForm,
  FeedModalInput,
  FeedModalArea,
  FeedModalSubmitBtn,
} from './FeedbackModal.styled';

const FeedbackModal = () => {
  return (
    <FeedModalBackdrop>
      <MainContainer>
        <FeedModal>
          <FeedModalCloseBtn type="button">
            <FeedModalCloseIcon width={24} height={24}>
              <use href={`${sprite}#icon-close`}></use>
            </FeedModalCloseIcon>
          </FeedModalCloseBtn>

          <FeedModalRatDiv>
            <FeedModalRatTitle>Rating</FeedModalRatTitle>
            <FeedModalRatListWrap>
              <FeedModalRatValue>0.0</FeedModalRatValue>
              <FeedModalRatList>
                <li>
                  <FeedModalRatStar width={24} height={24}>
                    <use href={`${sprite}#icon-star`}></use>
                  </FeedModalRatStar>
                </li>
                <li>
                  <FeedModalRatStar width={24} height={24}>
                    <use href={`${sprite}#icon-star`}></use>
                  </FeedModalRatStar>
                </li>
                <li>
                  <FeedModalRatStar width={24} height={24}>
                    <use href={`${sprite}#icon-star`}></use>
                  </FeedModalRatStar>
                </li>
                <li>
                  <FeedModalRatStar width={24} height={24}>
                    <use href={`${sprite}#icon-star`}></use>
                  </FeedModalRatStar>
                </li>
                <li>
                  <FeedModalRatStar width={24} height={24}>
                    <use href={`${sprite}#icon-star`}></use>
                  </FeedModalRatStar>
                </li>
              </FeedModalRatList>
            </FeedModalRatListWrap>
          </FeedModalRatDiv>

          <FeedModalForm>
            <FeedModalInput
              type="email"
              autoComplete="off"
              placeholder="Email"
            />
            <FeedModalArea
              name="feedback"
              placeholder="Your comment"
              required
            ></FeedModalArea>
            <FeedModalSubmitBtn type="submit">Send</FeedModalSubmitBtn>
          </FeedModalForm>
        </FeedModal>
      </MainContainer>
    </FeedModalBackdrop>
  );
};

export default FeedbackModal;
