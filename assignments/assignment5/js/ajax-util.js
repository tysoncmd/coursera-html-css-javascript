(function (gloabl) {
    //name space
    var ajaxUtils = {};

    function getRequestObject () {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else {
            gloabl.alert("Ajax is not supported!");
            return null;
        }
    }

    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
        var request = getRequestObject();
        request.onreadystatechange = function() {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        requestUrl.send(null);
    }
    

    function handleResponse(request, responseHandler) {
        if((request.readyState == 4) && (request.status == 200)) {

            if(isJsonResponse == undefined) {
                isJsonResponse = true;
            }
            if(isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            }
        }
    }
    
    globalThis.$ajaxUtils = ajaxUtils;

})(window);
