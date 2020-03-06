KindEditor.plugin('hxplaceholdermapedit', function (K)
{
    var editor = this, name = 'hxplaceholdermapedit';
    // 点击图标时执行
    editor.clickToolbar(name, function ()
    {
        if (HXWebHtmlEditorControl && HXWebHtmlEditorControl._Internal
             && HXWebHtmlEditorControl._Internal._show_placeholder_map_list)
        {
            HXWebHtmlEditorControl._Internal._show_placeholder_map_list(editor);
        }
    });
});
