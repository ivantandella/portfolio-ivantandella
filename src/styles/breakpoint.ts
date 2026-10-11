const breakpoints = {
  xxs: '360px',
  xs: '414px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1366px',

  screenXxs: 'screen and (min-width: 360px)',
  screenXs: 'screen and (min-width: 414px)',
  screenSm: 'screen and (min-width: 576px)',
  screenMd: 'screen and (min-width: 768px)',
  screenLg: 'screen and (min-width: 1024px)',
  screenXl: 'screen and (min-width: 1280px)',
  screenXxl: 'screen and (min-width: 1366px)',

  screenMaxXxs: 'screen and (max-width: 360px)',
  screenMaxXs: 'screen and (max-width: 413px)',
  screenMaxSm: 'screen and (max-width: 575px)',
  screenMaxMd: 'screen and (max-width: 767px)',
  screenMaxLg: 'screen and (max-width: 1023px)',
  screenMaxXl: 'screen and (max-width: 1279px)',
  screenMaxXxl: 'screen and (max-width: 1365px)',
} as const;

export default breakpoints;
