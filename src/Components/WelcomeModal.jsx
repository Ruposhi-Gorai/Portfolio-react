import { useEffect, useState } from "react";

const visitorStorageKey = "portfolio-visitor-id";
const completedStorageKey = "portfolio-welcome-completed";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

const getVisitorId = () => {
  const savedVisitorId = window.localStorage.getItem(visitorStorageKey);

  if (savedVisitorId) {
    return savedVisitorId;
  }

  const visitorId = crypto.randomUUID();
  window.localStorage.setItem(visitorStorageKey, visitorId);
  return visitorId;
};

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", place: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(completedStorageKey)) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleChange = (event) => {
    setFormData((currentData) => ({
      ...currentData,
      [event.target.name]: event.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const place = formData.place.trim();

    if (name.length < 2 || place.length < 2) {
      setError("Please enter your name and place.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${apiUrl}/api/visitors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: getVisitorId(), name, place }),
      });

      if (!response.ok) {
        throw new Error("Unable to save visitor");
      }

      window.localStorage.setItem(completedStorageKey, "true");
      setIsOpen(false);
    } catch {
      setError("We could not save your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11131c] p-6 text-white shadow-2xl sm:p-8"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
           Welcome to my portfolio!
        </p>
            <h2 id="welcome-title" className="mt-3 text-lg font-bold sm:text-lg">
                Let's get to know each other...☺️
            </h2>
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Before you explore, share your name and where you are visiting from.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-gray-300">
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              autoFocus
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400"
              placeholder="Your name"
            />
          </label>

          <label className="block text-sm text-gray-300">
            Place
            <input
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              minLength={2}
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400"
              placeholder="City or country"
            />
          </label>

          {error && <p className="text-sm text-red-300">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Enter website"}
          </button>
        </form>
      </div>
    </div>
  );
}