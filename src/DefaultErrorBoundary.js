import React from 'react';
import propTypes from 'prop-types';

export default class DefaultErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    static propTypes = {
        children: propTypes.node.isRequired
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return hasError ? <div>Something went wrong</div> : children;
    }
}
