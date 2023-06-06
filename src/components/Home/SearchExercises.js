import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exercisesOptions, fetchExercises } from '../../utils/fetchData';
import { HorizontalScrollbar } from '../ReUse';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchExercises(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exercisesOptions,
            );

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchExercises(
                'https://exercisedb.p.rapidapi.com/exercises',
                exercisesOptions,
            );

            const searchedExercises = exercisesData.filter(
                (item) =>
                    item.name.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '23px' } }}
                mb="49px"
                textAlign={{ xs: 'left', sm: 'center' }}
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '1170px', xs: '100%', sm: '550px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '173px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                        fontSize: { lg: '20px', xs: '14px' },
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyParts
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
