module.exports = Object.freeze({

    //NAME CONSTANTS
    APPLICATION_NAME: "TCC",

    //APPLICATION URL'S
        APPLICATION_FRONT_BASE_URL: "www.teste.com",  //APPLICATION FRONT BASE URL  
        APPLICATION_SERVER_API_BASE_URL: 'http://localhost:8000/api/', //APPLICATION API SERVER BASE URL
        //APPLICATION_SERVER_API_BASE_URL: 'https://acompanhe.camara.leg.br/server/api/',
   
    //ROUTES
        INITIAL_PAGE_URL: '/', //Application Login and Initial page
        ESTUDIO_PAGE_URL: '/estudio', //Application Estudio Page
        DASHBOARD_BASE_URL: '/dashboard/',
        INFRACTION_LIST_PAGE_URL: '/infraction_list',
        INFRACTION_TRANSFERING_PAGE_URL: '/infraction_transfering',
        INFRACTION_CANCEL_PAGE_URL: '/infraction_cancel',
        DRIVER_LIST_PAGE_URL: '/driver_list',
        AUTHORITIE_LIST_PAGE_URL: '/authoritie_list',
        DRIVER_PROFILE_PAGE_URL: '/perfil',

    //API'S BACKEND
        //AUTH URL'S
            TOKEN_REFRESH_URL: '/token/refresh/', //Application Api Token REFRESH PATH
            TOKEN_OBTAIN_URL: '/token/obtain/', //Application Api Token PATH
            TOKEN_VERIFY_URL: '/token/verify/', //Application Api Token Verify

  });