// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

const mapStateToProps = (state) => {

    return {
        isFetching: state.ui.get('isFetching'),
    };
};

@connect(mapStateToProps)
export default class Spinner extends Component {

    render () {
        const { isFetching } = this.props;
        // const  isFetching  = true;

        // console.log(isFetching);

        return isFetching ? <div className = { Styles.spinner } /> : null;
    }
}
