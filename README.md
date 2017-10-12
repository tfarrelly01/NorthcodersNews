# NorthcodersNews
Northcoders News is a social news aggregation, web content rating, and discussion website. It is similar to Reddit in that Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added, but the user is unable to delete another users comments. Your username is defaulted to `northcoder`.

The core technologies used to develop Northcoders News are as follows:
1. react
2. redux
3. axios
4. Bulma
5. webpack

This repo contains the front-end source code for the project. The repo makes use of an API that is available to run from the following <a href="https://afline-news-api.herokuapp.com/">link</a>

The repo containing the source code for the API is also available from the following<a href="https://github.com/tfarrelly01/AFLine-news-api">link</a>.

## Installation Instructions (on your local machine)

You will need to install Node.js at version 7.9.0 to run Northcoders News. 

### Node
Type the command below to check if you already have node installed:

`$ node -v`

If node is already installed the output of the command will display the version (e.g. v7.9.0). If you need to install node please follow link (http://nodejs.org/en/).

### Install Northcoders News
Please clone the repository https://github.com/tfarrelly01/NorthcodersNews.git

`$ git clone https://github.com/tfarrelly01/NorthcodersNews.git`

To install all dependencies please enter the following commands into the terminal:-

`$ cd NorthcodersNews`
`$ npm install`

Open an additional terminal window and type the following command to run the application

`$ npm start`

Once webpack has finished transpiling open a browser window. The application is available on http://localhost:9090 via your web browser.

### Test Suite
To run the test suite please enter the following command into the terminal

`$ npm test`

