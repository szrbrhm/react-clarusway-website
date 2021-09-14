import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Footer from '../components/Footer'
import Html from '../pages/Html'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/" component={Home} />
                <Route exact path="/html" component={Html} />
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default AppRouter
