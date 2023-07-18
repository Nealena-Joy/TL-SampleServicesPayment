let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:8000';
        break;
    case 'NA':
        APIURL = 'NA'
}
export default APIURL;