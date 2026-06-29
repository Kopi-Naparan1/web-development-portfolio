"use client";
import { SectionScreen } from "../ui/Section";
import { useState } from "react";

function FloatingInput({ name, label, type = "text", value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-12 bg-secondary rounded-lg px-4 pt-4 text-heading outline-none border-2 border-transparent focus:border-primary transition-all duration-200"
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-subtext
          ${isFloating ? "top-1 text-[10px] font-semibold text-primary" : "top-3 text-[14px]"}`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ name, label, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  return (
    <div className="relative w-full h-full">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-full bg-secondary rounded-lg px-4 pt-6 text-heading outline-none border-2 border-transparent focus:border-primary transition-all duration-200 resize-none"
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-subtext
          ${isFloating ? "top-1 text-[10px] font-semibold text-primary" : "top-3 text-[14px]"}`}
      >
        {label}
      </label>
    </div>
  );
}

const EMPTY_FORM = { name: "", email: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [indicator, setIndicator] = useState("Send");
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function resetIndicator() {
    setTimeout(() => {
      setStatus(null);
      setIndicator("Send");
    }, 2500);
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setIndicator("Fill all fields");

      resetIndicator();

      return;
    }

    setIndicator("Sending...");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setIndicator("Sent!");
        setForm(EMPTY_FORM);

        resetIndicator();
      } else {
        setStatus("error");
        setIndicator("Try Again");
      }
    } catch {
      setStatus("error");
      setIndicator("Try Again");
    }
  }

  return (
    <div className="w-full max-w-[480px] md:max-w-[520px] mx-auto bg-lighter border-secondary border-2 rounded-lg flex flex-col py-6 px-5 gap-4 ">
      <h3 className="text-[16px] font-bold text-center">
        Let&apos;s Chat About Your Project
      </h3>

      <div className="flex flex-col gap-3">
        <FloatingInput
          name="name"
          label="Name"
          value={form.name}
          onChange={handleChange}
        />
        <FloatingInput
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="h-[250px]">
        <FloatingTextarea
          name="message"
          label="Message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-primary/50 border-2 border-transparent hover:border-primary font-jakarta text-heading font-semibold py-2 px-6 rounded-lg hover:bg-primary/70  hover:text-background/80 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-[200px]"
        >
          {indicator}
        </button>
      </div>
    </div>
  );
}

export default function Contact({ sectionID }) {
  return (
    <SectionScreen
      minHeightClass="min-h-[85vh]"
      id={sectionID}
      className="md:flex-row! md:items-center md:justify-between bg-secondary/15 py-[8vh]"
      eyebrowClassName="md:text-left md:max-w-[40%]"
      childrenClassName="flex items-center justify-center w-full md:max-w-[50%]"
      eyebrow={"Get in touch"}
      heading={"Let's Build great websites"}
      subheading={
        "Fill out the form below and I'll get back to you within 24 hours."
      }
    >
      <ContactForm />
    </SectionScreen>
  );
}
