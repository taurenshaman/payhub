#pragma checksum "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d3d627fcd72f2b56ebf8041469f039e03362d168"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Account_Index), @"mvc.1.0.view", @"/Views/Account/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\_ViewImports.cshtml"
using PayHub;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\_ViewImports.cshtml"
using PayHub.ViewModels;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d3d627fcd72f2b56ebf8041469f039e03362d168", @"/Views/Account/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a309761e5712e664ff1be03ea732506287bc6d95", @"/Views/_ViewImports.cshtml")]
    public class Views_Account_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<UserViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
  
  List<PayHub.Models.WithdrawAccount> accounts = ViewBag.Accounts;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
#nullable restore
#line 6 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
 if (ViewBag.Error != null) {

#line default
#line hidden
#nullable disable
            WriteLiteral("    <h2 class=\"fg-red\">");
#nullable restore
#line 7 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                  Write(ViewBag.Error);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h2>\r\n");
#nullable restore
#line 8 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
    return;
}

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""container grid"">
    <div class=""row"">
        <div class=""d-flex flex-justify-center w-100"">
            <div class=""social-box"" style=""width: 400px;"">
                <div class=""header bg-orange fg-white"">
                    <img id=""avator"" class=""avatar bg-light""");
            BeginWriteAttribute("src", " src=\"", 478, "\"", 500, 1);
#nullable restore
#line 16 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
WriteAttributeValue("", 484, Model.AvatarUri, 484, 16, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\r\n                    <div class=\"title\">");
#nullable restore
#line 17 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                  Write(Model.Account.UserName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    <div class=\"subtitle\">");
#nullable restore
#line 18 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                     Write(Model.Account.NickName);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</div>
                </div>
                <ul class=""skills"">
                    <li>
                        <div class=""text-bold"">Works</div>
                        <div>9</div>
                    </li>
                    <li>
                        <div class=""text-bold"">Patrons</div>
                        <div>88</div>
                    </li>
                    <li>
                        <div class=""text-bold"">Reward times</div>
                        <div>666</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=""row mt-3 mb-3"">
        <hr class=""w-100"" />
    </div>
    <div class=""row mt-3 mb-3"">
        <div class=""d-flex flex-wrap w-100 h-100"">
");
#nullable restore
#line 42 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
             foreach (var account in accounts) {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <div class=\"card\" style=\"width: 260px;\">\r\n                    <div class=\"card-header header\">\r\n                        <span");
            BeginWriteAttribute("class", " class=\"", 1595, "\"", 1636, 3);
            WriteAttributeValue("", 1603, "icon", 1603, 4, true);
            WriteAttributeValue(" ", 1607, "cc", 1608, 3, true);
#nullable restore
#line 45 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
WriteAttributeValue(" ", 1610, account.TheCurrency.Unit, 1611, 25, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral("></span> ");
#nullable restore
#line 45 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                                                           Write(account.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral(" (");
#nullable restore
#line 45 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                                                                          Write(account.TheCurrency.Unit);

#line default
#line hidden
#nullable disable
            WriteLiteral(")\r\n                    </div>\r\n                    <div class=\"card-content p-2 text-center\">\r\n                        <h2 class=\"text-center fg-gray\">");
#nullable restore
#line 48 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                                   Write(account.TheCurrency.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h2>\r\n                        <textarea style=\"height: 120px;\" readonly\r\n                                  data-role=\"textarea\"\r\n                                  data-clear-button=\"false\"\r\n                                  data-prepend=\"<span class=\'cc ");
#nullable restore
#line 52 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                                           Write(account.TheCurrency.Unit);

#line default
#line hidden
#nullable disable
            WriteLiteral("\'></span>\">");
#nullable restore
#line 52 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
                                                                                               Write(account.Account);

#line default
#line hidden
#nullable disable
            WriteLiteral("</textarea>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <button class=\"flat-button mif-copy info\" title=\"Copy\"");
            BeginWriteAttribute("onclick", " onclick=\"", 2335, "\"", 2384, 3);
            WriteAttributeValue("", 2345, "vm.copyToClipboard(\'", 2345, 20, true);
#nullable restore
#line 55 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
WriteAttributeValue("", 2365, account.Account, 2365, 16, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 2381, "\');", 2381, 3, true);
            EndWriteAttribute();
            WriteLiteral("></button>\r\n");
            WriteLiteral("                        <button class=\"flat-button mif-upload success\" title=\"Submit a transaction\" onclick=\"vm.submitTransaction();\"></button>\r\n                    </div>\r\n                </div>\r\n");
#nullable restore
#line 60 "F:\Github\payhub\src\PayHub\PayHub.Web\Views\Account\Index.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<UserViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591