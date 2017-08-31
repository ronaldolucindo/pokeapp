<?php
//$dir = '../teste';
//mkdir ($dir, 0744);
  $json = file_get_contents("php://input");
  $data = json_decode($json);
  $filePath = '../files/' . $data->{"user"} . '.json';
  $file = fopen($filePath,'w+');
  fwrite($file, $json);
  fclose($file);
?>