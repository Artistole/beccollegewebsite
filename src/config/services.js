import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}

export const getPlacementData = () => {
    return AxiosInstance.get('/getPlacementsData');
}

export const getAcademicsData = () => {
    return AxiosInstance.get('/getAcademicsData');

}

export const getPlacementsNotifications = () => {
    return AxiosInstance.get('/getPlacementsNotifications');
}

export const getDepartmentsData = () => {
    return AxiosInstance.get('/getDepartmentsData');
}

export const registerPlacementData = (data) => {

    return AxiosInstance.post('/placementRegistration', data);
}

export const getDepartmentsGraphData = (data) => {
    return AxiosInstance.get('/getdeptGraphData');
}
export const uploadImage = (data) => {
    return AxiosInstance.post('/uploadStaffImage', data);
}
export const getStaffImage = () => {
    return AxiosInstance.get('/getStaffImgage')
}

    return AxiosInstance.post('/placementRegistration',data);
}

export const uploadImage = (data) => {
    return AxiosInstance.post('/uploadStaffImage', data);
}

export const getStaffImage = () => {
    return AxiosInstance.get('/getStaffImgage')
}
export const getFacilitiesChartData = () => {
    return AxiosInstance.get('/getLibraryGraphData');
}

