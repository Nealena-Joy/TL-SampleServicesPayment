let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:8000';
        // APIURL = 'https://ast-server.onrender.com';
        break;
    case 'ast2023.onrender.com':              
        APIURL = 'https://ast-server.onrender.com';
        break;
    default:
        break;
}
export default APIURL;