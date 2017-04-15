var React = require('react');

var Message = React.createClass ({
    render: function () {
    var {temp, location} = this.props;
    return (
      <h3>The temp is {temp} in {location} today.</h3>
    );
  }
});

module.exports = Message;