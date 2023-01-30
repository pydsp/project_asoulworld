<?php
require_once "../bin/config.php";
require_once "../bin/tools.php";
require_once "../bin/MySQLKitCore.php";
require_once "../bin/MySQLKit.php";
$json= file_get_contents('php://input');
if(empty($json))
{
    echo "{\"error\":1}";
    exit(0);
}

use pydsp\MySQLKit\MySQLKit;
$result=json_decode($json,true);

global $SQL_USER, $SQL_PASS,$SQL_HOST;
$sql = MySQLKit::getInstance();
$sql->setHUP($SQL_HOST, $SQL_USER, $SQL_PASS)->connect();
$sql->setDB("asoulworld_db");
$notice_type=$result['notice_type'];
$SQL_GET_NOTICE="select * from notice_table where notice_type=$notice_type and visible=1";
$queryResult = $sql->query($SQL_GET_NOTICE);
echo json_encode($queryResult);