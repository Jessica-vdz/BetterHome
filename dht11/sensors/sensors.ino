#define MAX_UNSIGNED_LONG 4294967295
#define DHT11ReadDelay 500

// GLOBAL VARIABLES
// json
char jsonOut[128];
// dht11
float Temperature = -1;
float Humidity = -1;
float HeatIndex = -1;
// light sensor
int Light = -1;

class Verwarming{
  int gang = 3;
  int slaapkamer = 7;
  int livingroom = 8

};
void setup() {
  Serial.begin(115200);
  SetupWifi();
  CheckWifi();
  pinMode(D0,OUTPUT); //gang licht
  pinMode(D2,OUTPUT); // woonkamer
  pinMode(D1,OUTPUT); //slaapkamer
  pinMode(D3,OUTPUT); //gang
  pinMode(D7,OUTPUT); //gang
  pinMode(D8,OUTPUT); //gang

}

void loop() {
  static unsigned long previousTime = 0;
  unsigned long currentTime = millis();
  
  // this is separated so the LDR can work constinously
  if(currentTime - previousTime >= DHT11ReadDelay || currentTime >= MAX_UNSIGNED_LONG - DHT11ReadDelay) {
    // Clear monitor
    Serial.print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    Serial.println("Reading sensors\n");
    
    // READ SENSOR VALUES HERE
      ReadDHT11();

    Serial.println("Creating JSON\n");

    // CREATE JSON OBJECT HERE
    CreateJSON();
    
    Serial.println("Sending POST\n");
    SendPOST(jsonOut);
    // SEND POST REQUEST HERE

    previousTime = millis();
  }

  CheckWifi();
  delay(50);
}