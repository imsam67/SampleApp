import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

// actions
import { setWindowUi } from '../actions/uiActions';

// consts
const ViewPortWidthConst = {
    VIEW_DESKTOP: 1200,
    VIEW_TABLET: 768,
}

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    updateDimension () {
        if (typeof document !== 'undefined')
        {
            var windowUi = {};
            windowUi.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            windowUi.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            windowUi.isLandscape = windowUi.width > windowUi.height ? true : false;
            windowUi.isMobile = false;
            windowUi.isTablet = false;
            windowUi.isDesktop = false;

            if (windowUi.width >= ViewPortWidthConst.VIEW_DESKTOP) {
                windowUi.isDesktop = true;
            } else if (windowUi.width >= ViewPortWidthConst.VIEW_TABLET) {   
                windowUi.isTablet = true;
            } else {                                           
                windowUi.isMobile = true;
            }
            this.props.dispatch(setWindowUi(windowUi));
        }
    }


    // UI DIMENSION
    componentWillMount () {
        this.updateDimension.bind(this);
    }

    componentDidMount () {
        window.addEventListener("resize", this.updateDimension.bind(this));  
        setTimeout(this.updateDimension.bind(this), 100);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimension);
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

const setStateToProps = (state) => {
    return {
        ui: state.windowUi
    }
}

export default connect(setStateToProps)(App);