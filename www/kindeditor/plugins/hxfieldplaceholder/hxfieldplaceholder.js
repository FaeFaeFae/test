KindEditor.plugin('hxfieldplaceholder', function (K)
{
    var editor = this, name = 'hxfieldplaceholder';
    // 点击图标时执行
    editor.clickToolbar(name, function ()
    {
        if (HXWebHtmlEditorControl && HXWebHtmlEditorControl._Internal
             && HXWebHtmlEditorControl._Internal._show_fieldplaceholder_list)
        {
            HXWebHtmlEditorControl._Internal._show_fieldplaceholder_list(editor);
        }
    });
});
