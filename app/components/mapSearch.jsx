
var React = require('react');

var Message = require('Message');
var WeatherMap = require('WeatherMap');
const PROJECT_POSITION = {
  lat: 38.98942,
  lng: -77.03731
};

const STARTING_POSITION = {
  lat: 38.88942,
  lng: -77.03731
};


var MapSearch = class Map extends React.Component {
  constructor() {
    super();
    this.panToProject = this.panToProject.bind(this);
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: STARTING_POSITION,
      zoom: 16
    });
  }
  
  panToProject() {
    console.log(this)
    this.map.panTo(PROJECT_POSITION);
  }
  
  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
    
    return (
      
      <div>
       <h3 className="text-center page-title">Search here</h3>
      <p>
         
          <input type="search" placeholder="Use the Map" ref="search"/>
     </p>
        <button onClick={this.panToProject}>First Local Project</button>
        <div ref="map" style={mapStyle}>A Map of Washington DC</div>
      </div>
    );
  }
};

module.exports = MapSearch;