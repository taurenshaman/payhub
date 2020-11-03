"use strict";

class InputUtility {
    public static copyToClipboard() {
        try {
            document.execCommand("copy");
        }
        catch (err) {
            console.log("InputUtility.copyToClipboard: " + err)
        }
    }

}