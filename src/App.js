import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom'
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';

function App() {
    return (
        <>

            <TopMenu/>

            <Switch>

                <Route exact path={"/"}>
                    <HomePage/>
                </Route>

                <Route path={"/cavities"}>
                    <CavitiesPage/>
                </Route>

                <Route path={"/appointments"}>
                    <AppointmentsPage/>
                </Route>

                <Route path ="/whitening">
                    <WhiteningPage/>
                </Route>

            </Switch>

        </>
    );
}

export default App;
