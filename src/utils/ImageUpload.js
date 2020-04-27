import axios from 'axios';
import { API_URI, FETCH_ERROR } from './constant';

export const imageUpload = async (file,folderPath, dispatch) => {
    let formData = new FormData();
    formData.append("file", file);    

    return await axios.post(`${API_URI}/uploadFile`, formData, {
        params: {folderPath: folderPath}
    }).catch(err => {
        dispatch({
            type: FETCH_ERROR,
            payload: err.response.data
          });
    });
}

export const deleteImageByName = (image) => {
    console.log(image);    
    return axios.delete(`${API_URI}/deleteByName`, {
        params: {image: image}
    });
}