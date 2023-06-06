import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../../assets/images/Logo.png';

const Navbar = () => (
    <Stack
        direction="row"
        sx={{
            gap: { sm: '123px', xs: '20px' },
            mt: { sm: '32px', xs: '20px' },
            justifyContent: { xs: 'space-between', lg: 'flex-start' },
            alignItems: { xs: 'center', lg: 'none' },
        }}
        px={{ xs: '5px', sm: '20px' }}
    >
        <Link to="/">
            <img
                src={Logo}
                alt="logo"
                className="logo"
                style={{ width: '48px', height: '48px', margin: '0px 20px' }}
            />
        </Link>
        <Stack
            direction="row"
            gap={{ xs: '20px', sm: '40px' }}
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: '#3A1212',
                    borderBottom: '3px solid #FF2625',
                }}
            >
                Home
            </Link>
            <a
                href="#exercises"
                style={{ textDecoration: 'none', color: '#3A1212' }}
            >
                Exercises
            </a>
        </Stack>
    </Stack>
);

export default memo(Navbar);
