//DHT11
#include "DHT.h"
#define DHTTYPE DHT11
uint8_t DHTPin = D5;
DHT dht(DHTPin, DHTTYPE);



void ReadDHT11(){
  float temperature = round(dht.readTemperature()*10)/10;
  float humidity = round(dht.readHumidity()*10)/10;
  float heatIndex = round(dht.computeHeatIndex(temperature, humidity, false)*10)/10;  // Gebruik de lokale temperatuur en luchtvochtigheid hier

  if (isnan(temperature) || isnan(humidity) || isnan(heatIndex)){
    // sensor error
    Serial.println("DHT sensor error");
  }
  else{
    Temperature = temperature;  // Werk de globale variabelen bij
    Humidity = humidity;
    HeatIndex = heatIndex;

    Serial.println("Temp: " + String(Temperature) + ".C");
    Serial.println("Humidity: " + String(Humidity));
    Serial.println("% HeatIndex: " + String(HeatIndex));
  }
}