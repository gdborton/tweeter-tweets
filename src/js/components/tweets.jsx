var React = require('react');
var reqwest = require('reqwest');
var Tweet = require('./tweet');

var Tweets = React.createClass({
  makeRequest(props) {
    this.setState(this.getInitialState());
    var req = reqwest('tweets/' + props.params.username);
    req.then((response) => {
      this.setState({
        tweets: response,
        loading: false
      });
    });

    req.fail(() => {
      this.setState({
        loading: false,
        error: true
      })
    });
  },

  getInitialState() {
    return {
      loading: true,
      error: false,
      tweets: []
    }
  },

  componentDidMount() {
    this.makeRequest(this.props);
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.username !== this.props.params.username) {
      this.makeRequest(nextProps);
    }
  },
  render() {
    if (this.state.loading) {
      return <div className="alert alert-info">Loading...</div>;
    } else if (this.state.error){
      return <div className="alert alert-danger">Error!</div>;
    } else {
      var tweets = this.state.tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet.id}/>;
      });
      return (
        <div>
          <h1>{this.props.params.username}</h1>
          {tweets}
        </div>
      );
    }
  }
});

module.exports = Tweets;
