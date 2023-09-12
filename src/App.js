import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/auth/Login';
import PlayerRankings from './components/playerComponents/PlayerRankings';
import MatchResults from './components/matchComponents/MatchResults';
import NavbarTop from './components/auth/NavbarTop';
import MatchCreation from './components/matchComponents/MatchCreation';
import Dashboard from './components/auth/Dashboard';
import PointCalculation from './components/matchComponents/PointCalculation';
import Feedback from './components/auth/Feedback';

export default function App() {

    //  If token is null, then show Login page

    let TOKEN = localStorage.getItem('TOKEN')
    let USER_ROLE = localStorage.getItem('USER_ROLE');

    const protectedViews = () => {
      // console.log("Token:", TOKEN)

        if(TOKEN == null) {
            return (<Login />)
        } else {
            if(USER_ROLE === 'Coach') {
                return(
                    <div style={{height:'100%',backgroundColor:'#008ec3'}}>
                        <NavbarTop />
                        <Routes className='routes'>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/rankings" element={<PlayerRankings />} />
                            <Route path="/match/records" element={<MatchResults />} />
                            <Route path="/players" element={<PointCalculation />} />
                            <Route path="/match/add" element={<MatchCreation />} />
                            <Route path="/feedback" element={<Feedback />} />
                        </Routes>
                    </div>
                )
            } else {
                return(<Login />)
            }
        }
    }
    
    return(
        <Router className='App'>
            {protectedViews()}
        </Router>
    );
}