import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Loader, HorizontalScrollbar } from '../ReUse';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb={5}>
                Exercises that target the same{' '}
                <span color="#FF2625">muscle group</span>
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: '2',
                    position: 'relative',
                }}
            >
                {targetMuscleExercises.length ? (
                    <HorizontalScrollbar data={targetMuscleExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
            <Typography variant="h3" mb={5}>
                Exercises that use the same{' '}
                <span color="#FF2625">equipment</span>
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: '2',
                    position: 'relative',
                }}
            >
                {equipmentExercises.length ? (
                    <HorizontalScrollbar data={equipmentExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
