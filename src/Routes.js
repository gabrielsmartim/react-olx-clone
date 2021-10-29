import React from "react";
import { Switch } from "react-router-dom";
import RouteHandler from "./components/RouteHandler";

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import AdPage from './Pages/AdPage'
import AddAd from './Pages/AddAd';
import Ads from './Pages/Ads';

export default () => {
    return (
        <Switch>
            <RouteHandler exact path='/'>
                <Home/>
            </RouteHandler>
            <RouteHandler exact path='/about'>
                <About/>
            </RouteHandler>
            <RouteHandler exact path='/signin'>
                <SignIn/>
            </RouteHandler>
            <RouteHandler exact path='/signup'>
                <SignUp/>
            </RouteHandler>
            <RouteHandler exact path='/ad/:id'>
                <AdPage/>
            </RouteHandler>
            <RouteHandler private exact path='/post-an-ad'>
                <AddAd/>
            </RouteHandler>
            <RouteHandler exact path='/ads'>
                <Ads/>
            </RouteHandler>
            <RouteHandler>
                <NotFound />
            </RouteHandler>
            
        </Switch>
    );
}