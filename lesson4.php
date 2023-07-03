<?php
$x1= $_POST['x']; 
$x2= $_POST['y'];
$last= mt_rand($x1, $x2);
echo $last;
?>