import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart.jsx';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const tempsToCelsius = temps.map(temp => Math.round((temp - 273.15)));

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={tempsToCelsius} color="orange" units="℃" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (℃)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) { //it's same as const weather = state.weather
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);