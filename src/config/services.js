import { AxiosInstance } from './config';


export const getLandingPageData = () => {
    return AxiosInstance.get('/getAllLandingPageData');
}