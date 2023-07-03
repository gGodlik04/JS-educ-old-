<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $x1= $data->x; 
    $x2= $data->y;
    $last= mt_rand($x1, $x2);
    echo $last;
?>