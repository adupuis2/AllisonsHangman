import { Theme } from '@material-ui/core';

export const VERTICAL_SITE_PADDING_PX = 57;
const rgbVals = {
  primary: {
    light: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
    main: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
    dark: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
  },
  secondary: {
    light: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
    main: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
    dark: {
      r: null as string,
      g: null as string,
      b: null as string,
    },
  },
};

const getRGBArray = (themeColor: string) => {
  // themeColor comes in looking like this:
  // string: rgb(0-255, 0-255, 0-255)

  // slice off rgb(
  let rgb = themeColor.slice(4);

  // slice off trailing )
  rgb = rgb.slice(0, rgb.length - 1);

  // get rid of the spaces
  rgb = rgb.replace(/ /g, '');

  // split at commas
  const rgbValues = rgb.split(',');

  // convert to an rgb object
  return {
    r: rgbValues[0],
    g: rgbValues[1],
    b: rgbValues[2],
  };
};

const convertHex = (hexCode: string) => {
  // slice off the #
  const newCode = hexCode.slice(1);
  const r = parseInt(newCode.slice(0, 2), 16);
  const g = parseInt(newCode.slice(2, 4), 16);
  const b = parseInt(newCode.slice(4, 6), 16);
  return {
    r: String(r),
    g: String(g),
    b: String(b),
  };
};

export const UTIL_STYLING_INIT = (theme: Theme) => {
  rgbVals.primary.light = getRGBArray(theme.palette.primary.light);
  rgbVals.primary.dark = getRGBArray(theme.palette.primary.dark);
  rgbVals.secondary.light = getRGBArray(theme.palette.secondary.light);
  rgbVals.secondary.dark = getRGBArray(theme.palette.secondary.dark);

  // main values are stored as hex instead of rgb(r, g, b)
  rgbVals.primary.main = convertHex(theme.palette.primary.main);
  rgbVals.secondary.main = convertHex(theme.palette.secondary.main);
};

export const getThemeRGBA = (
  palette: 'primary' | 'secondary',
  style: 'light' | 'main' | 'dark',
  transparency = 1.0,
) => {
  const rgb: { r: string; g: string; b: string } = {
    ...rgbVals[palette][style],
  };

  if (!rgb || !rgb.r || !rgb.g || !rgb.b) {
    throw new ReferenceError(
      'SECONDARY_LIGHT_TRANSPARENCY:' + ' Please call UTIL_STYLING_INIT to initialize the cache.',
    );
  }

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${transparency})`;
};
