import React, { Component } from 'react';
import { connect } from 'react-redux';

const myPageDesktop = () => {

    return(
        <div>This is desktop view</div>
    );
}

function mapStateToProps(state){
    return{
        ui: state.windowUi
    };
}

export default connect(mapStateToProps)(myPageDesktop);