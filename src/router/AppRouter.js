import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Footer from '../components/Footer'
import Html from '../pages/Html'
import Css from '../pages/Css'
import Logo from '../pages/Logo'
import Subcrise from '../components/Subcrise'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Subcrise/>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/html" component={Html} />
                <Route exact path="/css" component={Css} />
                <Route exact path="/logo" component={Logo} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default AppRouter
