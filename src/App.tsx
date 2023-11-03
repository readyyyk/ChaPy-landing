import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Outlet} from 'react-router-dom';


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
};

export default App;
