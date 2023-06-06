import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exercisesOptions, fetchExercises } from '../../utils/fetchData';
import { Loader, ExerciseCard } from '../ReUse';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 6;

    const indexOfLastExercise = currentPage * exercisesPerPage; // 1 * 6 it will be set again paginate
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // 6 - 6
    const currentExercise = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise,
    );

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchExercises(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exercisesOptions,
                );
            } else {
                exercisesData = await fetchExercises(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exercisesOptions,
                );
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    if (!currentExercise.length) return <Loader />;

    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
            <Typography
                sx={{ typography: { xs: 'h4', lg: 'h3' } }}
                mb={{ xs: '20px', sm: '46px' }}
            >
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{
                    gap: { lg: '110px', xs: '50px' },
                }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercise.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Pagination
                                shape="rounded"
                                color="primary"
                                defaultPage={1}
                                count={Math.ceil(
                                    exercises.length / exercisesPerPage,
                                )}
                                page={currentPage}
                                // M.U.I auto change onChange={paginate} become onChange={(e) => paginate(e, value)}
                                onChange={paginate}
                                size="large"
                            />
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Pagination
                                shape="rounded"
                                color="primary"
                                defaultPage={1}
                                count={Math.ceil(
                                    exercises.length / exercisesPerPage,
                                )}
                                page={currentPage}
                                // M.U.I auto change onChange={paginate} become onChange={(e) => paginate(e, value)}
                                onChange={paginate}
                                size="small"
                            />
                        </Box>
                    </>
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
