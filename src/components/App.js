import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login } from 'app_actions/user'
import 'app_styles/App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Header from 'app_components/Header';
import Footer from 'app_components/Footer';
import Main from 'app_components/Main';
const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

class App extends Component {
    render() {
        return (
            <Router>
                <div className='reactApp'>
                    <Header />
                    <Main  />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);