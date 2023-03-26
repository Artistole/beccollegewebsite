const search = window.location.pathname;
const params = search.includes('/departments') ? search.split('/')[2] : ""
export const getDeptFromUrl = () => { return params }
