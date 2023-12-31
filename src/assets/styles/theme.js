const commonVars = {
  white: '#fff',
  grey: '#333',
  accentWhite: '#F4F4F4',
  accentBlack: '#242424',
  orange: '#EEA10C',
  green: '#098115',
  notFoundAccent: '#581dff;',
  feedModalBackdrop: 'rgba(4, 4, 4, 0.5)',
  exercModalBackdrop: 'rgba(4, 4, 4, 0.7)',
  greyStarFill: 'rgba(244, 244, 244, 0.20)',
  filterColor: '#808b62',
  gradient:
    'linear-gradient(0deg, rgba(4, 4, 4, 0.20) 0%, rgba(17, 17, 17, 0.50) 100%)',
  filterGradient:
    'linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%)',
  linear: '300ms linear',
  eased: '400ms ease-out',
  modalTransition: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export const darkTheme = {
  ...commonVars,
  background: '#242424',
  text: '#F4F4F4',
  backdrop: 'rgba(244, 244, 244, 0.9)',
  hover: '#F4F4F4',
  shadowVolumeMob: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  shadowVolume: 'rgba(244, 244, 244, 0.4) 0px 3px 8px',
  shadowCards:
    'rgba(244, 244, 244, 0.1) 0px 10px 20px, rgba(244, 244, 244, 0.1) 0px 6px 6px',
  shadowCardsHover: 'rgba(244, 244, 244, 0.3) 0px 5px 15px',
  shadowWide: 'rgba(244, 244, 244, 0.3) 0px 20px 30px -10px',
  headerOpacity: 'rgba(36, 36, 36, 0.10)',
  footerOpacity: 'rgba(244, 244, 244, 0.1)',
  cardBackground: '#525050',
  hoveredOpacity: 'rgba(244, 244, 244, 0.30)',
  favInfoBg: '#242424',
  favInfoBorder: '1px solid #fff',
};

export const lightTheme = {
  ...commonVars,
  background: '#F4F4F4',
  text: '#242424',
  backdrop: 'rgba(4, 4, 4, 0.90)',
  hover: '#098115',
  shadowVolume: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  shadowVolumeMob: 'rgba(244, 244, 244, 0.4) 0px 3px 8px',
  shadowCards:
    'box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
  shadowCardsHover: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  shadowWide: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
  headerOpacity: 'rgba(244, 244, 244, 0.1)',
  footerOpacity: 'rgba(36, 36, 36, 0.10)',
  cardBackground: '#fff',
  hoveredOpacity: 'rgba(36, 36, 36, 0.30)',
  favInfoBg: '#fff',
  favInfoBorder: 'none',
};
