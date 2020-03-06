HXWebJS.EventManager.OnDocumentReady = function ()
{
    var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");

    var objTempHXXmlNode = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//RS_ROW");
    var strTemp = objTempHXXmlNode.GetAttributeValue("HX_EDIT_MODE");
    var blnIsEditMode = (strTemp != null && strTemp != "" && strTemp != "0" ? true : false);
    strTemp = objTempHXXmlNode.GetAttributeValue("DB_LANGUAGE_TYPE");
    var intDBLanguageType = (strTemp != null && strTemp != "" && strTemp != "0" ? 1 : 0);

    var editorDIVContainer = document.getElementById("workflowEditorDIVContainer");
    var editorToolboxDivContainer = document.getElementById("workflowEditorToolbox");

    var objHXXmlDoc_WorkflowContent = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml__workflow_xml_content");

    HXWebWorkflowEditor.Register(editorDIVContainer, objHXXmlDoc_WorkflowContent
                            , blnIsEditMode, { db_language_type: intDBLanguageType }, editorToolboxDivContainer);

    HXWebWorkflowEditor.DrawWorkflow();
}


function workflow_edit()
{
    window.location.href = gstrWebRootPath + "hxpublic_v6/hxworkfloweditor6.aspx?hx_page_param_uuid=" + mstrHXPageParamUUID + "&_hx_edit_mode=1";
}


function workflow_xml_def()
{
    var fnCallback = function (strXmlResult)
    {
        if (strXmlResult != null)
        {
            window.open(gstrWebRootPath + strXmlResult);
        }
    }

    var strWorkflowXmlContent = HXWebWorkflowEditor._Internal._HXXmlDocForWorkflow.GetXml();
    HXWebXmlService.CallPageXmlServiceAsyncWithProgressBar("HXWORKFLOWEDITOR6__XML_CONTENT_SHOW", strWorkflowXmlContent
                                        , fnCallback, "TrustHX.HXPage6", "TrustHX.HXPage6.HXWorkflowEditor6AspxXmlService");
}

function workflow_save()
{
    if (confirm("你确定要保存当前工作流程内容吗？") == false) return;

    var fnCallback = function (strXmlResult)
    {
        if (strXmlResult != null)
        {
            alert("工作流程内容保存操作成功！");
            window.location.reload(true);
        }
    }


    var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");
    
    var strWorkflowXmlContent = HXWebWorkflowEditor._Internal._HXXmlDocForWorkflow.GetXml();

    var strFullXmlData = HXWebJS.Xml.BuildAllXmlDatas("workflow_editor_config_data", objHXXmlDoc_WebPageConfigData.GetXml()
                                                    , "workflow_xml_content", strWorkflowXmlContent);

    HXWebXmlService.CallPageXmlServiceAsyncWithProgressBar("HXWORKFLOWEDITOR6__XML_CONTENT_SAVE", strFullXmlData
                                         , fnCallback, "TrustHX.HXPage6", "TrustHX.HXPage6.HXWorkflowEditor6AspxXmlService");
}




HXWebWorkflowEditor._Interface._GetWorkflowNodeConfigPageInfo = function (strWorkflowNodeType, strActivityType)
{

    var strConfigPageName, strTemp;
    var intDialogWidth, intDialogHeight;

    if (strWorkflowNodeType == "WORKFLOW_ACTIVITY")
    {
        var objHXXmlDoc = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml__activity_type_config_info");
        var objHXXmlNodeOfActivity = objHXXmlDoc.SelectSingleNode("//RS_ROW[@ACTIVITY_TYPE_CODE='" + strActivityType.toLowerCase() + "']");
        strConfigPageName = objHXXmlNodeOfActivity.SelectSingleNode("@CONFIG_WEBPAGE_URL").GetText(); // 相对于web根目录，形如hxdynamicpage_common_v13:hxsm_v6/approval_workflow_node_config__approve_group.hxpage.xhtml
        strTemp = objHXXmlNodeOfActivity.SelectSingleNode("@CONFIG_DIALOG_SIZE").GetText(); // 形如800,600
        var arrTemp = strTemp.split(/[,|;]/);
        intDialogWidth = parseInt(arrTemp[0]);
        intDialogHeight = parseInt(arrTemp[1]);
    }
    else if (strWorkflowNodeType == "WORKFLOW_START")
    {
        var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");
        strConfigPageName = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//@START_NODE_CONFIG_WEBPAGE_URL").GetText(); // 相对于web根目录，形如hxdynamicpage_common_v13:hxsm_v6/approval_workflow_node_config__approve_group.hxpage.xhtml
        strTemp = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//@START_NODE_CONFIG_DIALOG_SIZE").GetText(); // 形如800,600
        var arrTemp = strTemp.split(/[,|;]/);
        intDialogWidth = parseInt(arrTemp[0]);
        intDialogHeight = parseInt(arrTemp[1]);
    }
    else if (strWorkflowNodeType == "WORKFLOW_RULE" || strWorkflowNodeType == "WORKFLOW_BRANCH")
    {
        var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");
        strConfigPageName = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//@RULE_BRANCH_NODE_CONFIG_WEBPAGE_URL").GetText(); // 相对于web根目录，形如hxdynamicpage_common_v13:hxsm_v6/approval_workflow_node_config__approve_group.hxpage.xhtml
        strTemp = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//@RULE_BRANCH_NODE_CONFIG_DIALOG_SIZE").GetText(); // 形如800,600
        var arrTemp = strTemp.split(/[,|;]/);
        intDialogWidth = parseInt(arrTemp[0]);
        intDialogHeight = parseInt(arrTemp[1]);
    }
    else
    {
        strConfigPageName = "hxdynamicpage_common_v13:hxsm_v6/hxworkfloweditor_workflow_node_config__common.hxpage.xhtml";
        intDialogWidth = 800; intDialogHeight = 500;
    }

    var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");
    var objTempHXXmlNode = objHXXmlDoc_WebPageConfigData.SelectSingleNode("//RS_ROW");
    var strWorkflowDefinitionCode = objTempHXXmlNode.GetAttributeValue("HX_WORKFLOW_DEFINITION_CODE");
    var strWorkflowInstanceCode = objTempHXXmlNode.GetAttributeValue("HX_WORKFLOW_INSTANCE_CODE");

    var strTemp = objTempHXXmlNode.GetAttributeValue("HX_USE_JSON_DIALOG_ARGUMENT");
    var blnUseJsonDialogArgument = (strTemp != null && strTemp != "" && strTemp != "0" ? true : false);

    var objConfigPageInfo = {
        config_page_name: strConfigPageName
        , dialog_width: intDialogWidth
        , dialog_height: intDialogHeight
        , use_json_dialog_argument: blnUseJsonDialogArgument
        , workflow_definition_code: strWorkflowDefinitionCode
        , workflow_instance_code: strWorkflowInstanceCode
    };

    return objConfigPageInfo;
}

HXWebWorkflowEditor._Interface._OnWorkflowActivityRemoved = function(strWorkflowNodeCode, objHXXmlNodeForWorkflowNode)
{
    var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");

    var strFullXmlData = HXWebJS.Xml.BuildAllXmlDatas("workflow_editor_config_data", objHXXmlDoc_WebPageConfigData.GetXml()
                                                    , "workflow_activity_node_code", strWorkflowNodeCode
                                                    , "workflow_activity_node_xml", objHXXmlNodeForWorkflowNode.GetXml());

    HXWebXmlService.CallPageXmlServiceAsyncWithProgressBar("HXWORKFLOWEDITOR6__WORKFLOW_ACTIVITY_NODE_REMOVE", strFullXmlData
                                         , null, "TrustHX.HXPage6", "TrustHX.HXPage6.HXWorkflowEditor6AspxXmlService");
}

HXWebWorkflowEditor.Interface.SaveWorkflowContentDirectly = function()
{
    var objHXXmlDoc_WebPageConfigData = HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland("hxxml_webpage_config_data");

    var strWorkflowXmlContent = HXWebWorkflowEditor._Internal._HXXmlDocForWorkflow.GetXml();

    var strFullXmlData = HXWebJS.Xml.BuildAllXmlDatas("workflow_editor_config_data", objHXXmlDoc_WebPageConfigData.GetXml()
                                                    , "workflow_xml_content", strWorkflowXmlContent);

    HXWebXmlService.CallPageXmlServiceAsync("HXWORKFLOWEDITOR6__XML_CONTENT_SAVE", strFullXmlData
                                         , null, "TrustHX.HXPage6", "TrustHX.HXPage6.HXWorkflowEditor6AspxXmlService");
}