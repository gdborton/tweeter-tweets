var React = require('react');
var {Link} = require('react-router');
var Header = React.createClass({
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">Tweeter Tweets</Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
