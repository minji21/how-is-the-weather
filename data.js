/**
 * 우리가 받은 날씨정보 객체에서
 * {
 *   weather: {
 *     main: '' // 이 값
 *   }
 * }
 * weather.main 에서 나올 수 있는 값들을 아래 객체의 key로 두었습니다.
 *
 * 나올 수 있는 값들에 대한 정보는 아래 link에서 확인하실 수 있습니다.
 * https://openweathermap.org/weather-conditions
 */
const imgLinks = {
  Clear: "sun.png",
  Rain: "rain.png",
  Snow: "snowing.png",
  Clouds: "cloudy.png",
  Thunderstorm: "strom.png",
  Haze: "fog.png",
  fog: "fog.png",
  Drizzle: "rain.png"


};
const colors = {
  Clear: ["#efff00", "#e80a0a"],
  Rain: ["#6b678d", "#88b8c6"],
  Snow: ["#6b678d", "#88b8c6"],
  Clouds: ["#6a5274", "#9cb2e5"],
  Thunderstorm: ["#6b678d", "#88b8c6"],
  Haze: ["#b493ae", "#9cdee5"],
  fog: ["#b493ae", "#9cdee5"],
  Drizzle: ["#b493ae", "#9cdee5"],
}
