import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../setting';
import About from '../about';
import Notice from '../notice';
import Faq from '../faq';
import Contact from '../contact';
import ContactInput from '../contact/ContactInput.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Noto Sans KR', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
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

class App extends Component {
  render() {
    // https://tylermcginnis.com/react-router-pass-props-to-components/
    // front/payment/payOk.jsp -> crakers.setResult(true)
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {/* <button onClick={this.props.back}>back</button>
          <header>
            <Link to={`${process.env.PUBLIC_URL}/`}>Setting</Link>
            
            <Link to={`${process.env.PUBLIC_URL}/faq`}>faq</Link>
            <Link to={`${process.env.PUBLIC_URL}/notice`}>notice</Link>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>contact</Link>
            <Link to={`${process.env.PUBLIC_URL}/about-us`}>about-us</Link>
          </header> */}

          <main>
            <Route
              basename={'/crakers'}
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Home}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about-us`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/notice`}
              component={Notice}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/faq`}
              component={Faq}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact/write`}
              component={ContactInput}
            />
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
