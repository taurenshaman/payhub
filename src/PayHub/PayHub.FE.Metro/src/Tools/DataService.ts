"use strict";

import NetUtility from "./NetUtility";
import { UIHelper } from "./UIHelper";

export class DataService {
    static ApiPrefix = "/api/v0/";
    static Api_Account_ListAll = DataService.ApiPrefix + "account/all";
    static Api_Account_Save = DataService.ApiPrefix + "account/save";

    static Api_Currency_ListAll = DataService.ApiPrefix + "currency/all";
    

    query(uri: string, queryData: any, callback: Function, httpMethod = "GET") {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });
        $.ajax({
            url: uri,
            dataType: "json",
            type: httpMethod,
            // https://stackoverflow.com/questions/9870523/differences-in-application-json-and-application-x-www-form-urlencoded
            // https://stackoverflow.com/questions/21578814/how-to-receive-json-as-an-mvc-5-action-method-parameter
            contentType: 'application/x-www-form-urlencoded', // : 'application/json; charset=utf-8',
            // the HttpOnly make the two param invisible in client side script: account.id, account.password
            // data: "account.id=" + Cookies.get('account.id') + "&account.password=" + Cookies.get('account.password'),
            data: queryData,
            async: true,
            processData: false,
            cache: false,
            success: function (data, textStatus, jqXHR) {
                Metro.activity.close(activityDialog);
                //data = JSON.parse(jqXHR.responseText);
                if (typeof callback === "function") {
                    callback(data);
                    return;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                Metro.activity.close(activityDialog);
                const msgError = "【Status】" + textStatus + "【error】" + errorThrown + "【others】" + jqXHR.responseText;
                UIHelper.ShowError("ERROR", msgError);
            }
        });
    }

    async getAsync(url: string, ajaxData: any) {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });

        const response = await NetUtility.http<any>(
            new Request(url, {
                method: "get",
                //body: ajaxData
            }
            )
        );
        Metro.activity.close(activityDialog);

        return response;
    }

    async postAsync(url: string, ajaxData: any) {
        const activityDialog = Metro.activity.open({
            type: "cycle"
        });

        const response = await NetUtility.http<any>(
            new Request(url, {
                method: "post",
                body: ajaxData
            }
            )
        );
        Metro.activity.close(activityDialog);

        return response;
    }

}