import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {
    exercisesOptions,
    youtubeSearchOptions,
    fetchExercises,
} from '../utils/fetchData';
import {
    Detail,
    ExerciseVideos,
    SimilarExercises,
} from '../components/ExerciseDetail';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl =
                'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchExercises(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exercisesOptions,
            );
            const exerciseVideosData = await fetchExercises(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
                youtubeSearchOptions,
            );
            const targetMuscleExercisesData = await fetchExercises(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exercisesOptions,
            );
            const equipmentExercisesData = await fetchExercises(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exercisesOptions,
            );

            setExerciseDetail(exerciseDetailData);
            setExerciseVideos(exerciseVideosData.contents);
            setTargetMuscleExercises(targetMuscleExercisesData);
            setEquipmentExercises(equipmentExercisesData);
        };
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    );
};

export default ExerciseDetail;
