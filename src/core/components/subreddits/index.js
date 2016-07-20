const React = require('react');

// Add these 2 lines
const Reflux = require('reflux');
const SubredditsStore = require('../../stores/subreddits');

const SubredditsAction = require('../../actions/subreddits');
const ListingsAction = require('../../actions/listings');

module.exports = React.createClass({
  displayName: 'Subreddit Component',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
  },

  getInitialState: function () {
    return { isSelected: false };
  },

  onClick: function () {
    SubredditsAction.setCurrentName(this.props.name);
    // this.setState({ isSelected: true });
    ListingsAction.requestSubredditListings(this.props.url);
  },

  render: function () {
    // Inside return, replace...
    // <li onClick={this.onClick} className={this.state.isSelected ? 'selected' : ''}>

    let selected = SubredditsStore.data.currentName === this.props.name ? true : false;
    return (
      <li onClick={this.onClick} className={selected ? 'selected' : ''}>
        {this.props.name}
      </li>
    );
  },
});
