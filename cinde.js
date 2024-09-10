var lat_container = document.getElementById("eurekadivlat");
var lat_iframe;
var lat_tenantToken;
var lat_btnClicked = false;
var lat_Status = "init";
var lat_isMin = false;
var lat_isFrameVisible = false;
var objElement = window.top.document;

function LATIconShow() {
    console.log("=========== Function called 01 ==============");
    // Search for the DOM element for the utility menu container
    ['macroponent-f51912f4c700201072b211d4d8c26010',
        'shadowRoot',
        'sn-polaris-layout',
        'shadowRoot',
        'sn-polaris-header',
        'shadowRoot',
        '.utility-menu'
    ].forEach(function (strId) {
        if (!objElement) {
            console.log("Element not found at step: " + strId);
            return;
        }
        objElement = strId === 'shadowRoot' ? objElement.shadowRoot : objElement.querySelector(strId);
    });
    console.log("objElement ======== OBJECT ELEMENT FOUND =================");
    console.log(objElement);
    setTimeout(function () {
        if (!objElement) {
            console.log("objElement is not found or is null.");
            return;
        }
        // Check if the objElement is part of a shadow DOM, and use querySelector directly
        alert("SEARCH ICON");
        var parentDiv = objElement.querySelector('#my_custom_icon');  // Use querySelector

        if (parentDiv) {
            console.log("Parent div found: #my_custom_icon. Hiding icon...");
            parentDiv.style.display = 'none';  // Hide the element using standard JS
        } else {
            console.log("Parent div with ID my_custom_icon not found.");
        }
    }, 1000);
}
LATIconShow();
chatUser.cindeversion = 2 ;
chatUser.tkn = chatUser.sessionID;
utk = chatUser.tkn
var lat_chatUser = chatUser;
var utk;
//$("#live-agent-counter").hide();
 // $('#btnCinde_Lat').hide();
function lat_addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}
var lat_blockChat = false;

window.onunload = function (event) { ClearUserAgentChat(); };

IsUserLoggedOut = false;
var keepAlive = function () {
    var apiURL = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net' + '/api/lat/keepAliveAgent/';
    fetch(apiURL + lat_chatUser.userId+'/'+IsUserLoggedOut )
        .then(function (response) {
            //console.log("Keep alive sent" + "frmCINDE");          
        })
        .catch(function (err) {

        });
};
var tid = setInterval(keepAlive, 5000);






//var dashboardPage = "testlat.html"; var thisPage = window.location.href; if (thisPage.indexOf(dashboardPage) === -1) { lat_blockChat = true; }
if (!lat_blockChat) {

    //var auth = getCookie("AuthToken");
    //var lastAuth = window.sessionStorage.getItem('lat_session');
    //if (lastAuth !== null) {
    //    if (auth !== lastAuth) {
    //        window.sessionStorage.removeItem('lat_tenanttoken');
    //        isNewSession = true;
    //        lat_getTenantToken();
    //    } else {
    //        isNewSession = false;
    //        lat_Status = true;
    //    }
    //} else {
    //

    isNewSession = true;
    lat_Status = "init";
    if (lat_chatUser.cindeversion != null && lat_chatUser.cindeversion > 1) {
        lat_tenantToken = lat_chatUser.tkn;
    }
    lat_getTenantToken();

    //window.sessionStorage.setItem('lat_session', auth);
}

var lat_iclose = function () {
    $('#lat_eurekaframe').animate({ 'width': '0' }, 'fast', 'swing', function () { $('#lat_eurekaframe').remove(); });
    lat_iframe = null;
    //lat_container.style.visibility = "visible";
    lat_btnClicked = false;
    lat_isMin = true;
    lat_isFrameVisible = false;
    $("#live-agent-counter").text(userqueue.length).show();
    $('#' + lat_chatUser.refreshctrlid).val("0");
};

function lat_bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

function showLatFrame() {

    // lat_container.style.visibility = "hidden";
    if (!lat_iframe) {
        //  lat_iframe = document.createElement('iframe');
        // lat_iframe.setAttribute('id', 'lat_eurekaframe');
        // lat_iframe.setAttribute('allow', 'autoplay');

        // lat_container.parentNode.insertBefore(lat_iframe, lat_container);
        // $('#lat_eurekaframe').attr('style', 'z-index:99999999 !important');
        // //$('#lat_eurekaframe').css({ 'background-color': '#fff', 'border': '2px solid #68A1AF', 'border-top': '5px solid #68A1AF', 'text-align': 'justify', 'height': '85%', 'width': '0', 'position': 'fixed', 'right': '250px', 'top': '0' }).attr('seamless', 'seamless').animate({ 'width': '850px' }, 1000);
        // $('#lat_eurekaframe').css({ 'background-color': '#fff', 'border': '2px solid #68A1AF', 'border-top': '5px solid #68A1AF', 'text-align': 'justify', 'height': '80%', 'width': '0', 'position': 'fixed', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'border-radius': '10px', 'box-shadow': '5px 10px 18px #888888' }).attr('seamless', 'seamless').animate({ 'width': '1024px' }, 1000);
        // var cindeUrl = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/api/embed/cindelat.html?uid=' + encodeURI(lat_chatUser.userId) + '&uname=' + encodeURI(lat_chatUser.userName) + '&tid=' + encodeURI(lat_chatUser.tenantId) + '&domid=' + encodeURI(lat_chatUser.domainId) + '&custid=' + encodeURI(lat_chatUser.customerId) + '&summitbase=' + encodeURI(lat_chatUser.summitbase);
        // lat_iframe.onload = function () { lat_iframe.contentWindow.postMessage({ "action": "setqueue", "queue": userqueue, "agentid": lat_chatUser.userId }, '*'); };
        //var url = document.getElementById('lat_eurekaframe').src;
        //var tabOrWindow = window.open('http://localhost:3979/AgentModule/dist/live-agent/index.html?utk=' + utk, '_blank');
        var tabOrWindow = window.open('https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/AgentModule/dist/live-agent/index.html?utk=' + utk + '&uid=' + chatUser.userName, '_blank');                
            tabOrWindow.focus();
        
        // lat_iframe.setAttribute('src', cindeUrl);
    } else {
        $('#lat_eurekaframe').toggle('fast').css({ 'background-color': '#fff', 'border': '2px solid #68A1AF', 'border-top': '5px solid #68A1AF', 'text-align': 'justify', 'height': '80%', 'width': '0', 'position': 'fixed', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'border-radius': '10px', 'box-shadow': '5px 10px 18px #888888' }).attr('seamless', 'seamless').animate({ 'width': '1024px' }, 1000);
        lat_iframe.contentWindow.postMessage({ "action": "reopen" }, '*');

    }
    lat_isFrameVisible = true;
    //setTimeout(function () { lat_iframe.contentWindow.postMessage({ "action": "setqueue", "queue": userqueue, "agentid": lat_chatUser.userId }, '*'); }, 700);
}

function lat_getTenantToken() {

    
    lat_tenantToken = chatUser.tkn;
    OnTenantToken();
    // $.ajax({
    //     type: "POST",
    //     url: url,
    //     data: JSON.stringify(chatUser),
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: OnTenantToken,
    //     failure: function (response) {
    //         alert("Sorry, we were unable to authenticate to your company. Please contact the admin, if the problem persists.");
    //     }
    // });
    //if (lat_chatUser.cindeversion != null && lat_chatUser.cindeversion > 1) {
    //    url = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/api/token/getuser';
    //}



}


function getAuth_Lat_Token(response) {
    lat_chatUser = response;  
    window.sessionStorage.setItem('lat_tenanttoken', lat_tenantToken)
    triggerLAT();
}
function OnTenantToken(response) {
    if (chatUser.cindeversion != null && chatUser.cindeversion > 1) {        
        var url = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/api/token/getUser';
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(chatUser),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: getAuth_Lat_Token,
            failure: function (response) {
                alert("Sorry, we were unable to authenticate to your company. Please contact the admin, if the problem persists.");
            }
        });
    } else {

        if (response.d) {
            lat_tenantToken = response.d;
            utk = response.d
        } else {
            lat_tenantToken = response;
            utk = response
        }
        triggerLAT();
    }

}


function triggerLAT() {
    if (lat_tenantToken.length > 10) {
       $(objElement).find('#my_custom_icon').on('click', latclick);
        lat_container.innerHTML = "<div id=\"btnCinde_Lat\"  onclick=\"latclick();\"><span id=\"cinde_latbadge\" class=\"badge\" style=\"position: absolute;top: 1px;right: 1px;background-color:#ff004a;display:none;\"></span><img src=\"https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/public/chat.png\" /></div>";
       // $('#btnCinde_Lat').hide();
        window.sessionStorage.setItem('lat_tenanttoken', lat_tenantToken);
        LATConnect();
    } else {
        console.log("LAT: Tenant token invalid or null.");
    }
}
function latclick() {
    showLatFrame(true);
};

var getCookie = function (c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x === c_name) {
            return unescape(y);
        }
    }
};
function requestNotificationPermission() {
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission for notifications
        Notification.requestPermission()
            .then((permission) => {
                if (permission === 'granted') {
                    // Create a new notification
                    const notification = new Notification('New Message', {
                        body: 'A live chat request has been received.',
                        icon: 'path_to_notification_icon.png' // Provide the path to your custom notification icon
                    });

                    // Handle click event on the notification
                    notification.onclick = () => {
                        // Add your custom logic here for what happens when the user clicks on the notification
                        console.log('Notification clicked');
                    };
                }
            })
            .catch((error) => {
                console.error('Notification permission request error:', error);
            });
    } else {
        console.error('Notifications not supported');
    }
}
lat_bindEvent(window, 'message', function (e) {
    if (e.data.action === 'lat_minimize') {
        lat_iclose();
    } else {
        if (e.data.action === 'lat_getqueue') {
            lat_iframe.contentWindow.postMessage({ "action": "setqueue", "queue": userqueue }, '*');

        } else {
            if (e.data.action === 'lat_ignore') {
debugger
                var f = userqueue.findIndex(function (o) { return o.cid == e.data.uinfo.cid; });
                if (f > -1) {
                    userqueue.splice(f, 1);
                }
                $("#live-agent-counter").text(userqueue.length).show();
                e.data.uinfo.agentId = window.sessionStorage.getItem('agent_id');
                e.data.uinfo.agentName = window.sessionStorage.getItem('agent_name');
                proxy.invoke('ignoreUsers', e.data.uinfo);

            }
            else {
                if (e.data.action === 'lat_accept') {
                    e.data.uinfo.agentId = window.sessionStorage.getItem('agent_id');
                    e.data.uinfo.agentName = lat_chatUser.userName;
                    proxy.invoke('acceptUser', e.data.uinfo)
                        .done(function (response) {
                            $("#acceptBtn").prop("disabled", false).css('cursor', 'default');
                            if (response.ResponseCode == "409") {
                                alert("This chat has been be taken by another analyst.");
                            }

                        }).fail(function (e) {
                            lat_iframe.contentWindow.postMessage({ "action": "chllogFail", "log": "", "cid": e.data.cid, "isAcceptedUser": false }, '*');
                        });
                } else {
                    if (e.data.action === 'lat_chllog') {
                        proxy.invoke('getHistory', e.data.cid).done(function (response) {
                            if (response.ResponseCode == "409") {
                               // $("#live-agent-counter").text(userqueue.length - 1);
                                //lat_iframe.contentWindow.postMessage({ "action": "chllogFail", "log": "", "cid": e.data.cid, "isAcceptedUser": false }, '*');
                                return;
                            }
                            var ind = userqueue.findIndex(function (o) { return o.cid == e.data.cid; });
                            if (response !== null && response.userDetails != null && response.userDetails.length > 0) {
                                response = response.userDetails;
                                if (e.data.isAcceptedUser != undefined) {
                                    lat_iframe.contentWindow.postMessage({ "action": "chllog", "log": response, "cid": e.data.cid, "isAcceptedUser": e.data.isAcceptedUser }, '*');
                                }
                                else {
                                    if (userqueue[ind].isAccepted == undefined) {
                                        userqueue[ind].isAccepted = false;
                                    }
                                    lat_iframe.contentWindow.postMessage({ "action": "chllog", "log": response, "cid": e.data.cid, "isAcceptedUser": userqueue[ind].isAccepted }, '*');
                                }
                            }
                        });
                    } else {
                        if (e.data.action === 'lat_agentmsg') {
                            proxy.invoke('agentMessage', e.data.msg)
                                .done(function (response) {
                                    if (response.ResponseCode != "200") {
                                        lat_iframe.contentWindow.postMessage({ "action": "networkFail", "log": false, "cid": e, "isAcceptedUser": false }, '*');
                                        return;
                                    }
                                    lat_iframe.contentWindow.postMessage({ "action": "messageSuccess", "log": true, "agentmsg": e.data.msg, "isAcceptedUser": false }, '*');
                                })
                                .fail(function (ef) {
                                    lat_iframe.contentWindow.postMessage({ "action": "networkFail", "log": false, "cid": ef, "isAcceptedUser": false }, '*');

                                });
                        } else {
                            if (e.data.action === 'lat_endchat') {
                                proxy.invoke('endChat', e.data.msg);
                            }
                        }
                    }
                }
            }
        }
    }
});



var userqueue = [];
var connection;
var proxy;
var script;


var _createConnection = function () {
    connection = $.hubConnection('https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net');

    if (!proxy) {
        proxy = connection.createHubProxy('agentHub');
        proxy.on('queueAdd', function (newuser) {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/profile/beep-01.wav');
            audioElement.play();
            requestNotificationPermission();
            if (lat_isFrameVisible) {
                if (newuser.uid != lat_chatUser.userId) {
                    if (!IsDuplicateUserExists(userqueue, newuser)) {
                       // lat_iframe.contentWindow.postMessage({ "action": "addUser", "user": newuser }, '*');
                    }
                }
            }
            if (newuser.uid != lat_chatUser.userId) {
                if (!IsDuplicateUserExists(userqueue, newuser)) {
                    userqueue.push(newuser);
                    $("#live-agent-counter").text(userqueue.length).show();
                }
            }

            // uncomment below for dev testing.        
            //if (lat_isFrameVisible) {
            //    if (!IsDuplicateUserExists(userqueue, newuser)) {
            //        userqueue.push(newuser);
            //        $("#live-agent-counter").text(userqueue.length).show();
            //    }
            //}
        });
        proxy.on('userMessage', function (newmsg) {
            console.log(JSON.stringify(newmsg));
            var audioMessage = document.createElement('audio');
            audioMessage.setAttribute('src', 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/profile/message.wav');
            audioMessage.play();
            if (lat_isFrameVisible) {
                //lat_iframe.contentWindow.postMessage({ "action": "userMessage", "msg": newmsg }, '*');
            }
        });

        proxy.on('setQueue', function (myQueue) {
            if (lat_isFrameVisible) {
               // lat_iframe.contentWindow.postMessage({ "action": "setqueue", "queue": myQueue }, '*');
            }
myQueue = myQueue.filter(function(el, i, x) {
    return x.some(function(obj, j) {
        return obj.cid === el.cid && (x = j);
    }) && i == x;
});
            userqueue = myQueue;

            $("#live-agent-counter").text(userqueue.length).show();
            // var last_lat_auth = window.sessionStorage.getItem('lastsessionID');
            // if (last_lat_auth != null) {
            //     if (last_lat_auth == encryptedLoginUID) {
            //         showLatFrame(true);
            //     }
            // }
            //window.sessionStorage.setItem('lastsessionID', this.encryptedLoginUID);
            //if (window.sessionStorage.getItem('lastsessionID') != null) {
            //    showLatFrame(true);
            //}
            //window.sessionStorage.setItem('lastsessionID', this.encryptedLoginUID);
        });
        proxy.on('removeQueue', function (cid) {
            if (lat_isFrameVisible) {
               // lat_iframe.contentWindow.postMessage({ "action": "removequeue", "cid": cid }, '*');
            }
            userqueue = userqueue.filter(function (a) { return a.cid !== cid; });
            $("#live-agent-counter").text(userqueue.length).show();
        });
        proxy.on('acceptDone', function (cid) {
            if (lat_isFrameVisible) {
              //  lat_iframe.contentWindow.postMessage({ "action": "accepted", "cid": cid }, '*');
            }
            var f = userqueue.findIndex(function (o) { return o.cid == cid; });
            if (f > -1) {
                userqueue[f].isAccepted = true;
            }

        });
    }
};

function _initializeClient() {

    var lat_ts = localStorage.getItem('lat_ts');

    if ($("#live-agent-counter").text() == '') //added refresh issue fix
    {
        localStorage.setItem('lat_ts', null);
        lat_ts = null;
    }

    if (lat_ts !== null) {
        var latts = parseInt(lat_ts);
        var currentts = new Date().getTime();
        var diff = currentts - latts;
        if (diff < 10000) {
            //alert("retur va");
            // return;
        }
    }

    if (!connection || !connection.id) {

        _createConnection();
        //passing in each and every request as querystring to maintain the agentID , since  ConnectionID keeps on changing.
        connection.qs = { SessionId: lat_chatUser.userId, token: window.sessionStorage.getItem('lat_tenanttoken') };

        if (window.sessionStorage.getItem('lat_tenanttoken') == null) {
            lat_getTenantToken();
            connection.qs = { token: window.sessionStorage.getItem('lat_tenanttoken') };
        }

        startConnection();

        connection.disconnected(function () {
            //ClearUserAgentChat();
            console.log('disconnected');
            setTimeout(function () {

                connection.start();
            }, 5000);
        });

    }
    else {
        console.log("already connected ");
    }
}

function startConnection() {
    connection.start({ withCredentials: false }).done(function () {
        console.log("connected - now sending roster");

        //chatUser.analyst_lat_locations = chatUser.analyst_lat_locations.filter(x => (x.LocationName == "Technology_Bangalore_LAT" || x.LocationName == "People_Bangalore_LAT"))
        //proxy.invoke('agentRoster', { "name": lat_chatUser.userName, "uid": lat_chatUser.userId, "domainId": lat_chatUser.domainId, "customerId": lat_chatUser.customerId, "agentDetails": chatUser.analyst_lat_locations }).done(function (response) {
        proxy.invoke('agentRoster', { "name": lat_chatUser.userName, "uid": lat_chatUser.userId, "domainId": lat_chatUser.domainId, "customerId": lat_chatUser.customerId }).done(function (response) {
            if (response !== null) {
                if (response.ResponseCode === "Unauthorized") {
                    lat_Status = 'failed';
                    return;
                }
                if (response.ResponseMessage === "Already Logged-In") {
                    lat_Status = 'loggedin';
                    startConnection();
                    return;
                }
                if (response.ResponseCode === "OK") {
                    try {
                        JSON.parse(response.ResponseMessage);
                        $(objElement).find('#my_custom_icon').show();

                    } catch (e) {

                    
                        window.sessionStorage.setItem('lat_tenanttoken', lat_tenantToken);

                    }

                } else {
                    lat_Status = 'failed';
                    return;
                }
            } else {
                lat_Status = 'failed';
                return;
            }
            $(objElement).find('#my_custom_icon').show();
            $('#' + lat_chatUser.refreshctrlid).val("1");
            setInterval(function () {
                localStorage.setItem('lat_ts', new Date().getTime().toString());
            }, 5000);
        });
        window.sessionStorage.setItem('agent_name', lat_chatUser.userName);
        window.sessionStorage.setItem('agent_id', lat_chatUser.userId);
    });
}

$("#hrefLogout").click(function () {
    var userqueue = new Array({ 'connectionid': connection.id, 'agentId': lat_chatUser.userId });
    var apiURL = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net' + '/api/lat/removeIgnoreCid';
    var blob = new Blob([JSON.stringify(inputs)], { type: "application/json" });
    navigator.sendBeacon(apiURL, blob);
});


var ClearUserAgentChat = function () {
    var tenantToken = window.sessionStorage.getItem('eureka_token');
    //iterate userqueue
    //var inputs = { cid: userqueue[0].cid, message: tenantToken };

    if (userqueue.length == 0) {
        userqueue = new Array({ 'connectionid': connection.id, 'agentId': lat_chatUser.userId })

    }
    else {
        userqueue[0].connectionid = connection.id;
        userqueue[0].agentId = lat_chatUser.userId;
    }


    var inputs = userqueue;
    var apiURL = 'https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net' + '/api/lat/removeAgentCid';
    var blob = new Blob([JSON.stringify(inputs)], { type: "application/json" });
    // navigator.sendBeacon(apiURL, blob);
    // var apiURL = "http://localhost:3979/api/lat/loadAgentName";
    //$.ajax({
    //    type: "POST",
    //    url: apiURL,
    //    data: JSON.stringify(inputs),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //    },
    //    error: function (error) {
    //    },
    //    failure: function (response) {
    //        alert("Sorry, we were unable to authenticate to your company. Please contact the admin, if the problem persists.");
    //    }
    //});
};








function LATConnect() {

    script = document.createElement('script');
    script.onload = function () {
        _initializeClient();
    };
    script.src = "https://snow-cinde-eureka-integrationenv-f0ejhcbbg4aee3c6.centralindia-01.azurewebsites.net/Scripts/jquery.signalR-2.4.1.min.js";
    document.head.appendChild(script);

}
function IsDuplicateUserExists(queue, newuser) {
    var inArray = false;
    // return inArray;
    for (var i = 0; i < queue.length; i++) {
        if (queue[i]["uid"] == newuser.uid) {
            inArray = true;
        }
    }
    return inArray;
}
