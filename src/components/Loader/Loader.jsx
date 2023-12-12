import sprite from 'img/sprite.svg';
import { LoaderBackdrop, LoaderIcon } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <LoaderIcon width={150} height={150}>
        <use href={`${sprite}#icon-man`}></use>
      </LoaderIcon>
    </LoaderBackdrop>
  );
};

export default Loader;
