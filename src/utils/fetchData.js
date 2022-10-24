export const exercisesOptions = {
    method: 'GET',
    headers: {
        // Base on your key
        'X-RapidAPI-Key': process.env.FITNESS_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const youtubeSearchOptions = {
    method: 'GET',
    headers: {
        // Base on your key
        'X-RapidAPI-Key': process.env.YOUTUBE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
};

export const fetchExercises = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
