document.addEventListener("DOMContentLoaded", function(event) {
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
            url: "https://notifadmin-ibc138.bio/requests/clicked",
            success: function(result) {
              console.log(result);
            }
          });

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
}); 