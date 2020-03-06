intellisense.annotate(HXWebDynamicPage.StatPage,
{
    // 数据统计页面发起数据查询之前的回调函数。可以通过该回调函数返回false撤消本次查询操作。该回调函数无参数。
    OnDataListBeforeBeginSearch: undefined,
    // 数据统计页面数据查询结束后的回调函数。该回调函数无参数。
    OnDataListAfterInquiryFinished: undefined,
    // 数据统计页面异步记录总数获取完成后的回调函数。常用于移动端个性化列表页面导航条开发支持。
    OnDataListAfterAsyncRecordCountGet: undefined
});


intellisense.annotate(HXWebDynamicPage.StatPage.begin_search, function ()
{
    /// <summary>
    /// 发起一次数据统计列表查询操作。
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.StatPage.export_data_to_file, function (strExportDataFileType, strExportOutputFileNameToDisplay)
{
    /// <summary>
    /// 导出当前数据统计查询列表的数据。
    /// </summary>
    /// <param name="strExportDataFileType">
    /// 导出文件类型，可选值：[csv|txt|xlsx|xls|xlsx_directly]，缺省为空值，表示导出文件类型由系统配置文件中的设置决定。
    /// </param>
    /// <param name="strExportOutputFileNameToDisplay" type="string">导出文件名。缺省为空表示使用服务器随机文件名</param>
});

intellisense.annotate(HXWebDynamicPage.StatPage.begin_easy_query, function (options)
{
    /// <summary>
    /// 发起一次组合条件查询。函数显示组合条件输入对话框，然后基于用户的设置发起数据统计列表查询。
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
    /// </param>
});