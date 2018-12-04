import { AppContainer, hot } from 'react-hot-loader';
import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { UTIL_STYLING_INIT } from 'util/styling';
import HangmanImg from './HangmanImg';

const appTheme = createMuiTheme({
  palette: {
    primary: { main: '#424242', contrastText: '#ffffff' },
    secondary: { main: '#EFEBE9', contrastText: '#000000' },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);
    UTIL_STYLING_INIT(appTheme);
  }

  render() {
    return (
      <AppContainer>
        <MuiThemeProvider theme={appTheme}>
          <HangmanImg/>
        </MuiThemeProvider>
      </AppContainer>
    );
  }
}
export default hot(module)(App);
