<?php
    $data= file_get_contents('php://input');
    $path= 'images/'.uniqid().'.jpeg';
    file_put_contents ($path, $data);
    echo $path;     
?>