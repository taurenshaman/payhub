"use strict";

class UIHelper {

    public static ShowCharm(id) {
        Metro.charms.open("#" + id);
    }

    public static HideCharm(id) {
        Metro.charms.close("#" + id);
    }

    public static HideCharms(ids) {
        _.forEach(ids, id => {
            Metro.charms.close("#" + id);
        });
    }

    public static ShowOrHideCharm(id, canClose) {
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

    public static GoBack() {
        window.history.back();
    }

    public static getIcon(noteType: string): string {
        let icon = "mif-embed2";
        // switch (noteType) {
        //     case ModelData.Type_Document:
        //         icon = 'mif-file-code';
        //         break;
        //     case ModelData.Type_Mind:
        //         icon = 'mif-share';
        //         break;
        //     case ModelData.Type_Section:
        //         icon = 'mif-book-reference';
        //         break;
        //     case ModelData.Type_Dialog:
        //         icon = 'mif-chat-bubble-outline';
        //         break;
        //     case ModelData.Type_XY:
        //         icon = 'mif-windows';
        //         break;
        //     case ModelData.Type_5W2H1E:
        //         icon = 'mif-dashboard';
        //         break;
        //     case ModelData.Type_BusinessModelCanvas:
        //         icon = 'mif-dashboard';
        //         break;
        //     case ModelData.Type_OsborneCheckList:
        //         icon = 'mif-dashboard';
        //         break;

        //     case ModelData.Type_Topic:
        //         icon = 'mif-folder-special2';
        //         break;
        //     case ModelData.Type_LanguagePack:
        //         icon = 'mif-language';
        //         break;
        //     case ModelData.ItemType_vocabulary:
        //         icon = 'mif-language';
        //         break;

        //     case ModelData.Type_SingleChoicesSet:
        //         icon = 'mif-done';
        //         break;

        //     default:
        //         icon = 'mif-embed2';
        //         break;
        // }
        return icon;
    }

}