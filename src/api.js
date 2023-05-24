import axios from 'axios';

async function getImagesByQueryText(queryText) {
    const { data } = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Sqsk21F-jsty4aGm4DCOrpFJI79e2VigZ6mh1aXpaNo',
        },
        params: {
            query: queryText
        }
    });

    return data;
}

export default getImagesByQueryText;