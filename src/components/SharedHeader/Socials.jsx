import sprite from 'img/sprite.svg';
import {
  SocialsList,
  SocialsItem,
  SocialsLink,
  SocialsIcon,
} from './Socials.styled';

const Socials = () => {
  return (
    <SocialsList>
      <SocialsItem>
        <SocialsLink
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialsIcon width="28" height="28">
            <use href={`${sprite}#icon-facebook`}></use>
          </SocialsIcon>
        </SocialsLink>
      </SocialsItem>
      <SocialsItem>
        <SocialsLink
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialsIcon width="28" height="28">
            <use href={`${sprite}#icon-instagram`}></use>
          </SocialsIcon>
        </SocialsLink>
      </SocialsItem>
      <SocialsItem>
        <SocialsLink
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialsIcon width="28" height="28">
            <use href={`${sprite}#icon-youtube`}></use>
          </SocialsIcon>
        </SocialsLink>
      </SocialsItem>
    </SocialsList>
  );
};

export default Socials;
