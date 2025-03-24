<?php
$re = '/\?.+$/';
$str = $_SERVER['REQUEST_URI'];
$subst = "";
$result = preg_replace($re, $subst, $str, 1);
echo $result;
?>