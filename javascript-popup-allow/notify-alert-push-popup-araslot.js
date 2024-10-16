$(document).ready(function(){
    var data_popup_push_notif = '<style type="text/css">#pa-push-notification{top:0;width:100%;position:absolute}.pa-push-notification{display:block;background:#fff;padding:15px;position:fixed;z-index:999999999;box-shadow:0 0 5px 0 #555;font-weight:300;max-width:400px;border-radius:3px;bottom:auto;top:10px;left:50%}.pa-push-notification.Center,.pa-push-notification.center{top:50%;left:50%}.pa-push-notification.topCenter{margin-top:auto!important}.pa-push-notification.bottomCenter{bottom:10px;top:auto;margin-top:auto!important}.pa-push-notification.topLeft{margin-left:auto!important;margin-top:auto!important;left:10px;right:auto}.pa-push-notification.topRight{margin-left:auto!important;margin-top:auto!important;right:10px}.pa-push-notification.bottomLeft{bottom:10px;margin-left:auto!important;margin-top:auto!important;top:auto;left:10px;right:auto}.pa-push-notification.bottomRight{bottom:10px;margin-left:auto!important;margin-top:auto!important;top:auto;right:10px}.pa-push-notification .pa-logo{float:left;margin-right:10px}.pa-push-notification-confirm img.pa-logo{margin:0 auto;width:64px;height:64px}.pa-push-notification p{margin:0}.pa-push-notification .pa-promo-text{overflow:hidden;margin-bottom:20px}.pa-push-notification .pa-actions{text-align:right;clear:both}.pa-push-notification .pa-actions a,.pa-push-notification .pa-actions button,.pa-push-notification-confirm .pa-actions button{background:#2e6dbd;color:#fff;border:1px solid #14498d;border-radius:3px;display:inline-block;padding:7px 30px;text-decoration:none;font-size:16px;font-weight:300;margin-left:8px;line-height:1;outline:0;cursor:pointer;margin-bottom:0}.pa-push-notification .pa-actions a.deny,.pa-push-notification .pa-actions button.deny{color:#444;background-color:#fff;margin:0;line-height:17px;font-size:15px}.pa-push-notification-confirm .pa-actions button.deny{color:#444;background-color:#fff;margin:0}.pa-push-notification a.powered_by,.pa-push-notification-confirm a.powered_by{position:absolute;bottom:2px;left:6px;color:#337ab7;font-size:11px;font-weight:400;text-decoration:none;line-height:normal}#pa-push-notification-confirm{top:0;width:100%;position:absolute;box-sizing:content-box;left:0}#pa-push-notification-confirm div{box-sizing:content-box}.pa-push-notification-confirm{display:block;background:#fff;padding:20px;position:fixed;z-index:999999999;box-shadow:0 0 5px 0 #555;font-weight:300;width:300px;border-radius:3px;left:50%;top:50%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px}.pa-push-notification-confirm p{font-size:15px;margin:0;margin-top:20px;color:#797979}.pa-push-notification-confirm h2{margin:25px auto;font-size:1.5em;text-transform:none;letter-spacing:normal}.pa-push-notification-confirm p.pa-actions{margin-top:20px}.pa-push-notification-confirm a.powered_by{width:100%}.pa-subscribe-widget-side{position:fixed;top:50%;right:0;box-shadow:rgba(255,255,255,.247059) 1px 1px 1px inset,rgba(0,0,0,.498039) 0 1px 2px;background:#337ab7;border-radius:4px 0 0 4px;border:1px solid #fff;border-right:0;height:135px!important;width:30px;margin-top:-68px;cursor:pointer}.pa-subscribe-widget-side.pa-widget-left{left:0;right:auto;-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}.pa-subscribe-widget-side>svg{margin-left:0;margin-top:0;width:30px;height:136px}.pa-subscribe-widget-side.pa-widget-left>svg{transform:scaleX(-1)}.pa-subscribe-widget-side span.pa-sep{display:block;height:1px;background:#fff;border-top:1px solid #000;opacity:.25;width:100%;position:absolute;top:32px}.pa-subscribe-widget-side span.pa-text{color:#fff;transform:rotate(-90deg);position:absolute;left:-32px;top:64px;line-height:30px;padding-right:5px;text-shadow:0 -1px 0 rgba(0,0,0,.8);letter-spacing:.6px}.pa-subscribe-widget-round{position:fixed;right:0;box-shadow:1px 1px 1px rgba(0,0,0,.5);background:#337ab7;border-radius:100%;border-right:0;width:50px;height:50px!important;bottom:10px;right:10px;z-index:2147483647;cursor:pointer}.pa-subscribe-widget-round svg{margin-left:9px;margin-top:9px;background-size:cover;background-position-x:0;left:0;right:0;height:32px;width:32px}@keyframes pa-shake{10%,90%{transform:translate3d(-1px,0,0);transform:rotate(2deg);transform-origin:50% 0}20%,80%{transform:translate3d(2px,0,0);transform:rotate(-4deg);transform-origin:50% 0}30%,50%,70%{transform:translate3d(-4px,0,0);transform:rotate(8deg);transform-origin:50% 0}40%,60%{transform:translate3d(4px,0,0);transform:rotate(-8deg);transform-origin:50% 0}}.pa-subscribe-widget-round:hover>svg{animation:pa-shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}.pa-subscribe-widget-round.pa-opened>svg{opacity:0}.pa-subscribe-widget-round.pa-opened>svg.close,.pa-subscribe-widget-round.pa-opened>svg.pa-close{opacity:1;animation:none}.pa-subscribe-widget-round.pa-opened,.pa-subscribe-widget-round.pa-unsubscribe.pa-desktop:focus,.pa-subscribe-widget-round.pa-unsubscribe.pa-desktop:hover,.pa-subscribe-widget-round.pa-unsubscribe.pa-opened,.pa-subscribe-widget-round:focus,.pa-subscribe-widget-round:hover,.pa-subscribe-widget-side.pa-opened,.pa-subscribe-widget-side.pa-unsubscribe.pa-desktop.pa-opened,.pa-subscribe-widget-side.pa-unsubscribe.pa-desktop:focus,.pa-subscribe-widget-side.pa-unsubscribe.pa-desktop:hover,.pa-subscribe-widget-side:focus,.pa-subscribe-widget-side:hover{outline:0;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent;opacity:1}.pa-subscribe-widget-round>svg{position:absolute;transition:opacity .35s ease-out}.pa-subscribe-widget-round svg.close,.pa-subscribe-widget-round svg.pa-close{margin-left:18px;margin-top:18px;background-size:cover;background-position-x:0;background-position-x:16px;opacity:0;transition:opacity .35s ease;height:16px;width:16px}.pa-subscribe-widget-round svg.pa-close-widget{left:42px;top:-8px;margin:0;opacity:1;height:18px;width:18px;padding:5px}.pa-subscribe-widget-round.pa-subscribe-widget-custom svg.pa-close-widget{left:50px;top:-8px;margin:0;opacity:1;height:10px;width:10px;padding:5px;animation:none}.pa-subscribe-widget-round.pa-unsubscribe,.pa-subscribe-widget-side.pa-unsubscribe{opacity:.65;transition:opacity .5s ease}.pushalert-notification-info{user-select:none;width:250px;background:#fff;border:1px solid #bbb;position:fixed;bottom:70px;right:50px;opacity:0;transform:scale(0) translateZ(0);transition:transform 150ms ease-in-out,opacity 150ms ease-in-out;transform-origin:right bottom;box-shadow:0 2px 6px 0 rgba(0,0,0,.4);border:0;border-radius:10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:default}.pushalert-notification-info.pa-side-widget{bottom:auto;top:50%;transform-origin:right center}.pushalert-notification-info.pa-side-widget.pa-widget-left{right:auto;left:50px;transform-origin:left center}.pushalert-notification-info.pa-opened{transform:scale(1) translateZ(0)!important;opacity:1!important;z-index:2147483647}.pushalert-notification-info .pa-info-heading{letter-spacing:normal;font-size:16px;font-weight:500;margin:0;color:#fff;padding:10px;text-align:center;background:#337ab7;border-radius:10px 10px 0 0;opacity:.9;line-height:1.2em;display:block}.pushalert-notification-info-why{overflow:hidden}.pushalert-notification-info-why:hover .pushalert-notification-info-container{transform:translate3d(0,-42px,0)}.pa-no-branding .pushalert-notification-info-why:hover .pushalert-notification-info-container{transform:translate3d(0,-28px,0)}.pa-first-time .pushalert-notification-info-why:hover .pushalert-notification-info-container{transform:translate3d(0,0,0)}.pushalert-notification-info-why .pushalert-notification-info-container{transition:transform .35s}.pushalert-notification-info-why .pushalert-notification-info-container>div{position:relative;margin:10px 10px 5px;border:1px solid #eee}.pushalert-notification-info-container>div>img{margin:10px;position:absolute;width:48px;height:48px;left:0}.pushalert-notification-info-container>div>p{margin-left:69px;margin-top:10px;line-height:18px;margin-bottom:10px;margin-right:10px;font-size:15px;font-weight:300;color:#333;user-select:none;text-align:left}#pa-for-more-options{text-align:center;margin:0;font-weight:400;font-size:10px;line-height:10px;margin-bottom:5px;color:#aaa}.pushalert-notification-info-why:hover #pa-for-more-options{visibility:hidden}.pushalert-notification-info-why #pa-for-more-options{visibility:visible;transition:visibility .1s}.pa-notification-info-actions{position:absolute;text-align:center;opacity:0;transition:visibility .35s,opacity .35s,transform .35s;transform:translate3d(0,0,0);margin:0;margin-top:30px;width:100%;visibility:hidden}.pa-notification-info-actions.pa-first-time{display:none}.pa-first-time .pa-notification-info-actions.pa-first-time{position:relative;opacity:1;visibility:visible;margin-top:8px;display:block}.pa-no-branding .pa-notification-info-actions.pa-first-time{margin-bottom:9px}.pa-no-branding .pa-notification-info-actions.pa-first-time span{display:none}.pa-first-time .pushalert-notification-info-why #pa-for-more-options{display:none}.pa-notification-info-actions button{background:#33bea6;color:#fff;border:1px solid #299e8a;border-radius:3px;display:inline-block;padding:7px 15px;text-decoration:none;font-size:15px;font-weight:300;margin-left:8px;line-height:1;outline:0;cursor:pointer;margin-bottom:0;letter-spacing:normal;text-transform:none;height:auto;float:none}.pa-notification-info-actions button.pa-unsubscribe{color:#777!important;border-color:#bbb;background:#fff;margin:0}.pushalert-notification-info-why:hover .pa-notification-info-actions{opacity:1;transform:translate3d(0,-42px,0);visibility:visible}.pa-no-branding .pushalert-notification-info-why:hover .pa-notification-info-actions{opacity:1;transform:translate3d(0,-42px,0);visibility:visible}.pa-first-time .pushalert-notification-info-why:hover .pa-notification-info-actions{opacity:0;transform:translate3d(0,0,0);visibility:hidden}.pa-first-time .pushalert-notification-info-why:hover .pa-notification-info-actions.pa-first-time{opacity:1;transform:translate3d(0,0,0);visibility:visible}.pa-notification-info-actions span,.pa-powered-by{color:#aaa;font-size:10px;margin-top:5px;display:block;margin-bottom:2px}.pa-notification-info-actions span a,.pa-powered-by a{color:#337ab7;text-decoration:none}.pa-notification-info-actions span a:hover,.pa-powered-by a:hover{color:#3a8bd0;text-decoration:none}.pa-no-branding .pa-notification-info-actions span{display:none}#pa-close-confirm{width:16px;position:absolute;padding:6px;right:0;top:0;display:none;cursor:pointer}#pa-close-confirm .pa-close-x{stroke:#bbb;fill:transparent;stroke-linecap:round;stroke-width:5}.pa-push-notification-safari-unblock{display:block;background:#fff;padding:20px;position:fixed;z-index:999999999;box-shadow:0 0 5px 0 #555;font-weight:300;width:920px;border-radius:3px;left:50%;top:50%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px}.pa-push-notification-safari-unblock h2{margin:0 0 15px;color:#333;font-size:20px;line-height:1;letter-spacing:normal;font-weight:700}.pa-push-notification-safari-unblock a.powered_by{position:absolute;bottom:7px;left:6px;color:#337ab7;font-size:11px;font-weight:400;text-decoration:none;line-height:normal;width:100%}.pa-push-notification-safari-unblock .pa-unblock-img-container{position:relative}.pa-push-notification-safari-unblock .pa-unblock-img-container .pa-safari-unblock-txt{position:absolute;top:179px;left:372px;width:300px;font-size:13px;font-weight:500;text-align:left}.pa-push-notification-safari-unblock .pa-unblock-img-container .pa-safari-unblock-txt>img{height:16px;width:auto;vertical-align:text-bottom;margin-right:3px}a.pa-powered-by-txt,a.pa-subs-btn-link,a.pa-subs-btn-link-th-2,a.pa-subs-btn-link-th-3,a.pa-subs-btn-link-th-4,div.pa-main-container-th-1,div.pa-main-container-th-2,div.pa-main-container-wrapper-th-1,div.pa-main-container-wrapper-th-2,div.pa-main-container-wrapper-th-3,div.pa-main-container-wrapper-th-4,div.pa-subs-box-th-1,div.pa-subs-box-th-2,div.pa-subs-btn-container,div.pa-subs-btn-container-th-2,div.pa-subs-btn-container-th-3,div.pa-subs-icon-container,div.pa-subs-msg-box-container,div.pa-subs-msg-box-container-th-2,div.pa-subs-msg-box-container-th-3,div.pa-subs-msg-box-container-th-4,div.pa-subs-powered-by,div.pa-subs-powered-by-th-2,img.pa-icon-powered,p.pa-subs-msg-txt,p.pa-subs-msg-txt-th-3,p.pa-subs-msg-txt-th-4,p.pa-subs-title-txt,p.pa-subs-title-txt-th-2,p.pa-subs-title-txt-th-3,p.pa-subs-title-txt-th-4{margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:1;text-decoration:none;user-select:none;color:#333;background:0 0;text-align:left;-webkit-font-smoothing:antialiased;font-weight:400;z-index:9999;box-sizing:content-box}#pa-push-notification-subscription{z-index:2147483647}div.pa-main-container-wrapper-th-1{width:100%;position:fixed;top:0;left:0;right:0}div.pa-main-container-wrapper-th-2{width:100%;position:fixed;top:0;left:0;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.25);z-index:2147483647;right:0}div.pa-main-container-wrapper-th-3{width:100%;position:fixed;top:100px;left:0;opacity:0;right:0}div.pa-main-container-wrapper-th-4{position:fixed;top:10px;left:100px;right:auto;opacity:0}div.pa-main-container-th-1{margin:0 auto;max-width:420px}div.pa-main-container-th-2{margin:0 auto}div.pa-main-container-th-3{margin:0 auto;max-width:670px}div.pa-main-container-th-4{max-width:380px}div.pa-subs-box-th-1{min-height:64px;height:auto;padding:20px;background:#fff;position:relative;border-radius:0 0 5px 5px;box-shadow:0 0 8px rgba(0,0,0,.35);border-top:0}div.pa-subs-box-th-2{height:auto;position:relative;text-align:center;max-width:1000px;margin:0 auto}div.pa-subs-box-th-3{height:auto;background:#fff;position:relative;border:0;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,.35);text-align:center;margin-left:10px;margin-right:10px}div.pa-subs-box-th-4{min-height:64px;height:auto;padding:20px;background:#fff;position:relative;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.35);border-top:0}div.pa-main-container-wrapper-th-1.pa-th-1-center{opacity:0;position:fixed;top:50%;left:0;opacity:0;display:block;margin-top:-100px}div.pa-main-container-wrapper-th-1.pa-th-1-bottom,div.pa-main-container-wrapper-th-2.pa-th-2-bottom{top:auto;bottom:-500px}div.pa-main-container-wrapper-th-1.pa-th-1-top,div.pa-main-container-wrapper-th-2.pa-th-2-top{top:-500px;bottom:auto}div.pa-main-container-wrapper-th-1.pa-show-subs-box.pa-th-1-bottom,div.pa-main-container-wrapper-th-2.pa-show-subs-box.pa-th-2-bottom{top:auto;bottom:0;transition:top .5s cubic-bezier(.17,.04,.03,.94),bottom .5s cubic-bezier(.17,.04,.03,.94)}div.pa-main-container-wrapper-th-1.pa-show-subs-box.pa-th-1-top,div.pa-main-container-wrapper-th-2.pa-show-subs-box.pa-th-2-top{top:0;bottom:auto;transition:top .5s cubic-bezier(.17,.04,.03,.94),bottom .5s cubic-bezier(.17,.04,.03,.94)}div.pa-main-container-wrapper-th-1.pa-show-subs-box.pa-th-1-center,div.pa-main-container-wrapper-th-3.pa-show-subs-box{opacity:1;transition:opacity .5s cubic-bezier(.17,.04,.03,.94)}div.pa-main-container-wrapper-th-4.pa-show-subs-box{opacity:1}div.pa-main-container-wrapper-th-4.pa-show-subs-box .pa-subs-box-th-4{animation:animatebottompa .8s}@keyframes animatebottompa{from{bottom:-15px;opacity:.5}to{bottom:0;opacity:1}}div.pa-main-container-wrapper-th-1.pa-th-1-bottom .pa-subs-box-th-1{border-radius:5px 5px 0 0;margin-top:8px}div.pa-main-container-wrapper-th-1.pa-th-1-center .pa-subs-box-th-1{border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.35)}div.pa-subs-icon-container{position:absolute;top:20px}div.pa-subs-icon-container-th-3{display:inline-block;margin-top:15px;padding-right:5px;padding-left:5px}div.pa-subs-msg-box-container{margin-left:80px}div.pa-subs-msg-box-container-th-2{display:inline-block;margin:15px 10px 0}div.pa-subs-msg-box-container-th-3{display:inline-block;vertical-align:top;margin-top:15px;padding-left:5px;padding-right:5px}div.pa-subs-msg-box-container-th-4{display:inline-block;vertical-align:top;margin-top:15px;padding-left:5px;padding-right:5px}p.pa-subs-title-txt{color:#333;font-size:15px;font-weight:700;margin-bottom:15px;line-height:1.15em;letter-spacing:.02em;word-spacing:1px}p.pa-subs-title-txt-th-2{color:#333;font-size:18px;text-align:center;line-height:1.25em}p.pa-subs-title-txt-th-3{color:#333;font-size:15px;text-align:left;font-weight:700}p.pa-subs-title-txt-th-4{color:#333;font-size:15px;text-align:left;font-weight:700;margin-bottom:5px}p.pa-subs-msg-txt{color:#444;font-size:14px;font-weight:400;text-transform:none;line-height:1.15}p.pa-subs-msg-txt-th-3{color:#444;font-size:13px;font-weight:400;text-transform:none;margin-top:5px}p.pa-subs-msg-txt-th-4{color:#000;font-size:14px;text-transform:none;line-height:1.15;margin-bottom:10px}div.pa-subs-btn-container,div.pa-subs-btn-container-th-4{text-align:right}div.pa-subs-btn-container-th-2{display:inline-block;margin-top:15px}div.pa-subs-btn-container-th-2 .pa-subs-btn{margin-bottom:15px}div.pa-subs-btn-container-th-3{display:inline-block;vertical-align:top;padding-top:15px;padding-left:10px;padding-right:10px;text-align:center}div.pa-subs-btn-container-th-4 a.pa-subs-btn-link{font-size:14px}div.pa-subs-btn{display:inline-block}div.pa-subs-btn-th-3{display:inline-block;margin-bottom:15px}div.pa-subs-btn-th-4{display:inline-block}a.pa-subs-btn-link{display:block;min-width:60px;width:auto;text-align:center;padding:8px 12px;font-size:15px;background:#0e82e5;color:#fff;margin-top:15px;border-radius:3px}a.pa-subs-btn-link-th-2{display:block;min-width:60px;width:auto;text-align:center;padding:8px 12px;font-size:15px;background:#0e82e5;color:#fff;border-radius:3px}a.pa-subs-btn-link-th-3{display:block;min-width:60px;width:auto;text-align:center;padding:8px 12px;font-size:13px;background:#0e82e5;color:#fff;margin-left:10px;border-radius:3px}a.pa-subs-btn-link-th-4{display:block;min-width:50px;width:auto;text-align:center;padding:8px 12px;font-size:15px;margin-top:15px;background-color:#f9f9f9;color:#000;border:1px solid #bababa;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,.1)}a.pa-subs-btn-link-th-4:hover{background-color:#fdfdfd}div.pa-subs-btn #pa-allow-btn{background:#0e82e5;margin-left:20px}div.pa-subs-btn-th-3 #pa-allow-btn{background:#0e82e5}.pa-subs-btn-container-th-4 div.pa-subs-btn #pa-allow-btn{margin-left:10px}div.pa-subs-btn-th-3 #pa-deny-btn{background:#d3d3d3;color:#888}div.pa-subs-btn-th-4 #pa-deny-btn{margin-left:10px}div.pa-subs-btn-container-th-2 a#pa-deny-btn{background:0 0;color:#777;display:block;width:auto;text-decoration:none;text-align:center}div.pa-subs-powered-by{position:absolute;bottom:8px;left:10px}div.pa-subs-powered-by-th-2{position:absolute;right:2px;bottom:2px}div.pa-subs-powered-by-th-3{position:absolute;right:2px;bottom:-16px}div.pa-subs-powered-by-th-3 a.pa-powered-by-txt{font-size:13px;color:#337ab7}img.pa-icon-powered{margin-right:4px;vertical-align:bottom}a.pa-powered-by-txt{font-size:11px;vertical-align:bottom}a.pa-powered-by-txt:hover{text-decoration:underline}div.pa-subs-powered-by-th-2 a.pa-powered-by-txt{font-size:11px;vertical-align:bottom;color:#333}span.pa-powered-by-icon{margin-right:5px;display:inline-block}div.pa-main-container-th-2 div#pa-deny-btn{width:16px;height:16px;position:absolute;top:3px;right:3px;padding-left:10px;padding-bottom:10px;cursor:pointer;box-sizing:content-box;z-index:10000}.pa-powered-by-icon{width:14px!important;height:14px!important;margin-right:4px;vertical-align:bottom}.pa-subs-tnc-container{color:#777;font-size:12px;margin-top:20px;display:none}.pa-subs-tnc-container a{color:inherit;text-decoration:none}.pa-subs-tnc-container a:hover{text-decoration:underline}@media only screen and (max-device-width:480px){.pa-push-notification{max-width:100%;right:auto;border-radius:0;bottom:0;top:auto;left:auto}.pa-push-notification.topCenter,.pa-push-notification.topLeft,.pa-push-notification.topRight{top:0;bottom:auto;left:0;right:0;margin:0!important}.pa-push-notification.Center{bottom:auto;left:15px;right:15px;margin-left:0!important}.pa-push-notification.bottomCenter,.pa-push-notification.bottomLeft,.pa-push-notification.bottomRight{margin:0!important;bottom:0;right:0;left:0}.pa-push-notification.mobileTop{top:0;bottom:auto;left:0;right:0;margin:0!important}.pa-push-notification.mobileCenter{bottom:auto;left:15px;right:15px;margin-left:0!important;top:50%}.pa-push-notification.mobileBottom{margin:0!important;bottom:0;right:0;left:0;top:auto}.pa-push-notification-confirm{width:100%;right:auto;border-radius:0;bottom:0;top:auto;left:auto;margin:0!important;padding:20px 0}.pa-push-notification-confirm p{margin-top:0}.pa-push-notification-confirm h2{margin-bottom:0;margin-top:20px}.pa-push-notification-confirm p.pa-actions{margin-top:30px}div.pa-main-container-wrapper-th-1{width:100%;position:fixed;top:auto;bottom:auto;left:0;right:0;margin:0}div.pa-main-container-th-1{max-width:100%;width:100%;margin:0}div.pa-main-container-wrapper-th-1.pa-th-1-bottom div.pa-subs-box-th-1{margin:0;border-radius:0;border:0}div.pa-main-container-wrapper-th-1.pa-th-1-top div.pa-subs-box-th-1{margin:0;border-radius:0;border:0}div.pa-main-container-wrapper-th-1.pa-th-1-center{margin-left:10px;margin-right:10px;width:auto}div.pa-main-container-wrapper-th-1.pa-th-1-center.pa-main-container-th-1{max-width:100%;margin:0 10px}div.pa-subs-powered-by{position:absolute;bottom:5px;text-align:center;width:100%;left:-10px}div.pa-subs-msg-box-container-th-2{margin-top:20px}a.pa-subs-btn-link-th-2{min-width:100px}div.pa-subs-btn-container{text-align:center;margin-bottom:10px}img.pa-subs-icon{height:40px;width:40px}div.pa-subs-msg-box-container{margin-left:74px}p.pa-subs-title-txt,p.pa-subs-title-txt-th-4{font-size:18px}p.pa-subs-msg-txt{font-size:16px}a.pa-subs-btn-link{display:block;min-width:100px;width:auto;text-align:center;padding:12px;font-size:16px;margin-top:20px;background:#0e82e5;color:#fff}p.pa-subs-msg-txt-th-3{text-align:center;font-size:14px}a.pa-subs-btn-link-th-3{font-size:14px}p.pa-subs-title-txt-th-3{text-align:center;font-size:16px}div.pa-subs-btn-container-th-2{margin-bottom:10px;text-align:center}div.pa-subs-powered-by-th-2{position:absolute;bottom:5px;width:100%;text-align:center}div.pa-main-container-wrapper-th-2 #pa-allow-btn{margin-left:0}div.pa-close-btn-th-2{top:4px;right:4px}div.pa-main-container-wrapper-th-4{left:0;right:0;top:0}div.pa-main-container-th-4{max-width:100%}div.pa-subs-btn-container-th-4{text-align:center;margin-bottom:2px}}@media only screen and (max-width:300px){div.pa-main-container-wrapper-th-1 #pa-allow-btn{margin-left:0}}.pushalert-alerts-content{user-select:none;width:250px;background:#fff;border:1px solid #bbb;position:fixed;bottom:55px;opacity:0;transform:scale(0) translateZ(0);transition:transform 150ms ease-in-out,opacity 150ms ease-in-out;transform-origin:center bottom;box-shadow:0 2px 6px 0 rgba(0,0,0,.4);border:0;border-radius:5px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:default}.pushalert-alerts-content.pushalert-alerts-content-left{left:0;right:auto;top:50%;bottom:auto;margin-left:55px;transform-origin:left center}.pushalert-alerts-content.pushalert-alerts-content-right{left:auto;right:0;top:50%;bottom:auto;margin-right:55px;transform-origin:right center}.pushalert-alerts-content.pa-opened{transform:scale(1) translateZ(0)!important;opacity:1!important;z-index:2147483647}.pushalert-alerts-content:after{content:"";position:absolute;width:0;height:0;margin-left:-8px;bottom:-16px;left:50%;box-sizing:border-box;border:8px solid #000;border-color:transparent transparent #fff #fff;transform-origin:0 0;transform:rotate(-45deg);box-shadow:-2px 2px 3px 0 rgba(0,0,0,.3)}.pushalert-alerts-content.pushalert-alerts-content-left:after{transform:rotate(45deg);left:0;top:50%;right:auto;margin-left:0;margin-top:-10px}.pushalert-alerts-content.pushalert-alerts-content-right:after{transform:rotate(-135deg);right:0;top:50%;left:auto;margin-right:-16px;margin-top:10px}.pushalert-alerts-content-container{text-align:center;padding:15px 12px 5px}.pushalert-alerts-content-container p{line-height:1;font-size:15px;color:#333;padding:0;margin:2px 0 10px}.pushalert-alerts-content-button{margin-top:5px;font-size:16px;border:0;background:#33bea6;line-height:1;color:#fff;padding:10px 20px;border-radius:2px}.pushalert-alerts-header{user-select:none}p.pushalert-alerts-button-container{height:45px;overflow:hidden;line-height:1.3;color:#555;margin-bottom:4px}.pa-subscribe-widget-round[dir=rtl] svg,[dir=rtl] .pa-subscribe-widget-round svg{margin-left:0;-webkit-margin-start:8px}.pa-subscribe-widget-round[dir=rtl] svg.pa-close,[dir=rtl] .pa-subscribe-widget-round svg.pa-close{margin-left:0;-webkit-margin-start:16px}[dir=rtl] .pushalert-notification-info-container>div>p{margin-left:0;-webkit-margin-start:69px}[dir=rtl] div.pa-subs-msg-box-container{margin-left:0;-webkit-margin-start:80px;margin-right:80px}[dir=rtl] .pushalert-notification-info-container>div>img{left:auto;right:0}#paPriceDropAlt{background:#2196f3;color:#fff;border-radius:5px}#paPriceDropMsg{background:#2196f3;position:fixed;z-index:99999;color:#fff;padding:12px 18px;line-height:1;border-radius:5px;width:220px;text-align:center;left:50%;margin-left:-110px;transition:all .2s ease;bottom:-50px}.pa-subscribe-widget-round.pa-subscribe-widget-custom{border-radius:5px}.pa-subscribe-widget-round.pa-subscribe-widget-custom img{opacity:1;border:0;border-radius:5px;transition:opacity .5s ease}.pa-subscribe-widget-round.pa-subscribe-widget-custom.pa-opened img{opacity:0}a.pa-subs-btn-link-th-4,div.pa-main-container-wrapper-th-4,div.pa-subs-msg-box-container-th-4,p.pa-subs-msg-txt-th-4,p.pa-subs-title-txt-th-4{text-align:start}[dir=rtl] p.pa-subs-msg-txt,[dir=rtl] p.pa-subs-title-txt{text-align:start}[dir=rtl] .pa-main-container-th-1 div.pa-subs-btn-container{margin-top:10px}#pa-subscribe-widget-side-text{position:absolute;top:20px;transform:rotate(-90deg);right:4px;font-family:sans-serif;font-size:14px;letter-spacing:.75px;display:block;transform-origin:right bottom;white-space:nowrap;color:#fff;font-weight:300;user-select:none}.pa-widget-left #pa-subscribe-widget-side-text{bottom:7px;transform:rotate(-90deg) scaleX(-1);top:auto}.pa-subs-segment-list{list-style:none;margin:5px 5px 0 0;font-size:14px;color:#777;text-align:start;padding:0}.pa-subs-segment-list label{font-weight:400;padding:2px}.pa-subs-segment-list input{margin-right:5px;margin-left:5px}</style><div><div class="pa-main-container-wrapper-th-1 pa-th-1-top pa-main-container-th-1 pa-show-subs-box" id="pa-push-notification-subscription" style="display: none;"><div class="pa-subs-box-th pa-subs-box-th-1" style="background-color:#fff!important"><div class="pa-subs-icon-container"><img class="pa-subs-icon" src="https://imggalery.com/uploads/user_1/album_51/1721740860.png" alt="PushAlert" width="64" height="64" style="width:64px;height:64px"></div><div class="pa-subs-msg-box-container"><div class="pa-subs-title-txt-container"><p class="pa-subs-title-txt" style="color:#333!important">Dapatkan Info Terbaru AraSlot</p></div><div class="pa-subs-msg-txt-container"><p class="pa-subs-msg-txt" style="color:#777!important">Tekan "ya" untuk dapatkan notifikasi</p></div></div><div class="pa-subs-btn-container"><div class="pa-subs-btn"><a class="pa-subs-btn-link" id="pa-deny-btn" href="#deny" style="background-color:#d3d3d3!important;color:#888!important">Nanti</a></div><div class="pa-subs-btn"><a class="pa-subs-btn-link" id="pa-allow-btn" href="#allow" style="background-color:#0e82e5!important;color:#fff!important">Ya</a></div></div></div></div></div>';

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

      window.open("https://aranotif.com/", "Info Araslot", "width=500,height=500, top=' + top + ', left=' + left");
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
              url:  "https://aranotif.com/requests/clicked",
              success: function(result) {
                console.log(result);
              }
            });
        }
      });
    }
  });
