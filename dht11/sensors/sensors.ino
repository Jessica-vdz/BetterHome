#define MAX_UNSIGNED_LONG 4294967295
#define DHT11ReadDelay 500
#include <Servo.h>

// GLOBAL VARIABLES
// json
char jsonOut[128];
// dht11
float Temperature = -1;
float Humidity = -1;
float HeatIndex = -1;
// light sensor
int Light = -1;
Servo servo;
int ldrPin = A0;

void setup() {
  Serial.begin(115200);
  SetupWifi();
  CheckWifi();
  pinMode(D0,OUTPUT); //gang licht
  pinMode(D2,OUTPUT); // woonkamer
  pinMode(D1,OUTPUT); //slaapkamer
  servo.attach(D6);
}

void loop() {
  static unsigned long previousTime = 0;
  unsigned long currentTime = millis();
  
  // Lees de waarde van de LDR
  int ldr_value = analogRead(ldrPin);  // Gebruik ldrPin
  Serial.println(ldr_value);  // Print de LDR-waarde naar de seriële monitor

  // Controleer de lichtwaarde en pas de servo aan
  if (ldr_value > 510) {
    servo.write(90);  // Als de lichtwaarde boven 341 is, zet de servo op 90°
  } else {
    servo.write(180);   // Als de lichtwaarde onder 341 is, zet de servo op 0°
  }

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