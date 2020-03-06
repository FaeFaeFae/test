intellisense.annotate(HXWebComboBoxControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册下拉选择框控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 下拉选择控件Id号，该Id号通常是一个input[type=text]的输入框的id值，表示下拉选择控件和该输入框关联。
    /// 某些场景下，该Id号也可以不和html元素关联，只需要id值唯一即可（例如：点击添加按钮弹出下拉选择列表）
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和下拉选择控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 下拉选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// { content_type:'key'|'desc',choose_type:0|1,is_paging:true|false,page_size:1-n,limit_in_list:true|false,
    ///   use_icon:'no'|'use_css_icon'|'use_img_icon', dropdownbox_width:n, dropdownbox_lines_count:n,
    ///   columns_width_rate:'v1;v2',binding_datasrc_id:'',binding_datafld_for_key:'',binding_datafld_for_desc:''
    ///   binding_datafld_for_attr_1:'',search_from_begin:true|false,use_autocompletion_hint:true|false,
    ///   search_columns:'key;desc', auto_show_when_focusin:true|false
    ///   ongetfilterdata_callback:fn(id,input,button), ondatachoosed_callback:fn(id,input,button, xmldata)}
    /// 具体每个属性的含义和缺省值说明详见HXWebComboBoxControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebComboBoxControl.option, {
    // 下拉选择框选中条目项后，在输入框中显示的选择内容类型，{key|desc}，缺省值为key
    content_type: undefined,
    // 单选还是多选模式，0=单选，1=多选。缺省为单选(0)
    choose_type: undefined,
    // 是否分页显示，{true|false}，缺省=true
    is_paging: undefined,
    // 分页显示模式下，每页记录数量。缺省值=30
    page_size: undefined,
    // 是否限制输入内容必须在列表项中，true|false,缺省=true
    limit_in_list: undefined,
    // 是否使用图标，可选值{no|use_css_icon|use_img_icon}, 缺省=no 
    use_icon: undefined,
    // 弹出选择区域宽度，缺省(null)表示由控件自行决定（通常以关联输入框左边开始到选择按钮右边的宽度）
    dropdownbox_width: undefined,
    // 弹出选择区域显示条目行数，缺省=8
    dropdownbox_lines_count: undefined,
    // 选择条目各个列的宽度比例，例如50;50。缺省100%
    columns_width_rate: undefined,
    /// 绑定数据源Id
    binding_datasrc_id: undefined,
    // 键值绑定的字段名
    binding_datafld_for_key: undefined,
    // 描述值绑定的字段名
    binding_datafld_for_desc: undefined,
    // 附加属性1值绑定的字段名
    binding_datafld_for_attr_1: undefined,
    // 附加属性2值绑定的字段名
    binding_datafld_for_attr_2: undefined,
    // 附加属性3值绑定的字段名
    binding_datafld_for_attr_3: undefined,
    // 附加属性4值绑定的字段名
    binding_datafld_for_attr_4: undefined,
    // 附加属性5值绑定的字段名
    binding_datafld_for_attr_5: undefined,
    // 下拉选择列表代码
    dropdownlist_code: undefined,
    // 下拉选择静态条目值清单。清单内容为分号分隔的选项，每个选项可以是单一键值，也可以是键值=描述格式。
    // 例如：a;b;c 又例如：1=选项A;2=选项B;3=选项C
    dropdownlist_values: undefined,
    // 下拉选择设置来源对象视图字段信息。object_view_code:field_code格式
    // 当dropdownlist_code和dropdownlist_values都为空时，如果该属性有值，引擎从对象字段元数据中获取扩展下拉选择设置（包括直接udc,对象选择，字段选择）
    dropdownlist_object_view_field: undefined,
    // 模糊查询是否仅查找以输入内容开头的记录条目，true|false，缺省=false
    search_from_begin: undefined,
    // 是否启用自动完成提示（输入字符时，列表项内容自动过滤），true|false,缺省=true
    use_autocompletion_hint: undefined,
    // 进行模糊查询和自动完成提示查询时查找的列清单{key,desc,attr_1,attr_2,attr_3,attr_4,attr_5的组合}，缺省查找显示出来的列
    search_columns: undefined,

    // 是否仅列出生效记录，true|false，缺省为false。如果该属性为true，平台服务器端将对含有hx_record_status字段的选择数据表自动设置hx_record_status=1筛选条件（特例对于hxmd_static_udc选择数据表，也会自动添加record_status=1条件）
    list_only_effective_items: undefined,

    // 焦点进入输入框时，是否自动显示下拉选择区域，{true|false}，缺省=true
    // 如果当前焦点进入的输入框为只读输入框，控件根据属性hx_allow_readonly_pick决定是否自动显示选择区域（缺省不显示，hx_allow_readonly_pick=1则显示）。
    // 只读输入框在半只读和完全只读下的不同显示效果由not_allow_pick附加样式类决定
    auto_show_when_focusin: undefined,
    // 是否显示清除按钮,{true|false}，缺省值：单选下false，多选模式下true
    show_clear_btn: undefined,

    // 是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    use_mobile_mode: undefined,

    // 扩展Web部件html_id, 用于扩展Web部件中使用了下拉选择控件的场景
    extend_web_part_html_id: undefined,
    // 指定处理程序集类名，仅用于平台内置Web部件（如自定义查询报表Web部件下拉选择框）等场景
    pagexmlsvc_class_name: undefined,
    // 初始化回调函数，该回调函数中有机会修改下拉控件选项属性（例如：修改下拉列表代码），或者取消下拉选择行为（通过返回false|null）。
    // 函数参数：fn(controlid, inputElement, btnElement, options)
    oninit_callback: undefined,
    // 自定义筛选数据获取回调函数，返回提供给服务器端进行自定义筛选条件构造使用的相关交互数据。函数返回false可撤消本次下拉选择行为
    // 函数参数：fn(control_id, objInputBox, objDropDownButton)
    ongetfilterdata_callback: undefined,
    // 回调函数，用于在comobobox数据读取后(绑定前)显示前可能的附加处理（例如：动态调整下拉选项的显示次序）。
    // 函数参数：fn(controlid, objHXXmlDocOfData)
    ondataget_callback: undefined,
    // 回调函数，用于在comobobox数据读取并绑定后作可能的附加处理（例如：动态标记特别条目显示）。
    // 如果定义，对每个条目该函数都会被调用。函数参数：fn(controlid, divRowContainer, objHXXmlNodeOfRow)
    ondatabind_callback: undefined,
    // 选择完成后的回调函数。函数参数：fn(controlid, objInputTextBox, objDropdownButton, objHXXmlChoosedData, triggerVia)
    // triggerVia参数可能有三个值（data_item_choosed|input_data_validated|clear_button_pressed）。
    // triggerVia=input_data_validated时某些场景下会跳过默认值填充之类的需求（避免用户选择第二条条目，但焦点丢失时第一个条目被自动匹配选中导致先填充第一个条目的内容导致用户困惑）
    ondatachoosed_callback: undefined
});

intellisense.annotate(HXWebComboBoxControl.set_options, function (str_webdatacontrol_id, options)
{
    /// <summary>
    /// 设置下拉选择框的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 下拉选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// { content_type:'key'|'desc',choose_type:0|1,is_paging:true|false,page_size:1-n,limit_in_list:true|false,
    ///   use_icon:'no'|'use_css_icon'|'use_img_icon', dropdownbox_width:n, dropdownbox_lines_count:n,
    ///   columns_width_rate:'v1;v2',binding_datasrc_id:'',binding_datafld_for_key:'',binding_datafld_for_desc:''
    ///   binding_datafld_for_attr_1:'',search_from_begin:true|false,use_autocompletion_hint:true|false,
    ///   search_columns:'key;desc', auto_show_when_focusin:true|false
    ///   ongetfilterdata_callback:fn(id,input,button), ondatachoosed_callback:fn(id,input,button, xmldata)}
    /// 具体每个属性的含义和缺省值说明详见HXWebComboBoxControl.option的说明。
    /// </param>
});



intellisense.annotate(HXWebCalendarControl.register, function (str_web_control_id, options)
{
    /// <summary>
    /// 注册日历显示控件。
    /// </summary>
    /// <param name="str_web_control_id">
    /// 日历控件Id号，该Id号应该是一个div元素的id值，该div用于作为日历显示的容器元素。
    /// </param>
    /// <param name="options">
    /// 日历控件选项属性集合，JSON对象。常用属性清单如下：
    /// extra_week_lines:附加星期行数，{0-4}，缺省=0
    /// show_calendar_title:是否显示日历标题，{true|false}，缺省=true
    /// show_prevnextmonth_btn:是否显示前月后月按钮，{true|false}，缺省=true
    /// show_prevnextyear_btn:是否显示上年下年按钮，{true|false}，缺省=true
    /// onperiodchanged_callback:当前月份变更以后被触发的回调函数
    /// 函数参数：fn(controlid, intOldPeriod, intNewPeriod)
    /// ondatecellformat_callback:日历日期显示网格格式化时被触发的回调函数。对每个日期网格进行显示格式化时都会调用该回调函数
    /// 函数参数：fn(controlid, intCurrentDate, objCellContainer, objSpanForText, blnIsDisplayedMonth, blnIsToday)
    /// ondatecellclicked_callback:用户鼠标点击日期网格后被触发的回调函数。
    /// 函数参数：fn(controlid, intSelectedDate, objCellContainer)
    /// </param>
});

intellisense.annotate(HXWebCalendarControl.set_options, function (str_web_control_id, options)
{
    /// <summary>
    /// 设置日历控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 图表控件选项属性集合，JSON对象。常用属性清单如下：
    /// extra_week_lines:附加星期行数，{0-4}，缺省=0
    /// show_calendar_title:是否显示日历标题，{true|false}，缺省=true
    /// show_prevnextmonth_btn:是否显示前月后月按钮，{true|false}，缺省=true
    /// show_prevnextyear_btn:是否显示上年下年按钮，{true|false}，缺省=true
    /// first_week_day: 星期开始日，{0-6}，缺省=0表示周日为每个星期第一天，1表示周一为每个星期第一天
    /// onperiodchanged_callback:当前月份变更以后被触发的回调函数
    /// 函数参数：fn(controlid, intOldPeriod, intNewPeriod)
    /// ondatecellformat_callback:日历日期显示网格格式化时被触发的回调函数。对每个日期网格进行显示格式化时都会调用该回调函数
    /// 函数参数：fn(controlid, intCurrentDate, objCellContainer, objSpanForText, blnIsDisplayedMonth, blnIsToday)
    /// ondatecellclicked_callback:用户鼠标点击日期网格后被触发的回调函数。
    /// 函数参数：fn(controlid, intSelectedDate, objCellContainer)
    /// </param>
});

intellisense.annotate(HXWebCalendarControl.set_calendar_period, function(str_web_control_id, int_period)
{
    /// <summary>
    /// 设置并显示指定月份的日历。
    /// </summary>
});

intellisense.annotate(HXWebCalendarControl.get_calendar_period, function (str_web_control_id)
{
    /// <summary>
    /// 获取当前日历控件显示的月份。如果日历控件以前未显示过，函数会返回null值。
    /// </summary>
});

intellisense.annotate(HXWebCalendarControl.set_customized_cell_template, function (str_web_control_id, strDateCellTemplateHtml)
{
    /// <summary>
    /// 设置日历控件每个日期单元格自定义显示模板。
    /// 日期网格模板html必需以id=hxwebcalendarcontrol_cell_container的div容器元素开始，内部应该有id=hxwebcalendarcontrol_cell_text的span元素以显示当前日期。
    /// </summary>
});

intellisense.annotate(HXWebDatePickerControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册日期选择控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 日期控件Id号，该Id号通常是一个input[type=text]的输入框的id值，表示日期选择控件和该输入框关联。
    /// 某些场景下，该Id号也可以不和html元素关联，只需要id值唯一即可（例如：点击添加按钮弹出日期选择列表）
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和日期选择控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 日期选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// {default_date:dtValue,ondatachoosed_callback:fn(controlid, chosenDateValue, inputElement, btnElement)}
    /// 具体每个属性的含义和缺省值说明详见HXWebDatePickerControl.set_options()函数的说明。
    /// </param>
});

intellisense.annotate(HXWebDatePickerControl.set_options, function (str_webdatacontrol_id, options)
{
    /// <summary>
    /// 设置日期选择控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 选项属性集合，JSON对象。属性清单如下：
    /// auto_show_when_focusin:焦点进入时是否自动显示选择区域，{true|false},缺省值true
    /// default_date:缺省当前日期（当关联输入框中值为空时，如果该参数有值，控件使用该值作为缺省日期），缺省值为当天
    /// allow_time_part:是否允许输入时间部分，{true|false}，缺省=false
    /// show_prevnextmonth_btn:是否显示月份导航按钮，{true|false} 缺省=true (移动模式下缺省=false)
    /// show_prevnextyear_btn:是否显示年份导航按钮，{true|false} 缺省=true (移动模式下缺省=false)
    /// first_week_day: 星期开始日，{0-6}，缺省=0表示周日为每个星期第一天，1表示周一为每个星期第一天
    /// use_mobile_mode:是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    /// oninit_callback:初始化回调函数，该回调函数中有机会修改参数，以及取消选择（通过返回false|null）。
    /// 函数参数：fn(controlid, inputElement, btnElement, options)
    /// onactivemonthchanged_callback:当前月份切换时的回调函数。
    /// 函数参数：fn(controlid, intYear, intMonth, inputElement, btnElement)
    /// ondaydisplayformat_callback:日期显示格式化回调函数，如果设置，每个日期显示网格都会调用一次该函数。用于自定义特殊日期显示
    /// 函数参数：fn(controlid, inputElement, btnElement, dateValue)
    /// ondatachoosed_callback:日期被选择后的回调函数。
    /// 函数参数：fn(controlid, chosenDateValue, inputElement, btnElement)
    /// </param>
});



intellisense.annotate(HXWebMonthPickerControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册月份选择控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 月份选择控件Id号，该Id号通常是一个input[type=text]的输入框的id值，表示月份选择控件和该输入框关联。
    /// 某些场景下，该Id号也可以不和html元素关联，只需要id值唯一即可（例如：点击添加按钮弹出月份选择控件）
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和月份选择控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 月份选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// {default_period:194910,ondatachoosed_callback:fn(controlid, chosenMonthValue, inputElement, btnElement)}
    /// 具体每个属性的含义和缺省值说明详见HXWebMonthPickerControl.set_options()函数的说明。
    /// </param>
});

intellisense.annotate(HXWebMonthPickerControl.set_options, function (str_webdatacontrol_id, options)
{
    /// <summary>
    /// 设置月选择控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 选项属性集合，JSON对象。属性清单如下：
    /// auto_show_when_focusin:焦点进入时是否自动显示选择区域，{true|false},缺省值true
    /// default_period:缺省当前月份（当关联输入框中值为空时，如果该参数有值，控件使用该值作为缺省月份），缺省值为当天所在月份
    /// allow_choose_begin_period:允许用户选择的月份范围开始年月，缺省将不做控制，例如：201909
    /// allow_choose_end_period:允许用户选择的月份范围结束年月，缺省将不做控制，例如：201909
    /// use_mobile_mode:是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    /// oninit_callback:初始化回调函数，该回调函数中有机会修改参数，以及取消选择（通过返回false|null）。
    /// 函数参数：fn(controlid, inputElement, btnElement, options)
    /// ondatachoosed_callback:月份被选择后的回调函数。
    /// 函数参数：fn(controlid, intChosenPeriod, inputElement, btnElement)。注意：intChosenPeriod值可能为空(null)
    /// </param>
});

intellisense.annotate(HXWebTimePickerControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册时间选择控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 时间选择控件Id号，该Id号通常是一个input[type=text]的输入框的id值，表示时间选择控件和该输入框关联。
    /// 某些场景下，该Id号也可以不和html元素关联，只需要id值唯一即可（例如：点击添加按钮弹出时间选择控件）
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和时间选择控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 时间选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// {default_time:14:18,ondatachoosed_callback:fn(controlid, chosenTimeValue, inputElement, btnElement)}
    /// 具体每个属性的含义和缺省值说明详见HXWebTimePickerControl.set_options()函数的说明。
    /// </param>
});

intellisense.annotate(HXWebTimePickerControl.set_options, function (str_webdatacontrol_id, options)
{
    /// <summary>
    /// 设置时间选择控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 选项属性集合，JSON对象。属性清单如下：
    /// auto_show_when_focusin:焦点进入时是否自动显示选择区域，{true|false},缺省值true
    /// default_time:缺省当前时间，格式为 hh:mm。当关联输入框中值为空时，如果该参数有值，控件使用该值作为缺省时间。缺省值为当前时点
    /// use_mobile_mode:是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    /// auto_close:是否选择分钟后自动关闭选择框（完成选择）,仅在单表盘模式下有意义，true|false。缺省=true
    /// oninit_callback:初始化回调函数，该回调函数中有机会修改参数，以及取消选择（通过返回false|null）。
    /// 函数参数：fn(controlid, inputElement, btnElement, options)
    /// ondatachoosed_callback:月份被选择后的回调函数。
    /// 函数参数：fn(controlid, strChosenTimeValue, inputElement, btnElement)。注意：strChosenTimeValue值可能为空(null)
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.register, function (str_treeviewcontrol_id, options)
{
    /// <summary>
    /// 注册TreeView控件。
    /// </summary>
    /// <param name="str_treeviewcontrol_id">
    /// TreeView控件Id号。该id号对应一个页面上唯一的div容器元素作为treeview控件的显示区域。
    /// 如果函数未找到对应id号的元素，注册操作将会被忽略。
    /// </param>
    /// <param name="options">
    /// TreeView控件选项属性集合，JSON对象。常用属性清单如下：
    /// { is_show_checkbox:true|false,treeview_setting_code:"somecode" }
    /// 具体每个属性的含义和缺省值说明详见HXWebTreeViewControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.option, {
    // 是否支持选择，{true|false}，缺省值=false
    is_show_checkbox: undefined,
    // 是否节点文字太长时允许折行，{true|false},缺省=true
    is_allow_wrap_text: undefined,
    // 是否使用图标，可选值{no|use_css_icon|use_img_icon}, 缺省=no 
    use_icon: undefined,
    // 是否使用CSS展开折叠图标模式，{true|false}，缺省值=false。 CSS展开折叠图标模式用于高度个性化的TreeView扩展需要，
    // 其特点是展开折叠图标为span元素（不同于非css图标模式下的img元素），同时增加了水平线元素（非css图标模式下的img元素假定包含了水平线条，没有单独的水平线元素）
    use_css_expandcollapse_icon_mode: undefined,
    // 默认的图标样式类(use_icon=use_css_icon时有意义)，如果节点数据中没有指定图标样式，使用该设置。
    // 如果该设置为空，引擎显示一个cube图标
    default_icon_class: undefined,
    // 是否（在点击节点文字或图标时)自动切换展开折叠状态，{true|false}，缺省值=false
    is_auto_expandcollapse: undefined,
    // 是否（在点击节点文字或图标时）自动切换选中状态，{true|false}，缺省值=true
    is_auto_changecheckstatus: undefined,
    // 控件关联的服务器端TreeView设置信息代码
    treeview_setting_code: undefined,
    // 是否仅列出生效记录，true|false，缺省为false。如果该属性为true，平台服务器端将对含有hx_record_status字段的选择数据表自动设置hx_record_status=1筛选条件
    list_only_effective_items: undefined,
    // 自定义无数据提示消息，可以为html字符串。
    customized_no_data_hint_msg: undefined,
    // 是否允许拖放节点操作，{true|false}，缺省值=false
    is_allow_dragdrop: undefined,
    // （当拖拽移动节点时）是否触发移动节点事件到服务器端（服务器端可通过回调函数决定是否进行相应处理），{true|false}，缺省值=false
    trigger_node_move_event_to_svr: undefined,
    // 扩展Web部件html_id, 用于扩展Web部件中使用了下拉选择控件的场景
    extend_web_part_html_id: undefined,
    // 指定处理程序集类名，仅用于平台内置Web部件（如自定义查询报表Web部件下拉选择框）等场景
    pagexmlsvc_class_name: undefined,
    // 自定义筛选数据读取回调函数，函数参数：fn(str_treeview_control_id)
    ongetfilterdata_callback: undefined,
    // 节点选中状态被更改时的回调函数，该函数返回false可撤消选择操作。
    // 函数参数: fn(strTreeViewControlId, currNodeData, blnToBeChecked)
    oncheckstatuschanged_callback: undefined,
    // 节点选中状态被更新后的回调函数。
    // 函数参数: fn(strTreeViewControlId, currNodeData, blnToBeChecked)
    oncheckstatusupdated_callback: undefined,
    // 节点（文字或图标）被点击后的回调函数。
    // 函数参数: fn(strTreeViewControlId, currNodeData)
    onnodeclicked_callback: undefined,
    // 自定义节点显示html构造扩展回调函数。
    // 函数参数：fn(strTreeViewControlId, nodeData, int_node_choose_status);
    oncustomized_node_html_build__callback: undefined,
    // 节点拖放（到TreeView控件节点上)后的回调函数。
    // 函数参数: fn(event, strTreeViewControlId, strDragTargetNodeUniqueCode, targetNodeContainerDiv, strDragSrcNodeUniqueCode, srcNodeContainerDiv)
    // 由于可能从外部（非TreeView控件)拖放到目标TreeView控件，所以拖放源节点代码和Html容器元素可能为空字符串或空值。
    onbeforedrop_callback:undefined
});

intellisense.annotate(HXWebTreeViewControl.set_options, function (str_treeviewcontrol_id, options)
{
    /// <summary>
    /// 设置TreeView控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// TreeView控件选项属性集合，JSON对象。常用属性清单如下：
    /// { is_show_checkbox:true|false,treeview_setting_code:"somecode" }
    /// 具体每个属性的含义和缺省值说明详见HXWebTreeViewControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.init_treeview_nodes, function (str_treeviewcontrol_id, options, fnCallbackAfterInitFinished)
{
    /// <summary>
    /// Treeview初始化节点内容显示入口函数
    /// </summary>
    /// <param name="options">
    /// TreeView初始化相关参数值。JSON对象。具体参数及含义如下：
    /// init_auto_show_level: 初始化自动显示层级，[0-n]，0表示显示所有层级，1表示仅显示顶层节点，2表示显示顶层和第2层节点，以此类推。缺省=1
    /// acquire_all_treeview_data:显示指定层级时，可以指定是否一次性获取所有数据, {true|false}，缺省=false
    /// search_key_chars: 搜索关键字，如果该参数的值非空，则TreeView进入查询模式，即在所有层级的节点中查询符合条件的节点，包括这些节点的前辈节点，作为初始化显示的内容
    /// search_from_begin: 搜索关键字时是否仅查找以关键字开头的内容，true|false,缺省=false
    /// </param>
    /// <param name="fnCallbackAfterInitFinished">
    /// 初始化结束后的回调处理函数。函数参数：fn(str_treeviewcontrol_id)
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.get_actived_node, function (str_treeviewcontrol_id)
{
    /// <summary>
    /// 获取当前的活动节点（最后一次被点击的节点）
    /// { node_unique_code:'somevalue',parent_node_unique_code:'somevalue',node_text:'sometext',
    ///   node_hint_desc:'some text', node_category:'', node_attr_1:'',node_attr_2:'',
    ///   node_attr_3:'', node_attr_4:'', node_attr_5:'', node_is_leaf: true|false, 
    ///   node_level:1|2|3|...|n, node_icon_class:'', node_image_src:''}
    /// </summary>
    /// <returns type="JSON">
    /// 函数以JSON对象形式返回当前活动节点的数据。具体内容为：
    /// </returns>
});

intellisense.annotate(HXWebTreeViewControl.set_actived_node, function (str_treeviewcontrol_id
                        , str_node_unique_code, blnAutoExpandCollapse, blnAutoChangeCheckStatus, blnTriggerCheckStatusCallback)
{
    /// <summary>
    /// 设置指定节点为活动节点（通过样式体现为特殊显示效果），同时清除以前的活动节点。
    /// 函数根据选项决定是否自动展开或折叠指定节点，以及根据选项决定是否自动更改节点选中状态
    /// </summary>
    /// <param name="blnAutoExpandCollapse" type="bool">
    /// 设置活动节点的同时是否自动展开|折叠节点。{true|false}，缺省=false
    /// </param>
    /// <param name="blnAutoChangeCheckStatus" type="bool">
    /// 设置活动节点的同时是否自动进行选中状态更改。{true|false}，缺省=false
    /// </param>
    /// <param name="blnTriggerCheckStatusCallback" optional="true">是否触发选中状态变更回调函数，缺省视作true.</param>
});

intellisense.annotate(HXWebTreeViewControl.get_node_data, function (str_treeviewcontrol_id, nodeUniqueCodeOrNodeElement)
{
    /// <summary>
    /// 获取指定节点的数据，工具函数。
    /// 函数以JSON对象形式返回指定节点的数据。具体内容为：
    /// { node_unique_code:'somevalue',parent_node_unique_code:'somevalue',node_text:'sometext',
    ///   node_hint_desc:'some text', node_type:'', node_attr_1:'',node_attr_2:'',
    ///   node_attr_3:'', node_attr_4:'', node_attr_5:'', node_is_leaf: true|false, 
    ///   node_level:1|2|3|...|n, node_icon_class:'', node_image_src:'', node_choose_status:0|1|2 },
    ///   node_xml_data: objHXXmlNode 对象用于存放节点可能的扩展字段的内容
    /// </summary>
    /// <param name="nodeUniqueCodeOrNodeElement">
    /// 指定节点代码或者节点html元素对象。如果参数值是html元素，函数会遍历其前辈找到最近的节点容器获取其节点代码。
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.change_node_data, function (str_treeviewcontrol_id, str_node_unique_code, nodeNewData)
{
    /// <summary>
    /// 更改节点名称和描述，以及可能附加属性值。新的节点属性值以nodeNewData的属性形式提供。
    /// 如果属性值为null,相应内容不会被更改。
    /// </summary>
    /// <param name="nodeNewData">
    /// 以JSON对象提供的要更新的节点属性值。可能的属性名如下：
    /// node_text, node_hint_desc, node_attr_1, node_attr_2, node_attr_3, node_attr_4, node_attr_5
    /// </param>
});

intellisense.annotate(HXWebTreeViewControl.append_node, function (str_treeviewcontrol_id, newNodeData, strParentNodeUniqueCode, strNextSiblingNodeUnqiueCode)
{
    /// <summary>
    /// 在TreeView树中插入新节点。用于动态增加新节点的场合。
    /// </summary>
    /// <param name="newNodeData">
    /// 以JSON对象提供的新节点属性值。可能的属性名如node_unique_code,node_type,node_text, node_hint_desc
    ///  , node_choose_status, node_xml_data, node_icon_class, node_image_src
    ///  , node_attr_1, node_attr_2, node_attr_3, node_attr_4, node_attr_5 等
    /// </param>
    /// <param name="strParentNodeUniqueCode">被插入节点将被插入到指定父节点之下（作为其子节点）</param>
    /// <param name="strNextSiblingNodeUnqiueCode">如果被插入节点需要被插入到指定父节点的指定兄弟之前，该参数指定该兄弟节点代码</param>
});

intellisense.annotate(HXWebTreeViewControl.remove_node, function (str_treeviewcontrol_id, str_node_unique_code)
{
    /// <summary>
    /// 从TreeView树中移除指定节点。
    /// </summary>
});

intellisense.annotate(HXWebTreeViewControl.redraw_node, function (str_treeviewcontrol_id, str_node_unique_code)
{
    /// <summary>
    /// 重新绘制指定节点。用于个性化节点显示场景下，当节点数据发生变化后，触发相应效果
    /// </summary>
});

intellisense.annotate(HXWebTreeViewControl.expand_all_level_nodes, function (str_treeviewcontrol_id)
{
    /// <summary>
    /// 展开所有层级的非叶子节点
    /// </summary>
});

intellisense.annotate(HXWebTreeViewControl.collapse_all_level_nodes, function (str_treeviewcontrol_id)
{
    /// <summary>
    /// 折叠所有节点（仅显示顶层节点）
    /// </summary>
});

intellisense.annotate(HXWebTreeViewControl.expand_to_node, function (str_treeviewcontrol_id, str_node_unique_code, str_node_code_chain)
{
    /// <summary>
    /// 展开树到指定节点（通过该节点的代码，在已有节点树中展开到该节点（如果找得到的话），否则，根据代码链，依次从顶层节点开始展开）
    /// </summary>
});

intellisense.annotate(HXWebTreeViewControl.mark_node_as_checked, function (str_treeviewcontrol_id, str_node_unique_code, blnIsChecked, blnTriggerCheckStatusCallback)
{
    /// <summary>
    /// 设置指定节点的选中状态。该函数会触发可能的oncheckstatuschanged_callback()和oncheckstatusupdated_callback()回调函数(根据blnTriggerCheckStatusCallback参数值)。
    /// 该函数同时也会根据指定节点的选中状态自动更新后代节点和前辈节点的选中状态
    /// </summary>
    /// <param name="blnIsChecked" optional="true">是否明确标记选中状态。{true|false}。如果该参数未指定，缺省视作true.</param>
    /// <param name="blnTriggerCheckStatusCallback" optional="true">是否触发选中状态变更回调函数，缺省视作true.</param>

});

intellisense.annotate(HXWebTreeViewControl.get_choosed_nodes, function (str_treeviewcontrol_id, int_return_value_option)
{
    /// <summary>
    /// 获取被选中的节点信息（集合）
    /// </summary>
    /// <param name="int_return_value_option" optional="true">
    /// 返回值选项: {1|2|3}, 1表示仅返回被选的叶子节点，2表示返回被选叶子节点和全选的中间节点
    /// 3表示返回所有被选叶子结点和它们的前辈节点（包括半选节点），缺省值为1
    /// </param>
    /// <returns type="Array" elementType="JSON">
    /// 以数组形式返回选中的节点数据集合。每个节点数据以JSON对象表示。具体内容为：
    /// { node_unique_code:'somevalue',parent_node_unique_code:'somevalue',node_text:'sometext',
    ///   node_hint_desc:'some text', node_category:'', node_attr_1:'',node_attr_2:'',
    ///   node_attr_3:'', node_attr_4:'', node_attr_5:'', node_is_leaf: true|false, 
    ///   node_level:1|2|3|...|n, node_icon_class:'', node_image_src:''},
    ///   node_xml_data: objHXXmlNode 对象用于存放节点可能的扩展字段的内容
    /// </returns>
});

intellisense.annotate(HXWebPopupTreeViewControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册下拉树状数据选择控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 下拉树状数据选择控件Id号，该Id号通常是一个input[type=text]的输入框的id值，表示下拉选择控件和该输入框关联。
    /// 某些场景下，该Id号也可以不和html元素关联，只需要id值唯一即可（例如：点击添加按钮弹出下拉树状数据选择列表）
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和下拉树状数据选择控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 下拉树状数据选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// { content_type:'key'|'desc',choose_type:0|1,
    ///   use_icon:'no'|'use_css_icon'|'use_img_icon', dropdownbox_width:n, dropdownbox_lines_count:n,
    ///   binding_datasrc_id:'',binding_datafld_for_key:'',binding_datafld_for_desc:''
    ///   binding_datafld_for_attr_1:'',auto_show_when_focusin:true|false
    ///   ongetfilterdata_callback:fn(id,input,button), ondatachoosed_callback:fn(id,input,button, arrChosenNodesInfo)}
    /// 具体每个属性的含义和缺省值说明详见HXWebPopupTreeViewControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebPopupTreeViewControl.set_options, function (str_popuptreeviewcontrol_id, options)
{
    /// <summary>
    /// 设置下拉树状数据选择框的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 下拉树状数据选择控件选项属性集合，JSON对象。常用属性清单如下：
    /// { content_type:'key'|'desc',choose_type:0|1,
    ///   use_icon:'no'|'use_css_icon'|'use_img_icon', dropdownbox_width:n, dropdownbox_lines_count:n,
    ///   binding_datasrc_id:'',binding_datafld_for_key:'',binding_datafld_for_desc:''
    ///   binding_datafld_for_attr_1:'',auto_show_when_focusin:true|false
    ///   ongetfilterdata_callback:fn(id,input,button), ondatachoosed_callback:fn(id,input,button, arrChosenNodesInfo)}
    /// 具体每个属性的含义和缺省值说明详见HXWebPopupTreeViewControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebPopupTreeViewControl.option, {
    // 下拉选择框选中条目项后，在输入框中显示的选择内容类型，{key|desc}，缺省值为key
    content_type: undefined,
    // 单选还是多选模式，0=单选，1=多选。缺省为单选(0)
    choose_type: undefined,
    // 多选模式下返回值选项：{1|2|3}, 1表示仅返回被选的叶子节点，2表示返回被选叶子节点和全选的中间节点, 3表示返回所有被选叶子结点和它们的前辈节点（包括半选节点），缺省值为2
    // 单选模式下返回值选项：{1|2},1表示仅返回被选的叶子节点, 2表示允许返回叶子节点和非叶子节点，缺省=2
    choose_return_value_option: undefined,
    // 是否使用图标，可选值{no|use_css_icon|use_img_icon}, 缺省=no 
    use_icon: undefined,
    // 是否启用关键字搜索特斯你个，{true|false}，缺省=true
    use_keyword_search: undefined,
    // 是否节点文字太长时允许折行，{true|false},缺省=true
    is_allow_wrap_text: undefined,
    // 默认的图标样式类(use_icon=use_css_icon时有意义)，如果节点数据中没有指定图标样式，使用该设置。
    // 如果该设置为空，引擎显示一个cube图标
    default_icon_class: undefined,

    // 焦点进入输入框时，是否自动显示下拉选择区域，{true|false}，缺省=true
    // 如果当前焦点进入的输入框为只读输入框，控件根据属性hx_allow_readonly_pick决定是否自动显示选择区域（缺省不显示，hx_allow_readonly_pick=1则显示）。
    // 只读输入框在半只读和完全只读下的不同显示效果由not_allow_pick附加样式类决定
    auto_show_when_focusin: undefined,

    // 弹出选择区域宽度，缺省(null)表示由控件自行决定（通常以关联输入框左边开始到选择按钮右边的宽度）
    dropdownbox_width: undefined,
    // 弹出选择区域显示条目行数，缺省=8
    dropdownbox_lines_count: undefined,

    /// 绑定数据源Id
    binding_datasrc_id: undefined,
    // 键值绑定的字段名
    binding_datafld_for_key: undefined,
    // 描述值绑定的字段名
    binding_datafld_for_desc: undefined,
    // 附加属性1值绑定的字段名
    binding_datafld_for_attr_1: undefined,
    // 附加属性2值绑定的字段名
    binding_datafld_for_attr_2: undefined,
    // 附加属性3值绑定的字段名
    binding_datafld_for_attr_3: undefined,
    // 附加属性4值绑定的字段名
    binding_datafld_for_attr_4: undefined,
    // 附加属性5值绑定的字段名
    binding_datafld_for_attr_5: undefined,

    // 控件关联的服务器端TreeView设置信息代码
    treeview_setting_code: undefined,

    // 是否仅列出生效记录，true|false，缺省为false。如果该属性为true，平台服务器端将对含有hx_record_status字段的选择数据表自动设置hx_record_status=1筛选条件
    list_only_effective_items: undefined,

    // 初始化自动显示层级，[0-n]，0表示显示所有层级，1表示仅显示顶层节点，2表示显示顶层和第2层节点，以此类推。缺省=1
    init_auto_show_level: undefined,
    // 显示指定层级时，可以指定是否一次性获取所有数据, {true|false}，缺省=false
    acquire_all_treeview_data: undefined,
    // 模糊查询是否仅查找以输入内容开头的记录条目，true|false，缺省=false
    search_from_begin: undefined,

    // 是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    use_mobile_mode: undefined,

    // 扩展Web部件html_id, 用于扩展Web部件中使用了控件的场景
    extend_web_part_html_id: undefined,
    // 指定处理程序集类名，仅用于平台内置Web部件（如自定义查询报表Web部件下拉选择框）等场景
    pagexmlsvc_class_name: undefined,

    // 初始化回调函数，该回调函数中有机会修改下拉控件选项属性（例如：修改下拉列表代码），或者取消下拉选择行为（通过返回false|null）。
    // 函数参数：fn(controlid, inputElement, btnElement, options)
    oninit_callback: undefined,
    // 自定义筛选数据获取回调函数，返回提供给服务器端进行自定义筛选条件构造使用的相关交互数据。函数返回false可撤消本次下拉选择行为
    // 函数参数：fn(control_id, inputElement, btnElement)
    ongetfilterdata_callback: undefined,
    // 选择完成后的回调函数。函数参数：fn(controlid, inputElement, btnElement, arrChosenNodesInfo)
    ondatachoosed_callback: undefined
});


intellisense.annotate(HXWebFileBoxControl.register, function (str_web_control_id, options)
{
    /// <summary>
    /// 注册文件交互控件。
    /// </summary>
    /// <param name="str_web_control_id">
    /// 文件交互控件Id号，该Id号为符合恒信fileboxWeb部件html约定的span元素的id
    /// </param>
    /// <param name="options">
    /// 文件交互选项属性集合，JSON对象。常用属性清单如下：
    /// { object_view_code:'',binding_datasrc_id:'',binding_datafld_for_filename:''
    ///   binding_datafld_for_tempname:'',
    ///   onfileuploaded_callback:fn(controlHtmlId,fileBoxContainer)}
    /// 具体每个属性的含义和缺省值说明详见HXWebFileBoxControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebFileBoxControl.set_options, function (str_web_control_id, options)
{
    /// <summary>
    /// 注册文件交互控件。
    /// </summary>
    /// <param name="options">
    /// 文件交互控件选项属性集合，JSON对象。常用属性清单如下：
    /// { object_code:'',binding_datasrc_id:'',binding_datafld_for_filename:''
    ///   binding_datafld_for_tempname:'',
    ///   onfileuploaded_callback:fn(controlHtmlId,fileBoxContainer)}
    /// 具体每个属性的含义和缺省值说明详见HXWebFileBoxControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebFileBoxControl.option, {
    // filebox关联的对象代码
    object_code: undefined,
    // filebox关联对象视图代码
    object_view_code: undefined,
    /// 绑定数据源Id
    binding_datasrc_id: undefined,
    // 和文件名称绑定的字段名
    binding_datafld_for_filename: undefined,
    // 和临时文件名绑定的字段名
    binding_datafld_for_tempname: undefined,
    // 和文件描述绑定的字段名
    binding_datafld_for_filedesc: undefined,

    // 是否显示删除文件按钮，true|false，缺省=false
    show_remove_button: undefined,
    // 上传文件最大千字节，缺省=10000
    max_file_size_kb: undefined,
    // 允许的上传文件类型清单，以分号分隔，形如：xlsx;jpg
    allow_file_type_list: undefined,
    // 用逗号隔开的 MIME 类型列表，input[type=file]的accept属性允许值清单，例如：image/*, 或者image/gif, image/jpeg，application/msexcel, application/msword
    // 该属性仅用于浏览器端辅助筛选，服务器端会再次根据服务器端的允许文件类型清单进行检查和过滤
    input_file_accept_cnt: undefined,
    // 是否允许同时上传多个文件，true|false, 缺省=false
    allow_multi_files_upload: undefined,

    // 图片压缩最大尺寸(KB)，缺省=0表示不压缩。图片压缩在浏览器端进行，为提高图片上传性能目的（特别时针对移动端带宽有限的场景）
    image_file_compress_max_kb: undefined,

    // 是否以Base64格式保存图片文件内容到数据库中，true|false，缺省=false
    // 当标记以Base64格式保存图片文件内容到数据库中时，只允许上传图片文件，并且自动将上传的图片文件内容放到绑定字段中（不再需要服务器端附加处理）
    // 同时，该模式下显示时直接显示图片（也就是说不再有下载文件过程了），移除文件时通过直接清除绑定文件字段内容方式实现。
    base64_image_file_cnt_in_db_mode: undefined,

    // 自定义的filebox被点击后的回调函数。如果该函数被指定，当控件被点击时该函数优先被调用，并且如果函数返回false表示终止控件内置的点击处理。
    // 函数参数：fn(strWebControlHtmlId, fileBoxContainer);
    onfileboxclicked_callback: undefined,

    // 文件上传成功后的回调函数。如果该函数被指定，则控件调用该函数(即使上传多个文件，该回调函数也仅被调用一次)
    // 函数参数：fn(strWebControlHtmlId, fileBoxContainer, arrUploadedFileInfo, strExtendWebPartType);
    onfileuploaded_callback: undefined,
    // 文件上传失败后的回调函数。如果该函数被指定，则控件调用该函数
    // 函数参数：fn(strWebControlHtmlId, fileBoxContainer, strWarningMessage, strExtendWebPartType);
    onfileuploadfailed_callback: undefined,
    // 文件被移除后的回调函数。如果该函数被指定，当用户点击文件清除图标后控件调用该函数
    // 函数参数：fn(strWebControlHtmlId, fileBoxContainer, objHXXmlNodeOfRecordRowBeforeFileRemoved, strExtendWebPartType)
    onfileremoved_callback:undefined

});

intellisense.annotate(HXWebFileBoxControl.upload_file, function (str_web_control_id, objFileBoxContainerDiv, strUpLevelWebJSRowUUID)
{
    /// <summary>
    /// 上传文件工具函数。常用于更改头像场景需要独立按钮触发FileBox控件的上传图标点击后的行为的场景。
    /// </summary>
    /// <param name="strUpLevelWebJSRowUUID" optional="true">
    /// 上传文件操作触发按钮所属行绑定记录UUID，如果该值非空，表示上传操作按钮是在1级绑定列表条目行上触发的
    /// 此时要插入的文件数据行需要关联一级绑定行
    /// </param>
});

intellisense.annotate(HXWebFileBoxControl.upload_new_files, function (str_web_control_id, strUpLevelWebJSRowUUID)
{
    /// <summary>
    /// 批量上传添加多个文件。该函数对应 HX_LINE_TEMP_UPLOAD_FILES预定义命令按钮的行为，通常不直接调用。
    /// </summary>
    /// <param name="strUpLevelWebJSRowUUID" optional="true">
    /// 上传文件操作触发按钮所属行绑定记录UUID，如果该值非空，表示上传操作按钮是在1级绑定列表条目行上触发的
    /// 此时要插入的文件数据行需要关联一级绑定行
    /// </param>
});
intellisense.annotate(HXWebFileBoxControl.filebox_webpart_display_format, function (str_web_control_id, objFileBoxContainerDiv, options)
{
    /// <summary>
    /// 设置指定filebox控件容器的显示格式，可以控制删除按钮，上传按钮，下载链接的显示或禁用
    /// </summary>
    /// <param name="options">
    /// 显示格式选项参数集合。JSON对象，具体选项参数如下：
    /// show_remove_button: {true|false}
    /// show_upload_file_button:{true|false}
    /// show_download_link:{true|false}
    /// 可以设置单个选项，或者设置多个选项
    /// </param>
});

intellisense.annotate(HXWebPopupTextAreaControl.register, function (str_webdatacontrol_id, str_dropdown_btn_id, options)
{
    /// <summary>
    /// 注册长文本输入控件。
    /// </summary>
    /// <param name="str_webdatacontrol_id">
    /// 长文本输入控件Id号，该Id号必须是一个textarea的输入框的id值，表示长文本输入控件和该输入框关联。
    /// </param>
    /// <param name="str_dropdown_btn_id">
    /// 和长文本输入控件关联的选择按钮元素的id值。
    /// </param>
    /// <param name="options">
    /// 选项属性集合，JSON对象。常用属性清单如下：
    /// width:弹出区域的宽度，缺省=360，设置值不得低于200
    /// height:弹出区域高度，缺省=280，设置值不得低于200
    /// 具体每个属性的含义和缺省值说明详见HXWebPopupTextAreaControl.set_options()函数的说明。
    /// </param>
});
intellisense.annotate(HXWebPopupTextAreaControl.set_options, function (str_webdatacontrol_id, options)
{
    /// <summary>
    /// 设置弹出长文本输入控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 选项属性集合，JSON对象。属性清单如下：
    /// width:弹出区域的宽度，缺省=360，设置值不得低于200。如果输入框+选择按钮的总宽度大于设置宽度，则使用输入框+选择按钮的总宽度
    /// height:弹出区域高度，缺省=280，设置值不得低于200
    /// auto_show_when_focusin:焦点进入时是否自动显示选择区域，{true|false},缺省值true
    /// use_mobile_mode:是否启用移动模式，true|false。如果未设置，控件根据浏览器是否运行于移动设备自动识别。人工指定use_mobile_mode可以方便在桌面浏览器下进行开发调试
    /// </param>
});

intellisense.annotate(HXWebChartControl.register, function (str_chart_control_id, options)
{
    /// <summary>
    /// 注册图表控件。
    /// </summary>
    /// <param name="str_chart_control_id">
    /// 图表控件Id号，该Id号应该是一个div元素的id值，该div用于作为图表显示的容器元素。
    /// </param>
    /// <param name="options">
    /// 图表控件选项属性集合，JSON对象。常用属性清单如下：
    /// { chart_type:'',chart_xml_data_island_id:'',field_code_of_category:''
    ///    ,field_code_of_value:'', onbeforechartshow_callback:fn(str_chart_control_id, ecOption)}
    /// 具体每个属性的含义和缺省值说明详见HXWebChartControl.option的说明。
    /// </param>
});
intellisense.annotate(HXWebChartControl.set_options, function (str_web_control_id, options)
{
    /// <summary>
    /// 设置图表控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 图表控件选项属性集合，JSON对象。常用属性清单如下：
    /// { chart_type:'',chart_xml_data_island_id:'',field_code_of_category:''
    ///    ,field_code_of_value:'', onbeforechartshow_callback:fn(str_chart_control_id, ecOption)}
    /// 具体每个属性的含义和缺省值说明详见HXWebChartControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebChartControl.option,
{
    // 图表类型，可选值如bar|line|pie|scatter|gauge|funnel|radar|map等，完整清单请参见百度ECharts官方文档(echart.baidu.com)
    chart_type: undefined,
    // 图表来源数据Xml数据岛id
    chart_xml_data_island_id: undefined,
    // 图表分类轴数据来源字段名称
    field_code_of_category: undefined,
    // 图表系列数据来源字段名称
    field_code_of_series: undefined,
    // 图表数据点值来源字段名称，可以有多个值字段（分号分隔）
    field_code_of_value: undefined,
    // 地图类型，仅用于chart_type='map'地图类型图表，缺省值为'china'
    map_type: undefined,
    // 是否交换x和y轴，仅用于bar|line类型的图表
    axis_xy_exchange: undefined,
    // 图表加载时的自定义加载显示效果配置项，很少使用，详见echarts官方文档
    loading_option: undefined,

    // 扩展Web部件html_id, 用于扩展Web部件中使用了图表控件的场景
    extend_web_part_html_id: undefined,
    // 指定处理程序集类名，仅用于平台内置Web部件（如自定义查询报表Web部件下拉选择框）等场景
    pagexmlsvc_class_name: undefined,

    // 图表显示前回调函数，图表控件处理完毕图表数据后触发该回调函数。通常在该回调函数中进行图表配置项的个性化附加设置
    // 函数参数：fn(str_chart_control_id, ecOption)
    onbeforechartshow_callback: undefined,
    // 图表显示元素被点击后的回调函数，可以用于显示关联被点击数据项的详细内容等。
    // 函数参数：fn(str_chart_control_id, strCategory, strSeries, strValue, ecParams)，其中ecParams为EChart引擎返回的被点击位置详细内容对象
    ondatapointclicked_callback: undefined
});
intellisense.annotate(HXWebChartControl.show_or_refresh_chart, function (str_chart_control_id, objChartContainer)
{
    /// <summary>
    /// 显示或者刷新显示指定图表控件。
    /// </summary>
    /// <param name="str_chart_control_id">图表控件id值</param>
    /// <param name="objChartContainer">
    /// 如果图表控件关联了多个容器元素(图表控件id值有多个对应html id的div元素，常见于在绑定行中的图表)，
    ///  如果不指定objChartContainer容器元素实例，每个图表容器元素都会被依次调用图表显示处理；
    ///  如果指定了objChartContainer容器元素实例，则只有该实例图表会被显示
    /// </param>
});


intellisense.annotate(HXWebPopupMenuControl.register, function (str_web_control_id, options)
{
    /// <summary>
    /// 注册PopupMenu控件。
    /// </summary>
    /// <param name="options">
    /// PopupMenu控件选项属性集合，JSON对象。常用属性清单如下：
    /// { width:n, onmenuitemclick_callback:fn(strControlHtmlId,strMenuItemKey,strMenuItemLabel,evt)}
    /// 具体每个属性的含义和缺省值说明详见HXWebPopupMenuControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebPopupMenuControl.set_options, function (str_web_control_id, options)
{
    /// <summary>
    /// 设置PopupMenu控件参数。
    /// </summary>
    /// <param name="options">
    /// PopupMenu控件选项属性集合，JSON对象。常用属性清单如下：
    /// { width:n, onmenuitemclick_callback:fn(strControlHtmlId,strMenuItemKey,strMenuItemLabel,evt)}
    /// 具体每个属性的含义和缺省值说明详见HXWebPopupMenuControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebPopupMenuControl.option,
{
    // 弹出菜单容器宽度
    width: undefined,
    // zIndex_offset参数用于一个页面显示多个弹出菜单时，哪个弹出菜单的z-index更高（交叠时哪个在前面）, 0-n
    zIndex_offset: undefined,
    // 是否显示菜单图标区域，缺省=true
    show_icon_area: undefined,
    // 点击菜单项以后是否自动隐藏菜单，缺省=true
    hidemenu_whenmenuitemclick: undefined,

    // 菜单项被点击后触发的回调函数。函数参数:fn(strControlHtmlId,strMenuItemKey,strMenuItemLabel,objMenuItemDiv,evt, objTriggerSrcElement, strTriggerSrcRefCode)
    onmenuitemclick_callback: undefined,
    // 鼠标移动到菜单项后触发的回调函数。函数参数:fn(strControlHtmlId,strMenuItemKey,strMenuItemLabel,objMenuItemDiv,evt, objTriggerSrcElement, strTriggerSrcRefCode)
    onmenuitemmouseover_callback: undefined,
    // 鼠标从菜单项上移出后触发的回调函数。函数参数:fn(strControlHtmlId,strMenuItemKey,strMenuItemLabel,objMenuItemDiv,evt, objTriggerSrcElement, strTriggerSrcRefCode)
    onmenuitemmouseout_callback: undefined,
    // 鼠标从菜单区域移出后触发的回调函数。函数参数:fn(strControlHtmlId,evt, objTriggerSrcElement, strTriggerSrcRefCode)
    onmenuareamouseout_callback: undefined
});

intellisense.annotate(HXWebPopupMenuControl.show, function (str_popupmenucontrol_id, int_left, int_top, int_width
                                            , objTriggerSrcElement, strTriggerSrcRefCode)
{
    /// <summary>
    /// 显示弹出菜单
    /// </summary>
    /// <param name="int_left">弹出菜单区域左上角坐标的左边位置（像素点）</param>
    /// <param name="int_top">弹出菜单区域左上角坐标的顶部位置（像素点）</param>
    /// <param name="int_width">弹出菜单区域宽度（像素点），如果未指定，函数使用弹出菜单默认设置宽度</param>
    /// <param name="objTriggerSrcElement">触发弹出菜单区域显示的来源元素对象，用于关联处理目的。会传递给菜单回调函数</param>
    /// <param name="strTriggerSrcRefCode">触发弹出菜单区域显示的来源参考代码，用于关联处理目的。会传递给菜单回调函数</param>
});

intellisense.annotate(HXWebPopupMenuControl.hide, function (str_popupmenucontrol_id)
{
    /// <summary>
    /// 隐藏弹出菜单
    /// </summary>
});

intellisense.annotate(HXWebPopupMenuControl.fill_items, function (str_popupmenucontrol_id, arrMenuItemData)
{
    /// <summary>
    /// 批量填充菜单项。
    /// </summary>
    /// <param name="arrMenuItemData" type="Array" parameterArray="true">
    ///  菜单条目数据数组。每个项为一个JSON对象。其属性有：{key,label,has_seperator,has_children,icon_class}
    /// </param>
});

intellisense.annotate(HXWebPopupMenuControl.append_item, function (str_popupmenucontrol_id, menuItemData)
{
    /// <summary>
    /// 向弹出菜单末尾追加菜单项。
    /// </summary>
    /// <param name="menuItemData" type="object">
    ///  菜单条目数据。JSON对象。其属性有：{key,label,has_seperator,has_children,icon_class}
    /// </param>
});

intellisense.annotate(HXWebPopupMenuControl.clear_items, function (str_popupmenucontrol_id)
{
    /// <summary>
    /// 清除弹出菜单中所有已有菜单项。
    /// </summary>
});

intellisense.annotate(HXWebPopupMenuControl.is_element_in_control, function (str_popupmenucontrol_id, element, blnIncludeContainer)
{
    /// <summary>
    /// 检测指定元素是否在指定菜单容器中。该函数常用于需要在鼠标移动之类的事件函数中根据鼠标来源元素是否从菜单容器中移动来决定后续操作的目的。
    /// </summary>
    /// <param name="blnIncludeContainer">指示如果待检测元素正好就是菜单容器本身时，是否视作在菜单容器中。缺省=true</param>
});

intellisense.annotate(HXWebPopupMenuControl.get_show_trigger_src_info, function (str_popupmenucontrol_id)
{
    /// <summary>
    /// 获取触发指定弹出菜单容器的来源信息。函数返回{trigger_src_object:obj,trigger_src_ref_code:''}对象
    /// 该函数常用于当鼠标从菜单区域移到其它位置时，目标位置如果是触发该菜单的元素，则菜单不隐藏，否则隐藏弹出菜单的场景下的判断处理。
    /// </summary>
    /// <param name="blnIncludeContainer">指示如果待检测元素正好就是菜单容器本身时，是否视作在菜单容器中。缺省=true</param>
});

intellisense.annotate(HXWebPopupMenuControl.hide_border_partly, function (str_popupmenucontrol_id
                        , strHidePosition, intHideLineStartAt, intHideLength, strHideLineColor)
{
    /// <summary>
    /// 隐藏显示菜单区域部分边框线条（top|left|right），用于达到和其它区域连通的显示效果
    /// </summary>
    /// <param name="strHidePosition">
    /// 隐藏边框位置，可选值：{top|left|right}
    /// </param>
    /// <param name="intHideLineStartAt">
    /// （隐藏边框使用的）线条开始位置，相对于隐藏边框位置
    /// </param>
});



intellisense.annotate(HXWebFormulaEditorControl.register, function (str_web_control_id, options)
{
    /// <summary>
    /// 注册动态表达式编辑器控件。
    /// </summary>

    /// <param name="str_web_control_id">
    /// 动态表达式编辑器控件Id号，该Id号应该是一个div元素的id值，该div用于作为动态表达式编辑器显示的容器元素。
    /// </param>

    /// <param name="options">
    /// 动态表达式编辑器控件选项属性集合，JSON对象。常用属性清单如下：
    /// binding_datasrc_id:绑定数据包id
    /// binding_datafld:绑定字段
    /// read_only:是否只读 {true|fale} 缺省值false
    /// sample_expression:动态表达式示例 缺省值 'return DateTime.Now.ToString("yyyy-MM-dd") >= "2016-01-01";'
    /// treeview_setting_code_of_parameters:参数清单Treeview设置代码 必需有值
    /// ongetparamfilterdata_callback:参数清单筛选条件
    /// 函数参数：fn(str_web_control_id)
    /// </param>
});

intellisense.annotate(HXWebFormulaEditorControl.set_options, function (str_web_control_id, options)
{
    /// <summary>
    /// 设置动态表达式编辑器控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 动态表达式编辑器控件选项属性集合，JSON对象。常用属性清单如下：
    /// binding_datasrc_id:绑定数据包id
    /// binding_datafld:绑定字段
    /// read_only:是否只读 {true|fale} 缺省值false
    /// sample_expression:动态表达式示例 缺省值 return DateTime.Now.ToString("yyyy-MM-dd") >= "2016-01-01";
    /// treeview_setting_code_of_parameters:参数清单Treeview设置代码 必需有值
    /// ongetparamfilterdata_callback:参数清单筛选条件
    /// 函数参数：fn(str_web_control_id)
    /// </param>
});

intellisense.annotate(HXWebFormulaEditorControl.init_editor, function (str_web_control_id)
{
    /// <summary>
    /// 显示动态表达式编辑器
    /// </summary>
});

intellisense.annotate(HXWebFormulaEditorControl.read_only_format, function (str_web_control_id, blnReadOnly)
{
    /// <summary>
    /// 表达式编辑器区域只读元素格式化处理
    /// </summary>
});

intellisense.annotate(HXWebHtmlEditorControl.register, function (strControlHtmlId, option)
{
    /// <summary>
    /// 注册Html编辑器控件。
    /// </summary>
    /// <param name="strControlHtmlId">
    /// Html编辑器控件Id号，该Id号应该是一个textarea元素的id值，该textarea用于作为html内容保存的元素。
    /// </param>
    /// <param name="option">
    /// Html编辑器控件选项属性集合，JSON对象。常用属性清单如下：
    /// { }
    /// 具体每个属性的含义和缺省值说明详见HXWebHtmlEditorControl.set_options()的说明。
    /// </param>
});

intellisense.annotate(HXWebHtmlEditorControl.set_options, function (strControlHtmlId, option)
{
    /// <summary>
    /// 设置HtmlEditor控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="option">
    /// 控件选项属性集合，JSON对象。常用属性清单如下：
    /// { object_view_code:'',binding_datasrc_id:'',binding_datafld:'',binding_descfld:''
    ///   , show_placeholder_desc_text:true|false, read_only:true|false,disable_image_upload:true|false
    ///   , treeview_setting_code__placeholder:'',placeholder_area_width:300,placeholder_area_height:200
    ///   , object_view_code__placeholder:''
    ///   , ongetplaceholderfilterdata_callback:fn(strHtmlEditorControlId)
    ///   , ongetfieldplaceholderfilterdata_callback:fn(strHtmlEditorControlId)
    ///   }
    /// </param>
});

intellisense.annotate(HXWebTabControl.register, function (str_control_html_id, options)
{
    /// <summary>
    /// 注册Tab控件。
    /// </summary>
    /// <param name="str_control_html_id">
    /// Tab控件Id号，该Id号应该是一个div元素的id值，该div用于作为图表显示的容器元素。
    /// </param>
    /// <param name="options">
    /// Tab控件选项属性集合，JSON对象。常用属性清单如下：
    /// layout_direction: 布局方向, horizontal|vertical。缺省值为horizontal
    /// use_scroll_mode: 是否启用滚动模式，true|false，缺省=false
    /// tab_icon_mode: 标签图标模式，可选值{no|use_css_icon|use_img_icon}, 缺省=no 
    /// onaftertabchanged_callback:  Tab标签切换后触发的回调函数，通常在此回调函数中实现具体切换操作。回调函数参数如下：
    /// fn(str_control_html_id, strSelectedTabId, strOldTabId);
    /// 具体每个属性的含义和缺省值说明详见HXWebTabControl.option的说明。
    /// </param>
});

intellisense.annotate(HXWebTabControl.option,
{
    // Tab 标签布局方向，horizontal|vertical。缺省值为horizontal
    layout_direction: undefined,
    // 是否启用滚动模式，true|false，缺省=false
    use_scroll_mode: undefined,

    // 标签图标模式，可选值{no|use_css_icon|use_img_icon}, 缺省=no 
    tab_icon_mode: undefined,

    // 双击Tab标签表示移除Tab，true|false, 缺省=false
    remove_tab_ondbclick: undefined,


    // Tab标签切换前触发的回调函数，回调函数参数如下：
    // fn(str_control_html_id, strSelectedTabId, strOldTabId);
    //    注1：该回调函数如果返回false，Tab标签切换操作会被撤销
    //    注2：取决于Tab标签初始状态，strOldTabId参数传入的值可能为空值，也可能等于当前选中标签ID值
    onbeforetabchanged_callback: undefined,
    // Tab标签切换后触发的回调函数，通常在此回调函数中实现具体切换操作。回调函数参数如下：
    // fn(str_control_html_id, strSelectedTabId, strOldTabId);
    //  和onbeforetabchanged_callback()的区别在于该回调函数不再允许被撤消。
    onaftertabchanged_callback: undefined,
    // Tab标签被移除前触发的回调函数，回调函数参数如下：
    // fn(str_control_html_id, strTabId);
    //    注：该回调函数如果返回false，Tab标签移除操作会被撤销
    onbeforetabremoved_callback: undefined,
    // Tab标签被移除后触发的回调函数，回调函数参数如下：
    // fn(str_control_html_id, strTabId);
    onaftertabremoved_callback: undefined
});

intellisense.annotate(HXWebTabControl.set_options, function (str_control_html_id, options)
{
    /// <summary>
    /// 设置日历控件的各类选项。选项属性如果指定，则采用指定方式，否则保留原来的设置（也就是说可以多次调用设置选项函数）
    /// </summary>
    /// <param name="options">
    /// 图表控件选项属性集合，JSON对象。常用属性清单如下：
    /// layout_direction: 布局方向, horizontal|vertical。缺省值为horizontal
    /// use_scroll_mode: 是否启用滚动模式，true|false，缺省=false
    /// tab_icon_mode: 标签图标模式，可选值{no|use_css_icon|use_img_icon}, 缺省=no \
    /// onaftertabchanged_callback:  Tab标签切换后触发的回调函数，通常在此回调函数中实现具体切换操作。回调函数参数如下：
    /// fn(str_control_html_id, strSelectedTabId, strOldTabId);
    /// </param>
});

intellisense.annotate(HXWebTabControl.add_tab, function (str_control_html_id, str_tab_id, str_tab_text, tabSetting)
{
    /// <summary>
    /// 添加新的标签项
    /// </summary>
    /// <param name="tabSetting">
    /// 标签项设置属性。json对象。可设置属性内容：
    /// { is_selected:true|false, show_remove_icon:true|false, is_disabled:true|false, icon_class:'', image_src:''}
    /// </param>
});

intellisense.annotate(HXWebTabControl.fill_tabs, function (str_control_html_id, tabsSetting)
{
    /// <summary>
    /// 批量添加多个新的标签项。
    /// </summary>
    /// <param name="tabsSetting">
    /// 标签项设置属性集合。json对象数组。例如：[{tab_id:'a',tab_text:'标签1'},{tab_id:'b',tab_text:'标签2'}]
    /// 每个标签项可设置属性内容：{tab_id:'', tab_text:'', is_selected:true|false, show_remove_icon:true|false, is_disabled:true|false, icon_class:'', image_src:''}
    /// </param>
});


intellisense.annotate(HXWebTabControl.disable_tab, function (str_control_html_id, str_tab_id, blnDisable)
{
    /// <summary>
    /// 禁用或者启用指定标签按钮
    /// </summary>
});

intellisense.annotate(HXWebTabControl.remove_tab, function (str_control_html_id, tab_id_or_elment)
{
    /// <summary>
    /// 移除指定标签按钮
    /// </summary>
    /// <param name="tab_id_or_elment">要移除的标签字符串id号或者span实例元素</param>
});



intellisense.annotate(HXWebTabControl.select_tab, function (str_control_html_id, str_tab_id)
{
    /// <summary> 
    /// select_tab()函数完成和点击指定tab标签相同的操作 
    /// </summary>
});

intellisense.annotate(HXWebTabControl.get_selected_tab_id, function (str_control_html_id)
{
    /// <summary> 
    /// 函数获取指定Tab控件当前被选中的Tab Id。如果Tab控件当前没有被选中的Tab，函数返回null.
    /// </summary>
});

