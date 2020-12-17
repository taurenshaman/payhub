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

    public static async fileToBase64(file) {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    }

}