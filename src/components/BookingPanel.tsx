import React, { useMemo, useState } from 'react';

const CAL_BOOKING_URL = 'https://cal.com/sg.bridalofficial-rg0wjq/30min';

const serviceOptions = [
  {
    title: 'Bridal',
    value: 'Bridal Consultation',
    description: 'Gown fitting and design consult',
  },
  {
    title: 'Formal',
    value: 'Formal Consultation',
    description: 'Eveningwear styling session',
  },
  {
    title: 'Semi-Formal',
    value: 'Semi-Formal Consultation',
    description: 'Occasion dress consult',
  },
];

export const BookingPanel: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [consultMode, setConsultMode] = useState('In-Atelier');
  const [atelierLoc, setAtelierLoc] = useState('Karachi');

  const calBookingUrl = useMemo(() => {
    const notes = [
      'SG Bridal appointment request',
      `Service: ${selectedService ?? 'Not selected'}`,
      `Consultation mode: ${consultMode}`,
      `Atelier location: ${atelierLoc}`,
    ].join('\n');

    const params = new URLSearchParams({
      theme: 'light',
      notes,
      service: selectedService ?? '',
      consultation_mode: consultMode,
      atelier_location: atelierLoc,
      'metadata[service]': selectedService ?? '',
      'metadata[consultationMode]': consultMode,
      'metadata[atelierLocation]': atelierLoc,
    });

    return `${CAL_BOOKING_URL}?${params.toString()}`;
  }, [atelierLoc, consultMode, selectedService]);

  const calEmbedUrl = `${calBookingUrl}&embed=true`;

  return (
    <section id="book" className="book">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="label">Book an Appointment</span>
          <h2>Reserve your fitting.</h2>
          <p>
            Select your consultation details first, then choose a live slot from the SG Bridal calendar.
          </p>
        </div>

        <div className="booking-panel cal-booking-panel reveal">
          <div className="steps-bar booking-context-steps">
            <div className={`step-pill ${selectedService ? 'done' : 'active'}`}>
              01 · Service
            </div>
            <div className={`step-pill ${selectedService ? 'active' : ''}`}>
              02 · Date &amp; Time
            </div>
          </div>

          <div className="booking-context-grid">
            <div className="booking-preferences">
              <p className="label" style={{ margin: '0 0 4px' }}>
                Choose the consultation that fits your occasion.
              </p>

              <div className="option-grid booking-option-grid" id="serviceGrid">
                {serviceOptions.map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    className={`option-card ${selectedService === service.value ? 'selected' : ''}`}
                    onClick={() => setSelectedService(service.value)}
                  >
                    <b>{service.title}</b>
                    <span>{service.description}</span>
                  </button>
                ))}
              </div>

              <div className="field-row booking-field-row">
                <div className="field">
                  <label htmlFor="modeSelect">Consultation Mode</label>
                  <select
                    id="modeSelect"
                    value={consultMode}
                    onChange={(event) => setConsultMode(event.target.value)}
                  >
                    <option value="In-Atelier">In-Atelier</option>
                    <option value="Video Consultation (Worldwide)">Video Consultation (Worldwide)</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="locSelect">Atelier Location</label>
                  <select
                    id="locSelect"
                    value={atelierLoc}
                    onChange={(event) => setAtelierLoc(event.target.value)}
                  >
                    <option value="Karachi">Karachi</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </div>
              </div>

              <div className="booking-summary">
                <span className="label">Selected</span>
                <strong>{selectedService ?? 'Select a service'}</strong>
                <p>{consultMode} · {atelierLoc}</p>
              </div>
            </div>

            <div className="cal-booking-shell">
              {selectedService ? (
                <>
                  <iframe
                    key={calEmbedUrl}
                    title="SG Bridal appointment booking"
                    src={calEmbedUrl}
                    className="cal-booking-frame"
                    loading="lazy"
                    allow="camera; microphone; fullscreen; payment"
                  />

                  <div className="cal-booking-actions">
                    <a href={calBookingUrl} className="btn" target="_blank" rel="noreferrer">
                      Open Booking Page →
                    </a>
                  </div>
                </>
              ) : (
                <div className="cal-booking-placeholder">
                  <span className="label">Calendar</span>
                  <h3>Select a consultation first.</h3>
                  <p>Your date and time options will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
