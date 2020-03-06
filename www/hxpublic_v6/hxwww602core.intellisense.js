intellisense.annotate(window, {
    /// <summary>
    /// HXWebJS 根命令空间。当前版本6.0.2，基于jQuery3.1.1。不再支持IE8及以下浏览器。
    /// </summary>
    HXWebJS: undefined,

    /// <summary>恒信Javascript版本的StringBuilder实现。该类是HXWebJS.Core.StringBuilder的别名 使用例子：
    /// var sb = new HXWebStringBuilder();
    /// sb.append("somestr");
    /// sb.append("morestr");
    /// return sb.toString();
    /// </summary>
    HXWebStringBuilder: undefined,

    /// <summary>
    /// 页面管局变量信息对象。是HXWebJS.Core.WebPageGlobalVariables的别名。
    /// 开发过程中信息对象常用属性：HXWebPageGlobalVariables.WebRootPath
    /// </summary>
    HXWebPageGlobalVariables: undefined
});

intellisense.annotate(HXWebJS.Core, {
    /// <summary>恒信定时器工具类。使用例子：
    /// var timer = new HXWebJS.Core.Timer();
    /// timer.set_interval(500); // ms
    /// timer.set_tickhandler(fnAction); 
    /// 注：fnAction()为无参数函数，必要的话可通过HXWebJS.Core.CreateDelegateFunction()创建调用有参数函数的委托函数
    /// timer.set_enabled(true); 
    /// </summary>
    Timer: undefined,

    /// <summary>
    /// 浏览器信息对象。由于HXWebJS 6.0.2仅支持新版浏览器，所以不再区分chorme,ie, edge等浏览器类型。
    /// 仅提供检查是否移动浏览器(IsMobile)，以及是否在微信浏览器中运行的检查(IsMicroMessenger)。
    /// </summary>
    Browser: undefined
});

intellisense.annotate(HXWebJS.Core.Timer.prototype.set_interval, function (interval)
{
    /// <summary>设置定时间隔。单位为毫秒(ms)</summary>
    /// <param name="interval">时间间隔，单位为毫秒(ms)。</param>
});


intellisense.annotate(HXWebJS.Core.CreateDelegateFunction, function (objElement, CallbackFunction, param1)
{
    /// <summary>创建一个封装了真实函数调用具体参数集合值的委托函数，该委托函数可被直接无参数调用，其效果和传递真实参数值给委托前的回调函数相同。</summary>
    /// <param name="objElement">应用该函数的对象，通常可以使用this关键字作为参数值。</param>
    /// <param name="CallbackFunction" type="Function">待封装的函数对象</param> 
    /// <param name="param1" parameterArray="true" optional="true">将要传递给待封装的函数的第一个参数值。如果有更多参数值要传递，简单作为后续参数值即可。</param>
    /// <returns type="Function">委托函数对象</returns>
});

intellisense.annotate(HXWebJS.Core.IsJavascriptFunctionDefined, function (fn)
{
    /// <summary>工具函数，判断传入的函数是否被定义。可以传入函数对象参数值，或者函数名字符串参数值。</summary>
    /// <param name="fn">待检查的函数对象或者函数名字符串</param>
    /// <returns type="Boolean"></returns>
});

intellisense.annotate(HXWebJS.Core.MarkXMLSpecialChars, function (strText)
{
    /// <summary>
    /// 转义传入字符串中的Xml特殊字符。具体为 &amp;, &lt;, &gt;, &quot; 四个特殊字符。
    /// HXWebJS.Core 和HXWebJS.Xml命名空间下都包括 MarkXMLSpecialChars()工具函数。
    /// </summary>
    /// <returns>如果传入参数值为空(null)，函数也返回空(null)</returns>
});

intellisense.annotate(HXWebJS.Core.EscapeHtml, function (str)
{
    /// <summary>
    /// 对html字符串进行实体转义，该函数常用于直接构造拼接html字符串场景。
    /// 本函数转义典型的6个特殊html字符：&amp;,&lt;,&gt;,&quot;,',/
    /// </summary>
});

intellisense.annotate(HXWebJS.Core.Trim, function (strText)
{
    /// <summary>去除指定输入字符串的前后空格。如果输入null，则函数也返回null.</summary>
});

intellisense.annotate(HXWebJS.Core.StringFormat, function (strTemplate, arg0)
{
    /// <summary>将输入字符串中的{n}占位符使用后续的参数值进行替换。</summary>
});

intellisense.annotate(HXWebJS.Core.IsStringNullOrEmpty, function (str, blnIgnoreSpace)
{
    /// <summary> 判断输入字符串是否为null或者空字符串</summary>
    /// <param name="blnIgnoreSpace" type="bool">是否将完全由空格字符组成的字符串视作空字符串。缺省=true表示将由空格字符构成的字符串视作空串</param>

});

intellisense.annotate(HXWebJS.Core.LogErrorToConsole, function (strErrorMessage)
{
    /// <summary>
    /// 记录错误消息到控制台，或者当非新版本浏览器时抛出错误异常消息,调试跟踪工具函数。常用于catch语句块中
    /// </summary>
});

intellisense.annotate(HXWebJS.Core.LoadJsCssFile, function (strJsOrCssFileName)
{
    /// <summary>
    /// 动态加载指定的css或者js文件到当前页面的head区域中。
    /// 引用的文件名可以包含相对路径（相对于www根目录，例如：../common/sample.js）。
    /// 如果文件已被加载过，不再重复加载。文件名被转为小写进行比较。
    /// 函数通过文件后缀名(.js|.css)自动判断文件类型。
    /// 函数会自动加上时间戳参数避免浏览器缓存。
    /// </summary>
});

intellisense.annotate(HXWebJS.Core.LoadPlatformJsCssFile, function(strJsOrCssFileNameWithRelativePath)
{
    /// <summary>
    /// 动态加载项目或平台通用的css或者js文件到当前页面的head区域中。
    /// 引用的文件名包含相对于www根目录的路径名，例如：hxsm_v6/sample.js。
    /// 如果文件已被加载过，不再重复加载。文件名被转为小写进行比较。
    /// 函数通过文件后缀名(.js|.css)自动判断文件类型。
    /// </summary>
});

intellisense.annotate(HXWebJS.Core.LoadJsFileAndRunFunction, function(strJsFileNameWithRelativePath, strFunctionName, funcParam1)
{
    /// <summary>
    /// 工具函数，动态加载js文件（项目或者平台通用）然后执行指定函数（函数通常在js文件中定义）。
    /// 该工具函数常用于菜单命令等需要调用javascript函数并且确保该函数所在js文件在页面中即使未被显式加载也被执行的场景。
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetFrameWindow, function (frameIdOrElement)
{
    /// <summary>
    /// 获取指定iframe子窗体的window对象。
    /// iframe窗体参数可以是字符串形式的frameid，或者frame对象实例。
    /// </summary>
    /// <param name="frameIdOrElement">
    /// 子窗体id号或者子窗体DOM对象实例
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetChildWindowInSameDomain, function (strFrameId, blnOnlyHXWebJSUsedWindow)
{
    /// <summary>
    //// 获取指定iframe子窗体的window对象。
    /// </summary>
    /// <param> name="strFrameId">子窗体id号</param>
    /// <param name="blnOnlyHXWebJSUsedWindow" optional="true">
    /// 指定是否子窗体必需是同源页面。缺省值为false。
    /// 允许非同源页面时，该函数和HXWebJS.DOM.GetFrameWindow()等效。
    /// 只允许同源页面时，如果子窗体页面为其它站点页面，函数返回null，是本站点页面时，函数才返回子窗体对象。
    /// </param>
});


intellisense.annotate(HXWebJS.DOM.SetFrameSource, function (frameIdOrElement, strUrl)
{
    /// <summary>
    /// 设置指定frame子窗体的内容为指定页面。
    /// </summary>
    /// <param name="frameIdOrElement">
    /// 子窗体id号或者子窗体DOM对象实例
    /// </param>
    /// <param name="strUrl">
    /// 目标页面Url
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetParentWindowInSameDomain, function (blnOnlyHXWebJSUsedWindow, objCurrentWindow)
{
    /// <summary>
    /// 获取指定窗体的父级窗体对象。可以指定父页面是否要求同源网站页面。
    /// 如果当前窗体已经是顶层窗口，函数返回null。
    /// </summary>
    /// <param name="objCurrentWindow" domElement="true" optional="true">
    /// 当前窗口，缺省为空使用当前页面所在窗口
    /// </param>
    /// <param name="blnOnlyHXWebJSUsedWindow" type="Boolean" optional="true">
    /// 指定是否父窗体必需是同源页面。缺省值为false。
    /// 只允许同源父页面时，如果父窗体页面为其它站点页面，函数返回null。
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetTopWindowInSameDomain, function (blnOnlyHXWebJSUsedWindow)
{
    /// <summary>
    /// 获取当前窗体的顶层窗体对象。可以指定上级页面是否要求同源网站页面。
    /// 如果当前窗体已经是顶层窗口，函数返回null。
    /// </summary>
    /// <param name="blnOnlyHXWebJSUsedWindow">
    /// 指定是否上级窗体必需是同源页面。缺省值为false。
    /// 只允许同源上级页面时，函数找到同源的最上层的上级窗体（不一定是window.top顶层窗体）。
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetWindowWidth, function (objWin)
{
    /// <summary>
    /// 获取窗口宽度。等效于jQuery(objWin).width()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetWindowHeight, function (objWin)
{
    /// <summary>
    /// 获取窗口高度。等效于jQuery(objWin).height()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetWindowX, function (objWin)
{
    /// <summary>
    /// 获取窗口左上角横坐标值。常用于iframe子窗体中的页面。
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetWindowY, function (objWin)
{
    /// <summary>
    /// 获取窗口左上角纵坐标值。常用于iframe子窗体中的页面。
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetDocumentWidth, function (objWin)
{
    /// <summary>
    /// 获取页面文档宽度。等效于$(objWin.document).width()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetDocumentHeight, function (objWin)
{
    /// <summary>
    /// 获取页面文档高度。等效于$(objWin.document).height()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetScrollLeft, function (objWin)
{
    /// <summary>
    /// 获取页面文档左边滚动长度。等效于$(objWin.document).scrollLeft()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.GetScrollTop, function (objWin)
{
    /// <summary>
    /// 获取页面文档顶部滚动高度。等效于$(objWin.document).scrollTop()调用
    /// </summary>
    /// <param name="objWin" domElement="true" mayBeNull="true" optional="true">
    /// 指定窗口对象，缺省为空使用当前页面所在窗口
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.CreateElement, function (strElementHtmlContent)
{
    /// <summary>
    /// 使用html字符串创建DOM对象，html字符串必需是一个完整元素，可以包含子元素。
    /// 例如：var objDivElement = HXWebJS.DOM.CreateElement("&lt;div&gt;&lt;span&gt;code1&lt;/span&gt;&lt;img/&gt;&lt;/div&gt;");
    /// 该函数等效于调用 var el = $("&lt;div&gt;&lt;span&gt;code1&lt;/span&gt;&lt;img/&gt;&lt;/div&gt;")[0];
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetElementTopPosition, function (el)
{
    /// <summary>
    /// 获取指定元素顶部开始位置。函数等效于调用$(el).offset().top
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetElementLeftPosition, function (el)
{
    /// <summary>
    /// 获取指定元素左边开始位置。函数等效于调用$(el).offset().left
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetElementOuterHTML, function (el)
{
    /// <summary>
    /// 获取指定元素完整html内容。相当于调用el.outerHTML
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetElementInnerText, function (el)
{
    /// <summary>
    /// 获取指定元素内部文本值。函数等效于调用$(el).text()
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.SetElementInnerText, function (el, sText)
{
    /// <summary>
    /// 设置指定元素内部文本值。函数等效于调用$(el).text(sText)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.GetElementAttributeValue, function (node, strAttributeName)
{
    /// <summary>
    /// 获取指定元素指定属性的值。函数等效于调用$(node).attr(strAttributeName)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.SetElementAttributeValue, function (node, strAttributeName, strAttributeValue)
{
    /// <summary>
    /// 设置指定元素指定属性的值。函数等效于调用$(node).attr(strAttributeName, strAttributeValue)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.ElementAttributeIsDefined, function (node, strAttributeName)
{
    /// <summary>
    /// 检查指定元素是否存在指定属性定义。
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.IsElementInContainer, function (objContainerElement, objElement, blnIncludeContainer)
{
    /// <summary>
    /// 检查指定元素是否为另一个元素的子节点元素。
    /// </summary>
    /// <param name="blnIncludeContainer">
    /// 指示如果被检测元素正好是容器元素时，是否视作元素在容器中。缺省=false
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.IsPointInElementArea, function (objElement, iCoordX, iCoordY)
{
    /// <signature>
    /// <summary>
    /// 检查指定坐标点是否位于指定元素显示范围内。
    /// </summary>
    /// <param name="objElement" domElement="true"></param>
    /// <param name="iCoordX" type="Integer">横坐标值</param>
    /// <param name="iCoordY" type="Integer">纵坐标值</param>
    /// </signature>
    /// <signature>
    /// <summary>
    /// 检查指定坐标点是否位于指定元素范围内。
    /// </summary>
    /// <param name="objElement" domElement="true"></param>
    /// <param name="point" type="{x,y}">点坐标，JSON对象{x,y}</param>
    /// </signature>
});

intellisense.annotate(HXWebJS.DOM.IsRectInElementArea, function (el, rect)
{
    /// <summary>
    /// 检查指定矩形和指定元素显示区域之间的位置关系。返回0表示不重叠，返回1表示部分重叠，返回2表示元素区域包含完整矩形。
    /// </summary>
    /// <param name="el" domElement="true"></param>
    /// <param name="rect" type="{left,top,width,height}">矩形坐标，JSON对象{left,top,width,height}</param>
    /// <return type="int">{0|1|2},返回0表示不重叠，返回1表示部分重叠，返回2表示元素区域包含完整矩形。</return>
});

intellisense.annotate(HXWebJS.DOM.FindElementsByTagName, function (strTagName, rootNode)
{
    /// <summary>
    /// 查找指定TagName的元素集合。
    /// </summary>
    /// <param name="strTagName" type="string">html元素标签名，例如：div, span</param>
    /// <param name="rootNode" optional="true">
    /// 查找范围，如果rootNode被指定，则函数在指定节点内部的后代子节点中进行查找。
    /// 如果该参数为空，函数在整个document中进行查找。</param>
    /// <returns type="Array" elementDomElement="true"></returns>
});

intellisense.annotate(HXWebJS.DOM.FindElementsById, function (strIDValue, rootNode, strTagName)
{
    /// <summary>
    /// 查找指定id值的元素集合。可以指定查找范围，以及指定元素的标签名。
    /// </summary>
    /// <param name="strIDValue" type="string">元素Id</param>
    /// <param name="strTagName" type="string" optional="true">
    /// html元素标签名，例如：div, span
    /// </param>
    /// <param name="rootNode" optional="true">
    /// 查找范围，如果rootNode被指定，则函数在指定节点内部的后代子节点中进行查找。
    /// 如果该参数为空，函数在整个document中进行查找。
    /// </param>
    /// <returns type="Array" elementDomElement="true"></returns>
});

intellisense.annotate(HXWebJS.DOM.FindFirstElementById, function (strIDValue, rootNode, strTagName)
{
    /// <summary>
    /// 查找指定html元素节点容器内的指定id值的元素。可以指定元素的标签名。
    /// 如果存在多个同样id的元素，函数随机取一个。
    /// </summary>
    /// <param name="strIDValue" type="string">元素Id</param>
    /// <param name="strTagName" type="string" optional="true">
    /// html元素标签名，例如：div, span
    /// </param>
    /// <param name="rootNode" optional="true">
    /// 查找范围，如果rootNode被指定，则函数在指定节点内部的后代子节点中进行查找。
    /// 如果该参数为空，函数在整个document中进行查找。
    /// </param>
    /// <returns type="Array" elementDomElement="true"></returns>
});

intellisense.annotate(HXWebJS.DOM.FindElementsByAttribute, function (strAttributeName, strAttributeValue, strTagName, rootNode)
{
    /// <summary>
    /// 查找具有指定属性值的html元素集合。可以指定查找范围，还可以指定元素的标签名。
    /// </summary>
    /// <param name="strAttributeName" type="string">待检查的属性名</param>
    /// <param name="strAttributeValue" type="string" optional="true">
    /// 待检查的属性值。该参数值可以为null，null值表示只要元素具有指定的属性名，无论何值都视作匹配成功。
    /// 如果该参数值不为空，则元素必需要具有完全相等的属性值才会视作匹配成功。
    /// </param>
    /// <param name="strTagName" type="string" optional="true">
    /// html元素标签名，例如：div, span
    /// </param>
    /// <param name="rootNode" optional="true">
    /// 查找范围，如果rootNode被指定，则函数在指定节点内部的后代子节点中进行查找。
    /// 如果该参数为空，函数在整个document中进行查找。
    /// </param>
    /// <returns type="Array" elementDomElement="true"></returns>
});

intellisense.annotate(HXWebJS.DOM.GetElementBindingLineInfo, function (element)
{
    /// <summary>
    /// 函数查找并返回指定元素所在的绑定行信息（包括所在绑定行Html容器元素和绑定行数据Xml节点）
    /// 如果元素不在绑定行容器中，函数返回null。
    /// 如果元素在二级绑定行中，函数同时返回第一级绑定行和第二级绑定行的信息。
    ///  </summary>
    /// <returns type="{binding_row_container:el,binding_row_data:xmlnode,binding_row_line_no:1-n,parent_level_row_container:el2,parent_level_row_data:xmlnode2,parent_level_row_line_no:n2}">
    /// </returns>
});

intellisense.annotate(HXWebJS.DOM.TriggerRowRebindingCallback, function (element, intTriggerBindingLevel)
{
    /// <signature>
    /// <summary>
    /// 触发指定元素所在绑定行的回调函数调用。如果元素位于2级绑定行容器内，还可以指定1级绑定还是2级绑定。
    /// </summary>
    /// <param name="element">指定html元素，该元素位于某个绑定行html容器元素内。</param>
    /// <param name="intTriggerBindingLevel">
    /// 要触发的绑定列表级别，仅在指定元素位于2级绑定行容器时有意义。可选值{1|2}，缺省值=2
    /// </param>
    /// </signature>
    /// <signature>
    /// <summary>
    /// 触发指定Xml记录对象相关的绑定行回调函数调用。
    /// </summary>
    /// <param name="objHXXmlNode">指定Xml记录对象，该Xml记录对象对应于数据包中的某条RS_ROW记录行。</param>
    /// </signature>
});




intellisense.annotate(HXWebJS.DOM.CSSAddStyle, function (strCSSContent)
{
    /// <summary>
    /// 动态添加CSS样式信息到当前页面。较少使用
    /// </summary>
    /// <param name="strCSSContent">
    /// CSS样式内容，例如：.class {color:red;}
    /// </param>
});

intellisense.annotate(HXWebJS.DOM.CSSClass.HasClass, function (objElement, strClassName)
{
    /// <summary>
    /// 判断指定元素是否具有指定样式类名，等效于调用 $(objElement).hasClass(strClassName)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.CSSClass.AddClass, function (objElement, strClassName)
{
    /// <summary>
    /// 为指定元素添加指定样式类名(可以同时添加多个样式类)，等效于调用 $(objElement).addClass(strClassName)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.CSSClass.RemoveClass, function (objElement, strClassName)
{
    /// <summary>
    /// 从指定元素中移除指定样式类名(可以同时移除多个样式类)，等效于调用 $(objElement).removeClass(strClassName)
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.CSSClass.ToggleClass, function (objElement, strClassName, blnIsAddClass)
{
    /// <summary>
    /// 为指定元素切换指定样式类名。如果原来该元素有指定样式类，则移除；反之则添加。
    /// 该函数等效于调用 $(objElement).toggleClass(strClassName)
    /// </summary>
    /// <param name="blnIsAddClass" optional="true">可选参数，通过传递该参数为true|false可以明确指定添加样式类(true)或者移除样式类(false)。该参数为null则表示自动切换。</param>
});

intellisense.annotate(HXWebJS.DOM.Cookies.SetCookie, function (key, value, expires_days_or_date, spath, sdomain)
{
    /// <summary>
    /// 设置cookie
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.Cookies.GetCookie, function (key)
{
    /// <summary>
    /// 读取指定键值得cookie内容
    /// </summary>
});

intellisense.annotate(HXWebJS.DOM.Cookies.RemoveCookie, function (key)
{
    /// <summary>
    /// 移除指定cookie
    /// </summary>
});



intellisense.annotate(HXWebJS.EventManager.AddListener, function (element, eventType, handler)
{
    /// <summary>
    /// 为指定元素添加事件响应函数。等效于jQuery中调用 $(element).on(eventType, handler)
    /// </summary>
});

intellisense.annotate(HXWebJS.EventManager.RemoveListener, function (element, eventType, handler)
{
    /// <summary>
    /// 为指定元素移除事件响应函数。等效于jQuery中调用 $(element).off(eventType, handler)
    /// </summary>
});

intellisense.annotate(HXWebJS.EventManager.FireEvent, function (element, eventType, data)
{
    /// <summary>
    /// 为指定元素主动触发指定事件。等效于jQuery中调用 $(element).trigger(eventType, data)
    /// </summary>
});

intellisense.annotate(HXWebJS.EventManager.PostMessageToParentOrOpenerWin, function (strMessageType, messageData)
{
    /// <summary>
    /// 投递消息到父窗口或者打开当前窗口的源窗口。函数基于postMessage()，约定了消息类型和消息数据结构。并以统一的HXWebJS.EventManager.OnMessage()分发。以简化消息投递的开发。
    /// </summary>
    /// <param name="strMessageType">消息类型代码，字符串。区分不同的消息。</param>
    /// <param name="messageData" optional="true">消息数据，可以为空，也可以是任意类型的数据。</param>
});


intellisense.annotate(HXWebJS.EventManager.RegisterCallbackFunction, function (strCallbackType, fn)
{
    /// <summary>
    /// 登记指定回调类型的回调函数。该机制用于支持同一种回调处理可以有多个回调处理函数。
    /// 如果某个函数在指定回调类型下已经注册过，第二次及以后的注册会被忽略（不会重复注册）。
    /// </summary>
    /// <param name="fn">回调函数，可以时function类型或者字符串类型（string类型可用于OnDocumentReady()阶段登记带命名空间的回调函数，该函数在登记时可能还不存在）</param>
});

intellisense.annotate(HXWebJS.EventManager.CallRegistedCallbackFunctions, function (strCallbackType, arg1)
{
    /// <summary>
    /// 登记指定回调类型的回调函数。该机制用于支持同一种回调处理可以有多个回调处理函数。
    /// </summary>
});

intellisense.annotate(HXWebJS.EventManager.HasCallbackFunctionRegisted, function (strCallbackType)
{
    /// <summary>
    /// 判断指定回调类型是否登记了回调函数。某些场景下，程序可以根据是否登记过回调函数进行不同的处理。
    /// </summary>
});



intellisense.annotate(HXWebJS.Xml.MarkXMLSpecialChars, function (strText)
{
    /// <summary>
    /// 转义传入字符串中的Xml特殊字符。
    /// 该函数和HXWebJS.Core.MarkXMLSpecialChars()等效，为了调用便利性设立。
    /// </summary>
    /// <returns>如果传入参数值为空(null)，函数也返回空(null)</returns>
});


intellisense.annotate(HXWebJS.Xml.BuildAllXmlDatas, function (strDataBlockCode1, strDataBlockContent1, strDataBlockCode2, strDataBlockContent2)
{
    /// <summary>
    /// 将多个数据内容块按约定规则合并为一个Xml数据包。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.GetCompositeXmlDataBlock, function (strHXAllDatasXmlData, strDataBlockCode)
{
    /// <summary>
    /// 从符合约定规则的复合Xml数据包中读取指定代码的数据块内容。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.BuildXmlRowStringViaArray, function (strAttrName1, strAttrValue1)
{
    /// <summary>
    /// 生成一个 RS_ROW 结点 Xml数据包，传入的每个个属性名称和值对作为RS_ROW节点的属性。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.GetHXXmlDocumentViaXmlString, function (strXml)
{
    /// <summary>
    /// 该函数解析Xml字符串内容并返回HXXmlDocument对象。
    /// </summary>
    /// <returns type="HXXmlDocument">如果输入字符串为空，函数仍然会返回HXXmlDocument，只是其内部_xmldoc属性为null。</returns>
});

intellisense.annotate(HXWebJS.Xml.GetHXXmlDocumentViaXmlDataIsland, function (id)
{
    /// <summary>
    /// 该函数读取恒信Xml数据岛中的Xml字符串内容并返回HXXmlDocument对象。
    /// </summary>
    /// <param name="id">Xml数据岛Id。恒信Xml数据岛采用自定义tag:hxxmldataisland。</param>
    /// <returns type="HXWebJS.Xml.HXXmlDocument"></returns>
});

intellisense.annotate(HXWebJS.Xml.GetHXXmlDocumentViaURL, function (strURL)
{
    /// <summary>
    /// 该函数读取Web站点中的指定Url对应的Xml文件内容并返回HXXmlDocument对象。
    /// </summary>
    /// <returns type="HXXmlDocument"></returns>
});

intellisense.annotate(HXWebJS.Xml.GetHXXmlDocumentFieldValue, function (strXmlDataIslandId, strFieldCode)
{
    /// <summary>
    /// 该函数读取指定恒信Xml数据岛中的指定字段（属性）的值。通常Xml数据岛应该是单一记录（例如页面多语言文本数据岛，编辑页面主记录数据岛等）。
    /// 该函数等效于 GetHXXmlDocumentViaXmlDataIsland() 加 SelectSingleNode()函数调用的结果。用于一次性访问数据岛场景下简化开发人员调用。
    /// 如果未找到指定属性节点，函数返回null。
    /// </summary>
    /// <param name="strXmlDataIslandId">Xml数据岛Id。恒信Xml数据岛采用自定义tag:hxxmldataisland。</param>
    /// <returns type="string"></returns>
});

intellisense.annotate(HXWebJS.Xml.CreateXmlDataIsland, function(id, strXml, blnRebindingProcess)
{
    /// <summary>
    /// 函数根据指定内容动态创建一个恒信Xml数据岛对象，然后函数自动执行相关绑定元素的绑定处理。
    /// 该函数用于那些需要在Xml数据岛不存在的事后提前定义xml绑定元素，然后通过异步处理加载Xml数据岛内容的场景（通常用于控件开发）
    /// 如果指定id的Xml数据岛已经存在，函数会覆盖已存在的Xml数据岛内容。
    /// </summary>
    /// <param name="blnRebindingProcess">是否自动执行相关元素的绑定处理，缺省=true</param>
    /// <returns type="HXWebJS.Xml.HXXmlDocument"></returns>
});

intellisense.annotate(HXWebJS.Xml.CreateNode, function (strXml)
{
    /// <summary>
    /// 该函数使用指定Xml字符串创建HXXmlNode对象实例并返回该对象。
    /// </summary>
    /// <param name="strXml">节点Xml字符串。其定义必需是一个完整Xml节点（可以包含子孙后代节点）</param>
    /// <returns type="HXXmlNode"></returns>
});

intellisense.annotate(HXWebJS.Xml.RegisterOnBindingDataChangedCallback, function (strXmlDataIslandId, fn)
{
    /// <summary>
    /// 注册Xml数据岛数据内容发生变化后的响应回调函数。
    /// 当Xml数据岛任何数据内容发生变化后（包括字段值变化，数据行变化，以及数据包内容重新加载），相关回调函数会被触发。
    /// 回调函数接收参数：fn(strXmlDataIslandId);
    /// </summary>
    /// <param name="strXmlDataIslandId">和回调函数关联的绑定数据岛Id。该参数必须有值。</param>
});

intellisense.annotate(HXWebJS.Xml.RegisterOnBindingValueChangedCallback, function (strXmlDataIslandId, fn, strBindingFieldCode)
{
    /// <summary>
    /// 注册Xml数据岛绑定值更改后的响应回调函数。
    /// 用户在界面上修改输入框的值引发的绑定数据包值更改总是会触发响应事件；
    /// 开发者在javascript代码中编写的数据包值修改语句(HXXmlNode.SetText()|HXXmlNode.SetAttributeValue())可以选择是否触发更改事件（缺省不触发）
    /// 回调函数接收参数：fn(strXmlDataIslandId, strFieldCode, strNewValue, strOldValue, objHXXmlNode, [objTriggeredBindingElement]);
    /// </summary>
    /// <param name="strXmlDataIslandId">和回调函数关联的绑定数据岛Id。该参数必须有值。</param>
    /// <param name="strBindingFieldCode" optional="true">和回调函数关联的绑定字段名</param>
});


intellisense.annotate(HXWebJS.Xml.RegisterOnBindingRowAddedCallback, function (strXmlDataIslandId, fn)
{
    /// <summary>
    /// 注册Xml数据岛绑定行添加后的响应回调函数。
    /// 当Xml数据岛插入或追加新节点后该数据岛相关的回调函数会被触发。
    /// 回调函数接收参数：fn(strDataSrcName, objHXXmlNodeToInsert);
    /// </summary>
    /// <param name="strXmlDataIslandId">和回调函数关联的绑定数据岛Id。该参数必须有值。</param>
});

intellisense.annotate(HXWebJS.Xml.RegisterOnBindingRowRemovedCallback, function (strXmlDataIslandId, fn)
{
    /// <summary>
    /// 注册Xml数据岛绑定行删除后的响应回调函数。
    /// 当Xml数据岛节点被移除后该数据岛相关的回调函数会被触发。
    /// 回调函数接收参数：fn(strXmlDataIslandId, objHXXmlNodeBeRemoved);
    /// </summary>
    /// <param name="strXmlDataIslandId">和回调函数关联的绑定数据岛Id。该参数必须有值。</param>
});

intellisense.annotate(HXWebJS.Xml.RegisterOnBindingRowReplacedCallback, function (strXmlDataIslandId, fn)
{
    /// <summary>
    /// 注册Xml数据岛绑定行被替换后的响应回调函数。
    /// 当Xml数据岛节点被替换后该数据岛相关的回调函数会被触发。
    /// 回调函数接收参数：fn(strXmlDataIslandId, objHXXmlNodeAfterReplaced);
    /// </summary>
    /// <param name="strXmlDataIslandId">和回调函数关联的绑定数据岛Id。该参数必须有值。</param>
});

intellisense.annotate(HXWebJS.Xml.XmlDataIslandBindingProcess, function (containerElement)
{
    /// <summary>
    /// 对指定元素进行可能的Xml数据岛绑定处理，用于动态创建的html元素的数据绑定处理。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.GetXml, function ()
{
    /// <summary>
    /// 获取当前Xml文档对象的完整Xml内容（字符串）。
    /// </summary>
    /// <returns type="string">如果Xml文档对象为null，函数返回空值字符串（""）</returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.GetRootXmlNode, function ()
{
    /// <summary>
    /// 获取当前Xml文档对象的顶层根节点对象实例。
    /// </summary>
    /// <returns type="HXXmlNode"></returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.SelectSingleNode, function (xpathText)
{
    /// <summary>
    /// 获取当前Xml文档对象的符合指定XPath筛选条件的第一个Xml节点对象。
    /// </summary>
    /// <param name="xpathText">
    /// XPath筛选条件，例如："//RS_ROW", "//RS_ROW[@CODE='aaa']/@VALUE"
    /// </param>
    /// <returns type="HXXmlNode"></returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.SelectNodes, function (xpathText)
{
    /// <summary>
    /// 获取当前Xml文档对象的符合指定XPath筛选条件的所有Xml节点对象集合。
    /// </summary>
    /// <param name="xpathText">
    /// XPath筛选条件，例如："//RS_ROW"
    /// </param>
    /// <returns type="Array" elementType="HXXmlNode">
    /// 如果没有符合条件的Xml节点，函数返回空数组[]
    /// </returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.ReloadXML, function (strXmlContent,blnRebindingProcess)
{
    /// <summary>
    /// 将当前Xml文档对象的内容替换为传入的Xml字符串。
    /// </summary>
    /// <param name="blnRebindingProcess" optional="true">
    /// 是否进行重新绑定处理，缺省=true表示自动执行。在二级绑定场景两级数据包都需要重新加载时，
    /// 通常先分别采用不绑定模式Reload数据，然后再触发一级Xml数据包的绑定处理，绑定引擎内部自动实现一级和二级绑定处理
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.ClearAllContents, function ()
{
    /// <summary>
    /// 清除当前Xml文档对象中的所有Xml内容。等效于执行 HXWebJS.Xml.HXXmlDocument.ReloadXML("") 
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.InsertChild, function (objHXXmlNodeToInsert, insertBefore)
{
    /// <summary>
    /// 插入新的Xml节点到当前Xml文档对象中（作为根节点的儿子节点），可以指定插入位置。
    /// </summary>
    /// <param name="objHXXmlNodeToInsert" type="HXXmlNode">待插入的Xml节点对象</param>
    /// <param name="insertBefore" optional="true" mayBeNull="true">
    /// 标记新插入的Xml节点位于该参数指定的节点之前。
    /// 如果该参数为null，新插入的Xml节点作为文档对象根节点的最后一个儿子节点。
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.AppendChild, function (objHXXmlNodeToAppend)
{
    /// <summary>
    /// 插入新的Xml节点到当前Xml文档对象中（作为根节点的最后一个儿子节点）
    /// </summary>
    /// <param name="objHXXmlNodeToInsert" type="HXXmlNode">待插入的Xml节点对象</param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.RemoveChild, function (objHXXmlNodeToRemove)
{
    /// <summary>
    /// 从当前Xml文档对象中移除指定Xml节点（该节点必需为文档根节点的儿子节点）
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlDocument.prototype.ReplaceChild, function (objOldHXXmlNode, objNewHXXmlNode)
{
    /// <summary>
    /// 使用新节点内容替换Xml文档对象（根节点）中的指定Xml儿子节点
    /// 如果被替换节点数据Xml数据岛，则需要重新更新相关绑定表的绑定行的绑定元素内容，以及重新调用格式化回调函数
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.SelectSingleNode, function (xpathText)
{
    /// <summary>
    /// 获取当前Xml节点对象的符合指定XPath筛选条件的第一个Xml节点对象。
    /// </summary>
    /// <param name="xpathText">
    /// XPath筛选条件，例如："@VALUE", ".//RS_ROW/@*"。
    /// 提醒：该函数XPath缺省相对于当前Xml节点，但如果在XPath中使用/开始的查询语句（如果//RS_ROW），
    /// XPath查找引擎仍然会从该Xml节点所在Xml文档的根节点上开始进行查找。
    /// 也就是说，此种情况查找到的结果很可能是和当前Xml节点对象完全无关其它Xml节点。使用时请特别留意该特点。
    /// 通常情况下，应使用.开始的XPath表达式约束筛选范围在当前Xml节点内部。例如：".//RS_ROW"
    /// </param>
    /// <returns type="HXXmlNode"></returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.SelectNodes, function (xpathText)
{
    /// <summary>
    /// 获取当前Xml节点对象的符合指定XPath筛选条件的所有Xml节点对象集合。
    /// </summary>
    /// <param name="xpathText">
    /// XPath筛选条件，例如："@VALUE", ".//RS_ROW/@*"。
    /// 提醒：该函数XPath缺省相对于当前Xml节点，但如果在XPath中使用/开始的查询语句（如果//RS_ROW），
    /// XPath查找引擎仍然会从该Xml节点所在Xml文档的根节点上开始进行查找。
    /// 也就是说，此种情况查找到的结果很可能是和当前Xml节点对象完全无关其它Xml节点。使用时请特别留意该特点。
    /// 通常情况下，应使用.开始的XPath表达式约束筛选范围在当前Xml节点内部。例如：".//RS_ROW"
    /// </param>
    /// <returns type="Array" elementType="HXXmlNode">
    /// 如果没有符合条件的Xml节点，函数返回空数组[]
    /// </returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetOwnerXmlDataIsland, function ()
{
    /// <summary>
    /// 获取当前Xml节点对象所属的Xml数据岛文档对象。
    /// </summary>
    /// <returns type="HXXmlDocument">如果当前Xml节点为独立数据包节点（不属于任何Xml数据岛），函数返回null.</returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetFirstChild, function ()
{
    /// <summary>
    /// 获取当前Xml节点对象的第一个儿子节点。
    /// </summary>
    /// <returns type="HXXmlNode">如果当前Xml节点没有儿子，函数返回null.</returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetName, function ()
{
    /// <summary>
    /// 获取当前Xml节点对象的节点名称。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetText, function()
{
    /// <summary>
    /// 获取当前Xml节点对象的文本内容。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetXml, function ()
{
    /// <summary>
    /// 获取当前Xml节点对象的完整Xml内容（字符串）。
    /// </summary>
    /// <returns type="string">如果Xml节点对象为null，函数返回空值字符串（""）</returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.SetText, function(str, blnTriggerUpdateEvent)
{
    /// <summary>
    /// 设置当前Xml节点对象的文本内容。常用于Xml节点对象为属性节点时。
    /// 如果当前Xml节点对象为Xml数据岛的一部分，函数还会进行相关绑定元素的更新处理
    /// </summary>
    /// <param name="blnTriggerUpdateEvent" optional="true">
    /// 指示在Xml绑定模式下，是否触发相关被绑定元素的更改事件。缺省=false
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.SetCDATAText, function (strText) 
{
    /// <summary>
    /// 设置当前Xml节点对象的文本内容(将节点的内容以CDATA形式写入)。该函数仅用于Xml节点为NodeElement时，Xml节点为属性节点时不能使用。
    /// CDATA仅用于节点，不会用于属性，而恒信平台Xml绑定总是基于节点属性（如RS_ROW fieldnam=""），
    /// 所以此处设置CDATAText无需进行绑定更新处理
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.GetAttributeValue, function(strAttributeName)
{
    /// <summary>
    /// 获取当前Xml节点对象的指定属性的值。
    /// </summary>
    /// <returns type="string">如果指定属性未找到，函数返回null</returns>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.SetAttributeValue, function (strAttributeName, strAttributeValue
                                , blnCreateIfNotExist, blnTriggerUpdateEvent)
{
    /// <summary>
    /// 设置当前Xml节点对象的指定属性的值。
    /// 如果当前Xml节点对象为Xml数据岛的一部分，函数还会进行相关绑定元素的更新处理
    /// </summary>
    /// <param name="blnCreateIfNotExist" optional="true">
    /// 指示当Xml节点中没有指定属性时，是否自动插入该属性。缺省值=false
    /// </param>
    /// <param name="blnTriggerUpdateEvent" optional="true">
    /// 指示在Xml绑定模式下，是否触发相关被绑定元素的更改事件。缺省=false
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.RemoveAttribute, function (strAttributeName) {
    /// <summary>
    /// 移除当前Xml节点对象的指定属性。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.CloneNode, function ()
{
    /// <summary>
    /// 克隆当前Xml节点对象的一份复制节点对象。
    /// 即使当前Xml节点属于某个Xml数据岛，被克隆出来的Xml节点对象也不属于任何Xml数据岛(为了便于Clone后的节点插入到别的数据岛中）
    /// </summary>
    /// <param name="blnReplaceHXWebJSRowUUID">
    /// 如果当前节点为包含_HXWEBJS_ROW_UUID属性的 RS_ROW节点，该参数决定是否对克隆出的节点使用新的UUID值。{true|false}，缺省值=true
    /// </param>
    /// <returns type="HXXmlNode"></param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.InsertChild, function (objHXXmlNodeToInsert, insertBefore, strUpLevelWebJSRowUUID)
{
    /// <summary>
    /// 插入新的Xml节点到当前Xml节点对象中（作为儿子节点），可以指定插入位置。
    /// </summary>
    /// <param name="objHXXmlNodeToInsert" type="HXXmlNode">待插入的Xml节点对象</param>
    /// <param name="insertBefore" optional="true" mayBeNull="true">
    /// 标记新插入的Xml节点位于该参数指定的节点之前。
    /// 如果该参数为null，新插入的Xml节点作为当前Xml节点的最后一个儿子节点。
    /// </param>
    /// <param name="strUpLevelWebJSRowUUID" optional="true">
    /// 仅用于二级绑定模式下第二级绑定数据包插入的新记录对应的一级数据包中的节点条目
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.AppendChild, function (objHXXmlNodeToAppend, strUpLevelWebJSRowUUID)
{
    /// <summary>
    /// 插入新的Xml节点到当前Xml节点对象中（作为当前节点的最后一个儿子节点）
    /// </summary>
    /// <param name="objHXXmlNodeToInsert" type="HXXmlNode">待插入的Xml节点对象</param>
    /// <param name="strUpLevelWebJSRowUUID" optional="true">
    /// 仅用于二级绑定模式下第二级绑定数据包插入的新记录对应的一级数据包中的节点条目
    /// </param>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.RemoveChild, function (objHXXmlNodeToRemove)
{
    /// <summary>
    /// 从当前Xml节点对象中移除指定Xml节点（该节点必需为当前节点的儿子节点）
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.RemoveSelf, function ()
{
    /// <summary>
    /// 将当前Xml节点对象自身（从Xml文档中）移除。
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.ReplaceChild, function (objOldHXXmlNode, objNewHXXmlNode)
{
    /// <summary>
    /// 使用新节点内容替换Xml节点对象中的指定Xml儿子节点
    /// 如果被替换节点数据Xml数据岛，则需要重新更新相关绑定表的绑定行的绑定元素内容，以及重新调用格式化回调函数
    /// </summary>
});

intellisense.annotate(HXWebJS.Xml.HXXmlNode.prototype.TriggerBindingRowFormatCallback, function ()
{
    /// <summary>
    /// 触发（调用）和当前Xml节点绑定行的格式化回调函数。通常该函数在Xml节点的某些影响到显示格式化的字段值发生变化时调用。
    /// </summary>
});

intellisense.annotate(HXWebXmlService,
{
    // XmlService调用失败后触发的回调函数。如果该回调函数被设置，引擎不再弹出alert错误消息框，而是执行该回调函数以便提供给用户友好反馈。
    // 回调函数参数：fn(strErrorType, msg, result, category, code)。其中strErrorType为 warning|error。 msg为错误消息文本。 result|category|code参数根据返回具体错误而定。
    OnXmlServiceFailed: undefined
});

intellisense.annotate(HXWebXmlService.RegisterNoActiveSessionCallback, function (fn)
{
    /// <summary>
    /// 注册用于XmlService请求由于服务器端没有活动会话时的回调函数。
    /// 例如用于微信场景下，没有活动会话时，可以自动跳转到登录页面再自动登录后回到原来的页面。
    /// </summary>
});


intellisense.annotate(HXWebXmlService.CallPageXmlService, function (PageXmlSvcCode, PageXmlSvcCnt, options)
{
    /// <summary>
    /// 以同步模式发起PageXmlService请求，并返回请求响应的结果。如果出现错误，函数返回null。
    /// </summary>
    /// <param name="PageXmlSvcCode">PageXmlService代码</param>
    /// <param name="PageXmlSvcCnt">PageXmlService内容</param>
    /// <param name="options" optional="true">
    /// options 所有选项属性均为可选。具体每个选项含义和可选值如下：
    /// disable_input: PageXmlService请求期间是否禁止鼠标输入，可选值{true|false},缺省=false
    /// show_progressbar:PageXmlService请求期间是否显示进度条，可选值{true|false},缺省=false
    /// ignore_bod_warning_msg:PageXmlService请求期间是否忽略警告消息提示，可选值{true|false},缺省=false
    /// ignore_bod_error_msg:PageXmlService请求期间是否忽略错误消息提示，可选值{true|false}, 缺省=false
    /// ignore_connect_fail_msg:PageXmlService请求期间是否忽略连接失败消息提示，可选值{true|false}, 缺省=false
    /// extend_web_part_html_id:扩展Web部件HtmlId，该属性用于在扩展Web部件中发起PageXmlService请求场景
    /// crossDomain:PageXmlService请求是否跨站访问请求，可选值{true|false}，缺省=false
    /// use_parallel_mode: 使用并行模式，{true|false}，缺省为了保持向后兼容设为false。实际应用建议通常使用true。并行模式下服务器端的处理不允许更改会话上下文。
    /// 例子：传入options参数 {disable_input:true, show_progressbar:true}可起到带进度条且阻塞输入的效果
    /// </param>
});

intellisense.annotate(HXWebXmlService.CallPageXmlServiceAsync, function (PageXmlSvcCode, PageXmlSvcCnt
                                , fnResponseCallback, options)
{
    /// <summary>
    /// 以异步模式发起PageXmlService请求，并在收到响应后执行回调函数。
    /// </summary>
    /// <param name="PageXmlSvcCode">PageXmlService代码</param>
    /// <param name="PageXmlSvcCnt">PageXmlService内容</param>
    /// <param name="fnResponseCallback">
    /// PageXmlService响应回调函数。回调函数签名：fn(result)。
    /// PageXmlService响应结果内容通过参数result传递给回调函数。
    /// 如果出现错误，回调函数仍然会被调用，此时result参数值为null。
    /// </param>
    /// <param name="options" optional="true">
    /// options 所有选项属性均为可选。具体每个选项含义和可选值如下：
    /// disable_input: PageXmlService请求期间是否禁止鼠标输入，可选值{true|false},缺省=false
    /// show_progressbar:PageXmlService请求期间是否显示进度条，可选值{true|false},缺省=false
    /// ignore_bod_warning_msg:PageXmlService请求期间是否忽略警告消息提示，可选值{true|false},缺省=false
    /// ignore_bod_error_msg:PageXmlService请求期间是否忽略错误消息提示，可选值{true|false}, 缺省=false
    /// ignore_connect_fail_msg:PageXmlService请求期间是否忽略连接失败消息提示，可选值{true|false}, 缺省=false
    /// extend_web_part_html_id:扩展Web部件HtmlId，该属性用于在扩展Web部件中发起PageXmlService请求场景
    /// crossDomain:PageXmlService请求是否跨站访问请求，可选值{true|false}，缺省=false
    /// use_parallel_mode: 使用并行模式，{true|false}，缺省为了保持向后兼容设为false。实际应用建议通常使用true。并行模式下服务器端的处理不允许更改会话上下文。
    /// 例子：传入options参数 {disable_input:true, show_progressbar:true}可起到带进度条且阻塞输入的效果
    /// </param>
});

intellisense.annotate(HXWebXmlService.RegisterParameterValueToServer, function (strParamName1, strParamValue1)
{
    /// <signature>
    /// <summary>
    /// 注册页面参数内容集合。
    /// </summary>
    /// <param name="arrParamKeyValues" type="Array" elementType="string">
    /// 参数名和参数值的集合。数组第1个元素值为第一个参数名，第2个元素值为第一个参数值。第3个元素是第二个参数的名称，第4个元素为第二个参数的值。以此类推
    /// </param>
    /// </signature>
    /// <signature>
    /// <summary>
    /// 注册页面参数内容集合。函数第1个传入参数为第一个参数的名称，第2个传入参数为参数值。第3个个传入参数是第二个参数的名称，第4个个传入参数为第二个参数的值。以此类推
    /// </summary>
    /// <param name="strParamName1" type="string">第一个参数的名称</param>
    /// <param name="strParamValue1" type="string">第一个参数的值</param>
    /// </signature>
});

intellisense.annotate(HXWebXmlService.AppendOrUpdateMyParameterValueToServer, function (strMyParamUUID, strParamName1, strParamValue1)
{
    /// <summary>
    /// 为我的自定义参数内容集合追加（或者更新）具体参数值。函数第一个参数为我的参数内容集合UUID值。
    /// 函数第2个传入参数为第一个参数的名称，第3个传入参数为参数值。第4个个传入参数是第二个参数的名称，第5个个传入参数为第二个参数的值。以此类推
    /// </summary>
    /// <param name="strMyParamUUID">我的参数内容集合UUID值</param>
    /// <param name="strParamName1" type="string">第一个参数的名称</param>
    /// <param name="strParamValue1" type="string">第一个参数的值</param>
});

intellisense.annotate(HXWebXmlService.AppendParameterValueToServer, function (strParamName1, strParamValue1)
{
    /// <summary>
    /// 为当前页面追加参数内容集合。函数第1个传入参数为第一个参数的名称，第2个传入参数为参数值。第3个个传入参数是第二个参数的名称，第4个个传入参数为第二个参数的值。以此类推
    /// </summary>
    /// <param name="strParamName1" type="string">第一个参数的名称</param>
    /// <param name="strParamValue1" type="string">第一个参数的值</param>
});

intellisense.annotate(HXWebXmlService.GetUITextOnServer, function (strTextCode, blnCacheText)
{
    /// <summary>
    /// 使用当前用户语言设置，读取指定代码的系统通用文本内容。
    /// 函数同时提供内置缓存机制，如果启用（blnCacheText=true），则函数缓存指定代码的文本。以提高通用文本（例如：控件用的标题文本）的反复读取效率
    /// </summary>
    /// <param name="blnCacheText" optional="true">是否启用缓存，缺省值=true</param>
});

intellisense.annotate(HXWebXmlService.GetObjectUITextOnServer, function (strObjectViewCode, strTextCode)
{
    /// <summary>
    /// 使用当前用户语言设置，读取指定对象视图下指定文本代码对应的的对象视图文本内容。
    /// </summary>
});

intellisense.annotate(HXWebXmlService.IsOnline, function (fnOnline, fnOffline, options)
{
    /// <summary>
    /// 工具函数，用于检查HXEIMS6系统是否能够连线。
    /// </summary>
    /// <param name="fnOnline" optional="true">系统连线的情况下，调用该回调函数（传入参数值true）</param>
    /// <param name="fnOffline" optional="true">系统断线的情况下，调用该回调函数（传入参数值false）</param>
    /// <param name="options" optional="true">
    /// </param>
});

intellisense.annotate(HXWebXmlService.LoginVerifyPictureAcquire, function (objImage)
{
    /// <summary>
    /// 在跨站访问场景（如本地MobileApp）下，登录页上的验证码图片文件需要从服务器上动态生成
    /// 传统的以aspx页面动态生成图片并在服务器端将新验证码保存在会话变量中，然后通过AJAX登录时再读取后进行检查的方法在此场景下不生效
    /// 由于浏览器对于img src=""资源并不会启动/使用和服务器的会话，导致AJAX连接和图片生成的连接不再同一个会话上下文中
    /// 解决方案是通过XmlService生成验证码，图片文件，以及一个令牌，然后令牌以PageParamValue形式保存在数据库中，
    /// 之后将图片文件数据和令牌传递到页面端；最后页面端登录时将该令牌和访问码一并传回服务器端进行登录验证
    /// 本函数用于该场景下，用获取到的图片数据设置image对象，并返回访问令牌。
    /// 该函数也可以用于登录页在密码尝试到指定次数后再显示验证码的场合（该场合兼顾输入友好性和机器暴力破解防御性）
    /// </summary>
});









intellisense.annotate(HXWebJS.Navigation.PostDataToWebPage, function (strTagertWebPageName, strWindowName, strParamName1, strData1)
{
    /// <summary>
    /// 以Post方式向指定页面提交数据。
    /// </summary>
});

intellisense.annotate(HXWebJS.Navigation.OpenWebPopupPage, function (href, width, height, scroll)
{
    /// <summary>
    /// 函数在新打开的指定尺寸的窗口中显示指定页面，并返回窗口对象
    /// </summary>
    /// <param name="scroll" optional="true">是否显示滚动条，{yes|no}，缺省值为yes</param>
});

intellisense.annotate(HXWebJS.Navigation.OpenWebPage, function (strUrl, windowSetting)
{
    /// <signature>
    /// <summary>
    /// 使用指定方式打开指定页面
    /// </summary>
    /// <param name="strUrl"></param>
    /// <param name="windowSetting" optional="true">
    /// 页面打开方式设置信息。JSON对象。可能的属性值如下：
    /// show_style: 显示方式，可选值[0|1|2]。分别表示:
    /// 0:在命名窗口中(包括_blank,_top,_self等特殊窗口名)中打开页面, 此时window_name选项值指示具体的窗口名。
    /// 1:在对话框中打开页面，此时dialog_width,dialog_height,dialog_scroll,dialog_callback_func,dialog_argument,dialog_show_close_btn,dialog_show_title_bar选项分别指定对话框的宽度，高度，回调函数，以及对话框传入参数信息。
    /// 2:在指定iframe子窗口中打开页面，此时window_name参数为iframe元素的Id值
    /// 缺省值情况下，函数在新窗口中打开指定页面。
    /// </param>
    /// </signature>
    /// <signature>
    /// <summary>
    /// 在指定名称的窗口中打开指定页面
    /// </summary>
    /// <param name="strUrl"></param>
    /// <param name="strWindowName" optional="true">
    /// 在指定名称的窗口中(包括_blank,_top,_self等特殊窗口名)中打开页面。
    /// </param>
    /// </signature>
});

intellisense.annotate(HXWebJS.Navigation.OpenFileDownloadOnlyPage, function (strDownloadFileName, blnDownloadFileAsStream, strFileNameToDisplay)
{
    /// <summary>
    /// 函数在新的窗口中打开位于Web站点下的指定文件并下载（根据blnDownloadFileAsStream参数决定总是提示下载或者直接打开两种方式）。
    /// 函数服务器端会对要下载的文件进行安全过滤（禁止下载非法目录文件，禁止下载敏感文件等）
    /// </summary>
});

intellisense.annotate(HXWebJS.Navigation.GoHomePage, function (strHomePageName)
{
    /// <summary>
    /// 转到指定系统首页（总是在顶层窗口显示首页）。
    /// </summary>
    /// <param name="strHomePageName" optional="true"></param>
});

intellisense.annotate(HXWebJS.Navigation.BuildDynamicPageFullUrl, function (strMenuCmdHref, externalParamData)
{
    /// <summary>
    /// 函数解析传入的符合菜单命令页面链接规范href的各个部分，构造相应参数，生成相应的page_param_uuid，然后返回完整Url
    /// 函数仅支持V1.3+动态页面前缀开头的页面链接内容。不符合约定的情况下函数原样返回strMenuCmdHref参数内容。
    /// 注册页面参数时函数可能返回null，表示Web站点出错或者服务器端会话超时，此时调用者通常不作任何处理。
    /// 该函数用于改善如下两个场景：
    /// 1 用于菜单命令指向动态页面时简化带参数的调用
    /// 2 用于页面在首页以记忆标签页的方式展示时，通过传递page_param_uuid预生成的url，达到点击标签页时显示的页面内容是上次交互操作的内容的目的
    /// </summary>
    /// <param name="strMenuCmdHref">
    /// 以hxdynamicpage_common_v13:,hxdynamicpage_edit_v13:,hxdynamicpage_list_v13:,以及hxdynamicpage_statistic_v13:开头的页面链接内容被视作V1.3动态页面访问链接。
    /// 以hxdynamicpage_v2:开头的页面链接内容被视作V2.0动态页面链接内容
    /// </param>
});


intellisense.annotate(HXWebJS.Navigation.ExecuteMenuCommand, function (strMenuCmdHref, strWindowNameWebPageShowIn,strMenuSetAppCode)
{
    /// <summary>
    /// 执行（符合恒信平台菜单命令约定规则的）菜单命令。
    /// </summary>
    /// <param name="strMenuCmdHref">
    /// 菜单命令字符串。例子菜单命令如：hxdynamicpage_list_v20:hxhr/hxhr_employee__list.hxpage.xhtml, javascript:my_func()等
    /// </param>
    /// <param name="strWindowNameWebPageShowIn">
    /// 如果菜单命令指向一个Web页面，该参数指示页面打开的窗口名称(和window.open()函数参数约定一致)。例如：_top, _self, _blank，缺省为_blank
    /// </param>
    /// <param name="strMenuSetAppCode" optional="true">
    /// 菜单命令相关的菜单集应用代码，用于目标内容页面的顶部信息栏和菜单栏在多个前端应用场景下显示合适的应用信息和菜单信息目的。开发人员通常无需使用该参数。
    /// </param>
});

intellisense.annotate(HXWebJS.Navigation.OpenWebDialog, function (strUrl, objDialogArguments, intDialogWidth, intDialogHeight, blnScroll, fnDialogCallback
                                                    , blnShowCloseButton, blnShowTitleBar)
{
    /// <summary>
    /// 打开对话框并在对话框中显示指定页面。
    /// </summary>
    /// <param name="fnDialogCallback">
    /// 对话框关闭后调用的回调函数。函数签名：fn(returnValue)。接收到的参数为关闭对话框时传递的值(HXWebJS.Navigation.CloseWebDialog函数)。
    /// </param>
});

intellisense.annotate(HXWebJS.Navigation.CloseWebDialog, function (returnValue)
{
    /// <summary>
    /// 关闭当前对话框，同时可以传递返回值给打开当前对话框时指定的回调函数。
    /// </summary>
    /// <param name="returnValue" optional="true"></param>
});

intellisense.annotate(HXWebJS.Navigation.SetWebDialogTitle, function (strTitle)
{
    /// <summary>
    /// 设置对话框标题
    /// </summary>
});

intellisense.annotate(HXWebJS.Navigation.GetWebDialogArgumentsData, function ()
{
    /// <summary>
    /// 该函数由对话框页面调用（通常在页面加载后），获取打开对话框时传递给页面的对话框参数数据。
    /// </summary>
});

intellisense.annotate(HXWebJS.Navigation.IsWebPageOpenedInDialog, function ()
{
    /// <summary>
    /// 判断当前页面是否是在对话框中被打开。
    /// </summary>
    /// <returns type="Boolean"></returns>
});

intellisense.annotate(HXWebJS.Navigation.ShowWebDialogExtendButton, function (intExtendButtonNo, strExtendButtonClass, intMarginTop)
{
    /// <summary>
    /// 该函数由对话框页面调用（通常在页面加载后），用于在对话框右上角显示指定样式的图标按钮（当前最多显示2个）。
    /// </summary>
    /// <param name="intExtendButtonNo">扩展按钮编号，可选值{1|2}</param>
    /// <param name="strExtendButtonClass">扩展按钮样式类名称</param>
    /// <param name="intMarginTop">扩展按钮顶部外边距，用于微调按钮垂直显示位置目的</param>
});

intellisense.annotate(HXWebMessageBox.Show, function (strTitle, strContent, options)
{
    /// <summary>
    /// 简化版的消息框显示函数。
    /// </summary>
    /// <param name="strTitle">消息框标题</param>
    /// <param name="strContent">消息框详细文本内容</param>
    /// <param name="options">
    /// 参数设置。可能的参数名称和含义如下：
    /// width:消息框宽度，缺省为1/2窗口宽度；height:消息框高度，缺省为1/2窗口高度
    /// show_textarea:是否显示详细文本内容区域，{true|false}, 缺省=true
    /// hide_textarea_border:是否隐藏详细文本内容区域边框，{true|false}，缺省=false
    /// show_okcancel_button:是否显示OK和Cancel按钮，{true|false}，缺省=false。如果该参数值=false，函数显示cancel取消按钮
    /// callback_after_ok_button_clicked:当显示OK和Cancel按钮时，按下OK按钮后被自动调用的回调函数,函数返回文本内容框的输入值。回调函数参数：fn(strContent)
    /// </param>
});



intellisense.annotate(HXWebJS.Utility.Trim, function (strText)
{
    /// <summary>去除指定输入字符串的前后空格。jQuery.trim()的别名函数。</summary>
});

intellisense.annotate(HXWebJS.Core.StringFormat, function (strTemplate, arg0)
{
    /// <summary>将输入字符串中的{n}占位符使用后续的参数值进行替换。</summary>
});

intellisense.annotate(HXWebJS.Utility.Replace, function (strSource, strReplaceFrom, strReplaceTo)
{
    /// <summary>
    /// 替换字符串中的子串工具函数。函数对strReplaceFrom中的[]等正则表达式特殊字符进行了转义处理，以简化字符串替换场景下的开发调用
    /// 函数进行转义处理的特殊字符包括：\[](){}^?.+*
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.GetStringPixelWidth, function (str, intPixelWidthPerEnglishChar, intPixelWidthPerWideChar)
{
    /// <summary>
    /// 获取字符串像素宽度（估计值），函数统计字符串中的中文字符和英文字符个数并分别计算字符宽度然后加总
    /// </summary>
    /// <param name="intPixelWidthPerEnglishChar" optional="true">
    /// 一个英文字符平均像素宽度，缺省值=8 （font-size:12px时)
    /// </param>
    /// <param name="intPixelWidthPerWideChar" optional="true">
    /// 一个中文字符平均像素宽度，缺省值=12 （font-size:12px时)
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.IsStringHasInvalidChar, function (strInput, blnAllowSpaceChar)
{
    /// <summary>
    /// 检查指定输入字符串中是否包含特殊字符。如果指定字符（ ,:'`*|?\"&%$!+[]=(){}\f\n\r\t\v）出现在字符串中，函数返回false
    /// 为了允许文件名作为关键字段，允许.和/通过检查。
    /// 如果输入字符串为null或者空字符串("")，函数返回false。
    /// </summary>
    /// <param name="blnAllowSpaceChar" optional="true">
    /// 决定是否允许空格字符出现在字符串中。缺省值为false
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.StringInArray, function (arr, str, blnIgnoreCase)
{
    /// <summary>
    /// 工具函数，检查指定字符串是否在字符串数组中。可以指定是否忽略大小写。缺省区分大小写
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.Round, function (val, scale, intNegativeNumberRoundingRule)
{
    /// <summary>
    /// 四舍五入处理工具函数。
    /// </summary>
    /// <param name="val" type="decimal">要进行四舍五入处理的小数</param>
    /// <param name="scale" type="integer" optional="true">保留的小数位数。缺省=0表示四舍五入取整。</param>
    /// <param name="intNegativeNumberRoundingRule" optional="true">
    /// 对于负数的0.5舍入规则，{0|1}。0表示舍入到绝对值较大的整数（SQL/Oracle数据库使用规则）, 1表示舍入到比该数大的最小整数(Javascript使用规则)
    /// 例如：-67.5在Javascript规则下四舍五入=-67，而采用SQL/Oracle数据库规则为-68。
    /// 该参数的缺省值=0 （采用SQL/Oracle数据库规则）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.ConvertToNumber, function (strValue)
{
    /// <summary>
    /// 字符串转数字工具函数。
    /// 函数支持支持百分比（%号）转换。例如："20%"的返回值为0.2
    /// 函数支持国际化金额特殊千分位和句点的识别。
    /// 国际标准中,逗号为千分位分隔符，句点为小数分隔符。而在很多北欧国家中正好相反，句点为千分位分隔符，逗号为小数分隔符。
    /// 函数根据HXWebPageGlobalVariables.DecimalDisplayFormatType全局变量判断当前用户使用的数字千分位分隔符和小数点分隔符号。
    /// 如果字符串无法转换为正确的数字，函数返回null
    /// 如果转换后的数字有浮点尾差，则函数自动去除浮点尾差（内部使用HXWebJS.Utility.ConvertFloatToDecimal()函数，处理规则详情见该函数说明）
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.FormatNumber, function (value, scale, negativeRoundRule, showGroupingChar)
{
    /// <summary>
    /// 函数将数字格式化为数字字符串。可以指定显示小数精度，可以指定是否带千分位分隔符。
    /// 对于null或者非数字，函数返回空字符串。
    /// 函数自动去除可能的浮点数尾差（处理标准：小数末尾非零，且末尾小数前面连续6+以上0）
    /// </summary>
    /// <param name="scale" optional="true" type="integer">显示小数精度，如果该参数值非空，函数进行精度四舍五入处理。</param>
    /// <param name="negativeRoundRule" optional="true">进行小数精度处理时的负数舍入规则。详见Round()函数的说明，缺省=0（数据库使用规则）</param>
    /// <param name="showGroupingChar" optional="true" type="bool">
    /// 是否显示千分位分隔符。缺省=false。如果显示千分位分隔符，函数使用HXWebPageGlobalVariables.DecimalDisplayFormatType全局变量判断具体采用的分隔符号（,|.)。
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.ConvertFloatToDecimal, function (value)
{
    /// <summary>
    /// 函数将浮点小数转换为无浮点尾差的准确小数。具体方法是根据浮点数多余的小数位数(判别规则为：最后一位小数非零，且其前面有连续不低于6位的零)减少一位后四舍五入。
    /// javascript浮点数总数字位数为17位（整数部分+小数部分）。为避免误算，函数仅对小数部分除最后一位外连续不低于6位零的数字进行处理。
    /// 例如：3330.9400000000005 被处理为3330.94。
    /// 函数对于非数字返回null.
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.ConvertStringToJSON, function (strJSONContent)
{
    /// <summary>
    /// 将JSON内容字符串转换为JSON对象。
    /// 和JSON.parse()的不同之处在于，本函数支持不带双引号的变量名，例如：{test:1}
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.ConvertKeyValueListStringToDictionary, function (strKeyValueList)
{
    /// <summary>
    /// 将形如key1=value1,key2=value2的字符串转换为字典对象（可以通过dict[key1]获取到对应键的值。
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.ConvertToDate, function (strDate, strDateDisplayFormatString)
{
    /// <summary>
    /// 将日期字符串转换为日期对象。
    /// 函数内容可以正确解析任何年份数字 + 年份分隔符 + 月份数字 + 月份分隔符 + 日期数字 + 日期分隔符 （后面可选 + 小时数字 + 小时分隔符 + 分钟数字 + 分钟数字 + 秒数 ） 的日期字符串。例如：
    /// 2011/8/12, 2010年8月12日, 2010-6-12 3:12:56。
    /// 函数可以按照指定日期显示格式进行日期转换处理。
    /// 对于8位数字型日期（例如：20160812）,函数总是按照yyyyMMdd格式进行自动转换。
    /// </summary>
    /// <param name="strDateDisplayFormatString" optional="true">
    /// 日期显示格式字符串，例如：MM-DD-YYYY。缺省使用HXWebPageGlobalVariables.DateDisplayFormatString全局变量设置（通常为YYYY-MM-DD）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.FormatDateTime, function (dt, intFormatType, strDateDisplayFormatString)
{
    /// <summary>
    /// 将指定日期对象(dt)格式化为日期字符串。intFormatType参数指定格式化的样式。
    /// </summary>
    /// <param name="intFormatType" optional="true">
    /// 1:格式化为yyyyMMdd形式，例如：20110812
    /// 2:格式化为仅日期形式,例如：2011-08-12 (该样式为未指定intFormatType参数时的默认值)
    /// 3:格式化为完整日期时间形式，例如：2011-08-12 3:12:56
    /// 4:格式化为完整日期时间带毫秒形式，例如：2011-08-12 3:12:56.123
    /// 日期部分的显示格式由strDateDisplayFormatString参数决定。
    /// </param>
    /// <param name="strDateDisplayFormatString" optional="true">
    /// 日期显示格式字符串，例如：MM-DD-YYYY。缺省使用HXWebPageGlobalVariables.DateDisplayFormatString全局变量设置（通常为YYYY-MM-DD）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.IsPeriod, function (strValue)
{
    /// <summary>
    /// 判断指定输入字符串是否合法的年月字符串（六位形如yyyyMM的数字字符串）
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.IsDate, function (strDate, strDateDisplayFormatString)
{
    /// <summary>
    /// 判断输入日期字符串(strDate)是否合法日期
    /// </summary>
    /// <param name="strDateDisplayFormatString" optional="true">
    /// 日期显示格式字符串，例如：MM-DD-YYYY。缺省使用HXWebPageGlobalVariables.DateDisplayFormatString全局变量设置（通常为YYYY-MM-DD）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.IsTime, function (strTime)
{
    /// <summary>
    /// 判断输入时间字符串(strTime)是否合法时间。函数认可的输入时间字符串必须符合 hh:mm[:ss]格式。
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.IsDateTime, function (strDateTime, strDateDisplayFormatString)
{
    /// <summary>
    /// 判断输入字符串是否合法日期时间字符串。日期部分和时间部分以空格分开。
    /// </summary>
    /// <param name="strDateDisplayFormatString" optional="true">
    /// 日期显示格式字符串，例如：MM-DD-YYYY。缺省使用HXWebPageGlobalVariables.DateDisplayFormatString全局变量设置（通常为YYYY-MM-DD）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.IsIntegerDate, function (val)
{
    /// <summary>
    /// 判断输入字符串是否合法整数日期值(yyyyMMdd格式)。
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.DateAdd, function (dtBase, strIntervalType, number)
{
    /// <summary>
    /// 按照指定间隔类型(strIntervalType)，为指定日期(dt)添加（或者减少）指定的间隔量
    /// </summary>
    /// <param name="strIntervalType">
    /// strIntervalType参数的可选值如下：
    /// y:增加指定数量的年份
    /// m:增加指定数量的月份
    /// w:增加指定数量的星期
    /// d:增加指定数量的天数
    /// h:增加指定数量的小时
    /// n:增加指定数量的分钟
    /// s:增加指定数量的秒数
    /// l:增加指定数量的毫秒数
    /// 如果传入参数不是以上值，函数缺省视作d（以天为单位）
    /// </param>
    /// <param name="number">
    /// 要添加或者减少的具体间隔数量。负号表示减少。
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.DateDiff, function (dateA, dateB, strIntervalType)
{
    /// <summary>
    /// 比较两个日期(dateA和dateB)相差的间隔。函数返回指定间隔类型（strIntervalType）的间隔数量。
    /// 如果dateA > dateB，函数返回正数，dateA < dateB，函数返回负数。
    /// </summary>
    /// <param name="strIntervalType">
    /// strIntervalType参数的可选值如下：
    /// y:增加指定数量的年份
    /// m:增加指定数量的月份
    /// w:增加指定数量的星期
    /// d:增加指定数量的天数
    /// h:增加指定数量的小时
    /// n:增加指定数量的分钟
    /// s:增加指定数量的秒数
    /// l:增加指定数量的毫秒数
    /// 如果传入参数不是以上值，函数缺省视作d（以天为单位）
    /// </param>
});


intellisense.annotate(HXWebJS.Utility.HXXmlDataList_QuickSort, function (objHXXmlDoc, strFieldCode, blnAscOrDesc, begin, end)
{
    /// <summary>
    /// 使用快速排序算法对数据包根据指定字段的值进行排序
    /// </summary>
    /// <param name="objHXXmlDoc" type="HXWebJS.Xml.HXXmlDocument">要排序的数据Xml文档对象</param>
    /// <param name="strFieldCode">要排序的字段代码，不区分大小写（内部自动转换为大写），如customer_code。</param>
    /// <param name="blnAscOrDesc" optional="true" type="bool">指示排序方式是升序还是降序，缺省为true(升序)</param>
    /// <param name="begin" optional="true" type="integer">开始排序的记录序号，缺省表示从第一条记录开始</param>
    /// <param name="end" optional="true" type="integer">最后一个排序的记录序号，缺省表示到最后一条记录</param>
});

intellisense.annotate(HXWebJS.Utility.GetSumValueOfXmlDataIslandFieldValue, function (strXmlDataIslandCode, strFieldCode
                    , intDecimalScale, blnFormatWithGroupSeperator, blnReFillFieldValueWithFormat
                    , strSubListHXWebJSParentRowUUID)
{
    /// <summary>
    /// 计算并返回数据包中指定字段的汇总统计值
    /// </summary>
    /// <param name="intDecimalScale" optional="true">
    /// 显示小数位数，null表示不指定精度
    /// </param>
    /// <param name="blnFormatWithGroupSeperator" optional="true">
    /// 是否使用千分位分隔符格式化统计值, 缺省值为false
    /// </param>
    /// <param name="blnReFillFieldValueWithFormat" optional="true">
    /// 是否使用格式化后的值重新填充字段, 仅当blnFormatWithGroupSeperator=true有意义。缺省值为false
    /// </param>
    /// <param name="strSubListHXWebJSParentRowUUID">
    /// 附加二级绑定子列表上级记录uuid用于筛选记录子集
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.CheckInputValidation, function (objContainerElement, selector)
{
    /// <summary>
    /// 函数检查指定容器元素下的符合选择器条件的输入元素(input, select, and textarea)的输入合法性
    /// </summary>
    /// <param name="objContainerElement" optional="true">容器元素，null值表示检查整个页面</param>
    /// <param name="selector" optional="true">选择器条件，符合jQuery规范的选择语句。</param>
});

intellisense.annotate(HXWebJS.Utility.ShowWindowTopTipMessage, function (strMessage, options)
{
    /// <summary>
    /// 在页面顶部显示提示消息。同时可以设置自动隐藏
    /// </summary>
    /// <param name="options" optional="true">
    /// options选项:
    ///   message_type:{info|success|failure|warning}，对应背景颜色不同,缺省为info
    ///   auto_hide_seconds:指定秒数后自动隐藏, 小于或者等于0表示不隐藏, 缺省为0
    ///   opacity: 透明度 0-100，默认=100（不透明）
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.WeChatJSInterfaceInit, function (option)
{
    /// <summary>
    /// 微信JS接口初始化函数，由动态页面引擎自动调用，通常不需要开发人员手工调用。
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.WxJsApiPayRequest, function (strWxJsApiPayRequestJsonData, fnSuccessCallback, fnFailCallback)
{
    /// <summary>
    /// 微信支付JSAPI请求函数。
    /// </summary>
    /// <param name="strWxJsApiPayRequestJsonData">
    /// 微信内调起支付参数JSON对象字符串。形如：{appId:'',timeStamp:'',nonceStr:'',package;'prepay_id=xxxx',signType:'MD5',paySign:''}，详见微信支付开发文档。
    /// 该参数通常由服务器端的 HXWxPayUtility.UnifiedOrderCreate()生成，无需手工自行构造。
    /// </param>
    /// <param name="fnSuccessCallback">支付成功后返回。回调函数参数res为json对象。详见微信支付开发文档。</param>
    /// <param name="fnFailCallback">支付成功后返回。回调函数参数res为json对象。详见微信支付开发文档。</param>
});

intellisense.annotate(HXWebJS.Utility.GetUrlParameterValues, function ()
{
    /// <summary>
    /// 读取url参数值内容并以集合形式返回。如果url没有指定参数，函数返回null。否则函数返回数组对象。
    /// url参数中，缺少等号的参数被视作键为null的参数值；有等号但缺少参数名部分的被视作键为空字符串的参数值。
    //  调用例子：var params = HXWebJS.Utility.GetUrlParameterValues(); var v1 = params["paramname"]
    /// </summary>
});

intellisense.annotate(HXWebJS.Utility.UploadFileDirectly, function (str_web_control_id, options)
{
    /// <summary>
    /// 该函数被调用后，自动触发文件选择操作，然后在文件被选择后，自动提交到服务器并保存到临时文件存储目录。
    /// 然后函数通过隐藏的iframe窗口反馈上传处理结果给到页面，之后可以通过指定的扩展回调函数继续后续处理。
    /// </summary>

    /// <param name="options">
    /// 上传文件选项参数集合。具体选项以及含义如下：
    ///    allow_multi_files_upload:是否允许多个文件上传，{true|false}, 缺省值为true
    ///    input_file_accept_cnt:允许上传的文件MIME类型。形如： "images/*", "application/msexcel,application/msword"，缺省为*/*
    ///    filebox_setting_code: "tablename:fieldcode"
    ///    image_file_compress_max_kb: 图片文件浏览器端压缩最大尺寸(kb)，null或者0表示不作压缩
    ///    base64_image_file_cnt_in_db_mode: Base64格式图片文件内容模式（保存到数据库中）
    ///    callback_func_name:符合接口约定的扩展回调函数名。回调函数参数：
    ///       fn(strWebControlHtmlId, blnIsUploadOK, arrUploadedFileInfo, strWarningMessage, strBindingDataSrcId, strBindingHXWebJSRowUUID)
    /// </param>
});

intellisense.annotate(HXWebJS.Utility.DownloadAndShowFileDirectly
                       , function (strObjectViewCode, strFieldCodeForFileName, strRecordUUID, windowSetting)
                       {
                           /// <summary>
                           /// 下载指定对象视图指定文件字段指定记录下的文件，并在指定窗口设置中打开该文件
                           /// </summary>
                       });




intellisense.annotate(HXWebJS.AppUtility.Login, function (strUserCode, strPassword, strVerifyCode, blnKeepLoginState, options)
{
    /// <summary>
    /// 登录处理函数。如果函数操作成功，将会自动进入系统主页。
    /// 函数内部采用同步模式，所有如果登录操作失败后，开发人员可以在调用本函数之后执行其它语句（例如：自动刷新验证码）
    /// </summary>
    /// <param name="options" optional="true">
    /// 登录附加参数选项。可用的选项有：
    /// ignore_warning_error_msg: 登录失败时是否不显示提示对话框，可选值[true|false],缺省值为false。
    /// request_culture_name: 登录请求选择的界面语言，缺省值为空表示不指定界面语言（此时系统使用用户个人设置中指定的语言）
    /// request_extra_data:附加数据，如果有，系统登录该数据被保存在会话变量Session["HXSYS_LoginRequestCustomizedData"]中，可从该变量读取出这些内容
    /// use_ad_account_login:是否开启AD账号密码登录支持（将用户名和密码传递给域控制器进行身份验证），可选值[true|false]，缺省值为false.
    /// default_ad_domain_name:开启AD账号密码登录支持时，该参数可用于指定默认的AD域名。如果未指定，用户登录名中需要包含域名信息（形如：domain\username）
    /// 开启AD账号密码登录支持时，即使域控制器验证通过，还需要该域账号是系统中已定义的用户才允许登录。
    /// verify_code_area_container, verify_code_display_image: 验证码输入区域容器元素和验证码显示图像元素
    /// 当服务器发现超过3次登录尝试失败后，会自动触发验证码保护（防暴力破解）,此时需要在页面显示验证码区域，以及更新验证码显示图片 
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.ADAutoLoginCheckAndProcess, function ()
{
    /// <summary>
    /// 该函数用于Web站点需要同时支持部分用户使用密码登录，部分用户使用AD账号(ActiveDirectory账号，也称Windows账号)自动登录的场景。
    /// 实现上述场景的效果，Web站点需要作一些相关配置。具体为：
    /// 首先，web.config中的HXWPOV_APP_LOGIN_METHOD登录方式设置要同时允许密码登录和AD账号集成登录(12);
    /// 其次，Web站点根目录(通常对应www目录)的身份验证方式仅允许匿名登录，hxwinautologin_v6子目录必需设置为仅允许Windows集成验证
    /// 最后，在登录页面加载后（通常是在OnDocumentReady()事件函数中），调用该函数进行Windows账号集成验证自动登录处理。
    /// 函数工作原理：
    /// 函数被调用后，将会通过ajax异步请求尝试访问hxwinautologin_v6子目录，如果AD检查成功，函数转入AD登录处理页面进行处理后进入系统主页。
    /// 如果当前浏览器没有有效Windows账号，函数不作任何事。之后用户可以在当前登录页面使用密码进行登录。
    /// </summary>
});

intellisense.annotate(HXWebJS.AppUtility.Logout, function (blnDoNotShowHintMessage)
{
    /// <summary>
    /// 退出登录工具函数
    /// </summary>
    /// <param name="blnDoNotShowHintMessage" optional="true">
    /// 是否隐藏弹出提示框。缺省显示弹出框(true)。
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.OpenDynamicDataPage, function (strDynamicDataPageName, windowSetting, options)
{
    /// <summary>
    /// 打开指定动态数据页面。适用于V1.3+以上版本的动态页面。
    /// </summary>
    /// <param name="strDynamicDataPageName">目标数据页面名称。相对于Web站点根目录。形如：folder/somepage.hxpage.xhtml.</param>
    /// <param name="windowSetting" optional="true">
    /// 页面打开方式设置信息。JSON对象。可能的属性值如下：
    /// show_style: 显示方式，可选值[0|1|2]。分别表示:
    /// 0:在命名窗口中(包括_blank,_top,_self等特殊窗口名)中打开页面, 此时window_name选项值指示具体的窗口名。
    /// 1:在对话框中打开页面，此时dialog_width,dialog_height,dialog_scroll,dialog_callback_func,dialog_argument,dialog_show_close_btn,dialog_show_title_bar选项分别指定对话框的宽度，高度，回调函数，以及对话框传入参数信息。
    /// 2:在指定iframe子窗口中打开页面，此时window_name参数为iframe元素的Id值
    /// 缺省值情况下，函数在新窗口中打开指定页面。
    /// </param>
    /// <param name="options" optional="true">
    /// 根据被动态数据页面的不同类型，可能有不同的附加选项参数。具体如下：
    /// 对于动态数据编辑页面：record_uuid选项指定被编辑的记录uuid值，或者使用key_field_values选项指定被编辑记录的关键字段值。形如：{key1:value1,key2:value2}
    /// 对于动态数据列表页面，search_key_word选项指定默认搜索关键字，search_field_default_values选项指定搜索字段默认值，形如：{search_field1:value1}
    /// 对于动态数据列表页面，selected_record_uuid_list选项指定记忆选中的记录uuid清单(20170831后新增，需要平台组件更新相应支持)
    /// 对于所有类型的数据页面，is_print_preview选项指定页面显示于预览模式，形如：is_print_preview:true
    /// 对于所有类型的数据页面，可以通过extra_param_values选项传递额外的参数，例如：{extra_param1: value1, extra_param2: value2}
    /// 对于所有类型的数据页面，还可以通过extra_param_values_direct_in_url选项传递额外的参数，例如：{extra_param3: value3}。
    /// 该参数和extra_param_values不同之处在于该参数内容会直接作为url的一部分，以便支持如joywork移动端页面的一些特殊要求（joywork要求页面url带oriention参数决定页面显示方向）
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.OpenDynamicDataPageViaDb, function (strPageCode, windowSetting, options)
{
    /// <summary>
    /// 打开存储在数据库中的指定动态数据页面。适用于V2.0+以上版本的动态页面。
    /// </summary>
    /// <param name="strPageCode">数据库中的页面代码</param>
    /// <param name="windowSetting" optional="true">
    /// 页面打开方式设置信息。JSON对象。可能的属性值如下：
    /// show_style: 显示方式，可选值[0|1|2]。分别表示:
    /// 0:在命名窗口中(包括_blank,_top,_self等特殊窗口名)中打开页面, 此时window_name选项值指示具体的窗口名。
    /// 1:在对话框中打开页面，此时dialog_width,dialog_height,dialog_scroll,dialog_callback_func,dialog_argument,dialog_show_close_btn,dialog_show_title_bar选项分别指定对话框的宽度，高度，回调函数，以及对话框传入参数信息。
    /// 2:在指定iframe子窗口中打开页面，此时window_name参数为iframe元素的Id值
    /// 缺省值情况下，函数在新窗口中打开指定页面。
    /// </param>
    /// <param name="options" optional="true">
    /// 根据被动态数据页面的不同类型，可能有不同的附加选项参数。具体如下：
    /// 对于动态数据编辑页面：record_uuid选项指定被编辑的记录uuid值，或者使用key_field_values选项指定被编辑记录的关键字段值。形如：{key1:value1,key2:value2}
    /// 对于动态数据列表页面，search_key_word选项指定默认搜索关键字，search_field_default_values选项指定搜索字段默认值，形如：{search_field1:value1}
    /// 对于动态数据列表页面，selected_record_uuid_list选项指定记忆选中的记录uuid清单(20170831后新增，需要平台组件更新相应支持)
    /// 对于所有类型的数据页面，is_print_preview选项指定页面显示于预览模式，形如：is_print_preview:true
    /// 对于所有类型的数据页面，可以通过extra_param_values选项传递额外的参数，例如：{extra_param1: value1, extra_param2: value2}
    /// 对于所有类型的数据页面，还可以通过extra_param_values_direct_in_url选项传递额外的参数，例如：{extra_param3: value3}。
    /// 该参数和extra_param_values不同之处在于该参数内容会直接作为url的一部分，以便支持如joywork移动端页面的一些特殊要求（joywork要求页面url带oriention参数决定页面显示方向）
    /// </param>
});


intellisense.annotate(HXWebJS.AppUtility.RegisterReportParamValues, function (strParamValue1)
{
    /// <summary>
    /// 注册报表参数值（集合）。注册后函数返回报表参数记录UUID值用于调用OpenReportingSvcReport()函数时使用。
    /// 该函数只能注册长度在100以内的参数值（对于日期和数字，其转换为字符串后的长度不超过100）。
    /// 函数最多支持注册20个普通参数值。
    /// 如果需要注册超过长度100的参数值，请在调用该函数后再调用RegisterReportLongParamValues()进行注册。
    /// </summary>
});

intellisense.annotate(HXWebJS.AppUtility.RegisterReportLongParamValues, function (strRptParamUUID, strLongParamValue1)
{
    /// <summary>
    /// 注册报表长度超过100的长参数值（集合）到已有的报表参数值集合中。
    /// 函数最多支持注册5个长参数值。
    /// </summary>
});

intellisense.annotate(HXWebJS.AppUtility.OpenReportingSvcReport, function (strReportCode, strRptParamUUID, windowSetting
                                        , strExportFormat, blnGetConfigInfoFromDB, options)
{
    /// <summary>
    /// 函数打开指定代码的Reporting Service报表。
    /// </summary>
    /// <param name="strReportCode">报表代码，具体报表配置信息通过系统管理相应工具程序进行设置。</param>
    /// <param name="strRptParamUUID">报表参数集合记录UUID值。该值通常在注册报表参数集合时获取(RegisterReportParamValues()函数)。</param>
    /// <param name="windowSetting" optional="true">
    /// 指示报表的打开方式。参见HXWebNavigation.OpenWebPage()函数说明。
    /// </param>
    /// <param name="strExportFormat" optional="true">
    /// 报表导出格式，可选值：{PDF|EXCEL|EXCELOPENXML|IMAGE}。如果该参数有值，则会覆盖报表配置信息中的默认导出格式。
    /// 缺省表示使用配置信息中指定的默认导出格式。
    /// </param>
    /// <param name="blnGetConfigInfoFromDB" optional="true">
    /// 指示是否从数据库报表配置信息来源中获取配置信息。缺省=true。参数值=false指示从早期项目中从配置文件中读取报表配置信息。
    /// </param>
    /// <param name="options" optional="true">
    /// 附加属性选项集合JSON对象。当前支持两个属性：show_pdf_in_html:{true|false}表示直接在html中显示PDF文件(仅针对导出文件格式为PDF时有意义), show_pdf_page_number:{1-n}1表示第一页。
    /// 该特性选项于20190102新增,需要www/bin/hxeims6.www.dll文件的20190102更新支持。
    /// 此外，options支持其它自定义的附加属性，例如：jworien:0
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.ShowApprovalWorkflowEditor, function (strDocTypeCode, strDocUniqueCode, windowSetting, options)
{
    /// <summary>
    /// 该函数用于V6审批流程引擎的流程定义或者流程实例查看页面入口
    /// </summary>
    /// <param name="strDocTypeCode"> 审批流程单据类型代码（流程定义识别代码）</param>
    /// <param name="strDocUniqueCode" optional="true">
    /// 指定审批流程单据类型下的具体单据识别代码。如果该参数为空，函数显示流程定义；如果该参数有值，函数显示单据流程实例
    /// </param>
    /// <param name="windowSetting" optional="true">
    /// 指示流程编辑器的打开方式。参见HXWebNavigation.OpenWebPage()函数说明。
    /// </param>
    /// <param name="options" optional="true">
    /// 附加选项。属性和缺省值如下：{ edit_mode: true|false, show_xml_cnt_btn: false, show_edit_mode_btn: false, show_title_bar:true }
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.OpenReportCenter, function (strReportCenterCode, windowSetting)
{
    /// <summary>
    /// 报表中心访问入口函数。
    /// </summary>
    /// <param name="windowSetting" optional="true">
    /// 指示报表的打开方式。参见HXWebNavigation.OpenWebPage()函数说明。
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.RunInquiryReport, function (strInquiryReportCode
                    , strReportCenterItemCode, windowSetting, strPageEngineeVersion)
{
    /// <summary>
    /// 执行查询报表入口。开发者调用时通常通过指定查询报表代码打开报表。
    /// 对于报表中心处理程序通过指定报表中心报表条目代码打开报表
    /// </summary>
    /// <param name="strInquiryReportCode">查询报表代码</param>
    /// <param name="strReportCenterItemCode">报表中心条目代码</param>
    /// <param name="windowSetting" optional="true">
    /// 指示报表的打开方式。参见HXWebNavigation.OpenWebPage()函数说明。
    /// </param>
    /// <param name="strPageEngineeVersion" optional="true">
    /// 指示报表引擎的版本，{1.3|2.0}, 缺省=1.3
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.ImportData, function (strDataETLRuleCode, extraParamValues)
{
    /// <summary>
    /// ETL数据导入引擎数据导入入口函数。
    /// </summary>
    /// <param name="strDataETLRuleCode">ETL数据传输规则代码</param>
    /// <param name="extraParamValues" optional="true">
    /// JSON对象，可选属性：src_data_from_type:'via_db|via_file', 以及 misc_[amount|category|number|date|attr]_[1|2|3|4|5]。例如：{misc_amount_1: 123}
    /// src_data_from_type用于区分来源数据是数据库还是文件（调用不同的对话框页面），misc_*参数值将被写入ETL处理日志表并且可以在ETL公式中引用
    /// </param>
    /// <param name="extraParamValues" optional="fnCallback">
    /// 可能的ETL关闭后回调函数。函数签名：fnCallback(result); result参数是一个JSON数据结构，形如：{etl_log_code:'xxx', execution_result:true|false}, true表示成功，false表示失败
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.StaticUDCSetting, function (strSubSysCode, strUDCGroup, windowSetting)
{
    /// <summary>
    /// 指定UDC内容设置界面入口。
    /// </summary>
});

intellisense.annotate(HXWebJS.AppUtility.OpenCommonParameterGetDialog, function (dialogSetting, parameterSetting)
{
    /// <summary>
    /// 打开通用参数获取对话框页面，页面元素布局为单列模式。
    /// </summary>

    /// <param name="dialogSetting">
    /// 对话框参数集合，json对象。属性清单如下：{ dialog_title:'' dialog_width: 600, dialog_height: 350, dialog_scroll: false, dialog_callback_func: fnCallback }
    /// dialog_callback_func：fnCallback(objFieldValues)，接收和处理关闭通用参数对话框返回参数字段值集合（json对象）
    /// </param>

    /// <param name="parameterSetting">
    /// 需要收集的对象视图和字段清单集合，json对象。属性清单例子如下：
    /// { default_object_view_code: "", field_list: [{ field_code: "", object_view_code: "", hx_multiple_input_type: ""
    ///    , hx_field_code_to: "", hx_field_show_as_map_desc_fld: ""
    ///    , hx_field_value_option_columns:"", hx_field_value_option_criteria: ""
    ///    , hx_field_value_is_required:""， hx_placeholder_text_code:""
    ///    ，hx_field_default_value:""，hx_input_as_password:""
    ///    , hx_field_read_only:0, hx_field_value_align_style:''
    ///    , hx_text_is_wrap:'', textarea_height: 100, hx_field_has_caption:0
    ///    , hx_caption_ui_text_code:'', hx_caption_ui_text_cnt:'', hx_caption_ui_text_cnt_ot:'' }]
    ///    , extra_data: "", extra_css_style }
    /// default_object_view_code：默认对象视图
    /// field_list：字段定义（字段属性定义参考HtmlWebPart_Field）集合清单数组。
    /// object_view_code：对于多个对象视图，可通过field_list中object_view_code指定，如果不指定采用默认对象视图代码。
    /// extra_data：如果字段输入类型是下拉框或treeview下拉框，可通过extra_data添加附加的数据筛选xml字符串。
    /// extra_css_style: 附加css样式字符串，用于可能的图片字段等个性化样式设置场景
    /// 注：可以指定一个不存在的字段代码作为占位符字段，在参数对话框中占据空白的一行。
    /// assembly_class_name：下拉选择字段扩展筛选条件回调函数程序集类名，扩展目的。需要白名单设置才能生效（需要白名单允许）（跨页面程序集类用于菜单函数直接使用参数对话框场景）
    /// </param>
});

intellisense.annotate(HXWebJS.AppUtility.PDFContentShow, function(strPDFFileUrl, windowSetting, options)
{
    /// <summary>
    /// 显示指定PDF文件内容。
    /// </summary>

    /// <param name="options">
    /// 参数选项集合，json对象。page_number指示显示pdf文件的页码（1表示第一页）。
    /// 注：可以通过接收message事件获取用户当前查看的页码信息。例子代码：
    /// HXWebDynamicPage.OnMessageHandlerProcess = function(strMessageType, messageData)
    ///{ if (strMessageType == "hxsm_pdf_file_page_changed") console.log("page changed to:" + messageData);}
    /// </param>
});

intellisense.annotate(HXWebJS.Core.DummyFunction, function ()
{
    /// <summary>
    /// 占位符哑函数（不作任何事的函数）。该函数用于控件set_options()调用时设置对回调函数复位目的（由于set_option()传递null参数表示不覆盖现有设置，某些情况下可能出现未预期结果（例如多个popuptreeview使用一个treeview控件的场合））
    /// </summary>
});


intellisense.annotate(HXWebJS.Widget.TableColumnResizable.register, function (strTableElementId, options)
{
    /// <summary>登记要进行宽度调整的table元素</summary>
    /// <param name="options">
    /// 数据表格宽度调整工具选项属性集合，JSON对象。常用属性清单如下：
    /// { onresize_callback:fn(strTableId, tdElement, deltaX),
    ///   onresizestop_callback:fn(strTableId, tdElement, deltaX),
    ///   twins_table_id:'联动表格id，在2级绑定模式下多个同名id表格时取最近邻居表格'
    ///  }
    /// </param>
});