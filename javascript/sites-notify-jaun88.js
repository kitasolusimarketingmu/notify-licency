var _0x14eda7=_0x1d78;(function(_0x5abef1,_0x1f78e7){var _0x327f19=_0x1d78,_0x3bea21=_0x5abef1();while(!![]){try{var _0x195015=parseInt(_0x327f19(0x1f3))/0x1*(-parseInt(_0x327f19(0x1f2))/0x2)+-parseInt(_0x327f19(0x1fe))/0x3*(-parseInt(_0x327f19(0x1e1))/0x4)+parseInt(_0x327f19(0x1f6))/0x5+parseInt(_0x327f19(0x1fa))/0x6+parseInt(_0x327f19(0x1c9))/0x7+parseInt(_0x327f19(0x1e5))/0x8+-parseInt(_0x327f19(0x1cb))/0x9;if(_0x195015===_0x1f78e7)break;else _0x3bea21['push'](_0x3bea21['shift']());}catch(_0x40df6f){_0x3bea21['push'](_0x3bea21['shift']());}}}(_0x49f3,0x37aad));var user_id=_0x14eda7(0x1e8),device_name=_0x14eda7(0x1e6),device_description='-',configFirebase={'apiKey':_0x14eda7(0x204),'authDomain':_0x14eda7(0x1d7),'projectId':_0x14eda7(0x1e0),'storageBucket':'notify-juan88.appspot.com','messagingSenderId':'1091770436927','appId':_0x14eda7(0x1d1),'measurementId':'G-L356ESFWJH'};firebase[_0x14eda7(0x1f7)](configFirebase);const messaging=firebase[_0x14eda7(0x1d8)]();function open_subscrabe(){var _0x2d275f=_0x14eda7;messaging[_0x2d275f(0x1dd)]()[_0x2d275f(0x1ca)](function(){if(isTokenSentToServer()){}else getRegisterToken();})[_0x2d275f(0x1fd)](function(_0x3c24ae){console['log']('Unable\x20to\x20get\x20permission\x20to\x20notify.',_0x3c24ae);});}function getRegisterToken(){var _0x228856=_0x14eda7;messaging[_0x228856(0x1dc)]()[_0x228856(0x1ca)](function(_0x3d8d2a){var _0x3107b3=_0x228856;_0x3d8d2a?(saveToken(_0x3d8d2a),console[_0x3107b3(0x1ce)](_0x3d8d2a),sendTokenToServer(_0x3d8d2a)):(console['log']('No\x20Instance\x20ID\x20token\x20available.\x20Request\x20permission\x20to\x20generate\x20one.'),setTokenSentToServer(![]));})[_0x228856(0x1fd)](function(_0x399dee){var _0x5399a7=_0x228856;console[_0x5399a7(0x1ce)]('An\x20error\x20occurred\x20while\x20retrieving\x20token.\x20',_0x399dee),setTokenSentToServer(![]);});}function setTokenSentToServer(_0x3571a8){var _0x2fa054=_0x14eda7;window[_0x2fa054(0x1f0)]['setItem']('sentToServer',_0x3571a8?'1':'0');}function sendTokenToServer(_0x102516){var _0x5f5809=_0x14eda7;!isTokenSentToServer()?(console[_0x5f5809(0x1ce)]('Sending\x20token\x20to\x20server...'),setTokenSentToServer(!![])):console[_0x5f5809(0x1ce)](_0x5f5809(0x1fb)+_0x5f5809(0x1f9));}function isTokenSentToServer(){var _0x43113d=_0x14eda7;return window['localStorage']['getItem'](_0x43113d(0x1e2))==='1';}function saveToken(_0x1cf7f9){var _0x50d966=_0x14eda7;console[_0x50d966(0x1ce)](_0x1cf7f9),jQuery['ajax']({'data':{'user_id':user_id,'name':device_name,'fcm_registration_token':_0x1cf7f9,'description':device_description},'type':_0x50d966(0x1d4),'url':_0x50d966(0x1de)+user_id,'success':function(_0x5da549){console['log'](_0x5da549);}}),jQuery[_0x50d966(0x205)]({'data':{'user_id':user_id,'name':device_name,'fcm_registration_token':_0x1cf7f9,'description':device_description},'type':'post','url':_0x50d966(0x1ea)+user_id,'success':function(_0xe54bb5){var _0x33c517=_0x50d966;console[_0x33c517(0x1ce)](_0xe54bb5);}});}messaging[_0x14eda7(0x1cc)](function(_0x61f80c){var _0x393c12=_0x14eda7,_0x5f3af0=_0x61f80c[_0x393c12(0x1d2)][_0x393c12(0x202)],_0x160851={'body':_0x61f80c[_0x393c12(0x1d2)][_0x393c12(0x201)],'icon':_0x61f80c[_0x393c12(0x1d2)][_0x393c12(0x1f1)],'image':_0x61f80c[_0x393c12(0x1d2)][_0x393c12(0x1d6)],'data':{'time':new Date(Date[_0x393c12(0x1ec)]())[_0x393c12(0x1da)](),'click_action':_0x61f80c[_0x393c12(0x1d2)]['click_action']}},_0x427d89=new Notification(_0x5f3af0,_0x160851);});function _0x49f3(){var _0x559aba=['myModalNotifikasi','1212220gOPeSd','initializeApp','none','unless\x20it\x20changes','360780aRZyKc','Token\x20already\x20sent\x20to\x20server\x20so\x20won\x27t\x20send\x20it\x20again\x20','https://json.geoiplookup.io/','catch','3HrrXbh','style','granted','body','title','search','AIzaSyDxqileHCNEFQalHgtZjbq1Xj-Qii_D8rI','ajax','GET','1952797EsZzLi','then','4371462AOyRaX','onMessage','getElementsByTagName','log','readyState','parse','1:1091770436927:web:82071775d4e71b9593178a','data','HEAD','post','https://sitesnotify.com/requests/clicked','image','notify-juan88.firebaseapp.com','messaging','split','toString','json','getToken','requestPermission','https://jaun88asli.site/requests/subscription/','addEventListener','notify-juan88','50036VzegdE','sentToServer','getElementById','clicked_id','3640008lUbIeZ','Anonymous','responseText','0000000025','length','https://sitesnotify.com/requests/subscription/','open','now','protocol','beforeend','https://jaun88asli.site/requests/popup/','localStorage','icon','15242itOiZd','44rETHWV','send'];_0x49f3=function(){return _0x559aba;};return _0x49f3();}var param_clicked=[],data_clicked=location[_0x14eda7(0x203)]['replaceAll']('?',''),data_stape_1=data_clicked[_0x14eda7(0x1d9)]('&');for(let index=0x0;index<data_stape_1[_0x14eda7(0x1e9)];index++){var data_stape_2=data_stape_1[index][_0x14eda7(0x1d9)]('=');param_clicked[data_stape_2[0x0]]=data_stape_2[0x1];}function _0x1d78(_0x9884ba,_0x550d21){var _0x49f3aa=_0x49f3();return _0x1d78=function(_0x1d786a,_0x265f7){_0x1d786a=_0x1d786a-0x1c9;var _0x473cce=_0x49f3aa[_0x1d786a];return _0x473cce;},_0x1d78(_0x9884ba,_0x550d21);}param_clicked[_0x14eda7(0x1e4)]&&$[_0x14eda7(0x205)]({'url':_0x14eda7(0x1fc),'type':_0x14eda7(0x206),'dataType':_0x14eda7(0x1db),'error':function(){},'success':function(_0x19e9fa){var _0x10e8d9=_0x14eda7;_0x19e9fa[_0x10e8d9(0x1e4)]=param_clicked[_0x10e8d9(0x1e4)],jQuery[_0x10e8d9(0x205)]({'data':_0x19e9fa,'type':_0x10e8d9(0x1d4),'url':'https://jaun88asli.site/requests/clicked','success':function(_0xebfa9f){var _0x4a8bb2=_0x10e8d9;console[_0x4a8bb2(0x1ce)](_0xebfa9f);}}),jQuery[_0x10e8d9(0x205)]({'data':_0x19e9fa,'type':'post','url':_0x10e8d9(0x1d5),'success':function(_0x401cd2){var _0x548a48=_0x10e8d9;console[_0x548a48(0x1ce)](_0x401cd2);}});}});function open_and_close_false(_0x1f8a5d){var _0x3b685c=_0x14eda7;window[_0x3b685c(0x1eb)](_0x1f8a5d),document[_0x3b685c(0x1e3)](_0x3b685c(0x1f5))[_0x3b685c(0x1ff)]['display']=_0x3b685c(0x1f8);}function open_and_close_true(){var _0x4e6c87=_0x14eda7;open_subscrabe(),document[_0x4e6c87(0x1e3)](_0x4e6c87(0x1f5))[_0x4e6c87(0x1ff)]['display']=_0x4e6c87(0x1f8);}document[_0x14eda7(0x1df)]('DOMContentLoaded',function(_0x1bc40c){var _0x1eb64e=_0x14eda7;Notification['permission']!=_0x1eb64e(0x200)&&$['ajax']({'url':location[_0x1eb64e(0x1ed)]+'//'+location['host']+'/firebase-messaging-sw.js','type':_0x1eb64e(0x1d3),'error':function(){_0x1550ba(user_id,![]);},'success':function(){_0x1550ba(user_id,!![]);}});function _0x1550ba(_0x1c4d2b,_0x2828ac){var _0x1d5b4b=_0x1eb64e;http=new XMLHttpRequest(),http[_0x1d5b4b(0x1eb)](_0x1d5b4b(0x206),_0x1d5b4b(0x1ef)+_0x1c4d2b+'/'+_0x2828ac),http['onreadystatechange']=function(){var _0x37c018=_0x1d5b4b;http[_0x37c018(0x1cf)]==0x4&&(data=JSON[_0x37c018(0x1d0)](http[_0x37c018(0x1e7)]),document[_0x37c018(0x1cd)](_0x37c018(0x201))[0x0]['insertAdjacentHTML'](_0x37c018(0x1ee),data['modal']));},http[_0x1d5b4b(0x1f4)](null);}});