var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },
  render: function () {
    return (
      <div className="top-bar">
         <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Community Impact Tool</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Use the Map</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <h3> Show the Impact</h3>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

Nav;

