<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'connect.php';

// $users = [];

$sql = "SELECT id, name, username, email FROM user";

$users = array();

if($result = mysqli_query($con, $sql)){
    while($row = mysqli_fetch_assoc($result)){
        // $users['id'] = $row['id'];
        // $users['name'] = $row['name'];
        // $users['username'] = $row['username'];
        // $users['email'] = $row['email'];
        $users[] = $row;
    }

    echo json_encode($users);
}
else{
    http_response_code(404);
}

?>