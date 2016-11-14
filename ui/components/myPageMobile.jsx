import React, { Component } from 'react';
import { connect } from 'react-redux';

const myPageMobile = () => {

    return(
        <div>This is mobile view</div>
    );
}

function mapStateToProps(state){
    return{
        ui: state.windowUi
    };
}

export default connect(mapStateToProps)(myPageMobile);