import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import { Footer, Navbar } from './components/ReUse';

const App = () => (
    <>
        <Navbar />
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
        </Box>
        <Footer />
    </>
);

export default App;
