<?php
require_once "../bin/config.php";
require_once "../bin/tools.php";
//if(!(checkPost("is_web")&&$_POST['is_web']==1))
//{
//    error_json();
//}

require_once "../bin/MySQLKitCore.php";
require_once "../bin/MySQLKit.php";


use pydsp\MySQLKit\MySQLKit;

$result["code"] = 0;
global $SQL_USER, $SQL_PASS,$SQL_HOST;
$sql = MySQLKit::getInstance();
$sql->setHUP($SQL_HOST, $SQL_USER, $SQL_PASS)->connect();
$sql->setDB("asoulworld_db");

//查询当日成员的直播情况，0为无直播，2为有直播

$SQL_CHECK_IS_LIVING="SELECT
	member_id,
    IF( a.is_living = 1, 1, IF (ISNULL(b.type), 0, 2 ) ) AS status,
	b.type AS type 
FROM
	member_table AS a
	LEFT JOIN (
	SELECT live_member_id,type
	FROM live_calendar 
    WHERE
	    DATE_FORMAT(live_time,'%Y-%m-%d') = DATE_FORMAT( NOW(), '%Y-%m-%d' ) AND is_cancel=0) AS b ON a.member_id = b.live_member_id ORDER BY a.member_id asc";
$queryResult = $sql->query($SQL_CHECK_IS_LIVING);

echo json_encode($queryResult);
