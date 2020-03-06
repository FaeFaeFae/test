KindEditor.plugin('hxplaceholder', function (K)
{
    var editor = this, name = 'hxplaceholder';
    // 点击图标时执行
    editor.clickToolbar(name, function ()
    {
        if (HXWebHtmlEditorControl && HXWebHtmlEditorControl._Internal
             && HXWebHtmlEditorControl._Internal._show_placeholder_list)
        {
            HXWebHtmlEditorControl._Internal._show_placeholder_list(editor);
        }
    });
});
