"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [formErrors, setFormErrors] = useState([]); // array of strings
  const [fieldErrors, setFieldErrors] = useState({}); // { first_name?: string, ... }
  const [errorMessage, setErrorMessage] = useState(""); // network/unknown

  function resetErrors() {
    setFormErrors([]);
    setFieldErrors({});
    setErrorMessage("");
  }

  function firstOf(x) {
    return Array.isArray(x) ? (x[0] ?? "") : (x ?? "");
  }

  function applyZodFlattenErrors(err) {
    const fe = {};
    if (err?.fieldErrors && typeof err.fieldErrors === "object") {
      for (const [k, v] of Object.entries(err.fieldErrors)) {
        const msg = firstOf(v);
        if (msg) fe[k] = msg;
      }
    }
    setFieldErrors(fe);

    const top = Array.isArray(err?.formErrors) ? err.formErrors.filter(Boolean) : [];
    setFormErrors(top);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    resetErrors();

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    const payload = {
      first_name: fd.get("first_name")?.toString().trim() || "",
      last_name: fd.get("last_name")?.toString().trim() || "",
      email_address: fd.get("email_address")?.toString().trim() || "",
      phone_number: fd.get("phone_number")?.toString().trim() || "",
      company_name: fd.get("company_name")?.toString().trim() || "",
      notes: fd.get("notes")?.toString().trim() || "",
    };

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || !data?.ok) {
        if (data?.error && typeof data.error === "object") {
          applyZodFlattenErrors(data.error);
          setStatus("error");
          setErrorMessage("");
          return;
        }
        const msg = typeof data?.error === "string" ? data.error : "Submission failed";
        setErrorMessage(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const disabled = status === "loading";

  return (
    <form
      onSubmit={onSubmit}
      className="w-full relative bg-[#343229] md:bg-transparent p-4 md:p-0 rounded-xl shadow-[4px_0_0_#0B1F1E,_-4px_0_0_#0B1F1E,_0_4px_0_#0B1F1E] md:shadow-none"
      aria-busy={disabled}
      noValidate
    >
      <h3 className="text-2xl absolute left-0 right-0 -top-22 md:-top-32">Feeling jelly yet?</h3>
      <h2 className="text-5xl md:text-6xl absolute -left-16 -top-14 -right-16 md:-top-24">CAST US A LINE!</h2>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            autoComplete="given-name"
            required
            disabled={disabled}
            aria-invalid={!!fieldErrors.first_name}
            aria-describedby={fieldErrors.first_name ? "err-first_name" : undefined}
            className={`w-full ${fieldErrors.first_name ? "border border-red-500" : ""}`}
          />
          {fieldErrors.first_name && (
            <p id="err-first_name" className="text-red-500 text-sm mt-1">{fieldErrors.first_name}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            autoComplete="family-name"
            required
            disabled={disabled}
            aria-invalid={!!fieldErrors.last_name}
            aria-describedby={fieldErrors.last_name ? "err-last_name" : undefined}
            className={`w-full ${fieldErrors.last_name ? "border border-red-500" : ""}`}
          />
          {fieldErrors.last_name && (
            <p id="err-last_name" className="text-red-500 text-sm mt-1">{fieldErrors.last_name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email_address"
            placeholder="Email Address"
            autoComplete="email"
            required
            disabled={disabled}
            aria-invalid={!!fieldErrors.email_address}
            aria-describedby={fieldErrors.email_address ? "err-email_address" : undefined}
            className={`w-full ${fieldErrors.email_address ? "border border-red-500" : ""}`}
          />
          {fieldErrors.email_address && (
            <p id="err-email_address" className="text-red-500 text-sm mt-1">{fieldErrors.email_address}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone #"
            autoComplete="tel"
            required
            disabled={disabled}
            aria-invalid={!!fieldErrors.phone_number}
            aria-describedby={fieldErrors.phone_number ? "err-phone_number" : undefined}
            className={`w-full ${fieldErrors.phone_number ? "border border-red-500" : ""}`}
          />
          {fieldErrors.phone_number && (
            <p id="err-phone_number" className="text-red-500 text-sm mt-1">{fieldErrors.phone_number}</p>
          )}
        </div>

        <div className="col-span-2">
          <input
            type="text"
            name="company_name"
            placeholder="Company/Organization"
            autoComplete="organization"
            required
            disabled={disabled}
            aria-invalid={!!fieldErrors.company_name}
            aria-describedby={fieldErrors.company_name ? "err-company_name" : undefined}
            className={`w-full ${fieldErrors.company_name ? "border border-red-500" : ""}`}
          />
          {fieldErrors.company_name && (
            <p id="err-company_name" className="text-red-500 text-sm mt-1">{fieldErrors.company_name}</p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            name="notes"
            placeholder="Additional Notes"
            rows={5}
            disabled={disabled}
            aria-invalid={!!fieldErrors.notes}
            aria-describedby={fieldErrors.notes ? "err-notes" : undefined}
            className={`w-full ${fieldErrors.notes ? "border border-red-500" : ""}`}
          />
          {fieldErrors.notes && (
            <p id="err-notes" className="text-red-500 text-sm mt-1">{fieldErrors.notes}</p>
          )}
        </div>
      </div>

      {/* Top-level status + form errors */}
      <div className="mt-3 space-y-1 min-h-[1.5rem]" aria-live="polite">
        {status === "success" && (
          <p className="text-green-500">Thanks! We got your message and will get back to you shortly.</p>
        )}
        {status === "error" && !!errorMessage && (
          <p className="text-red-500">Error: {errorMessage}</p>
        )}
        {status === "error" && formErrors.length > 0 && (
          <ul className="text-red-500 list-disc pl-5">
            {formErrors.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        )}
      </div>

      <button className="w-full mt-2" type="submit" disabled={disabled}>
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
