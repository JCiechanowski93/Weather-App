import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeater } from '../actions/index';

class SearchBar extends Component {

    state = { term: '' };



    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeater(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeater }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);

