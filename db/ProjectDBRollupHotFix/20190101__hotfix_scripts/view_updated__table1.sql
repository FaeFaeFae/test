SET QUOTED_IDENTIFIER ON
SET NOCOUNT ON

-- ====================================================================================
-- 2018-01-01: vw1 视图增加 f1 字段
-- ====================================================================================
/*
if object_id('vw1', 'V') is not null 
    drop view vw1
go

create view vw1
as 
   select t.* from t1 t	
*/
go
