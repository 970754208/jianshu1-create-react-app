<?php
    header('Content-Type: application/json;');
    header('Access-Control-Allow-Origin: *');
    $account = $_GET['account'];
    $password = $_GET['password'];
    if($account == 1 && $password == 1) {
        echo '
            {
                "success": true
            }
        ';
    } else {
        echo '
            {
                "success": false
            }
        ';
    }
    
?>