import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Desktop from './myPageDesktop';
import Mobile from './myPageMobile';

class myPageUi extends Component {
  
    constructor (props ) {
        super(props);
    }

    render () {                          
        const ui = this.props.ui;
        return (
          
            <div>
                    { ui.isDesktop || ui.isTablet ? <Desktop />
                    : ui.isMobile ? <Mobile />
                    : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ui: state.windowUi
    };
}

export default connect(mapStateToProps)(myPageUi);