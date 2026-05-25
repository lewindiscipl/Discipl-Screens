import { useState } from "react";

const BASE = 2500;
const PHONE = "+919746488282";

const LOGO_SRC = "/logo.png";

const DURATION_DISCOUNTS = [
  { months: 1, discount: 0 },
  { months: 2, discount: 0.08 },
  { months: 3, discount: 0.2 },
  { months: 4, discount: 0.26 },
  { months: 5, discount: 0.3 },
  { months: 6, discount: 0.35 },
  { months: 7, discount: 0.37 },
  { months: 8, discount: 0.39 },
  { months: 9, discount: 0.41 },
  { months: 10, discount: 0.42 },
  { months: 11, discount: 0.43 },
  { months: 12, discount: 0.45 },
];

const SCREEN_DISCOUNTS = [
  { screens: 1, discount: 0 },
  { screens: 2, discount: 0.08 },
  { screens: 3, discount: 0.15 },
  { screens: 4, discount: 0.15 },
  { screens: 5, discount: 0.22 },
  { screens: 6, discount: 0.22 },
  { screens: 7, discount: 0.28 },
];

function calcPrice(screens, months) {
  const dd =
    DURATION_DISCOUNTS.find((d) => d.months === months)?.discount || 0;

  const sd =
    SCREEN_DISCOUNTS.find((d) => d.screens === screens)?.discount || 0;

  const combined = Math.min(dd + sd, 0.7);

  const monthlyPricePerScreen = Math.round(
    BASE * (1 - combined)
  );

  const total = monthlyPricePerScreen * screens * months;

  const original = BASE * screens * months;

  return {
    monthlyPricePerScreen,
    total,
    savings: original - total,
    combinedDiscount: combined,
  };
}

export default function App() {
  const [screens, setScreens] = useState(1);
  const [months, setMonths] = useState(1);

  const pricing = calcPrice(screens, months);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: 500,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 20,
          padding: 30,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <img
            src={LOGO_SRC}
            alt="Logo"
            style={{
              width: 120,
              marginBottom: 15,
            }}
          />

          <h1
            style={{
              margin: 0,
              fontSize: 32,
            }}
          >
            DISCIPL Screens
          </h1>

          <p style={{ color: "#666" }}>
            Smart Gym Advertising Platform
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label>Number of Screens</label>

          <select
            value={screens}
            onChange={(e) => setScreens(Number(e.target.value))}
            style={{
              width: "100%",
              padding: 12,
              marginTop: 8,
              borderRadius: 10,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>
                {n} Screen{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 30 }}>
          <label>Duration</label>

          <select
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            style={{
              width: "100%",
              padding: 12,
              marginTop: 8,
              borderRadius: 10,
            }}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Month{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: 25,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Pricing Summary
          </h2>

          <p>
            Monthly Per Screen:
            <strong>
              {" "}
              ₹{pricing.monthlyPricePerScreen}
            </strong>
          </p>

          <p>
            Total:
            <strong> ₹{pricing.total}</strong>
          </p>

          <p>
            Savings:
            <strong> ₹{pricing.savings}</strong>
          </p>

          <p>
            Discount:
            <strong>
              {" "}
              {Math.round(
                pricing.combinedDiscount * 100
              )}
              %
            </strong>
          </p>
        </div>

        <a
          href={`https://wa.me/${PHONE.replace(
            "+",
            ""
          )}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            background: "#C0202A",
            color: "#fff",
            padding: 15,
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
