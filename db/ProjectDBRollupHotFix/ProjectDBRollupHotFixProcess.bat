echo off

set /p system_code=������ϵͳ���룺

hxeims6shellcmd64 /cmdtype:hx_db_rollup_hotfix_process_v2 /system:%system_code% /db_hotfix_type:prj_db_hotfix > hxmis6_db_rollup_hotfix_process.log

pause
