let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:8000';
        break;
    case 'https://ast2023.onrender.com':               // Client URL
        APIURL = 'https://ast-server.onrender.com'     // Server URL
}
export default APIURL;