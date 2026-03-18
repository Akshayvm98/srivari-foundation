"use client";

import { useState, type FormEvent } from "react";
import SacredDivider from "./SacredDivider";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream temple-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-temple-gold-dark text-xs tracking-[0.4em] uppercase font-body mb-4">
            Reach Out to Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-sacred-text leading-tight">
            Contact Us
          </h2>
          <SacredDivider className="mt-6" />
          <p className="mt-6 text-sacred-muted font-body max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Whether you wish to invite us for a
            Srinivasa Kalyana Mahothsavam or simply want to learn more, please reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                label: "Phone",
                lines: ["+91 99000 59500", "080 - 2661 0190"],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                lines: ["srivarifoundation@gmail.com"],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                label: "Address",
                lines: [
                  '#66/A "Sri Nilaya"',
                  "Raghavendra Colony, Chamarajpet",
                  "Bangalore 560018",
                ],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/70 backdrop-blur-sm border border-temple-gold/10 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 border border-temple-gold/15 bg-sandal-light/30 flex items-center justify-center text-burgundy">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-sacred-text mb-1">
                      {item.label}
                    </h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sacred-muted text-sm font-body">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-white/70 border border-temple-gold/10 overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-cream-dark to-sandal-light flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-sacred-light/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sacred-light text-xs font-body">Chamarajpet, Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm border border-temple-gold/10 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-sacred-text mb-2">
                Send Us a Message
              </h3>
              <p className="text-sacred-muted text-sm font-body mb-6">
                Whether you wish to invite us for a program or have a general enquiry,
                we are happy to hear from you.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200">
                  <p className="text-green-700 text-sm font-body">
                    Thank you! Your message has been sent. We will respond shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-medium text-sacred-text/80 mb-1.5">
                      Your Name <span className="text-vermillion">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-temple-gold/12 text-sm font-body text-sacred-text placeholder:text-sacred-light/50 focus:outline-none focus:border-temple-gold/40 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-sacred-text/80 mb-1.5">
                      Phone Number <span className="text-vermillion">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-cream border border-temple-gold/12 text-sm font-body text-sacred-text placeholder:text-sacred-light/50 focus:outline-none focus:border-temple-gold/40 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-sacred-text/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-temple-gold/12 text-sm font-body text-sacred-text placeholder:text-sacred-light/50 focus:outline-none focus:border-temple-gold/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-sacred-text/80 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-temple-gold/12 text-sm font-body text-sacred-text focus:outline-none focus:border-temple-gold/40 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="invite">Invite for Kalyana Mahothsavam</option>
                    <option value="program">Enquiry about Programs</option>
                    <option value="volunteer">Volunteer with Us</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-body font-medium text-sacred-text/80 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-temple-gold/12 text-sm font-body text-sacred-text placeholder:text-sacred-light/50 focus:outline-none focus:border-temple-gold/40 transition-colors resize-none"
                    placeholder="Tell us about your enquiry or event requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-burgundy text-white font-body font-medium text-sm tracking-wider uppercase hover:bg-burgundy-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
