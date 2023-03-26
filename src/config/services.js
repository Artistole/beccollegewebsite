import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}

export const getDepartmentsData = () => {
    return AxiosInstance.get('/getDepartmentsData');
}

export const registerPlacementData = (data) => {
    return AxiosInstance.post('/placementRegistration', data);
}

export const getDepartmentsGraphData = () => {
    return AxiosInstance.get('/getdeptGraphData');
}
export const uploadImage = (data) => {
    return AxiosInstance.post('/uploadStaffImage', data);
}
export const getStaffImage = () => {
    return AxiosInstance.get('/getStaffImgage')
}