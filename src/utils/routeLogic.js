export const getRouteData = (start, end) => {
  if (!start || !end) return null;

  const s = start.toLowerCase().trim();
  const e = end.toLowerCase().trim();

  // 🔥 Predefined routes (realistic distances)
  const routes = {
    "lahore-karachi": 1200,
    "lahore-multan": 350,
    "karachi-hyderabad": 150,
    "islamabad-lahore": 380,
    "peshawar-lahore": 500,
  };

  const key = `${s}-${e}`;
  const reverseKey = `${e}-${s}`;

  let distance;

  // ✅ Check predefined routes
  if (routes[key]) {
    distance = routes[key];
  } else if (routes[reverseKey]) {
    distance = routes[reverseKey];
  } else {
    // 🎲 Random realistic distance
    distance = Math.floor(Math.random() * 500) + 50;
  }

  // 🚀 Speed calculation based on distance
  let speed;
  if (distance > 500) speed = 90;
  else if (distance > 200) speed = 70;
  else speed = 50;

  const timeHours = distance / speed;

  let time;
  if (timeHours < 1) {
    time = `${Math.round(timeHours * 60)} mins`;
  } else {
    time = `${timeHours.toFixed(1)} hrs`;
  }

  // 🔥 NEW: Traffic Level (0–100%)
  const traffic = Math.floor(Math.random() * 100);

  // 🔥 NEW: Weather Conditions
  const weatherOptions = ["Sunny ☀️", "Cloudy ☁️", "Rainy 🌧️", "Foggy 🌫️"];
  const weather =
    weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

  // 🔥 NEW: Safety Score
  const safety = Math.floor(Math.random() * 40) + 60; // 60–100%

  return {
    route: `${start} → ${end}`,
    distance: `${distance} km`,
    time,
    traffic, // 🚦
    weather, // 🌦️
    safety, // 🛡️
  };
};
