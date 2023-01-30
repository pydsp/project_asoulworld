<?php
require_once "../bin/config.php";
require_once "../bin/tools.php";
require_once "../bin/MySQLKitCore.php";
require_once "../bin/MySQLKit.php";

use pydsp\MySQLKit\MySQLKit;
global $SQL_USER, $SQL_PASS,$SQL_HOST;
$sql = MySQLKit::getInstance();
$sql->setHUP($SQL_HOST, $SQL_USER, $SQL_PASS)->connect();
$sql->setDB("asoulworld_db");

$SQL_GET_RECENT_LIVE="SELECT
	a.*,
	b.name,
	b.live_uid 
FROM
	(
	SELECT
		DATE_FORMAT( str_to_date( live_time, '%Y-%m-%d %H:%i' ), '%c月%e日%H:%i' ) AS time,
		type,
		live_member_id,
		episode 
	FROM
		live_calendar 
	WHERE
		str_to_date( live_time, '%Y-%m-%d %H:%i' )> NOW() 
	    AND is_cancel=0
	ORDER BY
		live_time 
		LIMIT 5 
	) AS a
	LEFT JOIN member_table AS b ON a.live_member_id = b.member_id";

$queryResult=$sql->query($SQL_GET_RECENT_LIVE);
echo json_encode($queryResult);