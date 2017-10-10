import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import HomePage from './HomePage';
import TopicArticles from './TopicArticles';
import ArticlePage from './ArticlePage';
import FourOhFour from './FourOhFour';
import TopicHeadings from './TopicHeadings';
import Header from './Header';
import Footer from './Footer';
import '../css/style.css';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="app">
      <Header />
      <div>
        <TopicHeadings />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/topics/:topic_slug/articles" component={TopicArticles} />
          <Route path="/articles/:article_id/comments" component={ArticlePage} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
