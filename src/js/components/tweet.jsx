var React = require('react');
var linkify = require('../utils/linkify');
var {Link} = require('react-router');

var Tweet = React.createClass({
  render() {
    var text = linkify.linkify(this.props.tweet.text);
    var user = this.props.tweet.user;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <img className="pull-left" src={user.profile_image_url_https}/>
          <div className="pull-left" style={{marginLeft: 10}}>
            <h3 style={{marginTop: 0}}>{user.name} <small className="text-muted">{linkify.linkify('@' + user.screen_name)}</small></h3>
            {text}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tweet;
