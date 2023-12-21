import sprite from 'assets/img/sprite.svg';
import {
  NotFoundDiv,
  NotFoundTextDiv,
  NotFoundError,
  NotFoundInfo,
  NotFoundText,
  NotFoundBtnDiv,
  NotFoundBtn,
  NotFoundBtnIcon,
} from './NotFound.styled';
import { MainContainer } from 'components/App/App.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <NotFoundDiv>
      <MainContainer>
        <NotFoundTextDiv>
          <NotFoundError>404</NotFoundError>
          <NotFoundInfo>Page Not Found</NotFoundInfo>
          <NotFoundText>
            Sorry, we couldn’t find the page you‘re looking for{' '}
          </NotFoundText>
        </NotFoundTextDiv>
        <NotFoundBtnDiv>
          <NotFoundBtn type="button" onClick={handleNavigate}>
            Back to home
            <NotFoundBtnIcon width={30} height={30}>
              <use href={`${sprite}#icon-back-arrow`}></use>
            </NotFoundBtnIcon>
          </NotFoundBtn>
        </NotFoundBtnDiv>
      </MainContainer>
    </NotFoundDiv>
  );
};

export default NotFound;
