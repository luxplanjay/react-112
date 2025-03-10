import axios from 'axios';

export const fetchArticles = async (topic, currentPage) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
        params: {
            query: topic,
            hitsPerPage: 5,
            page: currentPage,
        },
    });

    return response.data.hits;
};
