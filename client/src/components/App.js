import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Header from './Header';
import SurveyNew from './SurveyNew';
import {connect} from 'react-redux';
import * as actions from '../actions';




class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
    return (
        <div className='container'>
            <BrowserRouter >
            <Header />
            <div>
                
                <Route path='/' exact  component={Landing} /> 
                <Route path='/surveys' exact component={Dashboard} />
                <Route path='/surveys/new' component={SurveyNew} />
            </div>
            </BrowserRouter>
        </div>
    );

    }
}

export default connect(null, actions)(App);
//connect function gives access to props to App which helps it invoke fetchUser through component did mount function