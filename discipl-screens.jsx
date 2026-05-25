import { useState, useEffect } from "react";

const BASE = 2500;
const PHONE = "+919746488282";
const LOGO_SRC = "/logo.png";

const DURATION_DISCOUNTS = [
  { months: 1, discount: 0 },
  { months: 2, discount: 0.08 },
  { months: 3, discount: 0.20 },
  { months: 4, discount: 0.26 },
  { months: 5, discount: 0.30 },
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

const SECTORS = [
  "Supplements & Nutrition",
  "Gymwear & Apparel",
  "Salon & Grooming",
  "Skincare & Wellness",
  "Café & Healthy Food",
  "Clinic & Healthcare",
  "Real Estate",
  "Education & Coaching",
  "Electronics & Tech",
  "Hotels & Resorts",
  "Jewellery & Fashion",
  "Finance & Banking",
  "Other",
];

const GYMS = [
  { name: "Core Fitness Club", location: "Cherooty Road" },
  { name: "Fitpro Fitness", location: "Eranhipalam" },
  { name: "FitFat Studio", location: "Thondayad" },
  { name: "Greens Fitness", location: "Mankavu Road" },
  { name: "Alpha Fitness Zone", location: "Nanminda" },
  { name: "Alpha Fitness Zone", location: "Atholi" },
  { name: "Alpha Fitness Zone", location: "Chelannur" },
];

function calcPrice(screens, months) {
  const dd =
    DURATION_DISCOUNTS.find((d) => d.months === months)?.discount || 0;

  const sd =
    SCREEN_DISCOUNTS.find((d) => d.screens === screens)?.discount || 0;

  const combined = Math.min(dd + sd, 0.7);

  const perScreen = Math.round(BASE * (1 - combined));

  const total = perScreen * screens * months;

  return { perScreen, total };
}

function NavBar({ page, setPage }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        background: "#fff",
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        zIndex: 100,
      }}
    >
      <img
        src={LOGO_SRC}
        alt="DISCIPL"
        style={{
          height: 34,
          objectFit: "contain",
        }}
      />

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => setPage("screens")}
          style={{
            background:
              page === "screens" ? "#C0202A" : "#fff",
            color:
              page === "screens" ? "#fff" : "#111",
            border: "1px solid #ddd",
            padding: "8px 14px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Screens
        </button>

        <button
          onClick={() => setPage("pricing")}
          style={{
            background:
              page === "pricing" ? "#C0202A" : "#fff",
            color:
              page === "pricing" ? "#fff" : "#111",
            border: "1px solid #ddd",
            padding: "8px 14px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Pricing
        </button>
      </div>
    </nav>
  );
}

function HomePage({ setPage }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
        textAlign: "center",
      }}
    >
      <img
        src={LOGO_SRC}
        alt="DISCIPL"
        style={{
          width: 220,
          marginBottom: 20,
        }}
      />

      <h1
        style={{
          fontSize: 40,
          marginBottom: 10,
        }}
      >
        DISCIPL Screens
      </h1>

      <p
        style={{
          color: "#777",
          maxWidth: 400,
          marginBottom: 30,
        }}
      >
        Smart advertising platform for gyms.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <button
          onClick={() => setPage("screens")}
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "14px 24px",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Our Screens
        </button>

        <button
          onClick={() => setPage("pricing")}
          style={{
            background: "#C0202A",
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Pricing
        </button>
      </div>
    </div>
  );
}

function ScreensPage() {
  return (
    <div
      style={{
        paddingTop: 90,
        paddingInline: 20,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <h1>Screens Network</h1>

      <div
        style={{
          display: "grid",
          gap: 12,
          marginTop: 20,
        }}
      >
        {GYMS.map((gym, index) => (
          <div
            key={index}
            style={{
              padding: 18,
              border: "1px solid #eee",
              borderRadius: 12,
              background: "#fafafa",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {gym.name}
            </div>

            <div
              style={{
                color: "#777",
                marginTop: 4,
              }}
            >
              {gym.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingPage() {
  const [screens, setScreens] = useState(5);
  const [months, setMonths] = useState(3);
  const [brand, setBrand] = useState("");
  const [sector, setSector] = useState("");

  const { perScreen, total } = calcPrice(
    screens,
    months
  );

  function handleWhatsApp() {
    const msg = `Hi DISCIPL Screens,

Brand: ${brand}
Sector: ${sector}

Screens: ${screens}
Duration: ${months} months

Per Screen: ₹${perScreen}
Total: ₹${total}`;

    window.open(
      `https://wa.me/${PHONE.replace(
        "+",
        ""
      )}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <div
      style={{
        paddingTop: 90,
        paddingInline: 20,
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <h1>Pricing</h1>

      <div
        style={{
          display: "grid",
          gap: 16,
          marginTop: 20,
        }}
      >
        <input
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
          placeholder="Brand Name"
          style={{
            padding: 14,
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        />

        <select
          value={sector}
          onChange={(e) =>
            setSector(e.target.value)
          }
          style={{
            padding: 14,
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <option value="">Select Sector</option>

          {SECTORS.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>

        <div>
          <label>
            Screens: {screens}
          </label>

          <input
            type="range"
            min="1"
            max="7"
            value={screens}
            onChange={(e) =>
              setScreens(Number(e.target.value))
            }
            style={{
              width: "100%",
            }}
          />
        </div>

        <div>
          <label>
            Months: {months}
          </label>

          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) =>
              setMonths(Number(e.target.value))
            }
            style={{
              width: "100%",
            }}
          />
        </div>

        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: 24,
            borderRadius: 14,
          }}
        >
          <div
            style={{
              marginBottom: 10,
            }}
          >
            Per Screen / Month
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            ₹{perScreen}
          </div>

          <div>Total Investment</div>

          <div
            style={{
              fontSize: 34,
              fontWeight: "bold",
            }}
          >
            ₹{total}
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          style={{
            background: "#25D366",
            color: "#fff",
            border: "none",
            padding: 16,
            borderRadius: 12,
            cursor: "pointer",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Request Quote on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        fontFamily: "Arial",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <NavBar page={page} setPage={setPage} />

      {page === "home" && (
        <HomePage setPage={setPage} />
      )}

      {page === "screens" && <ScreensPage />}

      {page === "pricing" && <PricingPage />}
    </div>
  );
}
