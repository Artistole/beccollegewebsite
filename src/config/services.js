import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}

export const uploadImage = (data) => {
    return AxiosInstance.post('/uploadStaffImage', data);
}


export const getStaffImage = () => {
    return AxiosInstance.get('/getStaffImgage')
}