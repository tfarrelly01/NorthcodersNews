import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './HomePage';
import TopicArticles from './TopicArticles';
import ArticlePage from './ArticlePage';
import FourOhFour from './FourOhFour';

const App = () => {
  return (
    <div className="app">  
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics/football/articles">Topic</Link>
          </li>
          <li>
            <Link to="/articles/2/comments">Article</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics/:topic_slug/articles" component={TopicArticles} />  
        <Route path="/articles/:article_id/comments" component={ArticlePage} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
