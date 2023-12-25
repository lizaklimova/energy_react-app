import Notiflix from 'notiflix';

const notify = message => {
  Notiflix.Notify.init({
    timeout: 5000,
    backOverlay: true,
    clickToClose: true,
    cssAnimationStyle: 'from-bottom',
    width: '400px',
    fontSize: '14px',
    fontAwesomeIconStyle: 'shadow',
    info: {
      notiflixIconColor: '#F4F4F4',
      background: '#242424',
      textColor: '#F4F4F4',
      backOverlayColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

  return Notiflix.Notify.info(message);
};
export default notify;
