import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}