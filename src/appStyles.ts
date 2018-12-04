import { createStyles } from '@material-ui/core';

const appStyles = () =>
  createStyles({
    app: {
      textAlign: 'center',
    },

    appLogo: {
      animation: 'App-logo-spin infinite 20s linear',
      height: '80px',
    },

    appHeader: {
      backgroundColor: '#222',
      height: '150px',
      padding: '20px',
      color: 'white',
    },

    appTitle: {
      fontSize: '1.5em',
    },

    appIntro: {
      fontSize: 'large',
    },
  });

export default appStyles;
