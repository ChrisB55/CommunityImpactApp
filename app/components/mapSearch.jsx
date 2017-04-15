var React = require('react');
var Message = require('Message');
var GMap = require('WeatherMap');

var MapSearch = React.createClass({
  render() {
  return (
    <div>
      <h1 className="text-center page-title">Search here</h1>
      <p>
         Map Search
         <input type="search" placeholder="Use the Map" ref="search"/>
      </p>
    </div>
  )
  },
});


module.exports = MapSearch;