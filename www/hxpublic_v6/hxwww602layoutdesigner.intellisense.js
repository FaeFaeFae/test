intellisense.annotate(HXWebLayoutDesigner,
{
    // 子容器组件信息获取回调函数。函数签名：fn(strPageWidgetCode, strSubSectionLayoutDirection)
    OnSubContainerDataGet: undefined,
    
    // 新建子容器之前的回调函数。函数签名：fn(strNewWidgetCode, newContainerData, strSubSectionLayoutDirection)
    // 可以在回调函数中对新的子容器进行必要的个性化属性设置
    OnSubContainerBeforeCreated: undefined,

    // 新建子容器之后的回调函数。函数签名：fn(strNewWidgetCode, newContainerData, strSubSectionLayoutDirection)
    // 可以通过该回调函数更新和回写相关数据包内容。
    OnSubContainerAfterCreated: undefined,

    // 新容器插入之前的回调函数，当用户点击添加容器按钮后触发。可以通过该回调函数初始化设置新容器的一些默认行为（例如缺省高度等）
    // 函数签名：fn(strContainerCode, strContainerLayoutDirection, containerData)
    OnContainerBeforeInsert: undefined,
    // 新容器插入之后的回调函数，当用户点击添加容器按钮后触发。可以通过该回调函数更新和回写数据包
    // 函数签名：fn(strContainerCode, strContainerLayoutDirection, containerData)
    OnContainerAfterInsert: undefined,

    // 容器被移除后的回调函数，当用户点击删除容器按钮后触发。可以通过该回调函数更新和回写数据包
    // 函数签名：fn(strContainerCode)
    OnContainerAfterRemoved: undefined,

    // 容器移动位置后的回调函数。函数签名：fn(strContainerCode, strMoveAfterContainerCode)
    OnContainerPositionAfterMoved: undefined,

    // 容器尺寸调整后触发的回调函数，当用户拖拽调整容器尺寸后触发。可以通过该回调函数更新和回写数据包
    // 函数签名：fn((strContainerCode, originalSize, newSize)
    OnContainerSizeChanged: undefined,

    // 容器高度或者宽度模式更改后的回调函数。可以通过该回调函数更新和回写数据包
    // 函数签名：fn((strContainerCode, strOriginalSizeMode, strNewSizeMode)
    OnContainerSizeModeChanged: undefined,

    // 布局块组件Html内容绘制回调函数。函数签名：fn(blockElement, widgetBlockData)
    // 通过工具箱项新建组件块时， widgetBlockData.is_create_new属性为true，其它初始化场景下该属性为false
    OnWidgetBlockHtmlContentDrawing: undefined,

    // 新建组件块前的回调函数。可以在回调函数中修改宽度设置信息。
    // 函数签名：fn (newWidgetBlockData)，newWidgetBlockData结构：{widget_type_code:'', page_widget_code:'', block_width_or_height:'flex', is_create_new: true }
    OnWidgetBeforeCreated: undefined,

    // 新建组件块成功后的回调函数。函数签名：fn(strWidgetType, strNewWidgetCode, strInsertAfterWidgetCode, strSubContainerCode, updatedContainerInfo)
    // 其中， updatedContainerInfo 对象包含如下属性：container_code, blocks_count,blocks_size_list
    OnWidgetAfterCreated: undefined,

    // 组件块移动位置后的回调函数。函数签名：fn(strWidgetCode, strMoveAfterWidgetCode, , updatedContainerInfoMoveFrom, updatedContainerInfoMoveTo)
    // 其中 updatedContainerInfoMoveFrom和MoveTo 对象内容：{container_code, blocks_count,blocks_size_list}。
    // 当组件块在同一个容器中移动时，updatedContainerInfoMoveFrom和updatedContainerInfoMoveTo相等。
    OnWidgetPositionAfterMoved: undefined,

    // 组件块尺寸调整后触发的回调函数，当用户拖拽调整组件块尺寸后触发。可以通过该回调函数更新和回写数据包
    // 函数签名：fn(strWidgetType, strWidgetCode, originalSize, newSize, updatedContainerInfo)
    // 其中， updatedContainerInfo 对象内容为 {container_code, blocks_count,blocks_size_list}
    OnWidgetSizeChanged: undefined,

    // 组件块高度或者宽度模式更改后的回调函数。可以通过该回调函数更新和回写数据包
    // 函数签名：fn(strWidgetType, strWidgetCode, strOriginalSizeMode, strNewSizeMode,updatedContainerInfo)
    // 其中， updatedContainerInfo 对象内容为 {container_code, blocks_count,blocks_size_list}
    OnWidgetSizeModeChanged: undefined,

    // 组件块被移除后的回调函数。可以通过该回调函数更新和回写数据包
    // 函数签名：(strWidgetType, strWidgetCode, updatedContainerInfo), updatedContainerInfo 对象包含如下属性：container_code, blocks_count,blocks_size_list
    OnWidgetAfterRemoved: undefined,

    // 组件块设置按钮被点击后的回调函数。可以通过该回调函数打开组件的设置界面
    // 函数签名：(strWidgetType, strWidgetCode)
    OnWidgetConfigButtonClicked:undefined
});


intellisense.annotate(HXWebLayoutDesigner.Init, function (rootContainerElement, containersData, options)
{
    /// <summary>
    /// 在指定页面容器元素中初始化容器布局内容并显示。需要指定水平布局模式还是垂直布局模式。
    /// 函数根据传入的已有容器（以及内部的部件）信息动态构造UI元素，初始化拖放支持等准备工作。
    /// 函数还根据传入的是否显示添加容器按钮等选项，做一些相关显示工作。
    /// </summary>
    /// <param name="containersData" type="[]">容器数据集合。
    /// 每个项为json对象：{container_code:''
    ///     , container_width:nn|auto|flex, 对于垂直容器有意义, nn为指定宽度，auto表示由内容决定高度,flex表示屏幕自适应高度。auto和flex可指定最小宽度，格式为：auto:50|flex:50，缺省视作auto,下同
    ///     , container_height:nn|auto|flex, 对于水平容器有意义
    ///     , block_count:0, block_width_or_height_list:'block1_width_or_height;block2_width_or_height...，每个block设置规则同container_width'
    ///     , allow_moved:true|false,allow_deleted:true|false
    ///     , widget_blocks:[blockData1, blockData2] }
    ///   每个blockData属性包括：{ widget_type_code:'组件类型'（设计器自动处理sub_section_area|placeholder_area组件类型）
    ///        , page_widget_code:'组件代码', allow_moved:true|false,allow_deleted:true|false,allow_config:true|false
    ///        , is_create_new:true|false(由引擎在工具箱项拖拽到画布上创建组件块时自动设置为true，供组件块绘制回调函数使用)
    ///      }
    /// </param> 
    /// <param name="options">容器布局选项。常用参数：
    /// root_layout_direction:{horizontal|vertical}。缺省为horizontal
    /// horizontal表示容器水平放置，多个容器从上到下显示。
    /// vertical表示容器垂直放置，多个容器从左到右显示。
    /// root_layout_flex_mode: {flex|inline_flex}，缺省=flex
    /// inline_flex表示画布本身处于inline模式，否则表示画布处于block模式
    /// 画布内容总是应用flex，是否占满空间取决于是否有子元素容器flex:auto
    /// show_container_add_button:true|false, 是否显示添加容器按钮
    /// last_used_section_max_id:{0-n}，缺省=0
    /// last_used_widget_max_id:{0-n}，缺省=0
    /// grid_size:{1-n}，容器尺寸调整最小网格尺寸，缺省=1
    /// </param>
});

intellisense.annotate(HXWebLayoutDesigner.WidgetToolboxItemsDraggableSetting, function (toolboxContainerElement)
{
    /// <summary>
    /// 初始化启用指定工具箱容器内的（样式类标记为hxwidget_tool_item）的项的拖拽操作，以支持在画布上放置组件块
    /// </summary>
});

