<?php

header('Access-Control-Allow-Origin: *');

// Takes raw data from the request
$json = file_get_contents('php://input');

if(empty($json)) {//get fetch van js
  $json = file_get_contents("jsonInput.txt");
  echo $json;
}
else {
  // If length of the json is longer than 1024, do not change the json file.
  if(strlen($json) > 1024) {
    exit("not parsing data, data is over 1024 characters!");
  }

  
  $data = json_decode($json);

  //$filedata => zie les 6
  if(isset($data->lights)){//uit javascript post fetch
    $fileData->Lights= $data->ldr;
    $fileData-> ldr =$data->ldr;
    $fileData->dht11->temperature = $data-> dht11 -> temperature;
    $fileData->dht11->humidity = $data->dht11->heatIndex;
  }else{//node mcu

    //check if lights exists if false add lights array
    $fileData->ldr=$data->ldr;
    $fileData->dht11->temperature = $data->dht11->temperature;
    $fileData->dht11->temperature = $data->dht11->humidity;
    $fileData->dht11->temperature = $data->dht11->heatIndex;
  
  }
  //open & write to file
  $jsonFile = fopen("jsonInput.txt", "w");
  fwrite($jsonFile, $json . "\n");
  fclose($jsonFile);

  // Send back a response
  echo "response: " . $json;

}?>