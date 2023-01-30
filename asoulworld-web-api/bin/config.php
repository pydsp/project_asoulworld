<?php
header("Content-Type: application/json; charset=utf-8");

global $SQL_USER;
global $SQL_PASS;
global $SQL_HOST;
//test env

header("Access-Control-Allow-Origin:*");
$SQL_USER='root';
$SQL_PASS='';
$SQL_HOST='localhost';

//product env

//header("Access-Control-Allow-Origin:*");
//$SQL_USER='xxxxxxxxxxxxxx';
//$SQL_PASS='xxxxxxxxxxxxxxx';
//$SQL_HOST='xxxxxxxxxxxxx';