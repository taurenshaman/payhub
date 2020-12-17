﻿"use strict";

class UIHelper {
    //public static charmId: string = "charm";
    //public static editAreaIdInCharm: string = "divEditArea";

    public static ShowCharm(id) {
        //var charm = $("#" + id).data("charms");
        //charm.open();
        Metro.charms.open("#" + id);
    }

    public static HideCharm(id) {
        //var charm = $("#" + id).data("charms");
        //charm.close();
        Metro.charms.close("#" + id);
    }

    public static HideCharms(ids) {
        _.forEach(ids, id => {
            //UIHelper.HideCharm(id);
            Metro.charms.close("#" + id);
        });
    }

    public static ToggleCharm(id) {
        Metro.charms.toggle("#" + id);
    }

    public static disableElement(id) {
        $("#" + id).attr('disabled', "true");
    }

    public static enableElement(id) {
        $("#" + id).attr('disabled', "false");
    }

    public static ShowMessage(title, message) {
        Metro.notify.create(message, title, {
            cls: "info"
        });
    }

    public static ShowError(title, error) {
        Metro.notify.create(error, title, {
            cls: "alert"
        });
    }

    public static ToastError(msg, milleseconds = 5000) {
        const toast = Metro.toast.create;
        toast(msg, null, milleseconds, "bg-red fg-white");
    }

    public static ToastMessage(msg, milleseconds = 5000) {
        const toast = Metro.toast.create;
        toast(msg, null, milleseconds, "bg-green fg-white");
    }


    public static LaunchFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    public static SetupFullScreen(element, callbackFullScreenChange) {
        if (element.addEventListener) { // listen to exitFullScreen
            element.addEventListener('webkitfullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('mozfullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('fullscreenchange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
            element.addEventListener('MSFullscreenChange', () => {
                if (callbackFullScreenChange) {
                    callbackFullScreenChange();
                }
            }, false);
        }
    }

    public static Refresh() {
        window.location.reload();
        //window.location.href = window.location.href;
    }

    public static GoBack() {
        window.history.back();
    }

    public static CreateQRCode(eleId, text, size=256) {
        const qrContainer = document.getElementById(eleId);
        if (qrContainer) {
            const qrc = new QRCode(qrContainer, {
                text: text,
                width: size,
                height: size
            });
        }
    }

}