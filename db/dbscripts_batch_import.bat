echo off
set /p var=请输入系统代码：

HXEIMS6ShellCmd /cmdtype:hx_dbscripts_v13_import /system:%var% > dbscripts_batch_import.log


