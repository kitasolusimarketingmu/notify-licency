$(document).ready(function(){
    var data_popup_push_notif = `<div>
                                   <div class="pa-main-container-wrapper-th-1 pa-th-1-top pa-main-container-th-1 pa-show-subs-box" id="pa-push-notification-subscription" style="display: none;">
                                      <div class="pa-subs-box-th pa-subs-box-th-1" style="background-color:#fff!important">
                                         <div class="pa-subs-icon-container"><img class="pa-subs-icon" src="https://imggalery.com/uploads/user_61/album_108/1760354700.png" alt="PushAlert" width="64" height="64" style="width:64px;height:64px"></div>
                                         <div class="pa-subs-msg-box-container">
                                            <div class="pa-subs-title-txt-container">
                                               <p class="pa-subs-title-txt" style="color:#333!important">Dapatkan Info Terbaru BOS01</p>
                                            </div>
                                            <div class="pa-subs-msg-txt-container">
                                               <p class="pa-subs-msg-txt" style="color:#777!important">Tekan "ya" untuk dapatkan notifikasi</p>
                                            </div>
                                         </div>
                                         <div class="pa-subs-btn-container">
                                            <div class="pa-subs-btn"><a class="pa-subs-btn-link" id="pa-deny-btn" href="#deny" style="background-color:#d3d3d3!important;color:#888!important">Nanti</a></div>
                                            <div class="pa-subs-btn"><a class="pa-subs-btn-link" id="pa-allow-btn" href="#allow" style="background-color:#0e82e5!important;color:#fff!important">Ya</a></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>`;

    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "https://kitasolusimarketingmu.github.io/notify-licency/css/css-popup-notif.css";
    document.head.appendChild(cssLink);

    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', data_popup_push_notif);

    $('#pa-deny-btn').click(function(){
      $('#pa-push-notification-subscription').fadeOut(500);
    });

    $('#pa-allow-btn').click(function(){
      $('#pa-push-notification-subscription').fadeOut(500);

      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (width / 2)) + dualScreenLeft;
      var top = ((height / 2) - (height / 2)) + dualScreenTop;

      window.open("https://infobos01.com/", "Info BOS01", "width=500,height=500, top=' + top + ', left=' + left");
    });

    function checkPopup() {
      var today = new Date().toISOString().slice(0, 10);
      var lastPopupDate = localStorage.getItem("lastPopupDate");
      if (lastPopupDate !== today) {
          $('#pa-push-notification-subscription').fadeIn(500);
          localStorage.setItem("lastPopupDate", today);
      }
    }

    checkPopup();

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
              url:  "https://infobos01.com/requests/clicked",
              success: function(result) {
                console.log(result);
              }
            });
        }
      });
    }
  });
