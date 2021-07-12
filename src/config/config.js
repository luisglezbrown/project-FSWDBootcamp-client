const PORT = 8000;
const BASE_API_URL = `http://localhost:${PORT}/api/`;
const LOGIN_URL = BASE_API_URL + "login_check";
const SESSION_URL = BASE_API_URL + "session";
const PRIVATE_URL = BASE_API_URL + "private";
const ADMIN_URL = BASE_API_URL + "admin";

/* Endpoints - Métodos GET*/
const GET_CITIES_ALL = BASE_API_URL + "allcities";
const GET_CITIES_TOP = BASE_API_URL + "topdestinations";
const GET_TOUR_DETAILS = BASE_API_URL + "tourdetails/";
const GET_TOURS_BY_CITY = BASE_API_URL + "toursbycity/";
const GET_USER_LOGGED = BASE_API_URL + "me";
const GET_GUIDE_DETAILS = BASE_API_URL + "guidedetails/";
const GET_GUIDES_LATEST = BASE_API_URL + "latestguides";
const GET_CATEGORY_ALL = BASE_API_URL + "categorieslist";

/* Endpoints - Métodos POST */
const POST_TOUR_NEW = BASE_API_URL + "newtour";
const POST_TOUR_IMG = BASE_API_URL + "uploadtourimage/";
const POST_USER_NEW = BASE_API_URL + "register";
const POST_USER_IMG = BASE_API_URL + "uploadguideimage/";
const POST_BOOKING_NEW = BASE_API_URL + "newbooking";

export {
    LOGIN_URL,
    SESSION_URL,
    PRIVATE_URL,
    ADMIN_URL,
    GET_CITIES_ALL,
    GET_CITIES_TOP,
    GET_TOUR_DETAILS,
    GET_TOURS_BY_CITY,
    POST_TOUR_NEW,
    POST_TOUR_IMG,
    POST_USER_NEW,
    GET_USER_LOGGED,
    POST_USER_IMG,
    GET_GUIDE_DETAILS,
    GET_GUIDES_LATEST,
    POST_BOOKING_NEW,
    GET_CATEGORY_ALL
};