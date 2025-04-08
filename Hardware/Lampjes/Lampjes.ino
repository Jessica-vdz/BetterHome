void setup() {
  pinMode(D0,OUTPUT); // gang lamp
  pinMode(D1,OUTPUT); // slaapkamer lamp
  pinMode(D2,OUTPUT); // woonkamer lamp
  pinMode(D3,OUTPUT); //gang verwarming
  pinMode(D7,OUTPUT); //  slaapkamer verwarming
  pinMode(D8,OUTPUT); //Verwarming Woonkamer
}

void loop() {
  digitalWrite(D7,HIGH);
  delay(500);
  digitalWrite(D7,LOW);
}
