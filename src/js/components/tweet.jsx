var React = require('react');
var twitterHandleRegex = require('../utils/twitter-handle');
var {Link} = require('react-router');

var Tweet = React.createClass({
  render() {
    var text = this.props.tweet.text.split(twitterHandleRegex);
    text = text.map((part, index) => {
      if (twitterHandleRegex.test(part)) {
        return <span key={index}><Link to={'/user/' + part.match(twitterHandleRegex)[0].replace(/@/, '')} >{part}</Link> </span>;
      }

      return <span key={index} >{part} </span>;
    });
    var user = this.props.tweet.user;
    console.log(user);
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <img className="pull-left" src={user.profile_image_url_https}/>
          <div className="pull-left" style={{marginLeft: 10}}>
            <h3 style={{marginTop: 0}}>{user.name} <small className="text-muted">@{user.screen_name}</small></h3>
            {text}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tweet;
