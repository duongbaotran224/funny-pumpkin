import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

/*styles*/
import { StyledGlobal } from './theme/globalStyle'
import theme from './theme';

/*router*/
import * as ROUTES from './constants/routes';
import { Navigation } from './components';
import Contact from './pages/Contact';
import Works from './pages/Works';
import About from './pages/About';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return null;
  }
}
const ScrollTopRouter = withRouter(ScrollToTop);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledGlobal />
        <ScrollTopRouter />
        <Switch >
          <Route exact path={ROUTES.ABOUT} render={props => <About />} />
          <Route path={ROUTES.WORKS} render={props => <Works />} />
          <Route path={ROUTES.CONTACT} render={props => <Contact />} />
        </Switch>
        <Navigation />
      </Router>
    </ThemeProvider>
  )
}

export default App