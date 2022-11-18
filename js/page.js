/*
 *  Copyright 2012 Zhan Xin Information Co., Ltd.
 *  http://www.zhaninfo.com
 *
 */
 
"use strict";
var _promise;
var ports = [];
var msgId = 0;
var zhaninfo = zhaninfo || {};
zhaninfo.smartpki = zhaninfo.smartpki || {};
zhaninfo.smartpki.port = function(tabid) {
   this.tabid = tabid;
   this.key = null;
   ports[tabid] = this;
   msgId = tabid * 10000;
};
zhaninfo.smartpki.port.prototype.addMessageListener = function(callback) {
   this.messageCB = callback;
};
zhaninfo.smartpki.port.prototype.addDisconnectListener = function(callback) {
   this.disconnectCB = callback;
};
zhaninfo.smartpki.port.prototype.disconnect = function() {
  var msg = {};
  msg.smartpkiReq = 'reqClose';
  msg.tabid = this.tabid;
  window.postMessage(msg, '*');
};
zhaninfo.smartpki.port.prototype.postMessage = function(msg) {
  msg.tabid = this.tabid;
  msg.msgId = msgId++;
  if (msg.pin && this.key) {
    try {
      msg.pin = this.key.encrypt(msg.pin+"_PKI");
		} catch(e){
		}
  }
  window.postMessage(msg, '*');
  return msg.msgId;
};
window.addEventListener("message", function(event) {
  if (event.source !== window || !event.data.smartpkiRes) 
     return;
  var cmd = event.data.smartpkiRes;
  if (cmd == "resOpen") {
     if (event.data.res.success) {
         _promise.resolve(new zhaninfo.smartpki.port(event.data.res.success, event.data.res.key));
     } else if (event.data.res.err) {
         _promise.reject(event.data.res.err);
     } else {
         _promise.reject("SmartPKI internal error");
     }
     delete document._promise;
  } else if (cmd == "resClose") {
     var p = ports[event.data.tabid];
     if (p.disconnectCB) {
         p.disconnectCB();
     }
  } else if (cmd == "info") {
     var p = ports[event.data.tabid];
     if (event.data.message.modulus) {
        try {
          var rsa = new ziRSAKey();
          rsa.setPublic(event.data.message.modulus, '10001');
          p.key = rsa;
        } catch (e) {
        }
        delete event.data.message.modulus;
		 }
     if (p.messageCB) {
        event.data.message.min_ap_version='0.2.0.0';
        p.messageCB(event.data.message);
     }
  } else if (cmd) {
     var p = ports[event.data.tabid];
     if (p.messageCB) {
         p.messageCB(event.data.message);
     }
  }
});
navigator.connectSmartPKI = function() {
  return new Promise(function(resolve, reject) {
    var msg = {};
    msg.smartpkiReq = 'reqOpen';
    msg.origin = location.href;
    window.postMessage(msg, '*');
    _promise = {resolve: resolve, reject: reject};
  });
};