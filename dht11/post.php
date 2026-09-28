<?php

header('Access-Control-Allow-Origin: *');

// Takes raw data from the request
$json = file_get_contents('php://input');

if(empty($json)) {//get fetch van js
  $json = file_get_contents("jsonInput.txt");
  header("Content-Type: application/json");
  echo $json;
}
else {
  // If length of the json is longer than 1024, do not change the json file.
  if(strlen($json) > 1024) {
    exit("not parsing data, data is over 1024 characters!");
  }

  $fileData = json_decode(file_get_contents("jsonInput.txt"));
  $data = json_decode($json);

  $fileData->ldr = $data->ldr;
  $fileData->dht11->temperature = $data->dht11->temperature;
  $fileData->dht11->temperature = $data->dht11->humidity;
  $fileData->dht11->temperature = $data->dht11->heatIndex;

  //$filedata => zie les 6
  if(isset($data->lights)) {
    $fileData->lights = $data->lights;
  } else if(!isset($fileData->lights)) {
    $fileData->lights = array(false, false, false, false);
  }

  $finalJson = json_encode($fileData);

  //open & write to file
  $jsonFile = fopen("jsonInput.txt", "w");
  fwrite($jsonFile, $finalJson . "\n");
  fclose($jsonFile);

  header("Content-Type: application/json");
  echo $finalJson;
}?>