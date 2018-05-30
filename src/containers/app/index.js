import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Notice from '../notice';
import Faq from '../faq';
import Contact from '../contact';
import ContactInput from '../contact/ContactInput.js';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Noto Sans KR', 'Arial', 'sans-serif'].join(','),
    fontSize: 12,
    lineHeight: '1.5em',
    subheading: {
      fontWeight: 500
    },
    title: {
      fontSize: 15,
      fontWeight: 500
    },
    body1: {
      color: '#666666'
      // fontSize: 12,
    }
  }
});

const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/notice">notice</Link>
      </header> */}

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/write" component={ContactInput} />
      </main>
    </MuiThemeProvider>
  </div>
);

export default App;
