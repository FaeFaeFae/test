/// <reference path="../hxpublic_v6/hxwww602core.min.js" />
/// <reference path="../hxpublic_v6/hxwww602control.min.js" />

HXExtendWebPart.hxsm_menu_bar_v20 = {};

/*约定大小写拼写的函数为外部约定接口函数，全部小写+下划线拼写的函数为内部函数 */
HXExtendWebPart.hxsm_menu_bar_v20._OnClickHandlerProcess = function (strClickHandlerCode, evt)
{
    if (strClickHandlerCode == "menu_fold_unfold")
    {
        HXExtendWebPart.hxsm_menu_bar_v20._fold_unfold_menu(evt);
        return;
    }
    else if (strClickHandlerCode == "master_menu_item_clicked")
    {
        HXExtendWebPart.hxsm_menu_bar_v20._menu_item_clicked_process(evt.currentTarget.parentNode, evt.currentTarget);
        return;
    }
}

HXExtendWebPart.hxsm_menu_bar_v20._OnMouseOverHandlerProcess = function (strHandlerCode, evt)
{
    if (strHandlerCode == "master_menu_item_hover")
    {
        HXExtendWebPart.hxsm_menu_bar_v20._menu_item_mouseover_process(strHandlerCode, evt);
        return;
    }
}


HXExtendWebPart.hxsm_menu_bar_v20._fold_unfold_menu = function (evt)
{
    var blnIsMenuCurrentFolded = $(".hxpg_left_area").hasClass("left_fold");

    $(".hxpg_left_area").toggleClass("left_fold", !blnIsMenuCurrentFolded);

    // 切换图标显示效果
    $(".hxpg_left_area #divMenuBarFoldUnFold span").toggleClass("fa-rotate-90", blnIsMenuCurrentFolded);

    // 切换菜单项文本显示效果
    $(".hxpg_left_area #hxmastermenuitem_container #hxmastermenuitem_text").css("display", blnIsMenuCurrentFolded ? "inline-block" : "none");
}

HXExtendWebPart.hxsm_menu_bar_v20._menu_item_clicked_process = function (menubarWebPartContainer, menuitemContainer)
{
    var tempValue = $(menubarWebPartContainer).attr("hx_use_level2_menu_item");
    var blnHasLevel2MasterMenuItem = (!HXWebJS.Core.IsStringNullOrEmpty(tempValue) && tempValue != "0");

    // 对于显示2级菜单的场景且当前被点击的是1级容器菜单项时，展开或折叠其下的2级菜单项
    var menuitemContainer$ = $(menuitemContainer);
    var strMenuItemCode = menuitemContainer$.attr("hx_menu_item_code");
    var strMenuItemLevel = menuitemContainer$.attr("hx_menu_item_level");
    if (blnHasLevel2MasterMenuItem && strMenuItemLevel == "1")
    {
        var foldedIcon$ = menuitemContainer$.find("#hxmastermenuitem_toplevel_fold_icon");
        if (foldedIcon$.css("visibility") == "visible")
        {
            var blnIsOrgFolded = foldedIcon$.hasClass("fa-caret-right");
            $("[hx_parent_menu_item_code='" + strMenuItemCode + "']", menubarWebPartContainer).css("display", blnIsOrgFolded ? "inline-block" : "none");
            foldedIcon$.toggleClass("fa-caret-right", !blnIsOrgFolded);
            foldedIcon$.toggleClass("fa-caret-down", blnIsOrgFolded);
        }
    }
    
    // 其它情况下，如果被点击的菜单项时非容器菜单项，则执行对应菜单命令
    HXExtendWebPart.hxsm_menu_bar_v20._execute_menu_item(strMenuItemCode);
}

HXExtendWebPart.hxsm_menu_bar_v20._menu_item_mouseover_process = function (strHandlerCode, evt)
{
    var menuItemDiv = evt.currentTarget;
    var menubarWebPartContainer = menuItemDiv.parentNode;

    if (HXWebJS.DOM.IsElementInContainer(menuItemDiv, evt.relatedTarget, true))
        return; // 忽略在菜单项内部的鼠标移动事件

    // 标记当前菜单项为活动样式以便显示联通效果
    // 在此之前总是先移除所有菜单项的活动样式，避免如下场景：
    // 鼠标从A菜单项移到一级弹出菜单区域，此时A菜单项保持活动，然后鼠标从一级弹出菜单区域移到B菜单项，此时需要首先清除A菜单项的活动样式
    $("[id='hxmastermenuitem_container']", menubarWebPartContainer).removeClass("actived");
    $(menuItemDiv).addClass("actived");

    var strMenuSetCode = menubarWebPartContainer.attributes["hx_menu_set_code"].value.toLowerCase();
    var tempValue = $(menubarWebPartContainer).attr("hx_use_level2_menu_item");
    var blnHasLevel2MasterMenuItem = (!HXWebJS.Core.IsStringNullOrEmpty(tempValue) && tempValue != "0");
    var strMenuItemCode = $(menuItemDiv).attr("hx_menu_item_code");

    var strPopupMenuControlId = "hxmastermenu_popupchildmenu_level_1";
    if (HXWebPopupMenuControl.is_element_in_control(strPopupMenuControlId, evt.relatedTarget))
    {
        // 鼠标从一级弹出菜单区域移动过来，如果此时一级弹出菜单区域对应的上级菜单项代码和当前菜单项一致，则不需要隐藏弹出菜单，直接退出
        var triggerInfo = HXWebPopupMenuControl.get_show_trigger_src_info(strPopupMenuControlId);
        if (triggerInfo.trigger_src_ref_code == strMenuItemCode) return;
    }

    // 显示新的弹出子菜单之前，隐藏所有已显示弹出子菜单
    HXExtendWebPart.hxsm_menu_bar_v20._hide_child_popupmenus();

    var objHXXmlDoc_Menu = HXExtendWebPart.hxsm_menu_bar_v20._hxxmldoc_of_menubar_menuitems_data;
    if (objHXXmlDoc_Menu == null) return;

    var objXmlNode = objHXXmlDoc_Menu.SelectSingleNode("//RS_ROW[@MENU_ITEM_CODE='" + strMenuItemCode + "']");
    var strMenuItemLevel = objXmlNode.SelectSingleNode("@MENU_ITEM_LEVEL").GetText();
    var strHasSubMenu = objXmlNode.SelectSingleNode("@HAS_CHILD_MENU").GetText();

    // 主菜单显示2级内容的情况下，如果当前菜单项为1级菜单无需显示弹出子菜单（因为其子菜单内容已经在主菜单中显示了）
    if (blnHasLevel2MasterMenuItem && strMenuItemLevel == "1") return;

    // 没有子菜单的情况下，鼠标移到主菜单项时不作任何处理
    if (strHasSubMenu == "0") return;

    var intWidth = parseInt(objXmlNode.SelectSingleNode("@MAX_CHILD_MENU_TEXT_WIDTH").GetText());

    // 第一个菜单项（折叠图标区域下方）顶部有分隔线
    var blnIsFirstMenuItem = (menubarWebPartContainer.firstChild.nextSibling === menuItemDiv);

    HXExtendWebPart.hxsm_menu_bar_v20._init_and_show_child_menu(objHXXmlDoc_Menu
                                    , 1, (blnHasLevel2MasterMenuItem && strMenuItemLevel == "2" ? 3 : 2)
                                    , menuItemDiv, strMenuItemCode, intWidth
                                    , (blnIsFirstMenuItem ? -1 : 0));
}



HXExtendWebPart.hxsm_menu_bar_v20._init_and_show_child_menu = function (objHXXmlDocForMenuItemData
                        , intPopupMenuControlLevel, intChildMenuItemLevel
                        , objParentMenuItemContainer, strParentMenuItemCode
                        , intChildPopupMenuAreaWidth, intTopOffset)
{
    if (intTopOffset == null) intTopOffset = 0;
    var strWebPopupMenuControlCode = "hxmastermenu_popupchildmenu_level_" + intPopupMenuControlLevel;

    if (!HXWebPopupMenuControl.is_registered(strWebPopupMenuControlCode))
    {
        var options = {
            width: 100, show_icon_area: false, zIndex_offset: intPopupMenuControlLevel
              , onmenuitemclick_callback: HXExtendWebPart.hxsm_menu_bar_v20._fnhxchildmenuitem_onclicked
              , onmenuitemmouseover_callback: HXExtendWebPart.hxsm_menu_bar_v20._fnhxchildmenuitem_mouseover
        }
        HXWebPopupMenuControl.register(strWebPopupMenuControlCode, options);
    }

    var arrMenuItemData = []
    var menuItemData;
    var objXmlNode;
    var strHasSeperator, strHasChildren;

    var objHXXmlNodeList = objHXXmlDocForMenuItemData.SelectNodes("//RS_ROW[@MENU_ITEM_LEVEL=" + intChildMenuItemLevel.toString() + " and @PARENT_MENU_ITEM_CODE='" + strParentMenuItemCode + "']");
    for (var i = 0; i < objHXXmlNodeList.length; i++)
    {
        objXmlNode = objHXXmlNodeList[i];
        strHasSeperator = objXmlNode.GetAttributeValue("HAS_SEPERATOR");
        strHasChildren = objXmlNode.GetAttributeValue("HAS_CHILD_MENU");
        menuItemData = {
            key: objXmlNode.GetAttributeValue("MENU_ITEM_CODE")
                        , label: objXmlNode.GetAttributeValue("MENU_ITEM_NAME")
                        , has_seperator: (!HXWebJS.Core.IsStringNullOrEmpty(strHasSeperator) && strHasSeperator != "0")
                        , has_children: (!HXWebJS.Core.IsStringNullOrEmpty(strHasChildren) && strHasChildren != "0")
                        , icon_class: objXmlNode.GetAttributeValue("IMG_CLASS_NAME")
        };
        arrMenuItemData.push(menuItemData);
    }

    HXWebPopupMenuControl.clear_items(strWebPopupMenuControlCode);
    HXWebPopupMenuControl.fill_items(strWebPopupMenuControlCode, arrMenuItemData);

    var intLeft = HXWebJS.DOM.GetElementLeftPosition(objParentMenuItemContainer) + objParentMenuItemContainer.offsetWidth - 1;
    var intTop = HXWebJS.DOM.GetElementTopPosition(objParentMenuItemContainer) + intTopOffset;

    // 显示子菜单
    HXWebPopupMenuControl.show(strWebPopupMenuControlCode, intLeft, intTop
                            , intChildPopupMenuAreaWidth, objParentMenuItemContainer);
}

HXExtendWebPart.hxsm_menu_bar_v20._fnhxchildmenuitem_mouseover = function (strPopupMenuControlHtmlId
                                    , strMenuItemCode, strMenuItemLabel, objMenuItemDiv, evt)
{
    var strMenuSetCode = $("#HXPageLeftSideMenuBarArea").attr("hx_menu_set_code");
    var objHXXmlDoc_Menu = HXExtendWebPart.hxsm_menu_bar_v20._hxxmldoc_of_menubar_menuitems_data;
    if (objHXXmlDoc_Menu == null) return;
    var objXmlNode = objHXXmlDoc_Menu.SelectSingleNode("//RS_ROW[@MENU_ITEM_CODE='" + strMenuItemCode + "']");
    var strMenuItemLevel = objXmlNode.SelectSingleNode("@MENU_ITEM_LEVEL").GetText();
    var strHasChildMenu = objXmlNode.SelectSingleNode("@HAS_CHILD_MENU").GetText();

    var intCurrentMenuItemLevel = parseInt(strPopupMenuControlHtmlId.substr(34));

    var strChildPopupMenuControlId = "hxmastermenu_popupchildmenu_level_" + (intCurrentMenuItemLevel + 1);
    if (HXWebPopupMenuControl.is_element_in_control(strChildPopupMenuControlId, evt.relatedTarget))
    {
        // 鼠标从下级弹出菜单区域移动过来，如果此时下级弹出菜单区域对应的上级菜单项代码和当前菜单项一致
        // 则表示当前菜单项对应的下级菜单已经显示，此时不需要隐藏弹出菜单和创建新子菜单，直接退出
        var triggerInfo = HXWebPopupMenuControl.get_show_trigger_src_info(strChildPopupMenuControlId);
        if (triggerInfo.trigger_src_ref_code == strMenuItemCode) return;
    }

    // 显示新的弹出子菜单之前，隐藏所有已显示的下级弹出子菜单
    HXExtendWebPart.hxsm_menu_bar_v20._hide_child_popupmenus(intCurrentMenuItemLevel + 1);

    if (strHasChildMenu == "" || strHasChildMenu == "0") return;

    var intWidth = parseInt(objXmlNode.SelectSingleNode("@MAX_CHILD_MENU_TEXT_WIDTH").GetText());
    var strHasSperator = objXmlNode.SelectSingleNode("@HAS_SEPERATOR").GetText();
    var blnHasSeperator = (strHasSperator != "" && strHasSperator != "0");

    HXExtendWebPart.hxsm_menu_bar_v20._init_and_show_child_menu(objHXXmlDoc_Menu
                                    , intCurrentMenuItemLevel + 1, parseInt(strMenuItemLevel) + 1
                                    , objMenuItemDiv, strMenuItemCode, intWidth
                                    , (blnHasSeperator ? 1 : 0));
}

HXExtendWebPart.hxsm_menu_bar_v20._fnhxchildmenuitem_onclicked = function (strControlHtmlId
                                    , strMenuItemKey, strMenuItemLabel, objMenuItemDiv)
{
    HXExtendWebPart.hxsm_menu_bar_v20._hide_child_popupmenus();
    HXExtendWebPart.hxsm_menu_bar_v20._execute_menu_item(strMenuItemKey);
}


HXExtendWebPart.hxsm_menu_bar_v20._execute_menu_item = function (strMenuItemCode)
{
    var objHXXmlDoc_MenuData = HXExtendWebPart.hxsm_menu_bar_v20._hxxmldoc_of_menubar_menuitems_data;
    if (objHXXmlDoc_MenuData == null) return; // 无数据时不做任何事情
    var objXmlNode = objHXXmlDoc_MenuData.SelectSingleNode("//RS_ROW[@MENU_ITEM_CODE='" + strMenuItemCode + "']");
    if (objXmlNode == null) return;

    // 鼠标点击主菜单项情形，如果有菜单命令，进行处理并退出
    var strMenuItemHref = objXmlNode.SelectSingleNode("@MENU_COMMAND_HREF").GetText();
    if (HXWebJS.Core.IsStringNullOrEmpty(strMenuItemHref)) return;

    var strShowIn = objXmlNode.SelectSingleNode("@SHOW_IN_STYLE").GetText();
    var strWindowName = (strShowIn == "self" ? "_top" : "_blank");
    HXWebJS.Navigation.ExecuteMenuCommand(strMenuItemHref, strWindowName);
}

HXExtendWebPart.hxsm_menu_bar_v20._load_menubar_data = function (str_webpart_html_id, str_menu_set_code)
{
    var fnAfterMenuDataGet = function (strXmlResult)
    {
        if (strXmlResult == null || strXmlResult == "") return;
        
        var objHXXmlDoc = HXWebJS.Xml.GetHXXmlDocumentViaXmlString(strXmlResult);
        HXExtendWebPart.hxsm_menu_bar_v20._hxxmldoc_of_menubar_menuitems_data = objHXXmlDoc;
    }
    
    var strPageXmlSvcContent = "<RS_DATA><RS_ROW MENU_SET_CODE=\"" + str_menu_set_code + "\" /></RS_DATA>";

    HXWebJS.Xml.XmlService.CallPageXmlServiceAsync("MENU_BAR__MENU_ITEMS_DATA_GET"
                                , strPageXmlSvcContent, fnAfterMenuDataGet
                                , { extend_web_part_html_id: str_webpart_html_id });
}

HXExtendWebPart.hxsm_menu_bar_v20._hide_child_popupmenus = function (intChildMenuLevel)
{
    if (intChildMenuLevel == null) intChildMenuLevel = 0;
    if (intChildMenuLevel <= 1) HXWebPopupMenuControl.hide("hxmastermenu_popupchildmenu_level_1");
    if (intChildMenuLevel <= 2) HXWebPopupMenuControl.hide("hxmastermenu_popupchildmenu_level_2");
    if (intChildMenuLevel <= 3) HXWebPopupMenuControl.hide("hxmastermenu_popupchildmenu_level_3");
}