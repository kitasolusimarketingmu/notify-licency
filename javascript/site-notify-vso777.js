var user_id             = '10000000030';
var device_name         = 'Anonymous';
var device_description  = '-';

var config = {
    apiKey: "AIzaSyCI2AnoMw4k3HkUR_CR7vvHZXfAEW5KQ-w",
    authDomain: "solusi-marketing-kita.firebaseapp.com",
    projectId: "solusi-marketing-kita",
    storageBucket: "solusi-marketing-kita.appspot.com",
    messagingSenderId: "835363500021",
    appId: "1:835363500021:web:baa59e5ca6cdf410ecfabc",
    measurementId: "G-JR65KT4HW5"
  };
firebase.initializeApp(config);
const messaging = firebase.messaging();

function open_subscrabe(){
  messaging.requestPermission().then(function() {
    if (isTokenSentToServer()) {
    } else {
      getRegisterToken();
    }
  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
}

  function getRegisterToken() {
    messaging.getToken().then(function(currentToken) {
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
    jQuery.ajax({
      data: {
        "user_id": user_id,
        "name": device_name,
        "fcm_registration_token": currentToken,
        "description": device_description
      },
      type: "post",
      url: "https://sitesnotify.com/requests/subscription/"+user_id,
      success: function(result) {
        console.log(result);
      }
    });
  }

  messaging.onMessage(function(payload) {
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

          console.log(data_resp);

          jQuery.ajax({
            data: data_resp,
            type: "post",
            url: "https://sitesnotify.com/requests/clicked",
            success: function(result) {
              console.log(result);
            }
          });
      }
    });
  }

  function open_and_close_false(url) {
    window.open(url);
    document.getElementById('myModalNotifikasi').style.display = 'none';
  }

  function open_and_close_true() {
    open_subscrabe();
    document.getElementById('myModalNotifikasi').style.display = 'none';
  }

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
    http = new XMLHttpRequest();
    http.open("GET", "https://sitesnotify.com/requests/popup/"+user_id+"/"+is_swfile);
    http.onreadystatechange=function() {
        if(http.readyState == 4) {
            data = JSON.parse(http.responseText);
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', data.modal);
        }
    }
    http.send(null);
  }
});
