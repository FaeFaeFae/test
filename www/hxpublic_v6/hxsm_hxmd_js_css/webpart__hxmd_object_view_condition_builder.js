/// <reference path="../hxwww602core.min.js" />
/// <reference path="../hxwww602control.min.js" />

HXExtendWebPart.hxmd_object_view_condition_builder = {}

var HXWebFieldConditionBuilder = HXExtendWebPart.hxmd_object_view_condition_builder; // 别名

// 条件生成器内容发生变化后触发的回调函数。可以通过该回调函数获得当前设置内容的描述。
// 回调函数参数：fn (strWebPartHtmlId, strConditionRuleDesc)
HXWebFieldConditionBuilder.OnConditionRuleAfterChanged = null; 

HXWebFieldConditionBuilder._Internal = {};

HXWebFieldConditionBuilder._OnWebPartLoaded = function ()
{
    // 遍历查找所有条件生成器扩展Web部件，为每个扩展Web部件进行登记注册
    $("div[hx_extend_webpart_type='hxmd_object_view_condition_builder']").each(function ()
    {
        var strWebPartHtmlId = HXWebJS.DOM.GetElementAttributeValue(this, "id");
        HXWebFieldConditionBuilder._Internal._Init(strWebPartHtmlId);

        var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
        HXWebJS.Xml.RegisterOnBindingDataChangedCallback(strBindingXmlDataIslandId, HXWebFieldConditionBuilder._Internal._ConditionRuleChanged);
    });

}

HXWebFieldConditionBuilder._Internal._Init = function (strWebPartHtmlId)
{
    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);

    HXWebFieldConditionBuilder._Internal._RegisterComboboxForFieldName(strWebPartHtmlId, strBindingXmlDataIslandId);

    HXWebFieldConditionBuilder._Internal._RegisterComboboxForCompareMethod(strWebPartHtmlId, strBindingXmlDataIslandId);
    
    // 登记比较值相关选择控件（combobox,popuptreeview,datepicker,monthpicker）
    HXWebFieldConditionBuilder._Internal._RegisterComboboxForCompareValue(strWebPartHtmlId, strBindingXmlDataIslandId);
    HXWebFieldConditionBuilder._Internal._RegisterPopupTreeViewForCompareValue(strWebPartHtmlId, strBindingXmlDataIslandId);
    HXWebFieldConditionBuilder._Internal._RegisterDatePickerForCompareValue(strWebPartHtmlId, strBindingXmlDataIslandId);
    HXWebFieldConditionBuilder._Internal._RegisterMonthPickerForCompareValue(strWebPartHtmlId, strBindingXmlDataIslandId);
}

HXWebFieldConditionBuilder._Internal._RegisterComboboxForFieldName = function (strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.extend_web_part_html_id = strWebPartHtmlId;
    option.content_type = "desc";
    option.binding_datasrc_id = strBindingXmlDataIslandId;
    option.binding_datafld_for_key = "field_code";
    option.binding_datafld_for_desc = "field_name";
    option.binding_datafld_for_attr_1 = "field_data_type";
    option.binding_datafld_for_attr_2 = "field_input_type";
    option.binding_datafld_for_attr_3 = "dropdownlist_code";
    option.binding_datafld_for_attr_4 = "dropdownlist_fields_map";
    option.binding_datafld_for_attr_5 = "dropdownlist_value";
    option.dropdownlist_code = "hxmd_object_view_field_for_cndtn_bldr_v6";
    option.columns_width_rate = "0;100%";
    option.dropdownbox_width = 400;
    option.ongetfilterdata_callback = HXWebFieldConditionBuilder._Internal._FieldChooseFilterCallback;
    option.ondataget_callback = HXWebFieldConditionBuilder._Internal._AfterDataGetProcess;
    option.ondatachoosed_callback = HXWebFieldConditionBuilder._Internal._AfterFieldChooseProcess;

    HXWebComboBoxControl.register("hxinputbox__condition_rule_builder__field_name__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__field_name__" + strWebPartHtmlId, option);
}

HXWebFieldConditionBuilder._Internal._RegisterComboboxForCompareMethod = function (strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.extend_web_part_html_id = strWebPartHtmlId;
    option.content_type = "desc";
    option.is_paging = false;
    option.binding_datasrc_id = strBindingXmlDataIslandId;
    option.binding_datafld_for_key = "compare_method";
    option.binding_datafld_for_desc = "compare_method_desc";
    option.dropdownlist_code = "hxmd_field_compare_method";
    option.columns_width_rate = "0;100%";
    option.dropdownbox_width = 120;
    option.ongetfilterdata_callback = HXWebFieldConditionBuilder._Internal._CompareMethodFilterCallback;
    option.ondatachoosed_callback = HXWebFieldConditionBuilder._Internal._AfterCompareMethodChooseProcess;

    HXWebComboBoxControl.register("hxinputbox__condition_rule_builder__compare_method__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__compare_method__" + strWebPartHtmlId, option);

}


HXWebFieldConditionBuilder._Internal._RegisterComboboxForCompareValue = function(strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.extend_web_part_html_id = strWebPartHtmlId;
    option.content_type = "key";
    option.binding_datasrc_id = strBindingXmlDataIslandId;
    option.binding_datafld_for_key = "compare_value";
    option.binding_datafld_for_desc = "compare_value_desc";
    option.columns_width_rate = "0;100%";
    option.limit_in_list = false; // 不限制输入正确性，允许用户自由输入（选择值仅为了便利性目的）
    option.dropdownbox_width = 400;
    option.control_type_get_callback = HXWebFieldConditionBuilder._Internal._CompareValuePickControlTypeGetCallback;
    option.oninit_callback = HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForCombobox;

    HXWebComboBoxControl.register("hxinputbox__condition_rule_builder__compare_value__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__compare_value__" + strWebPartHtmlId, option);
}

HXWebFieldConditionBuilder._Internal._CompareValuePickControlTypeGetCallback = function (strWebControlId, objInputBox)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);
    if (strFieldInputCategory == "popupdropdownlist_yesno") return "popupdropdownlist";
    return strFieldInputCategory;
}

HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForCombobox = function (strWebControlId, objInputBox, objChooseButton)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);
    if (strFieldInputCategory != "popupdropdownlist" && strFieldInputCategory != "popupdropdownlist_yesno") return false;

    // 以下根据字段元数据动态设置combobox相关选项
    var option = {};

    var strFieldCode = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_CODE").GetText();
    var strDropdownListCode = objHXXmlNodeOfRow.SelectSingleNode("@DROPDOWNLIST_CODE").GetText();
    var strCompareMethod = objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD").GetText();

    if (strFieldInputCategory == "popupdropdownlist")
    {
        // 如果当前字段是下拉定义字段映射的第二个字段则绑定描述，否则绑定键值）
        var strDropdownListFieldsMap = objHXXmlNodeOfRow.GetAttributeValue("DROPDOWNLIST_FIELDS_MAP");
        var strDropdownListContentType = "key";
        if (strDropdownListFieldsMap != null && strDropdownListFieldsMap != "")
        {
            var arrTemp = strDropdownListFieldsMap.split(/[,|;]/g);
            if (arrTemp.length > 1 && HXWebJS.Utility.Trim(arrTemp[1]).toLowerCase() == strFieldCode.toLowerCase())
                strDropdownListContentType = "desc";
        }

        option.content_type = strDropdownListContentType;
        option.binding_datafld_for_key = (strDropdownListContentType == "desc" ? "COMPARE_VALUE_DESC" : "COMPARE_VALUE");
        option.binding_datafld_for_desc = (strDropdownListContentType == "desc" ? "COMPARE_VALUE" : "COMPARE_VALUE_DESC");
        option.columns_width_rate = (strDropdownListContentType == "desc" ? "0;100%" : "50%;50%");

        option.dropdownlist_code = strDropdownListCode;
        var strContentChosenSetting = objHXXmlNodeOfRow.SelectSingleNode("@DROPDOWNLIST_VALUE").GetText();
        if (!HXWebJS.Core.IsStringNullOrEmpty(strContentChosenSetting))
        {
            if (strContentChosenSetting.indexOf("::") == 0)
            {
                // 特殊增强设置情况下，登记 dropdownlist_object_view_field 属性
                var strRuleObjectViewCode = $(objInputBox).parents("div[hx_extend_webpart_type='hxmd_object_view_condition_builder']").attr("hx_rule_object_view_code");
                option.dropdownlist_object_view_field = strRuleObjectViewCode + ":" + strFieldCode.toLowerCase();
            }
            else
                option.dropdownlist_values = strContentChosenSetting;
        }
        option.choose_type = (strCompareMethod == "11" || strCompareMethod == "12" ? 1 : 0);
    }
    else if (strFieldInputCategory == "popupdropdownlist_yesno")
    {
        option.content_type = "desc";
        option.binding_datafld_for_key = "COMPARE_VALUE";
        option.binding_datafld_for_desc = "COMPARE_VALUE_DESC";
        option.dropdownlist_code = "hxmd_common_yes_no_option";
        option.columns_width_rate = "50%;50%";
        option.choose_type = 0;
    }

    HXWebComboBoxControl.set_options(strWebControlId, option);

    return true;
}

HXWebFieldConditionBuilder._Internal._RegisterPopupTreeViewForCompareValue = function(strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.extend_web_part_html_id = strWebPartHtmlId;
    option.content_type = "key";
    option.binding_datasrc_id = strBindingXmlDataIslandId;
    option.binding_datafld_for_key = "compare_value";
    option.binding_datafld_for_desc = "compare_value_desc";
    option.dropdownbox_width = 400;
    
    option.control_type_get_callback = HXWebFieldConditionBuilder._Internal._CompareValuePickControlTypeGetCallback;
    option.oninit_callback = HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForPopupTreeView;

    HXWebPopupTreeViewControl.register("hxinputbox__condition_rule_builder__compare_value__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__compare_value__" + strWebPartHtmlId, option);
}

HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForPopupTreeView = function (strWebControlId, objInputBox, objChooseButton)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);
    if (strFieldInputCategory != "popuptreeview") return false;

    // 以下根据字段元数据动态设置combobox相关选项
    var option = {};

    var strFieldCode = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_CODE").GetText();
    var strDropdownListCode = objHXXmlNodeOfRow.SelectSingleNode("@DROPDOWNLIST_CODE").GetText();
    var strCompareMethod = objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD").GetText();

    // 如果当前字段是下拉定义字段映射的第二个字段则绑定描述，否则绑定键值）
    var strDropdownListFieldsMap = objHXXmlNodeOfRow.GetAttributeValue("DROPDOWNLIST_FIELDS_MAP");
    var strDropdownListContentType = "key";
    if (strDropdownListFieldsMap != null && strDropdownListFieldsMap != "")
    {
        var arrTemp = strDropdownListFieldsMap.split(/[,|;]/g);
        if (arrTemp.length > 1 && HXWebJS.Utility.Trim(arrTemp[1]).toLowerCase() == strFieldCode.toLowerCase())
            strDropdownListContentType = "desc";
    }

    option.content_type = strDropdownListContentType;
    option.binding_datafld_for_key = (strDropdownListContentType == "desc" ? "COMPARE_VALUE_DESC" : "COMPARE_VALUE");
    option.binding_datafld_for_desc = (strDropdownListContentType == "desc" ? "COMPARE_VALUE" : "COMPARE_VALUE_DESC");

    option.treeview_setting_code = strDropdownListCode;
    option.choose_type = (strCompareMethod == "11" || strCompareMethod == "12" ? 1 : 0);

    HXWebPopupTreeViewControl.set_options(strWebControlId, option);

    return true;
}

HXWebFieldConditionBuilder._Internal._RegisterDatePickerForCompareValue = function (strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.control_type_get_callback = HXWebFieldConditionBuilder._Internal._CompareValuePickControlTypeGetCallback;
    option.oninit_callback = HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForDatePicker;

    HXWebDatePickerControl.register("hxinputbox__condition_rule_builder__compare_value__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__compare_value__" + strWebPartHtmlId, option);
}

HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForDatePicker = function (strWebControlId, objInputBox, objChooseButton)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);
    if (strFieldInputCategory != "popupdatepicker") return false;

    return true;
}

HXWebFieldConditionBuilder._Internal._RegisterMonthPickerForCompareValue = function (strWebPartHtmlId, strBindingXmlDataIslandId)
{
    var option = {};
    option.control_type_get_callback = HXWebFieldConditionBuilder._Internal._CompareValuePickControlTypeGetCallback;
    option.oninit_callback = HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForMonthPicker;

    HXWebMonthPickerControl.register("hxinputbox__condition_rule_builder__compare_value__" + strWebPartHtmlId
                                 , "hximgbtn__condition_rule_builder__compare_value__" + strWebPartHtmlId, option);
}

HXWebFieldConditionBuilder._Internal._CompareValueOnInitCallbackForMonthPicker = function (strWebControlId, objInputBox, objChooseButton)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);
    if (strFieldInputCategory != "popupmonthpicker") return false;

    return true;
}









HXWebFieldConditionBuilder._Internal._OnAfterDataRowRebinding = function (strContainerHtmlId, objRowContainerElement, objHXXmlNodeForRow)
{
    var strGroupOptionsValue = objHXXmlNodeForRow.SelectSingleNode("@CNDTN_GROUP_OPTIONS").GetText();

    var intLineNo = HXWebJS.DOM.GetElementBindingLineInfo(objRowContainerElement).binding_row_line_no; // 从1开始

    HXWebFieldConditionBuilder._Internal._ConditionLineGroupAreaFormat(objRowContainerElement, strGroupOptionsValue, intLineNo);

    HXWebFieldConditionBuilder._Internal._ConditionLineValueAreaFormat(objRowContainerElement, objHXXmlNodeForRow);
}

HXWebFieldConditionBuilder._Internal._ConditionLineGroupAreaFormat = function (objTBodyOfLine, strGroupOptionsValue, intLineNo)
{
    var objElementAnd = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_and", objTBodyOfLine);
    var objElementOr = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_or", objTBodyOfLine);

    HXWebJS.DOM.CSSClass.ToggleClass(objElementAnd, "selected", (strGroupOptionsValue.indexOf("or") == -1));
    HXWebJS.DOM.CSSClass.ToggleClass(objElementOr, "selected", (strGroupOptionsValue.indexOf("or") != -1));

    var objElementLeft = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_p_left", objTBodyOfLine);
    HXWebJS.DOM.CSSClass.ToggleClass(objElementLeft, "selected", (strGroupOptionsValue.indexOf("(") != -1));

    var objElementRight = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_p_right", objTBodyOfLine);
    HXWebJS.DOM.CSSClass.ToggleClass(objElementRight, "selected", (strGroupOptionsValue.indexOf(")") != -1));
}

HXWebFieldConditionBuilder._Internal._ConditionLineValueAreaFormat = function (objTBodyOfLine, objHXXmlNodeOfRow)
{
    var strFieldInputType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_INPUT_TYPE").GetText();
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();

    var strFieldInputCategory = HXWebFieldConditionBuilder._Internal._GetFieldInputCategory(strFieldInputType, strFieldDataType);

    var blnShowChooseButton = (strFieldInputCategory == "direct_input" ? false : true);

    var strFieldConditionBuilderId = objTBodyOfLine.parentNode.parentNode.id;
    var objElementChooseBtn = HXWebJS.DOM.FindFirstElementById("hximgbtn__condition_rule_builder__compare_value__" + strFieldConditionBuilderId, objTBodyOfLine);
    objElementChooseBtn.style.visibility = (blnShowChooseButton ? "visible" : "hidden");
}

HXWebFieldConditionBuilder._Internal._GetFieldInputCategory = function (strFieldInputType, strFieldDataType)
{
    var strFieldInputCategory = "direct_input";

    if ( strFieldInputType == "12" // radiobox
         || strFieldInputType == "13" // multiplecheckbox
         || strFieldInputType == "20" // combobox
         || strFieldInputType == "22" // mutiplecombobox 
        )
    {
        strFieldInputCategory = "popupdropdownlist";
    }
    else if (strFieldInputType == "21" || strFieldDataType == "2") // datepicker
    {
        strFieldInputCategory = "popupdatepicker";
    }
    else if (strFieldInputType == "26") // popuptreeview
    {
        strFieldInputCategory = "popuptreeview"; 
    }
    else if (strFieldInputType == "25") // monthpicker
    {
        strFieldInputCategory = "popupmonthpicker";
    }
    else if (strFieldInputType == "10") // checkbox
    {
        strFieldInputCategory = "popupdropdownlist_yesno";
    }

    return strFieldInputCategory;
}







HXWebFieldConditionBuilder._Internal._FieldChooseFilterCallback = function(strWebControlId, objInputBox, objChooseButton)
{
    var strWebPartHtmlId = strWebControlId.substr(48); // 根据字段下拉框名称获取条件表达式容器htmlid(规则为：hxinputbox__condition_rule_builder__field_name__ + strWebParthtmlid)
    var objWebPartContainer = document.getElementById(strWebPartHtmlId);

    var strRuleObjectViewCode = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_rule_object_view_code");
    var strAllowAllFields = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_rule_allow_all_fields");
    var strExcludeCustoimizedFields = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_exclude_customized_fields");
    var strExcludeVirtualFields = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_exclude_virtual_fields");
    var strExcludedFieldsList = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_excluded_fields_list");
    var strIncludedFieldsList = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_included_fields_list");
    var strUsedScene = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_used_scene");

    var strXml = HXWebJS.Xml.BuildXmlRowStringViaArray("hx_rule_object_view_code", strRuleObjectViewCode
                                        , "hx_rule_allow_all_fields", strAllowAllFields
                                        , "hx_exclude_customized_fields", strExcludeCustoimizedFields
                                        , "hx_exclude_virtual_fields", strExcludeVirtualFields
                                        , "hx_excluded_fields_list", strExcludedFieldsList
                                        , "hx_included_fields_list", strIncludedFieldsList
                                        , "hx_used_scene", strUsedScene);

    return strXml;
}

HXWebFieldConditionBuilder._Internal._AfterDataGetProcess = function (strWebControlId, objXmlDocOfData)
{
    var strWebPartHtmlId = strWebControlId.substr(48); // 根据字段下拉框名称获取条件表达式容器htmlid(规则为：hxinputbox__condition_rule_builder__field_name__ + strWebParthtmlid)
    var objWebPartContainer = document.getElementById(strWebPartHtmlId);

    var strAllowAllFields = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_rule_allow_all_fields");
    var blnAllowAllFields = (!HXWebJS.Core.IsStringNullOrEmpty(strAllowAllFields) && strAllowAllFields != "0");
    var strIncludedFieldsList = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_included_fields_list");

    if (blnAllowAllFields) return; // 显示全部字段时不需要字段排序处理
    if (strIncludedFieldsList == null || strIncludedFieldsList == "") return;

    // 仅显示部分字段时，使用字段清单次序对数据包进行排序处理
    var arrFieldCodeList = strIncludedFieldsList.split(/[,|;]/g);

    var objHXRootXmlNode = objXmlDocOfData.SelectSingleNode("//RESULT_DATA/RS_DATA");
    var objTempHXXmlNode;
    var strCurrentKeyCode, strTempKeyCode;

    for (var i = 0; i < arrFieldCodeList.length; i++)
    {
        strCurrentKeyCode = arrFieldCodeList[i];

        // 每次循环都重新读取节点清单，以便正确获取到前面交换过节点后的内容
        var objHXXmlNodeList = objHXRootXmlNode.SelectNodes("RS_ROW");

        if (objHXXmlNodeList.length <= i) return; // 容错

        if (objHXXmlNodeList[i].GetAttributeValue("KEY") != strCurrentKeyCode)
        {
            // 当前数据包条目行的键值和当前字段不一致，此时到后面的条目中找到该字段键值对应的条目行，并与其交换次序
            var intTempIndex = -1;
            for (var j = i + 1; j < arrFieldCodeList.length; j++)
            {
                if (objHXXmlNodeList[j].GetAttributeValue("KEY") == strCurrentKeyCode)
                {
                    intTempIndex = j;
                    break;
                }
            }
            
            if (intTempIndex > 0) objHXRootXmlNode._SwapChild(i, intTempIndex); //和匹配节点交换位置
        }
    }
}

HXWebFieldConditionBuilder._Internal._AfterFieldChooseProcess = function (strWebControlId, objInputBox, objChooseButton, objHXXmlChosenData)
{
    // 字段选择后的处理:
    // a 根据选择字段格式化比较值区域
    // b 清除原来的不合适的比较方式与比较值

    var strWebPartHtmlId = strWebControlId.substr(48); // 根据字段下拉框名称获取条件表达式容器htmlid(规则为：hxinputbox__condition_rule_builder__field_name__ + strWebParthtmlid)
    var objWebPartContainer = document.getElementById(strWebPartHtmlId);

    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var objTBodyOfLine = bindingRowLineInfo.binding_row_container;

    // 根据选择字段数据类型格式化比较值区域
    HXWebFieldConditionBuilder._Internal._ConditionLineValueAreaFormat(objTBodyOfLine, objHXXmlNodeOfRow);

    // 清除原来已有的比较方式与比较值（如果字段比较类型不兼容）
    if (objHXXmlChosenData != null && objHXXmlChosenData.SelectSingleNode("//@KEY").GetText() != "")
    {
        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD").SetText("1");
        var arrResText = HXWebFieldConditionBuilder._Internal._GetEqualAndOrText();
        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD_DESC").SetText(arrResText[0]);
    }
    else
    {
        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD").SetText("");
        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_METHOD_DESC").SetText("");
    }

    objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_VALUE").SetText("");
    objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_VALUE_DESC").SetText("");

    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
    HXWebFieldConditionBuilder._Internal._ConditionRuleChanged(strBindingXmlDataIslandId);
}


HXWebFieldConditionBuilder._Internal._CompareMethodFilterCallback = function (strWebControlId, objInputBox, objChooseButton)
{
    var strWebPartHtmlId = strWebControlId.substr(52); // 根据比较方式下拉框名称获取条件表达式容器htmlid(规则为：hxinputbox__condition_rule_builder__compare_method__ + strWebParthtmlid)
    var objWebPartContainer = document.getElementById(strWebPartHtmlId);

    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
    var objHXXmlDoc = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland(strBindingXmlDataIslandId);

    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    var strFieldDataType = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_DATA_TYPE").GetText();
    var strFieldCode = objHXXmlNodeOfRow.SelectSingleNode("@FIELD_CODE").GetText();

    var strCompareMethodSettingForField = HXWebFieldConditionBuilder._Internal._GetCompareMethodSettingForField(objWebPartContainer, strFieldCode, strFieldDataType);

    return strCompareMethodSettingForField;
}

HXWebFieldConditionBuilder._Internal._AfterCompareMethodChooseProcess = function (strWebControlId, objInputBox, objChooseButton, objHXXmlChosenData)
{
    var strWebPartHtmlId = strWebControlId.substr(52); // 根据比较方式下拉框名称获取条件表达式容器htmlid(规则为：hxinputbox__condition_rule_builder__compare_method__ + strWebParthtmlid)

    var strCompareMethod = (objHXXmlChosenData == null ? "" : objHXXmlChosenData.SelectSingleNode("//@KEY").GetText());
    if (strCompareMethod == "20" || strCompareMethod == "21")
    {
        // Is Null 或者 Is Not Null比较方式不需要比较值
        var objWebPartContainer = document.getElementById(strWebPartHtmlId);
        var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objInputBox);
        var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;

        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_VALUE").SetText("");
        objHXXmlNodeOfRow.SelectSingleNode("@COMPARE_VALUE_DESC").SetText("");
    }

    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
    HXWebFieldConditionBuilder._Internal._ConditionRuleChanged(strBindingXmlDataIslandId);
}

HXWebFieldConditionBuilder._Internal._GetCompareMethodSettingForField = function (objWebPartContainer, strFieldCode, strFieldDataType)
{
    if (strFieldDataType == "") return "-1";

    var strCustomizedCompareMethodList = "";

    var strFullFieldMethodSetting = HXWebJS.DOM.GetElementAttributeValue(objWebPartContainer, "hx_field_compare_method_setting");
    if (!HXWebJS.Core.IsStringNullOrEmpty(strFullFieldMethodSetting))
    {
        var re = new RegExp(strFieldCode + ":(\\d{1,2}\\|?)+(;|$)", "ig");
        var arrMatched = re.exec(strFullFieldMethodSetting);
        if (arrMatched != null && arrMatched.length > 0)
        {
            var strMatchedFieldSetting = arrMatched[0]; // it should be fieldname:n1|n2|n3;

            var ss = strMatchedFieldSetting.substr(strFieldCode.length + 1);
            if (ss.substr(ss.length - 1) == ";") ss = ss.substr(0, ss.length - 1);

            strCustomizedCompareMethodList =  ss.replace(/\|/g, ",");
        }
    }

    if (strCustomizedCompareMethodList != "") return strCustomizedCompareMethodList;

    // 没有指定字段的自定义比较方式时，根据字段数据类型返回缺省的比较方式列表
    // 比较方式清单：1,2,3,4,5,6,7,8,9,10,11,12,20,21
    // 等于(1),不等于(2),大于(3),小于(4)，大于等于(5),小于等于(6),包括(7),不包括(8)
    // 以此开头(9),不以此开头(10),其中之一(11),不是其中之一(12),为空(20),不为空(21)
    if (strFieldDataType == "1") // string
    {
        // 字符串类型以前不允许 >, <, >=, <= 比较方式，但2080525后考虑到有些项目的字符串字段有作范围条件的需要（如将财务周期字段作为字符串类型），恢复允许这些比较方式
        return "1,2,3,4,5,6,7,8,9,10,11,12,20,21";
    }

    if (strFieldDataType == "2") // datetime
    {
        // 日期类型不允许 like|not like, start with|not start with, in|not in 比较方式
        return "1,2,3,4,5,6,20,21";
    }

    if (strFieldDataType == "3") // number
    {
        // 数字类型不允许 like|not like, start with|not start with 比较方式
        return "1,2,3,4,5,6,11,12,20,21";
    }
}



HXWebFieldConditionBuilder._OnClickHandlerProcess = function (strClickHandlerCode, evt)
{
    if (strClickHandlerCode == "cndtn_line_add")
        HXWebFieldConditionBuilder._Internal._NewConditonLine(evt.target, false);
    else if (strClickHandlerCode == "cndtn_line_add_at_foot")
        HXWebFieldConditionBuilder._Internal._NewConditonLine(evt.target, true);
    else if (strClickHandlerCode == "cndtn_line_remove")
        HXWebFieldConditionBuilder._Internal._RemoveConditonLine(evt.target);
    else if (strClickHandlerCode == "cndtn_option_p_left" || strClickHandlerCode == "cndtn_option_p_right"
                || strClickHandlerCode == "cndtn_option_and" || strClickHandlerCode == "cndtn_option_or")
        HXWebFieldConditionBuilder._Internal._OnGroupOptionBtnsClick(evt.target, strClickHandlerCode);
}

HXWebFieldConditionBuilder._Internal._NewConditonLine = function (objEventSrcElement, blnIsButtonAtFoot)
{
    var objHXXmlDoc_ForDataList;
    var objHXXmlNodeOfRow = null;

    if (blnIsButtonAtFoot)
    {
        var strWebPartHtmlId = $(objEventSrcElement).parents("[hx_extend_webpart_type='hxmd_object_view_condition_builder']")[0].id;
        var strXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
        objHXXmlDoc_ForDataList = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland(strXmlDataIslandId);
    }
    else
    {
        var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objEventSrcElement);
        objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
        objHXXmlDoc_ForDataList = objHXXmlNodeOfRow.GetOwnerXmlDataIsland();
    }

    var objHXXmlDoc_BlankRow = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_blankrow__condition_rule_builder");

    if (objHXXmlDoc_ForDataList.GetXml().indexOf("<RS_ROW") == -1)
    {
        objHXXmlDoc_ForDataList.ReloadXML(objHXXmlDoc_BlankRow.GetXml());
    }
    else
    {
        var objHXXmlNode_NewRow = objHXXmlDoc_BlankRow.SelectSingleNode("//RS_ROW").CloneNode();
        objHXXmlDoc_ForDataList.GetRootXmlNode().InsertChild(objHXXmlNode_NewRow, objHXXmlNodeOfRow);
    }
}

HXWebFieldConditionBuilder._Internal._RemoveConditonLine = function (objEventSrcElement)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objEventSrcElement);
    var objHXXmlNodeOfRow = bindingRowLineInfo.binding_row_data;
    
    var objHXXmlDoc = objHXXmlNodeOfRow.GetOwnerXmlDataIsland();
    objHXXmlDoc.GetRootXmlNode().RemoveChild(objHXXmlNodeOfRow);
}

HXWebFieldConditionBuilder._Internal._OnGroupOptionBtnsClick = function (objEventSrcElement, strClickHandlerCode)
{
    var bindingRowLineInfo = HXWebJS.DOM.GetElementBindingLineInfo(objEventSrcElement);
    var objHXXmlNodeOfLine = bindingRowLineInfo.binding_row_data;
    var objBindingRowContainer = bindingRowLineInfo.binding_row_container;

    var strGroupOptionsValue = objHXXmlNodeOfLine.SelectSingleNode("@CNDTN_GROUP_OPTIONS").GetText();

    if (strClickHandlerCode == "cndtn_option_p_left" || strClickHandlerCode == "cndtn_option_p_right")
    {
        // 点击左(右)括号图标，如果原来左(右)括号为禁用状态，则启用；如果原来是启用状态，则禁用
        HXWebJS.DOM.CSSClass.ToggleClass(objEventSrcElement, "selected");

        var ch = (strClickHandlerCode == "cndtn_option_p_left" ? '(' : ')');

        if (strGroupOptionsValue.indexOf(ch) == -1)
            strGroupOptionsValue += ch;
        else
            strGroupOptionsValue = strGroupOptionsValue.replace(ch, "");
    }
    else if (strClickHandlerCode == "cndtn_option_and" || strClickHandlerCode == "cndtn_option_or")
    {
        // 点击 and(or) 图标，表示规则条目和后续规则之间为 and(or) 关系；
        // 如果 and(or) 图标还没有被选中，则设置 and(or) 图标为启用状态，同时禁用or(and)图标
        var elANDButton = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_and", objBindingRowContainer);
        var elORButton = HXWebJS.DOM.FindFirstElementById("btn_cndtn_option_or", objBindingRowContainer);

        var blnIsAND = (strClickHandlerCode == "cndtn_option_and");

        HXWebJS.DOM.CSSClass.ToggleClass(elANDButton, "selected", blnIsAND);
        HXWebJS.DOM.CSSClass.ToggleClass(elORButton, "selected", !blnIsAND);

        if (blnIsAND && strGroupOptionsValue.indexOf("and") == -1) strGroupOptionsValue += "and";
        if (blnIsAND && strGroupOptionsValue.indexOf("or") != -1) strGroupOptionsValue = strGroupOptionsValue.replace("or", "");

        if (!blnIsAND && strGroupOptionsValue.indexOf("and") != -1) strGroupOptionsValue = strGroupOptionsValue.replace("and", "");
        if (!blnIsAND && strGroupOptionsValue.indexOf("or") == -1) strGroupOptionsValue += "or";
    }

    // 设置更新后的条件组选项内容到数据包
    objHXXmlNodeOfLine.SelectSingleNode("@CNDTN_GROUP_OPTIONS").SetText(strGroupOptionsValue);

    // 触发可能的变更事件函数（以便开发人员可以编写将更新后的描述文本显示在界面上等操作）
    var strBindingXmlDataIsland = objHXXmlNodeOfLine.GetXmlDataIslandId();
    HXWebFieldConditionBuilder._Internal._ConditionRuleChanged(strBindingXmlDataIsland);
}





HXWebFieldConditionBuilder._Internal._ConditionRuleChanged = function (strBindingXmlDataIslandId)
{
    if (HXWebFieldConditionBuilder.OnConditionRuleAfterChanged == null) return;

    var strWebPartHtmlId = strBindingXmlDataIslandId.substr(31);

    var strConditionRuleDesc = HXWebFieldConditionBuilder.GetConditionRuleDescription(strWebPartHtmlId);

    HXWebFieldConditionBuilder.OnConditionRuleAfterChanged(strWebPartHtmlId, strConditionRuleDesc);
}

HXWebFieldConditionBuilder.GetConditionRuleDescription = function (strWebPartHtmlId)
{
    // 用于交互期间即时反馈条件描述目的，单语言。如果需要支持双语，在服务器端保存操作时获取中英文两种语言的条件描述
    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
    var objHXXmlDoc = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland(strBindingXmlDataIslandId);

    var objHXXmlNodeList = objHXXmlDoc.SelectNodes("//RS_ROW[@FIELD_CODE!='' and @COMPARE_METHOD !='']");
    if (objHXXmlNodeList.length == 0) return "";

    // 条件分组括号处理规则：
    // 遍历所有规则行，找出如下几个关键数据：
    //  a 第一个左括号之前的右括号数量，记为A (如果整个表达式都没有左括号，则所有右括号都视作在左括号之前)
    //  b 所有右括号数量，记为B
    //  c 所有左括号数量，记为C
    //  d 最后一个右括号之后的左括号数量，记为D (如果整个表达式都没有右括号，则所有左括号都视作在右括号之前)
    // 然后：
    //  规则表达式开头至少要补偿A个左括号；
    //  规则表达式末尾至少要补偿D个右括号；
    //  如果包含补偿后的所有左括号数量和所有右括号数量不等 (A+C <> B+D)，则再次补偿差额左括号或者右括号使括号总数相同
    //
    // 例子：
    // (R1 or R2 or R3 or R4: A=0,B=0,C=1,D=0; (A+C)-(B+D)=1-0=1 最左边添加0个右括号，最右边添加1个左括号
    //  R1)or R2 or R3 or R4: A=1,B=1,C=0,D=0; (A+C)-(B+D)=1-1=0 最左边添加1个右括号，最右边添加0个左括号
    //  R1)or(R2 or R3 or R4: A=1,B=1,C=1,D=1; (A+C)-(B+D)=2-2=0 最左边添加1个右括号，最右边添加1个左括号
    //  R1)or R2)or(R3 or R4: A=2,B=2,C=1,D=1; (A+C)-(B+D)=3-3=0 最左边添加2个右括号，最右边添加1个左括号
    //  R1 or R2 or(R3 or R4: A=0,B=0,C=1,D=1; (A+C)-(B+D)=1-1=0 最左边添加0个右括号，最右边添加1个左括号

    //  R1 or(R2 or R3)or(R4 or R5:       A=0,B=1,C=2,D=1; (A+C)-(B+D)=2-2= 0 最左边添加0个右括号，最右边添加1个左括号
    //  R1 or(R2 or R3)or R4)or(R5:       A=0,B=2,C=2,D=1; (A+C)-(B+D)=2-3=-1 最左边添加1个右括号，最右边添加1个左括号
    //  R1)or R2)or(R3 or R4)or R5)or(R6: A=2,B=4,C=2,D=1; (A+C)-(B+D)=4-5=-1 最左边添加3(2+1)个右括号，最右边添加1个左括号

    // 下面的变量中， LP表示Left Parenthesis, RP表示Right Parenthesis
    var blnLPUsed = false; // 标记左括号是否被使用，用于识别第一个左括号之前的右括号
    var intRP_BeforeFirstLP = 0, intRP_Total = 0, intLP_Total = 0, intLP_AfterLastRP = 0;

    var strConditionGroupOptions;

    for (var i = 0; i < objHXXmlNodeList.length; i++)
    {
        strConditionGroupOptions = objHXXmlNodeList[i].SelectSingleNode("@CNDTN_GROUP_OPTIONS").GetText();

        if (strConditionGroupOptions.indexOf("(") != -1)
        {
            intLP_Total++; // 左括号总数+1
            blnLPUsed = true; //标记已经使用了左括号
            intLP_AfterLastRP++; // 最后一个右括号之后的左括号数量+1 （该数量在出现右括号后会被清零重新开始计数）
        }

        if (strConditionGroupOptions.indexOf(")") != -1)
        {
            intRP_Total++; // 右括号总数+1
            if (!blnLPUsed) intRP_BeforeFirstLP++; // 如果尚未使用左括号，则第一个左括号之前的右括号数量+1
            intLP_AfterLastRP = 0; // 最后一个右括号之后的左括号数量清零
        }
    }

    var sb = new HXWebStringBuilder();

    var intGapLP_RP = intRP_BeforeFirstLP + intLP_Total - intRP_Total - intLP_AfterLastRP;

    // 在开头添加缺失的左括号
    for (var i = 0; i < intRP_BeforeFirstLP + (intGapLP_RP < 0 ? -1 * intGapLP_RP : 0) ; i++) sb.append("(");

    var objHXXmlNode;

    var strCompareMethod;
    var strCompareValue, strCompareValueDesc;

    var arrResText = HXWebFieldConditionBuilder._Internal._GetEqualAndOrText();

    for (var i = 0; i < objHXXmlNodeList.length; i++)
    {
        objHXXmlNode = objHXXmlNodeList[i];

        strConditionGroupOptions = objHXXmlNode.SelectSingleNode("@CNDTN_GROUP_OPTIONS").GetText();

        if (strConditionGroupOptions.indexOf("(") != -1) sb.append("(");

        sb.append("[");
        sb.append(objHXXmlNode.SelectSingleNode("@FIELD_NAME").GetText()); // 字段名
        sb.append("] ");
        sb.append(objHXXmlNode.SelectSingleNode("@COMPARE_METHOD_DESC").GetText()); // 比较方式
        sb.append(" ");

        strCompareMethod = objHXXmlNode.SelectSingleNode("@COMPARE_METHOD").GetText();

        if (strCompareMethod != "20" && strCompareMethod != "21")
        {
            sb.append("[");
            strCompareValue = objHXXmlNode.SelectSingleNode("@COMPARE_VALUE").GetText();
            strCompareValueDesc = objHXXmlNode.SelectSingleNode("@COMPARE_VALUE_DESC").GetText();
            sb.append(strCompareValueDesc == "" ? strCompareValue : strCompareValueDesc); // 比较值
            sb.append("]");
        }

        if (strConditionGroupOptions.indexOf(")") != -1) sb.append(")");

        if (i == objHXXmlNodeList.length - 1)
        {
            continue; // 最后一个条目行不需要处理 and|or
        }
        else
        {
            sb.append(" ");

            if (strConditionGroupOptions.indexOf("or") != -1)
            {
                sb.append(arrResText[2]);
            }
            else
            {
                sb.append(arrResText[1]);
            }

            sb.append(" ");
        }
    }

    // 在末尾添加缺失的右括号
    for (var i = 0; i < intLP_AfterLastRP + (intGapLP_RP > 0 ? intGapLP_RP : 0) ; i++) sb.append(")");

    return sb.toString();
}

HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId = function (strWebPartHtmlId)
{
    return "hxxml__condition_rule_builder__" + strWebPartHtmlId.toLowerCase();
}

HXWebFieldConditionBuilder._Internal._GetEqualAndOrText = function()
{
    var strTemp = HXWebJS.Xml.XmlService.GetUITextOnServer("TEXT__CONDITION_RULE_BUILDER_EQUAL_AND_OR", true);

    if (strTemp == null || strTemp == "" || strTemp == "TEXT__CONDITION_RULE_BUILDER_EQUAL_AND_OR")
        strTemp = "Equal;And;Or";

    return strTemp.split(";");
}

HXWebFieldConditionBuilder.ConditionRuleValidationCheck = function (strWebPartHtmlId, fnCallback)
{
    var strBindingXmlDataIslandId = HXWebFieldConditionBuilder._Internal._GetBindingXmlDataIslandId(strWebPartHtmlId);
    var objHXXmlDoc = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland(strBindingXmlDataIslandId);

    var objHXXmlNodeList = objHXXmlDoc.SelectNodes("//RS_ROW");

    for (var i = 0; i < objHXXmlNodeList.length; i++)
    {
        objHXXmlNodeList[i].SelectSingleNode("@LINE_ID").SetText(i + 1); //为每个规则条目行赋予唯一识别号
    }

    // 追加对象视图代码信息到数据包的根节点中
    var strRuleObjectViewCode = $("#" + strWebPartHtmlId).attr("hx_rule_object_view_code");
    objHXXmlDoc.GetRootXmlNode().SetAttributeValue("OBJECT_VIEW_CODE", strRuleObjectViewCode, true);

    // 调用扩展Web部件专有PageXmlService
    var options = { extend_web_part_html_id: strWebPartHtmlId };
    HXWebXmlService.CallPageXmlServiceAsync("HXWEBFIELDCONDITIONBUILDER_VALIDATION_CHECK"
                                        , objHXXmlDoc.GetXml(), fnCallback, options);
    return;
}