<?php
/**
 * Created by PhpStorm.
 * User: cycycd
 * Date: 2018/9/10
 * Time: 12:21
 */
//cancel the error reporting
//error_reporting(E_ALL^E_NOTICE^E_WARNING);
namespace pydsp\MySQLKit;
require_once "MySQLKitCore.php";
class MySQLKit extends MySQLKitCore
{
    private $HOST, $USER, $PASS;
    private static $instance;

    /**
     * MySQLHandler constructor.
     */
    private function __construct()
    {
        //cancel construct
    }

    private function __clone()
    {
        //cancel clone method
    }

    /**
     * get area
     */
    public static function getInstance(): self
    {
        if (!(self::$instance instanceof self)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    public function getConnectStatus(): bool
    {
        if ($this->SQL_LINK != null && mysqli_get_connection_stats($this->SQL_LINK)) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * set area
     */
    public function setDB($db_name): bool
    {
        if ($this->SQL_LINK == null || !$this->getConnectStatus()) {
            return false;
        }
        $result = mysqli_select_db($this->SQL_LINK, $db_name);
        if(!$result)
        {
            return false;
        }
        return true;
    }
    public function setHost($HOST): MySQLKit
    {
        $this->HOST = $HOST;
        return $this;
    }
    public function setUser($USER): MySQLKit
    {
        $this->USER = $USER;
        return $this;
    }
    public function setPass($PASS): MySQLKit
    {
        $this->PASS = $PASS;
        return $this;
    }
    public function setHUP($host, $user, $pass): MySQLKit
    {
        $this->setHost($host)->setUser($user)->setPass($pass);
        return $this;
    }

    //close old connect start new connect
    public function connect(): MySQLKit
    {
        if ($this->SQL_LINK != null) {
            mysqli_close($this->SQL_LINK);
        }
        $this->SQL_LINK = mysqli_connect($this->HOST, $this->USER, $this->PASS);
        if ($this->SQL_LINK) {
            //default utf-8
            mysqli_query($this->SQL_LINK, "set names utf8");
        }
        return $this;
    }

    /**
     * @param $DBName
     * @param bool $setThis
     * @return bool
     */
    function createDB($DBName, bool $setThis = true): bool
    {
        $SQL_CODE = "CREATE DATABASE if not exists " . $DBName." character set utf8mb4";
        $res = mysqli_query($this->SQL_LINK, $SQL_CODE);
        if ($setThis) {
            $this->setDB($DBName);
        }
        return $res;
    }


    /**
     * warning: use this function carefully
     * @param $tableName
     * @return bool
     */
    function deleteTable($tableName):bool
    {
        return $this->execute("drop table if exists ".$tableName);
    }

    /**
     * @deprecated deprecated function & replace with connect()
     * */
    public function update()
    {
        $this->connect();
    }

    /**
     * to be deprecated
     */
    public function checkDBExist(): bool
    {
        $res = $this->querySingle("select database()");
        return !empty($res[0]);
    }
}
