intellisense.annotate(HXWebDynamicPage.ListPage,
{
    // 列表页面发起数据查询之前的回调函数。可以通过该回调函数返回false撤消本次查询操作。该回调函数无参数。
    OnDataListBeforeBeginSearch: undefined,
    // 列表页面数据查询结束后的回调函数。该回调函数无参数。
    OnDataListAfterInquiryFinished: undefined,
    // 列表页面异步记录总数获取完成后的回掉函数。常用于移动端个性化列表页面导航条开发支持。该回调函数无参数。
    OnDataListAfterAsyncRecordCountGet: undefined,

    // 列表页面发起删除选中记录条目内置操作之前的回调函数。可以通过该回调函数返回false撤消本次查询操作。
    // 回调函数参数：fn(strObjectViewCode, objHXXmlNodeListForDelete)
    OnDataListBeforeChosenRowsDeleted:undefined,
    // 列表页面发起删除选中记录条目内置操作之后的回调函数。可以通过该回调函数进行附加后续处理。
    // 回调函数参数：fn(strObjectViewCode, objHXXmlNodeListForDelete)
    OnDataListAfterChosenRowsDeleted: undefined,
    // 列表页面发起临时移除选中记录条目内置操作之前的回调函数。可以通过该回调函数返回false撤消本次操作。
    // 回调函数参数：fn(strObjectViewCode, objHXXmlNodeListForDelete)
    OnDataListBeforeChosenRowsTempRemoved:undefined,
    // 列表页面发起临时移除选中记录条目内置操作之后的回调函数。
    // 回调函数参数：fn(strObjectViewCode, objHXXmlNodeListForDelete)
    OnDataListAfterChosenRowsTempRemoved: undefined,

    // 列表页面发起批量保存数据记录操作之前的回调函数。可以通过该回调函数返回false撤消本次操作。
    // 回调函数参数：function (strObjectViewCode, strSaveOperationType, objHXXmlDocForDataList)
    OnDataListBeforeContentSaved:undefined,
    // 列表页面发起批量保存数据记录操作之后的回调函数。可以通过该回调函数进行附加的后续处理。
    // 回调函数参数：function (strObjectViewCode, strSaveOperationType)
    OnDataListAfterContentSaved: undefined,

    // 列表页面导航树节点被点击或者设置之前的回调函数。可以通过该回调函数返回false撤消本次操作。
    // 回调函数参数：fn(strTreeViewControlId, strChosenNodeUniqueCode)
    OnNavigationTreeBeforeNodeSelected:undefined,
    // 列表页面导航树节点被点击或者设置之后的回调函数。可以通过该回调函数进行后续附加处理。
    // 回调函数参数：fn(strTreeViewControlId, strChosenNodeUniqueCode)
    OnNavigationTreeAfterNodeSelected:undefined
});


intellisense.annotate(HXWebDynamicPage.ListPage.begin_search, function ()
{
    /// <summary>
    /// 发起一次数据列表查询操作。
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.ListPage.goto_prev_or_next_page, function (strPageNavigationDirection) {
    /// <summary>
    /// 对当前列表记录执行下一页或上一页操作。
    /// </summary>
    /// <param name="strPageNavigationDirection">prev,next,first,last四个值之一。</param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.goto_list_page_no, function (intPageNumberToGo)
{
    /// <summary>
    /// 指示当前列表页面显示指定页码的记录。页码参数值从1开始（1表示第一页）。<=0的数值表示最后一页。
    /// </summary>
});


intellisense.annotate(HXWebDynamicPage.ListPage.begin_easy_query, function (options)
{
    /// <summary>
    /// 发起一次组合条件查询。函数显示组合条件输入对话框，然后基于用户的设置发起数据列表查询。
    /// </summary>
    /// <param name="options" type="Object">
    /// 传递给组合条件对话框的设置，用于控制组合条件的交互行为。JSON对象，可能的属性和值如下：
    /// allow_all_fields:[true|false]，是否允许所有字段作为组合条件字段，缺省=true
    /// exclude_customized_fields:[true|false]，是否排除自定义字段，缺省=false
    /// excluded_fields_list:'',指定需要排除的字段清单，多个字段之间分号分隔。allow_all_fields=true时有意义
    /// exclude_virtual_fields:[true|false],是否排除虚拟字段，缺省=false
    /// included_fields_list:'',指定需要包含的字段清单，多个字段之间分号分隔。allow_all_fields=false时有意义
    /// dft_blank_rows_count: [0-n]，空白条件行的数量，缺省=3
    /// field_method_setting:'',自定义字段比较方式设置，形如：'f1:1|2|3;f2:4|5'，字段代码后接冒号后接以数字表示的可用比较方式（多个比较之间使用|分隔），多个字段之间使用分号分隔
    /// use_v2_setting_page: {true|false}，缺省=false
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.export_data_to_file, function (strExportDataFileType, blnExportOnlyChosenData, strExportOutputFileNameToDisplay)
{
    /// <summary>
    /// 导出当前数据查询列表的数据。
    /// </summary>
    /// <param name="strExportDataFileType">
    /// 导出文件类型，可选值：[csv|txt|xlsx|xls|xlsx_directly]，缺省为空值，表示导出文件类型由系统配置文件中的设置决定。
    /// </param>
    /// <param name="blnExportOnlyChosenData" type="bool">是否仅导出选中记录。缺省=false
    /// </param>
    /// <param name="strExportOutputFileNameToDisplay" type="string">导出文件名。缺省为空表示使用服务器随机文件名</param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.batch_list_data_process, function (strBatchProcessType, fnResponseCallback, blnProcessOnlyChosenRecords, strExtraBatchProcessData)
{
    /// <summary>
    /// 发起列表数据批量处理操作。具体操作由服务器端回调函数进行。
    /// </summary>
    /// <param name="strBatchProcessType">批量处理操作类型，用于区分多种不同的批处理操作。</param>
    /// <param name="fnResponseCallback">批量处理操作完成后的回调函数。回调函数参数：fn(result)</param>
    /// <param name="blnProcessOnlyChosenRecords" type="bool">是否仅处理选中记录。缺省=false</param>
    /// <param name="strExtraBatchProcessData">附加批处理数据</param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.save_datalist_process, function (strSaveOperationType, blnIgnoreInputCheck)
{
    /// <summary>
    /// 批量保存列表数据。
    /// </summary>
    /// <param name="strSaveOperationType">批量保存操作类型，用于区分不同的保存操作场景。</param>
    /// <param name="blnIgnoreInputCheck" type="bool">是否忽略输入合法性检查，缺省值=false</param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.reset_navigation_tree_node, function (strTreeViewControlId, strChosenNodeUniqueCode)
{
    /// <summary>
    /// 设置列表导航树节点为指定节点。函数被调用后会触发重新查询操作。
    /// </summary>
    /// <param name="strTreeViewControlId">导航树TreeView控件Id</param>
    /// <param name="strChosenNodeUniqueCode">被指定的节点代码，缺省为空值表示未选中任何节点</param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.new_personal_inquiry_report, function (strDesignerVersion)
{
    /// <summary>
    /// 新建V6个人查询报表入口，函数先通过xmlservice创建一个新的查询报表记录，并返回查询报表代码，然后转入设置页面
    /// </summary>
    /// <param name="strDesignerVersion">
    /// 指示报表设计器的版本，{1.3|2.0}, 缺省=1.3
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.ListPage.personal_inquiry_report_list, function (strDesignerVersion)
{
    /// <param name="strDesignerVersion">
    /// 指示报表设计器的版本，{1.3|2.0}, 缺省=1.3
    /// </param>
});


