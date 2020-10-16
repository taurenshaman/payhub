"use strict";

class StringUtility {
    public static EscapeSpecialChars(str: string): string {
        return str.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
    }

    static base64EncodeUnicode(str: string): string {
        if (window
            && "btoa" in window
            && "encodeURIComponent" in window) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
                return String.fromCharCode(("0x" + p1) as any);
            }));
        } else {
            console.warn("base64EncodeUnicode requirements: window.btoa and window.encodeURIComponent functions");
            return null;
        }
    }

}


class MarkdownUtility {
}