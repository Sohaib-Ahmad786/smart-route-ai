export const getRouteData = (start, end) => {
  if (!start || !end) return null;

  const s = start.toLowerCase();
  const e = end.toLowerCase();

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

  if (routes[key]) {
    distance = routes[key];
  } else if (routes[reverseKey]) {
    distance = routes[reverseKey];
  } else {
    // realistic random distance
    distance = Math.floor(Math.random() * 500) + 50;
  }

  // speed vary based on distance
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

  return {
    route: `${start} → ${end}`,
    distance: `${distance} km`,
    time,
  };
};
