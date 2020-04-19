import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

class GoogleAnalytics extends Component {
    componentDidMount () {
        this.logPageChange(
            this.props.location.pathname,
            this.props.location.search
        );
    }

    componentDidUpdate ({ location: prevLocation }) {
        const { location: { pathname, search } } = this.props;
        const isDifferentPathname = pathname !== prevLocation.pathname;
        const isDifferentSearch = search !== prevLocation.search;

        if (isDifferentPathname || isDifferentSearch) {
            this.logPageChange(pathname, search);
        }
    }

    logPageChange (pathname, search = '') {
        const page = pathname + search;
        const { location } = window;
        ReactGA.set({
            page,
            location: `${location.origin}${page}`,
            ...this.props.options
        });
        ReactGA.pageview(page);
    }

    render () {
        return null;
    }
}

GoogleAnalytics.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string
    }).isRequired,
    options: PropTypes.object
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
    const isGAEnabled = process.env.NODE_ENV === 'production';

    if (isGAEnabled) {
        /*  UA-161906091-1 is the tracking ID is. It must be included within the tracking code 
        to tell Analytics which account and property to send data to
    
        Since April 5th, 2020 Google Chrome and other Chromium based browsers throw a warning stating that 
        a cookie associated with a cross-site resource at https://google.com/ was set without the `SameSite` attribute. 
        A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`.
        Passing these cookie flags as part of the GA settings (gaOptions).
         */
        ReactGA.initialize("UA-161906091-1", 
        {
            gaOptions: { cookieFlags: 'max-age=7200;secure;samesite=none' },
        });
    }

    return isGAEnabled;
};

export default {
    GoogleAnalytics,
    RouteTracker,
    init
};