var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Tweets = require('./tweets');
var {Router, Route, Link} = require('react-router');
var reactRouter = require('react-router');
var Header = require('./header');
var LandingPage = React.createClass({
  getInitialState() {
    return {
      username: ''
    };
  },

  componentWillReceiveProps() {
    this.setState(this.getInitialState());
  },

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="input-group" style={{marginBottom: 10}}>
            <input type="text" className="form-control" value={this.state.username} onChange={this.handleChangeUserName} placeholder="Twitter Handle"/>
            <span className="input-group-btn">
              <Link to={'/user/' + this.state.username} className="btn btn-primary">GO!</Link>
            </span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  },

  handleChangeUserName(event) {
    this.setState({
      username: event.target.value
    });
  }
});

ReactDOM.render(
  <Router>
    <Route path="/" component={LandingPage}>
      <Route path="user/:username" component={Tweets}></Route>
    </Route>

  </Router>,
  document.querySelector('.react-container')
);

module.exports = LandingPage;
