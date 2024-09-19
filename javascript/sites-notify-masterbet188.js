import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging.js';


  var user_id             = '0000000001';
  var device_name         = 'Anonymous';
  var device_description  = '-';

  var configFirebase = {
    apiKey: "AIzaSyAH6g7pVGw8RF-Xtw1qty2cycG-VSjQAGo",
    authDomain: "push-notif-solusi-kita.firebaseapp.com",
    projectId: "push-notif-solusi-kita",
    storageBucket: "push-notif-solusi-kita.appspot.com",
    messagingSenderId: "128564797967",
    appId: "1:128564797967:web:5eb3eecd1eb349a5d7b97a",
    measurementId: "G-7FGW1G9PJD"
  };

  const app = initializeApp(configFirebase);
  const messaging = getMessaging(app);

  function open_subscrabe(){
    getRegisterToken();
  }

  function getRegisterToken() {
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/firebase-messaging-sw.js')
            .then((registration) => {
                const vapidKey = 'BHg2ACFAHU_ki4t_8nQp8UQ3PsS_G6In0wR2V9xcndOruMlYa9iMAI9dxUVuztbK2QWu2dg1dPkbCW3EBsn379c';
                 
                getToken(messaging, {vapidKey: vapidKey}).then(function(currentToken) {
                  if (currentToken) {
                    saveToken(currentToken);
                    console.log(currentToken);
                    sendTokenToServer(currentToken);
                  } else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                    setTokenSentToServer(false);
                  }
                }).catch(function(err) {
                  console.log('An error occurred while retrieving token. ', err);
                  setTokenSentToServer(false);
                });
            });
      }
  }

  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }

  function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' + 'unless it changes');
    }
  }

  function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
  }

  function saveToken(currentToken) {
    console.log(currentToken);
    jQuery.ajax({
      data: {
        "user_id": user_id,
        "name": device_name,
        "fcm_registration_token": currentToken,
        "description": device_description
      },
      type: "post",
      url: "https://adminntf001.info/requests/subscription/"+user_id,
      success: function(result) {
        console.log(result);
      }
    });
  }

  onMessage(function(payload) {
    var title = payload.data.title;
    var options = {
      body: payload.data.body,
      icon: payload.data.icon,
      image: payload.data.image,
      data: {
        time: new Date(Date.now()).toString(),
        click_action: payload.data.click_action
      }
    };
    var myNotification = new Notification(title, options);
  });
  
  var param_clicked= [];
  var data_clicked = location.search.replaceAll('?', '');
  var data_stape_1 = data_clicked.split('&');
  for (let index = 0; index < data_stape_1.length; index++) {
      var data_stape_2 = data_stape_1[index].split('=');
      param_clicked[data_stape_2[0]] = data_stape_2[1];
  }


  if (param_clicked['clicked_id']) {
    $.ajax({ url:'https://json.geoiplookup.io/', type: "GET", dataType: "json",
      error: function(){},
      success: function(data_resp){
          data_resp['clicked_id'] = param_clicked['clicked_id'];

          jQuery.ajax({
            data: data_resp,
            type: "post",
            url: "https://adminntf001.info/requests/clicked",
            success: function(result) {
              console.log(result);
            }
          });
      }
    });
  }

export function open_and_close_false(url) {
    window.open(url);
    document.getElementById('myModalNotifikasi').style.display = 'none';
}

export function open_and_close_true() {
    open_subscrabe();
    document.getElementById('myModalNotifikasi').style.display = 'none';
}
  
window.open_and_close_false = open_and_close_false;
window.open_and_close_true = open_and_close_true;

document.addEventListener("DOMContentLoaded", function(event) {
  if (Notification.permission != 'granted'){
    $.ajax({
      url: location.protocol+'//'+location.host+'/firebase-messaging-sw.js',
      type:'HEAD',
      error: function(){
        open_popup_subscrabe(user_id, false);
      }, success: function(){
        open_popup_subscrabe(user_id, true);
      }
    });
  }


  function open_popup_subscrabe(user_id, is_swfile) {
    var http = new XMLHttpRequest();
    http.open("GET", "https://adminntf001.info/requests/popup/"+user_id+"/"+is_swfile);
    http.onreadystatechange=function() {
        if(http.readyState == 4) {
            var data = JSON.parse(http.responseText);
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', data.modal);
        }
    }
    http.send(null);
  }
});
