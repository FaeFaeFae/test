HXWebJS.UnitTesting={};HXWebJS.UnitTesting.CommentForTestPreparing="";HXWebJS.UnitTesting.HideAlertDialg=function(){HXWebJS.UnitTesting._FrameworkTools._hide_alert_dialog()};HXWebJS.UnitTesting.RestoreAlertDialg=function(){HXWebJS.UnitTesting._FrameworkTools._restore_alert_dialog()};HXWebJS.UnitTesting.RunAllWebTestMethods=function(objWindowForTestPage){var strArrayWebTestMethods=HXWebJS.UnitTesting._FrameworkTools._get_web_test_methods_list_of_test_page(objWindowForTestPage);if(strArrayWebTestMethods==null){return}for(var strTemp in strArrayWebTestMethods){HXWebJS.UnitTesting.RunOneWebTestMethod(strTemp,objWindowForTestPage)}};HXWebJS.UnitTesting.RunOneWebTestMethod=function(strWebTestMethodName,objWindowForTestPage){if(objWindowForTestPage==null){objWindowForTestPage=window}var objHXWebTestMethods=objWindowForTestPage.HXWebJS.UnitTesting.WebTestMethods;if(objHXWebTestMethods==null){return}if(objHXWebTestMethods[strWebTestMethodName]==null){return}if(typeof(objHXWebTestMethods[strWebTestMethodName])!="function"){return}var fnTemp=objHXWebTestMethods[strWebTestMethodName];var objUnitTestResultWindow=HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window();if(objUnitTestResultWindow==null){objUnitTestResultWindow=window}var strCurrentPageName=HXWebPageGlobalVariables.CurrentPageName;try{fnTemp();objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_ok_suspend")}catch(ex){var strExceptionFullText=new String(typeof(ex)=="string"?ex:ex.description);var strMessageText;if(strExceptionFullText.indexOf("HXWebTestFramework_AssertFailException")!=-1){var intMessageTextStartPosition=strExceptionFullText.indexOf(":");var strMessageText=strExceptionFullText.substr(intMessageTextStartPosition+1);objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_fail",strMessageText)}else{if(strExceptionFullText.indexOf("HXWebTestFramework_AssertOKException")!=-1){var intMessageTextStartPosition=strExceptionFullText.indexOf(":");var strMessageText=strExceptionFullText.substr(intMessageTextStartPosition+1);objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_ok_suspend",strMessageText)}else{strMessageText=strExceptionFullText;objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_fail",strMessageText)}}}};HXWebJS.UnitTesting.Assert={};HXWebJS.UnitTesting.Assert.AreEqual=function(strExpectedValue,strActualValue,strOKMessageText){if(strExpectedValue!=strActualValue){if(strExpectedValue==null){strExpectedValue=""}if(strActualValue==null){strActualValue=""}throw"HXWebTestFramework_AssertFailException_AreEqual:Assert.AreEqual Failed. Expect Value="+strExpectedValue+", Actual Value="+strActualValue}else{if(strOKMessageText!=null){throw"HXWebTestFramework_AssertOKException_AreEqual:"+strOKMessageText}}};HXWebJS.UnitTesting.Assert.IsTrue=function(blnValue,strFailMessage,strOKMessageText){if(!blnValue){if(strFailMessage==null){strFailMessage=""}throw"HXWebTestFramework_AssertFailException_IsTrue:Assert.IsTrue Failed. "+strFailMessage}else{if(strOKMessageText!=null){throw"HXWebTestFramework_AssertOKException_AreEqual:"+strOKMessageText}}};HXWebJS.UnitTesting.Assert.SetAsManualTest=function(strWebTestMethodName,strMessageText){var objUnitTestResultWindow=HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window();if(objUnitTestResultWindow==null){objUnitTestResultWindow=window}var strCurrentPageName=HXWebPageGlobalVariables.CurrentPageName;objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"manual",strMessageText)};HXWebJS.UnitTesting.Assert.Pending=function(strWebTestMethodName,strMessageText){var objUnitTestResultWindow=HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window();if(objUnitTestResultWindow==null){objUnitTestResultWindow=window}var strCurrentPageName=HXWebPageGlobalVariables.CurrentPageName;objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"pending",strMessageText)};HXWebJS.UnitTesting.Assert.ResumeOK=function(strWebTestMethodName,strMessageText){var objUnitTestResultWindow=HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window();if(objUnitTestResultWindow==null){objUnitTestResultWindow=window}var strCurrentPageName=HXWebPageGlobalVariables.CurrentPageName;objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_ok_final",strMessageText)};HXWebJS.UnitTesting.Assert.ResumeFail=function(strWebTestMethodName,strExceptionFullText){var strMessageText;if(strExceptionFullText.indexOf("HXWebTestFramework_AssertFailException")!=-1){var intMessageTextStartPosition=strExceptionFullText.indexOf(":");var strMessageText=strExceptionFullText.substr(intMessageTextStartPosition+1)}else{strMessageText=strExceptionFullText}var objUnitTestResultWindow=HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window();if(objUnitTestResultWindow==null){objUnitTestResultWindow=window}var strCurrentPageName=HXWebPageGlobalVariables.CurrentPageName;objUnitTestResultWindow.HXWebJS.UnitTesting._FrameworkTools._set_test_result(strCurrentPageName,strWebTestMethodName,"end_fail",strMessageText)};HXWebJS.UnitTesting.Assert.WebPageServerSideTestIsOK=function(strPageXmlSvcCode_For_WebPageServerSideTest,strDataForTest){if(strDataForTest==null){strDataForTest=""}var fnTempWindowAlert=window.alert;var strAlertMsgContent;var fnNewWindowAlert=function(){strAlertMsgContent=arguments[0]};window.alert=fnNewWindowAlert;var strTestResult=HXWebJS.Xml.XmlService.CallPageXmlService(strPageXmlSvcCode_For_WebPageServerSideTest,strDataForTest);window.alert=fnTempWindowAlert;if(strTestResult==null){throw"HXWebJS单元测试框架WebPageServerSideTestIsOK Failed. "+strAlertMsgContent}};HXWebJS.UnitTesting.WebTestMethods={};HXWebJS.UnitTesting._FrameworkTools={};HXWebJS.UnitTesting._FrameworkTools._is_hide_alert_dialog=false;HXWebJS.UnitTesting._FrameworkTools._org_window_alert=null;HXWebJS.UnitTesting._FrameworkTools._hide_alert_dialog=function(){if(HXWebJS.UnitTesting._FrameworkTools._org_window_alert==null){HXWebJS.UnitTesting._FrameworkTools._org_window_alert=window.alert}HXWebJS.UnitTesting._FrameworkTools._is_hide_alert_dialog=true;var fnDelegated=function(){};window.alert=fnDelegated};HXWebJS.UnitTesting._FrameworkTools._restore_alert_dialog=function(){window.alert=HXWebJS.UnitTesting._FrameworkTools._org_window_alert};HXWebJS.UnitTesting._FrameworkTools._run_selected_tests=function(objHtmlDivArea_ForTestPage){var objCheckBoxes=$(objHtmlDivArea_ForTestPage).find("input#chkbx_test_method_choose_status:checked");if(objCheckBoxes.length==0){return}var strTestContentPageName=objHtmlDivArea_ForTestPage.getAttribute("hx_test_page_name");var intIsTestHostingPage=objHtmlDivArea_ForTestPage.getAttribute("hx_is_test_hosting_page");var fnTemp=function(objCheckBox){var strTestMethodName=$(objCheckBox).parents("tr").find("#spn_test_method_name").attr("hx_test_method_name");if(intIsTestHostingPage==0){HXWebJS.UnitTesting._FrameworkTools._set_test_result(strTestContentPageName,strTestMethodName,"not_start","")}else{}if(objCheckBox.checked){HXWebJS.UnitTesting._FrameworkTools._run_single_test_method(strTestContentPageName,intIsTestHostingPage,strTestMethodName)}};for(var i=0;i<objCheckBoxes.length;i++){fnTemp(objCheckBoxes[i])}};HXWebJS.UnitTesting._FrameworkTools._run_single_test_method=function(strTestContentPageName,intIsTestHostingPage,strTestMethodName){if(intIsTestHostingPage==0){HXWebJS.UnitTesting.RunOneWebTestMethod(strTestMethodName)}else{}};HXWebJS.UnitTesting._FrameworkTools._set_test_result=function(strCurrentPageName,strWebTestMethodName,strStatus,strMessageText){if(strMessageText==null){strMessageText=""}var objHostDivArea=window.document.getElementById("hxwebjs_unittestingframework__test_content_display_area");var objHtmlTableArea_ForTestPage=HXWebJS.UnitTesting._FrameworkTools._get_test_content_page_display_area(objHostDivArea,strCurrentPageName);if(objHtmlTableArea_ForTestPage==null){return}var objHtmlTRLine=HXWebJS.UnitTesting._FrameworkTools._get_test_method_html_tr_line(objHostDivArea,objHtmlTableArea_ForTestPage,strWebTestMethodName);if(objHtmlTRLine==null){return}var objSpanForStatus=$(objHtmlTRLine).find("#spn_test_method_status")[0];var strOldStatus=objSpanForStatus.getAttribute("hx_status");if(strStatus!=strOldStatus){var objSpan_ResultDescription=$(objHtmlTRLine).find("#spn_test_result_description")[0];switch(strStatus){case"not_start":$(objSpanForStatus).text("");objSpanForStatus.style.color="white";break;case"pending":$(objSpanForStatus).text("?");objSpanForStatus.style.color="darkgray";break;case"end_ok_suspend":if(strOldStatus=="pending"||strOldStatus=="manual"){return}$(objSpanForStatus).text("V");objSpanForStatus.style.color="green";break;case"end_ok_final":$(objSpanForStatus).text("V");objSpanForStatus.style.color="green";break;case"end_fail":$(objSpanForStatus).text("X");objSpanForStatus.style.color="red";break;case"manual":$(objSpanForStatus).text("M");objSpanForStatus.style.color="orange";break}$(objSpan_ResultDescription).text(strMessageText);objSpanForStatus.setAttribute("hx_status",strStatus)}};HXWebJS.UnitTesting._FrameworkTools._get_test_content_page_display_area=function(objHostDivArea,strPageName){var objChildControls=$("table",objHostDivArea);if(objChildControls!=null){for(var i=0;i<objChildControls.length;i++){if(objChildControls[i].id=="hxwebunittestingframework__single_test_object_table_area"){if(objChildControls[i].getAttribute("hx_test_page_name")==strPageName){return objChildControls[i]}}}}return null};HXWebJS.UnitTesting._FrameworkTools._get_test_method_html_tr_line=function(objHostDivArea,objHtmlTableArea_ForTestPage,strWebTestMethodName){var objSpanForTestMethodNames=$(objHtmlTableArea_ForTestPage).find("span#spn_test_method_name");if(objSpanForTestMethodNames.length==0){return null}for(var i=0;i<objSpanForTestMethodNames.length;i++){if(objSpanForTestMethodNames[i].getAttribute("hx_test_method_name")==strWebTestMethodName){return objSpanForTestMethodNames[i].parentNode.parentNode}}return null};HXWebJS.UnitTesting._FrameworkTools._create_single_page_test_display_area=function(objHostDivArea,strPageName,blnIsTestHostingPage){var objHtmlTableArea_ForTestPage=HXWebJS.UnitTesting._FrameworkTools._get_test_content_page_display_area(objHostDivArea);if(objHtmlTableArea_ForTestPage==null){var sb_HtmlTableContent=new HXWebStringBuilder();sb_HtmlTableContent.append('<table id="hxwebunittestingframework__single_test_object_table_area" style="width:100%;BORDER-COLLAPSE:collapse;layout-grid-type:fixed;" border=1');sb_HtmlTableContent.append(' hx_test_page_name="'+strPageName+'"');sb_HtmlTableContent.append(' hx_is_test_hosting_page="'+(blnIsTestHostingPage?1:0)+'"');sb_HtmlTableContent.append("><thead>");sb_HtmlTableContent.append('<tr style="background-color:lightblue"><td colspan=4 style="font-weight:bold;"><span id=spn_test_page_name></span>&nbsp;</td></tr>');sb_HtmlTableContent.append('<tr style="background-color:lightgreen"><td colspan=4><span id=spn_test_page_prepare_comment></span>&nbsp;</td></tr>');sb_HtmlTableContent.append('<tr style="background-color:lightgray">');sb_HtmlTableContent.append("<td width='20px' align=center>");sb_HtmlTableContent.append('<input type="checkbox" onclick="$(document.body).trigger(\'click\');HXWebJS.UnitTesting._FrameworkTools._choose_all_test_mothods_of_page(this.parentNode.parentNode.parentNode.parentNode, this.checked)" />');sb_HtmlTableContent.append('</td><td width=\'200px\'><input type=button value="Run Selected Tests" onclick="HXWebJS.UnitTesting._FrameworkTools._run_selected_tests(this.parentNode.parentNode.parentNode.parentNode)" /></td>');sb_HtmlTableContent.append("<td width='20px'></td><td width='700px'></td></tr>");sb_HtmlTableContent.append("</thead>");sb_HtmlTableContent.append("</table>");objHtmlTableArea_ForTestPage=$(sb_HtmlTableContent.toString())[0];$(objHtmlTableArea_ForTestPage).appendTo(objHostDivArea)}return objHtmlTableArea_ForTestPage};HXWebJS.UnitTesting._FrameworkTools._fill_test_methods_of_test_page=function(objHtmlTableArea_ForTestPage,strPageName,strTestPreparingComment,strArraryTestMethods){var objSpanTestPageName=$("#spn_test_page_name",objHtmlTableArea_ForTestPage)[0];$(objSpanTestPageName).text(strPageName);var objSpanTestPagePrepareComment=$("#spn_test_page_prepare_comment",objHtmlTableArea_ForTestPage)[0];$(objSpanTestPagePrepareComment).text(strTestPreparingComment);if(strArraryTestMethods==null){return}var strHtmlCell_Template_1="<input type=checkbox id=chkbx_test_method_choose_status />";var strHtmlCell_Template_2='<span id=spn_test_method_name hx_test_method_name="{0}">{0}</span>';var strHtmlCell_Template_3='<span id=spn_test_method_status style="font-weight:bold"  hx_status="not_start"></span>';var strHtmlCell_Template_4="<span id=spn_test_result_description />";var intTempWebTestMethodIndex;var objHtmlTRLine;var objHtmlTD1,objHtmlTD2,objHtmlTD3,objHtmlTD4;for(intTempWebTestMethodIndex in strArraryTestMethods){var objHtmlTRLine=objHtmlTableArea_ForTestPage.insertRow(-1);objHtmlTD1=objHtmlTRLine.insertCell(-1);objHtmlTD1.innerHTML=strHtmlCell_Template_1;objHtmlTD2=objHtmlTRLine.insertCell(-1);objHtmlTD2.innerHTML=strHtmlCell_Template_2.replace(/\{0\}/g,strArraryTestMethods[intTempWebTestMethodIndex]);objHtmlTD3=objHtmlTRLine.insertCell(-1);objHtmlTD3.align="center";objHtmlTD3.innerHTML=strHtmlCell_Template_3;objHtmlTD4=objHtmlTRLine.insertCell(-1);objHtmlTD4.innerHTML=strHtmlCell_Template_4}$("input#chkbx_test_method_choose_status").click(function(event){event.stopPropagation();$(document.body).trigger("click")})};HXWebJS.UnitTesting._FrameworkTools._choose_all_test_mothods_of_page=function(objDivAreaForTestPage,blnIsChecked){var objCheckBoxes=$(objDivAreaForTestPage).find("input#chkbx_test_method_choose_status");if(objCheckBoxes==null){return}for(var i=0;i<objCheckBoxes.length;i++){objCheckBoxes[i].checked=blnIsChecked}};HXWebJS.UnitTesting._FrameworkTools._get_hosting_test_window=function(){return null};HXWebJS.UnitTesting._FrameworkTools._get_web_test_methods_list_of_test_page=function(objWindowForTestPage){if(objWindowForTestPage==null){objWindowForTestPage=window}var objHXWebTestMethods=objWindowForTestPage.HXWebJS.UnitTesting.WebTestMethods;if(objHXWebTestMethods==null){return null}var strArray=[];var i=0;var strTemp;for(strTemp in objHXWebTestMethods){strArray[i]=strTemp;i++}return strArray};HXWebJS.UnitTesting._FrameworkTools._get_test_preparing_comment_of_test_page=function(objWindowForTestPage){if(objWindowForTestPage==null){objWindowForTestPage=window}return objWindowForTestPage.HXWebJS.UnitTesting.CommentForTestPreparing};HXWebJS.UnitTesting._FrameworkTools._onloadprocess=function(){if($("#hxwebjs_unittestingframework__test_content_display_area").length==0){var strDivHTMLContent='<div id=hxwebjs_unittestingframework__test_content_display_area style="LEFT:0px; TOP:0px;WIDTH:100%; position:absolute; padding:10px 10px 10px 10px;z-index:100;"></div>';$(strDivHTMLContent).appendTo(document.body)}var objHostDivArea=$("#hxwebjs_unittestingframework__test_content_display_area")[0];var strPageName=HXWebPageGlobalVariables.CurrentPageName;var objHtmlTable_ForTestPage=HXWebJS.UnitTesting._FrameworkTools._create_single_page_test_display_area(objHostDivArea,strPageName,false);var strTestPreparingComment=HXWebJS.UnitTesting._FrameworkTools._get_test_preparing_comment_of_test_page();var strArraryTestMethods=HXWebJS.UnitTesting._FrameworkTools._get_web_test_methods_list_of_test_page();HXWebJS.UnitTesting._FrameworkTools._fill_test_methods_of_test_page(objHtmlTable_ForTestPage,strPageName,strTestPreparingComment,strArraryTestMethods)};HXWebJS.EventManager.RegisterFuncRunAfterOnLoad(HXWebJS.UnitTesting._FrameworkTools._onloadprocess);