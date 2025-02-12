/*
You need to determine what action to take based on traffic light colors:

"Red" --> Stop
"Yellow" --> Slow Down
"Green" --> Go
"Blue"--> Invalid Color

Problem Statement:
Write a function that uses switch-case to return the correct action.
*/

function trafficLightAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";

    case "yellow":
      return "Slow Down";

    case "green":
      return "Go";

    default:
      return "Invalid Color";
  }
}
