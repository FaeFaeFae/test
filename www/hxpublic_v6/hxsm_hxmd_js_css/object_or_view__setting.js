function show_specified_setting_page(strRecordUUID, strCommandCode, strExcludedCommand)
{
    // 函数返回值为true表示已匹配合适命令并进行处理了，后续不再需要进行其它命令的处理；返回false表示传入的命令代码本函数未处理
    var blnSkipExcludedCmd = (strCommandCode == strExcludedCommand);
    var strTargetPageName = "";

    if (strCommandCode == "basic_setting")
        strTargetPageName = "hxmd_v6/object_or_view__basic_setting.hxpage.xhtml";
    else if (strCommandCode == "display_setting")
        strTargetPageName = "hxmd_v6/object_or_view__display_setting.hxpage.xhtml";
    else if (strCommandCode == "edit_setting")
        strTargetPageName = "hxmd_v6/object_or_view__edit_setting.hxpage.xhtml";
    else if (strCommandCode == "saving_setting")
        strTargetPageName = "hxmd_v6/object_or_view__saving_setting.hxpage.xhtml";
    else if (strCommandCode == "query_setting")
        strTargetPageName = "hxmd_v6/object_or_view__query_setting.hxpage.xhtml";

    if (strTargetPageName != "")
    {
        if (!blnSkipExcludedCmd)
        {
            var windowSetting = { show_style: 0, window_name : '_self' };
            HXWebJS.AppUtility.OpenDynamicDataEditPageViaFile(strTargetPageName, strRecordUUID, null, windowSetting, null, "1.3");
        }
        return true;
    }

    return false;
}

function field_metadata_edit(strObjectViewCodeForEdit, strFieldCodeForEdit)
{
    var objKeyFieldValues = { object_view_code: strObjectViewCodeForEdit, field_code: strFieldCodeForEdit };
    HXWebJS.AppUtility.OpenDynamicDataEditPageViaFile("hxmd_v6/object_or_view_field__edit.hxpage.xhtml", null, objKeyFieldValues, null, null, "1.3");
}