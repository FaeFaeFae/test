intellisense.annotate(HXWebDynamicPage, 
{
    // 页面加载完毕后的回调函数, 函数参数:无
    OnDocumentReady: undefined,
    // 打印预览模式下页面加载完毕后的回调函数:无
    OnPrintPreviewModeReady: undefined,
    
    // 基于hxpage_click_handler属性的元素自定义handler_code触发页面OnClickHandlerProcess()回调函数
    // 函数参数：fn(strClickHandlerCode, evt)
    OnClickHandlerProcess:undefined,

    // 基于hxpage_mouseover_handler属性的元素自定义handler_code触发页面OnMouseOverHandlerProcess()回调函数
    // 函数参数：fn(strMouseOverHandlerCode, evt)
    OnMouseOverHandlerProcess:undefined,
    // 基于hxpage_mouseout_handler属性的元素自定义handler_code触发页面OnMouseOutHandlerProcess()回调函数
    // 函数参数：fn(strMouseOutHandlerCode, evt)
    OnMouseOutHandlerProcess:undefined,

    // OnMessageHandlerProcess()回调函数接收符合约定的postMessage()事件。
    // 函数参数：fn(strMessageType, messageData, sourceWin);
    OnMessageHandlerProcess:undefined,

    // 文本Web部件（超链接显示形式的）内容点击后的回调函数。
    // 函数参数：fn(el),el为被点击的文本Web部件html元素DOM对象
    OnTextWebPartContentClicked: undefined,
    // 按钮Web部件（仅针对非内置命令按钮）被点击后的回调函数。
    // 函数参数：fn(strCommandCode, strObjectViewCode)
    OnExtCommandButtonClicked: undefined,
    // 字段Web部件超链接内容被点击后的回调函数。
    // 函数参数：fn(fieldWebPartContainer, bindingLineInfo)
    OnFieldWebPartHyperlinkContentClicked: undefined,
    // 下拉选择框获取筛选数据时的回调函数。
    // 函数参数：fn(strControlId, objInputBox, objDropdownButton), 函数返回false可以撤消本次下拉选择行为
    OnComboBoxFilterDataGet: undefined,
    // 下拉选择框选择数据后（或者数据改变后）的回调函数。
    // 函数参数：fn(strControlId, objInputBox, objDropdownButton, objHXXmlForChoosedData)
    OnComboBoxDataChoosed: undefined,
    // 弹出树形数据选择框获取筛选数据时的回调函数。
    // 函数参数：fn(strControlId, objInputBox, objButton), 函数返回false可以撤消本次下拉选择行为
    OnPopupTreeViewFilterDataGet: undefined,
    // 弹出树形数据选择框选择数据后（或者数据清除后）的回调函数。
    // 函数参数：fn(strControlId, objInputBox, objDropdownButton, arrChosenNodesInfo)
    OnPopupTreeViewDataChoosed: undefined,
    // 文件交互Web部件文件（临时）上传后的回调函数。
    // 函数参数：fn(strWebControlHtmlId, fileBoxContainer, arrUploadedFileInfo)。其中arrUploadedFileInfo 为JSON对象构成的数组，每个文件占用一项
    OnFileBoxFileUploaded: undefined,

    // 图表Web部件图表显示前的回调函数。
    // 图表Web部件处理完毕图表数据后触发该回调函数。通常在该回调函数中进行图表配置项的个性化附加设置
    // 函数参数：fn(strChartDivContainerId, ecOption)
    OnChartBeforeShow:undefined,
    // 图表显示元素被点击后的回调函数，可以用于显示关联被点击数据项的详细内容等。
    // 函数参数：fn(strChartDivContainerId, strCategory, strSeries, strValue, ecParams)，其中ecParams为EChart引擎返回的被点击位置详细内容对象
    OnChartDataPointClicked:undefined,

    // 列表数据批量 copy paste 相关回调函数。获取复制或者粘贴数据列表字段清单。
    // 函数参数：fn(strObjectViewCode)。函数应返回分号分隔的字段列表（和要复制粘贴的表格数据中的列一一对应，例如：return "sales_order_code;customer_code;region_code;sales_order_date;total_amount";）
    OnDataListCopyPasteFieldsListGet: undefined,
    // 列表数据批量复制操作前的回调函数。开发者可以通过该回调函数更新要复制出去的列表数据值。
    // 函数参数：fn(strObjectViewCode, arrTableRowsData)，函数返回被更新后的数据数组:arrTableRowsData
    OnDataListBeforeCopyData: undefined,
    // 列表数据批量粘贴操作前的回调函数。开发者可以通过该回调函数更新将要粘贴的列表数据值。
    // 函数参数：fn(strObjectViewCode, arrTableRowsData)，函数返回被更新后的数据数组:arrTableRowsData。函数可以返回false表示撤消本次粘贴操作。
    OnDataListBeforePasteData: undefined,
    // 列表数据批量粘贴操作后的回调函数。开发者可以通过该回调函数执行后续的处理。
    // 函数参数：fn(strObjectViewCode)
    OnDataListAfterPasteData: undefined,

    // 列表行被点击后回调函数。
    // 函数参数：fn(strDataListContainerHtmlId, bindingLineInfo, bindingLineContainer, objHXXmlDataRowNode, evt)
    OnDataListRowClicked: undefined,
    // 列表行命令按钮点击后回调函数
    // 函数参数：fn(strObjectViewCode, strOrgLineCmdCode, objHXXmlNodeForChoosedLine, strExtraCmdData, dataListWebPartContainer, objLineCmdWebPartContainer)
    OnDataListRowLineCmdButtonClicked:undefined,

    // 列表字段自动汇总值更新相关回调函数
    // 函数参数：fn(strObjectViewCode, strFieldCode, dblSumResultValue, objContainerDiv)
    OnDataListFieldAutoSumValueUpdated: undefined,

    // 列表条目行添加相关回调函数
    // 函数参数：fn(strObjectViewCode, objHXXmlNodeOfNewRow, upLevelBindingRowXmlData) 
    OnDataListBeforeRowAdded: undefined,

    // 列表条目行临时移除操作前回调函数。开发者可通过该回调函数返回false来撤消移除操作 
    // 函数参数：fn(strObjectViewCode, rowBindingInfo)
    OnDataListBeforeRowTempRemoved: undefined,
    // 列表条目行临时移除操作后回调函数。开发者可通过该回调函数执行一些后续操作 
    // 函数参数：fn(strObjectViewCode, rowBindingInfo)
    OnDataListRowAfterTempRemoved:undefined,
    // 列表条目行删除操作前回调函数。开发者可通过该回调函数返回false来撤消删除操作 
    // 函数参数：fn(strObjectViewCode, rowBindingInfo)
    OnDataListBeforeRowDeleted: undefined,
    // 列表条目行删除操作后回调函数。开发者可通过该回调函数执行一些后续操作
    // 函数参数：fn(strObjectViewCode, rowBindingInfo)
    OnDataListAfterRowDeleted: undefined, 
    // 对象扩展Xml服务调用前内容获取回调函数,用于对象扩展许可命令按钮。开发者通过该回调函数给对象扩展Xml服务传递需要的数据内容。
    // 函数参数：fn(strCmdCode, blnIsLineCommand, strObjectViewCode, strObjectViewCmdPermissionCode, strExtraCmdData, objHXXmlNodeForChoosedLine, fnCallbackToCallObjectExtendXmlSvc, extraOption, objCmdWebPartContainer)
    // 其中，fnCallbackToCallObjectExtendXmlSvc参数用于异步获取所需数据的场景（例如：打开对话框收集数据后再发送命令到服务器）。
    // 其参数为fn(strObjectExtendXmlSvcContent, extraOption)，其中 extraOption 用于可能的XmlService显示行为选项控制。
    // 如果函数返回null或者false，引擎视作撤消本次操作。
    OnObjectExtendXmlSvcContentGet: undefined,
    // 对象扩展Xml服务调用后的回调函数,用于对象扩展许可命令按钮。
    // 函数参数：fn(strCmdCode, blnIsLineCommand, strObjectViewCode, strObjectViewCmdPermissionCode, strExtraCmdData, objHXXmlNodeForChoosedLine, strXmlResult, objCmdWebPartContainer)
    // 其中，strCmdCallType参数值用于区分按钮或者条目按钮(command|line_command), strExtraCmdData为命令按钮Web部件中hx_cmd_extra_data属性的值。
    // objHXXmlNodeForChoosedLine参数仅对于line_command有意义。strXmlResult参数为服务器返回的值。
    OnObjectExtendXmlSvcAfterCalled: undefined
});




intellisense.annotate(HXWebDynamicPage.GetWebPageConfigDataValue, function (strConfigAttributeName)
{
    /// <summary>
    /// 读取页面配置数据指定属性的值，如果指定了不存在的属性，函数返回空字符串
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.SetWebPageConfigDataValue, function (strConfigAttributeName, strValue)
{
    /// <summary>
    /// 设置页面配置数据指定属性的值，如果指定了不存在的属性，函数不做任何事
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.GetHXXmlDocOfObjectViewListData, function (strObjectViewCode)
{
    /// <summary>
    /// 工具函数，获取指定对象视图对应的列表Xml数据岛对象（命名约定：hxxml_listdata__ + 对象视图代码）
    /// 如果strObjectViewCode参数值不为空，则函数读取指定对象视图对应的Xml数据包
    /// 否则，函数读取页面配置信息中的OBJECT_VIEW_CODE属性值对应的列表Xml数据包；否则返回null
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.GetHXXmlDocOfObjectViewListBlankRow, function (strObjectViewCode)
{
    /// <summary>
    /// 工具函数，获取指定对象视图对应的列表空白行Xml数据岛对象（命名约定：hxxml_listdata_blankrow__ + 对象视图代码）
    /// 如果strObjectViewCode参数值不为空，则函数读取指定对象视图对应的Xml数据包
    /// 否则，函数读取页面配置信息中的OBJECT_VIEW_CODE属性值对应的列表空白行Xml数据包；否则返回null
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.GetHXXmlDocOfObjectViewData, function (strObjectViewCode)
{
    /// <summary>
    /// 工具函数，获取指定对象视图对应的Xml数据岛对象（命名约定：hxxml_data__ + 对象视图代码）
    /// 如果strObjectViewCode参数值不为空，则函数读取指定对象视图对应的Xml数据包
    /// 否则，函数读取页面配置信息中的OBJECT_VIEW_CODE属性值对应的Xml数据包；否则返回null
    /// </summary>
});


intellisense.annotate(HXWebDynamicPage.CallObjectExtendXmlService, function (strObjectViewCode, strObjectViewCmdPermissionCode
                                                        , strCommandCode, blnIsLineCommand, strObjectExtendXmlSvcContent
                                                        , fnAfterObjectExtendXmlSvcCallback, options)
{
    /// <summary>
    /// 发起对象扩展许可Xml服务请求。服务器端通过实现HXObjectExtendXmlService__OnProcess()回调函数进行响应。
    /// 可以将对象扩展许可Xml服务请求视作增强版本的PageXmlService请求（增加了内置权限许可检查和可能使用到的编辑页面主对象数据以及line_command相关记录条目数据）
    /// </summary>
    /// <param name="fnAfterObjectExtendXmlSvcCallback">
    /// 扩展Xml服务调用后的回调函数，函数参数：fn(strCommandCode, blnIsLineCommand, strObjectViewCode, strObjectViewCmdPermissionCode, strExtraCommandData, line_command_row_data, strXmlResult)
    /// </param>
    /// <param name="options">
    /// 附加参数，json对象，可能的属性有：{ line_command_row_data: objXmlNode,extra_cmd_data:'', extend_webpart_html_id:'', assembly_class_name:'', disable_input: true, show_progressbar:true, use_parallel_mode:true}
    /// </param>
});


intellisense.annotate(HXWebDynamicPage.CalcAndFillObjectAutoSumFieldValue, function (strXmlDataIslandCode, strFieldCode
                            , objElementForAutoSumResult, strSubListHXWebJSParentRowUUID)
{
    /// <summary>
    /// 对指定数据包的指定字段值进行汇总计算，然后更新到指定汇总值元素中。
    /// 汇总值元素的可能的hx_decimal_scale属性和hx_decimal_use_group_seperator属性指定小数位数和是否使用千分位显示
    /// </summary>
});




intellisense.annotate(HXWebDynamicPage.CommandWebPartDisable, function (strCommandCode, blnDisable)
{
    /// <summary>
    /// 禁用指定命令代码的按钮
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.CommandWebPartBadgeValueSet, function (strCommandCode, strBadgeValue)
{
    /// <summary>
    /// 为指定命令代码按钮设置徽章值
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.FieldWebPartDisplayFormat, function (strObjectViewCode, strFieldCode
                                                        , jsonFieldInputSetting, objContainerElement)
{
    /// <summary>
    /// 为指定字段设置输入显示格式
    /// </summary>
    /// <param name="strObjectViewCode">对象视图代码</param>
    /// <param name="strFieldCode">字段代码</param>
    /// <param name="jsonFieldInputSetting">
    /// 输入显示设置, JSON对象。可以设置的属性：
    ///   value_required: [true|false], read_only:[0|1|2], 0=可读写,1=完全只读(只读且不许选择), 2=半只读(只读但可选择),not_allow_pick样式类
    /// </param>
    /// <param name="objContainerElement">要处理的字段所属的容器元素，可以为空</param>
});

intellisense.annotate(HXWebDynamicPage.FieldInputBoxHtmlIdGet, function (strObjectViewCode, strFieldCode, strFieldWebPartType, strFieldCellCode)
{
    /// <summary>获取字段输入框HtmlId值（平台动态页面引擎根据对象视图代码和字段代码以及字段类型用约定规则生成）</summary>
    /// <param name="strFieldWebPartType" optional="true">
    /// 字段Web部件类型字符串，{field|search_field|list_field}，缺省为field
    /// </param> 
    /// <param name="strFieldCellCode" optional="true">字段单元格代码，缺省为空。当一个字段在页面上多处出现时可通过该属性区分</param> 
});

intellisense.annotate(HXWebDynamicPage.ExtendWebPartDataListRebindingCallbackTrigger, function (arrXmlDataIslandIdList)
{
    /// <summary>
    /// 在扩展Web部件晚期自动加载js的情况下，页面xml绑定处理时扩展Web部件的绑定处理回调函数还没有加载
    /// 所以当扩展Web部件动态加载js文件后，需要自动执行可能的扩展Web部件数据包相关的数据列表绑定处理
    /// 该工具函数为此操作提供便利。通常该函数在扩展Web部件预定义_OnWebPartLoaded()函数中调用
    /// </summary>
    /// <param name="arrXmlDataIslandIdList" type="Array" elementType="string">
    /// 要触发列表绑定回调函数的数据岛id清单
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.ExtendWebPartBrowserSideInit, function (webPartContainerHtmlIdOrElement, strExtendWebPartType, options)
{
    /// <summary>
    /// 扩展Web部件浏览器端动态初始化工具函数。
    ///  函数通过XmlService动态获取html内容并填充到Web部件容器中，然后动态加载可能的ref文件
    ///  然后函数登记扩展Web部件类型对象实例到全局缓存数组支持扩展Web部件内部使用的基础Web部件或控件相关回调函数
    /// </summary>
    /// <param name="options">
    /// 参数选项集合，JSON对象。当前支持参数：
    ///     dashboard_html_id:'', dashboard_code:'', dashboard_widget_code:'' 仪表板相关选项
    ///     webpart_setting_info: '' Web部件设置信息
    ///     show_loading_icon: true | false, 缺省 = true, 显示加载图标。
    ///     extra_data: '' 附加数据
    /// </param>
});
