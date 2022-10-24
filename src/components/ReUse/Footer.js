import React, { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../../assets/images/Logo-1.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#6f9196">
        <Stack
            gap="40px"
            sx={{ alignItems: 'center' }}
            flexWrap="wrap"
            px="40px"
            pt="24px"
        >
            <img
                src={Logo}
                alt="logo"
                style={{ width: '80px', height: '50px' }}
            />
        </Stack>
        <Typography
            variant="h6"
            sx={{ fontSize: { lg: '28px', xs: '20px' } }}
            mt="30px"
            textAlign="center"
            pb="40px"
            color="#wheat"
        >
            Made with React by Ho Huy Duc Trinh
        </Typography>
    </Box>
);

export default memo(Footer);
