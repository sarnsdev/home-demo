PORTS USED
==========
- 3000: fake hardware webserver
- 3001: main web app
- 8080: websocket server

ENV Vars used
-------------
STATE = [armed, disarmed]
CODE = <4 digit pin>

WebSocket codes
----------------
- web:
  - newCode <4 digit>
  - arm

- hardware:
  - arm
  - disarm <4 digit>
  - sensorTrip
- controller:
  - alert
  -

To Do:
---------
X- Create Account (enter new passcode)
X- User prompted to create new account by entering and confirming a passcode
X- Personalize Account (change passcode)
X- User prompted to enter old passcode, new passcode, and confirmation of new passcode
X- Log in (requires passcode)
X- Prompts for passcode, displays options to personalize account, arm system, disarm system, view database
X- Arm system
X- Change state of system
X- Disarm system (requires passcode)
X- Changes state of system
NO- View database
