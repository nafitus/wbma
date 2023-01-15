import {useState, useEffect} from 'react';
import {baseUrl} from '../utils/variables';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    const response = await fetch(baseUrl + 'media');
    const json = await response.json();
    const media = await Promise.all(
      json.map(async (file) => {
        const fileresponse = await fetch(baseUrl + 'media/' + file.file_id);
        return await fileresponse.json();
      })
    );
    setMediaArray(media);
  };
  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List, loadname', mediaArray);

  return {mediaArray};
};

export {useMedia};
