// JSON API: https://arduinojson.org/v6/api/

// JSON libraries
#include <ArduinoJson.h>

// JSON document
JsonDocument doc;

void CreateJSON() {
  static int attempt = 0;
  doc["ldr"] = String(Light);
  doc["attempt"] = ++attempt;
  doc["dht11"]["temperature"] = String(Temperature); 
  doc["dht11"]["humdity"] = String(Humidity); 
  doc["dht11"]["heatIndex"] = String(HeatIndex); 
  serializeJson(doc, jsonOut);
}

// for easy JSON debugging
void SendJSONToSerial() {
  serializeJson(doc, Serial);
  Serial.println();
}
void ReadJson(String responseMsg){

  StaticJsonDocument<200> resDoc;
  deserializeJson(resDoc,responseMsg);

  digitalWrite(D0, bool(resDoc["lights"][0])); //dit registeert het lampje op array nummer 0
  digitalWrite(D1, bool(resDoc["lights"][1])); //dit registeert het lampje op array nummer 0
  digitalWrite(D2, bool(resDoc["lights"][2])); //dit registeert het lampje op array nummer 0 
}
