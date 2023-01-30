<?php
function checkGet(...$param): bool
{
    foreach ($param as $i)
    {
        if(!isset($_GET["$i"]))
        {
            return false;
        }
    }
    return true;
}
function checkPost(...$param): bool
{
    foreach ($param as $i)
    {
        if(!isset($_POST["$i"]))
        {
            return false;
        }
    }
    return true;
}
function error_json()
{
    $result["code"]=1;
    echo json_encode($result);
    exit();
}