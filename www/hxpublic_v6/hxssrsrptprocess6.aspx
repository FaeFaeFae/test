<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="hxssrsrptprocess6.aspx.cs" Inherits="HXEIMS6.WWW.hxpublic_v6.hxssrsrptprocess6" %>

<%@ Register assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" namespace="Microsoft.Reporting.WebForms" tagprefix="rsweb" %>

<%@ OutputCache Duration="1" Location="none" VaryByParam="None" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" style="overflow:visible;">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Width="100%" Height="95%"
            Style="z-index: 100;left: 0px; position: absolute; top: 0px" ShowParameterPrompts="False" ShowPromptAreaButton="False" ShowDocumentMapButton="False">
        </rsweb:ReportViewer>
    </div>
    </form>
</body>
</html>
