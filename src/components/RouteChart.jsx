"use client";

import dynamic from "next/dynamic";

// 🔥 Fix for Next.js SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RouteChart({ result }) {
  if (!result) return null;

  // 🔥 Controlled realistic traffic data
  const trafficData = [
    Math.floor(Math.random() * 30) + 50, // 50–80
    Math.floor(Math.random() * 30) + 60, // 60–90
    Math.floor(Math.random() * 30) + 30, // 30–60
  ];

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#00f5a0"], // 🔥 Neon green
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "rgba(255,255,255,0.05)",
    },
    xaxis: {
      categories: ["Start", "Midway", "Destination"],
      labels: {
        style: { colors: "#9ca3af" },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: { colors: "#9ca3af" },
      },
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 6,
      colors: ["#00f5a0"],
      strokeColors: "#0f172a",
      strokeWidth: 2,
    },
  };

  const series = [
    {
      name: "Traffic Level (%)",
      data: trafficData,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-6">
      <div className="sohaib-chart bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,150,0.15)]">
        <h3 className="text-xl font-semibold text-white mb-4">
          Traffic Analysis 📊
        </h3>

        <Chart
          options={chartOptions}
          series={series}
          type="area"
          height={300}
        />
      </div>
    </div>
  );
}
