# Skycast ☁️

Skycast is a weather application built using **Next.js** and **TypeScript** that provides real-time weather forecasts, a 7‑day outlook, and detailed weather info—all wrapped in a sleek, responsive UI. It fetches data from **WeatherAPI** and enriches your experience with relevant background visuals.

---

## 🚀 Features

- **Real-time weather**: Live temperature, condition, and icon for any city.
- **7‑day forecast**: Maximum/minimum temps, daily conditions, icons.
- **Detailed insights**: Wind, humidity, direction, pressure, feels‑like temp, visibility, sunrise, and sunset.
- **Unit toggle**: Switch easily between Celsius and Fahrenheit.
- **Responsive design**: Looks great on desktop, tablet, or mobile.
- **City backgrounds**: Dynamic visuals tied to your location.

---

## 🔧 Installation

Make sure you have **Node.js v14+** and **npm** installed.

1. **Clone the repo**  
   ```bash
   git clone https://github.com/jasmeet18/Skycast.git
````

2. **Navigate into the directory**

   ```bash
   cd Skycast
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env.local` in the root:

   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_weatherapi_key_here
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Then visit `http://localhost:3000`.

---

## 🧱 Project Structure

```text
/app
  ├─ components/
  │    ├─ Input.tsx          – city search input
  │    ├─ Current.tsx        – shows current weather & conditions
  │    ├─ WeekForecast.tsx   – 7-day forecast display
  │    └─ WeatherDetails.tsx – extra weather stats
  └─ page.tsx                – main page logic & fetch handling
/public
  └─ images/                 – city-themed background images
```

---

## 📝 Usage

* **Search for a city** using the input field.
* **View current conditions**: temperature, icon, weather description.
* **Switch units** between °C and °F using the toggle button.
* **Scroll through the week forecast** for daily high, low, and conditions.
* **Check detailed stats** below, including wind, humidity, pressure, visibility, and sun times.

---

## ✅ To‑Do / Roadmap

* ⚠️ Fix current **TypeScript** errors around missing props in `page.tsx`.
* Enhance **error handling** for invalid inputs or failed API calls.
* Add **loading states** and animations for better UX.
* Support **hourly forecasts**, **geolocation**, and **theming/light‑dark mode**.

---

## 🤝 Contributing

Contributions welcome! Please:

1. **Fork** the repo
2. **Create a branch** (`git checkout -b feature/my-feature`)
3. **Make your changes**, commit (`git commit -m "feat: add XYZ"`)
4. **Push to your branch** and open a **Pull Request**

---

## 📄 License

This project is licensed under the [AGPL‑3.0 License](./LICENSE).

---

**Enjoy using Skycast and stay ahead of the weather!**
