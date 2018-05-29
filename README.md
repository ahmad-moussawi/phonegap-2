# PhoneGap Course

## Session 01

### Prerequisites:
 - Install NodeJs version 7 or above
 - Install phonegap-cli tool `npm i -g phonegap`

### Creating new application

```sh
# go to your home directory
cd c:\users\myuser\projects

# create new application
phonegap create burgerapp --id "com.formatech.burger" --name "Burger App"

# go into project directory
cd burgerapp
```

## Session 02

### Useful commands (Command line/ terminal)

Command | Mac | Windows
--------|----|---
Change directory | cd | cd
List directory content | ls | dir
Create new directory | mkdir | mkdir
Remove directory | rm -rf <path> | del /f /s <path>
Remove file | rm file.txt | del file.txt
Show Current directory | pwd | cd

### Device Ready Event
Make sure to put the bootstraping code inside **deviceready** event closure

```js
document.addEventListener('deviceready', function() {

    // your code here

}, false);
```

### Adding platforms

```sh
phonegap platform add android # to add android platform
phonegap platform add ios # to add ios platform
```


### Running the application

#### In the browser
```sh
phonegap serve # run the local server and open the browser to http://localhost:3000 by default
```

#### Using the PhoneGap app (you can find it on Play Store)
![Using the PhoneGap app](docs/phonegap-developer-app-pairing.png)

#### Running on device (or emulator)

![Emulator](docs/android_device.png)

```sh
phonegap run #run the application on all available targets and platforms
phonegap run android #run the application on android (all available targets)
phonegap run android --emulate #run the application on android using the emulator
phonegap run android --device #run the application on android using the plugged device
phonegap run ios #run the application on ios (all available targets)
phonegap run ios --emulate #run the application on ios using the emulator
phonegap run ios --device #run the application on ios using the plugged device emulator
```

### Show application run logs
add the `--verbose` flag to show the run log

### Debugging
Use the **Browser developer console**, and/or the LogCat from the **Android Device Monitor**
![LogCat](docs/logcat.png)

> **Note:** create a filter to filter out uneeded messages.
