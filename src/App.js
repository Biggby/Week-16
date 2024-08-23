import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this file exists in the src directory

// Import componets from Admin Director
import Admin from './admin/Admin';
import CreateUser from './admin/addUser';
import DelUser from './admin/removeUser';
import GetUser from './admin/getUser';
import UpdateUser from './admin/updateUser';


// Import componets from Main Directory
import Login from './Login';
import Landing from './landing'; // Use the correct case for file names
import Navigation from './Nav';
import Gaming from './Gaming';
import Anime from './Anime';
import Music from './Music';

// Import components from the r directory
import Cadaver from './r/Cadaver';
import Creep from './r/Creep';
import Huh from './r/Huh';
import Kaito from './r/Kaito';
import Minecraft from './r/Minecraft';
import Naruto from './r/Naruto';
import RocketL from './r/RocketL';
import Valorant from './r/Valorant';
import Weathering from './r/Weathering';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    {/* Admin Panel */}
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/add" element={<CreateUser/>} />
                    <Route path="/get" element={<GetUser/>} />
                    <Route path="/delete" element={<DelUser/>} />
                    <Route path="/update" element={<UpdateUser/>} />
                    {/* Landing Routes */}
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/gaming" element={<Gaming />} />
                    <Route path="/anime" element={<Anime />} />
                    <Route path="/music" element={<Music />} />
                    {/* Routes for components in the r directory */}
                    <Route path="/r/cadaver" element={<Cadaver />} />
                    <Route path="/r/creep" element={<Creep />} />
                    <Route path="/r/huh" element={<Huh />} />
                    <Route path="/r/kaito" element={<Kaito />} />
                    <Route path="/r/minecraft" element={<Minecraft />} />
                    <Route path="/r/naruto" element={<Naruto />} />
                    <Route path="/r/rocketl" element={<RocketL />} />
                    <Route path="/r/valorant" element={<Valorant />} />
                    <Route path="/r/weathering" element={<Weathering />} />
                    {/* Default route or fallback */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
