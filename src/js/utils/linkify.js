var Link = require('react-router').Link;
var React = require('react');
var twitterHandle = {
  pattern: /(@\w{1,15})/,
  linkify (text) {
    var parts = text.split(twitterHandle.pattern);
    parts = parts.map((part, index) => {
      var word = part;

      if (twitterHandle.pattern.test(word)) {
        word = twitterHandle.createTwitterHandle(part);
      }

      return <span key={index}>{word} </span>;
    });

    return parts;
  },

  createTwitterHandle(handle) {
    return <Link to={'/user/' + handle.match(twitterHandle.pattern)[0].replace(/@/, '')} >{handle}</Link>;
  }
};

module.exports = twitterHandle;
