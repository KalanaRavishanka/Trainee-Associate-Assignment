<?php
// header files
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// import the connect files
require 'connect.php';

$postdata = file_get_contents('php://input');

if (isset($postdata) && !empty($postdata)) {
    // decode the json files
    $request = json_decode($postdata);
    // print_r($request);
    $username = $request->username;
    $password = md5($request->password); // get the hashes password
    // query to get the user
    $sql = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";

    if ($result = mysqli_query($con, $sql)) {
        if ($result->num_rows > 0) {
            http_response_code(200);
            echo json_encode(array('status' => 'success', 'message' => 'Login Successful'));
        } else {
            http_response_code(401);
            echo json_encode(array('status' => 'fail', 'message' => 'Login Failed'));
        }
    } else {
        http_response_code(401);
        echo json_encode(array('status' => 'fail', 'message' => 'Login Failed'));
    }
}
