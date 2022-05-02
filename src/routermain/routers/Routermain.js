import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from '../../screens/navbar/Navbar';
import Home from '../../screens/home/Home';
import About from '../../screens/about/About';
import Skills from '../../screens/skills/Skills';
import Projects from '../../screens/projects/Projects'
import Contact from '../../screens/contact/Contact'

export default function routermain() {
    return (
        <Router>
            <Navbar />
            <main className='main-section'>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/skills" component={Skills}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </main>
        </Router>
    )
}
