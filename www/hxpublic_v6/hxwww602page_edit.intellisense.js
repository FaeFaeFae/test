intellisense.annotate(HXWebDynamicPage.EditPage,
{
    // 编辑页面数据保存操作之前的回调函数。该回调函数返回false可以撤消本次保存操作，还可以通过该回调函数返回包含extra_data属性的json对象传递附加数据到服务器端以进行附加处理。
    // 回调函数参数：fn (strSaveOperationType, strWorkflowApprovalXmlData)
    OnBeforeDataSaved: undefined,
    // 编辑页面数据保存操作之后的回调函数。可以通过该回调函数执行附加处理。
    // 回调函数参数：fn (strXmlResult, strSaveOperationType, strWorkflowApprovalXmlData)
    OnAfterDataSaved: undefined,

    // 编辑页面数据删除操作之前的回调函数。该回调函数返回false可以撤消本次删除操作。该回调函数无参数
    OnBeforeDataDeleted: undefined,
    // 编辑页面数据删除操作之后的回调函数。可以通过该回调函数执行附加处理。
    // 回调函数参数：fn(strXmlResult)
    OnAfterDataDeleted: undefined,

    // 编辑页面审批单据提交操作之前的回调函数。该回调函数返回false可以撤消本次提交操作。该回调函数无参数
    OnBeforeWorkflowSubmitted: undefined,
    // 编辑页面审批单据提交操作之后的回调函数。
    // 回调函数参数：fn(strXmlResult)
    OnAfterWorkflowSubmitted: undefined,

    // 编辑页面审批单据撤销操作之前的回调函数。该回调函数返回false可以撤消本次操作。该回调函数无参数
    OnBeforeWorkflowCancelled: undefined,
    // 编辑页面审批单据撤销操作之后的回调函数。
    // 回调函数参数：fn(strXmlResult)
    OnAfterWorkflowCancelled: undefined,

    // 编辑页面审批单据批复操作之前（显示批复对话框之前触发）的回调函数。该回调函数返回false可以撤消本次操作。
    // 回调函数参数：fn()
    OnBeforeWorkflowApproved: undefined,

    // 编辑页面审批单据批复操作期间（显示批复对话框之后发送数据到服务器端之前触发）的回调函数。该回调函数返回false可以撤消本次操作。
    // 回调函数参数：fn(strApprovalReplyType)
    OnDuringWorkflowApprovedBeforeSend: undefined,

    // 编辑页面审批单据批复操作之后的回调函数。
    // 回调函数参数：fn(strWorkflowDocType, approvalReplyData, blnWithSaveOrNot,strXmlResult)
    OnAfterWorkflowApproved: undefined
});

intellisense.annotate(HXWebDynamicPage.EditPage.DeleteDataProcess, function ()
{
    /// <summary>
    /// 删除当前编辑页面显示的当前记录。
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.EditPage.SaveDataProcess, function (strSaveOperationType, blnIgnoreInputCheck, fnAfterDataSavedCustomizedCallback)
{
    /// <summary>
    /// 保存当前编辑页面显示的记录
    /// </summary>
    /// <param name="strSaveOperationType">保存操作类型，服务器端回调函数可以根据不同的保存操作类型进行不同的附加处理。</param>
    /// <param name="blnIgnoreInputCheck" type="Boolean" optional="true">
    /// 是否忽略输入检查，缺省为false
    /// </param>
    /// <param name="fnAfterDataSavedCustomizedCallback" type="Function" optional="true">
    /// 自定义保存操作后的回调函数，如果该参数非空，则函数会在操作完成后调用该自定义回调函数，否则函数执行默认的行为。
    /// 该自定义回调函数的参数为：fn(strXmlResult, strSaveOperationType)
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.EditPage.DefaultProcessAfterSaveData, function (strXmlResult
                                        , blnHintForDataSaved, strSaveOperationType)
{
    /// <summary>
    /// 编辑页面数据保存后的默认处理行为调用(在对话框模式下自动关闭当前窗口,页面模式下重新刷新页面,可选页面模式下默认提示消息提醒等)
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.EditPage.WorkflowDocumentSubmit, function ()
{
    /// <summary>
    /// 提交审批单据
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.EditPage.WorkflowDocumentCancel, function ()
{
    /// <summary>
    /// 撤消正在审批的单据。
    /// </summary>
});

intellisense.annotate(HXWebDynamicPage.EditPage.WorkflowDocumentSaveAndApprove, function (strWorkflowDocType, strDocUniqueCode
                                                    , strApprovalReplyType, approvalReplyData)
{
    /// <summary>
    /// 保存并批复当前审批单据
    /// </summary>
    /// <param name="strApprovalReplyType">
    /// hx_approval_workflow_agree | hx_approval_workflow_return_to_modify | hx_approval_workflow_deny | hx_approval_workflow_question | hx_approval_workflow_to_additional_approver之一
    /// </param>
    /// <param name="approvalReplyData">
    /// JSON对象，可能的属性有：{approval_comment:'',notification_user_code_list:'',additional_approver_user_code:''}
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.EditPage.WorkflowDocumentApprove, function(strWorkflowDocType, strDocUniqueCode
                                                , strApprovalReplyType, approvalReplyData)
{
    /// <summary>
    /// 批复当前审批单据
    /// </summary>
    /// <param name="strApprovalReplyType">
    /// hx_approval_workflow_agree | hx_approval_workflow_return_to_modify | hx_approval_workflow_deny | hx_approval_workflow_question | hx_approval_workflow_to_additional_approver之一
    /// </param>
    /// <param name="approvalReplyData">
    /// JSON对象，可能的属性有：{approval_comment:'',notification_user_code_list:'',additional_approver_user_code:''}
    /// </param>
});

intellisense.annotate(HXWebDynamicPage.EditPage.WorkflowChartShow, function (objWindowSetting, options)
{
    /// <summary>
    /// 显示当前审批单据流程图。如果当前审批单据尚未提交，函数显示流程定义图；如果审批单据已提交，函数显示流程审批实例图。
    /// </summary>
});

