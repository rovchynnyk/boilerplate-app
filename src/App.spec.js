import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
    it('should render component without errors', () => {
        render(<App />);
    });
});
