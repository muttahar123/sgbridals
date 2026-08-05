import React, { useState } from 'react';

export const BookingPanel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [consultMode, setConsultMode] = useState('In-Atelier');
  const [atelierLoc, setAtelierLoc] = useState('New York');
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [refCode, setRefCode] = useState('REF — S&G-000000');
  
  // Toast notifications state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2600);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleStep1Continue = () => {
    if (!selectedService) {
      triggerToast('Please choose a consultation type.');
      return;
    }
    setCurrentStep(2);
  };

  const handleStep2Continue = () => {
    if (!preferredDate) {
      triggerToast('Please choose a date.');
      return;
    }
    if (!selectedSlot) {
      triggerToast('Please choose a time slot.');
      return;
    }
    setCurrentStep(3);
  };

  const handleSSOSignIn = (provider: string) => {
    triggerToast(`Signed in with ${provider}.`);
    if (!fullName) {
      setFullName('Signed-in Guest');
    }
  };

  const handleStep3Continue = () => {
    if (!fullName || !email) {
      triggerToast('Please sign in or enter your name and email.');
      return;
    }
    const randCode = Math.floor(100000 + Math.random() * 899999);
    setRefCode(`REF — S&G-${randCode}`);
    setCurrentStep(4);
  };

  const handleRestartBooking = () => {
    setSelectedService(null);
    setSelectedSlot(null);
    setPreferredDate('');
    setFullName('');
    setEmail('');
    setCurrentStep(1);
  };

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '1:00 PM',
    '2:30 PM',
    '4:00 PM',
    '5:30 PM',
  ];

  return (
    <section id="book" className="book">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="label">Book an Appointment</span>
          <h2>Reserve your fitting.</h2>
          <p>
            Sign in, choose a service and a time — in three short steps. Consultations are available in-atelier or by video, worldwide.
          </p>
        </div>

        <div className="booking-panel reveal">
          <div className="steps-bar" id="stepsBar">
            <div className={`step-pill ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'done' : ''}`}>
              01 · Service
            </div>
            <div className={`step-pill ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'done' : ''}`}>
              02 · Date &amp; Time
            </div>
            <div className={`step-pill ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'done' : ''}`}>
              03 · Sign In
            </div>
            <div className={`step-pill ${currentStep === 4 ? 'active' : ''}`}>
              04 · Confirm
            </div>
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="book-step active">
              <p className="label" style={{ margin: '0 0 4px' }}>
                Choose the consultation that fits your occasion.
              </p>
              <div className="option-grid" id="serviceGrid">
                <button
                  type="button"
                  className={`option-card ${selectedService === 'Bridal Consultation' ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect('Bridal Consultation')}
                >
                  <b>Bridal</b>
                  <span>Gown fitting &amp; design consult</span>
                </button>
                <button
                  type="button"
                  className={`option-card ${selectedService === 'Formal Consultation' ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect('Formal Consultation')}
                >
                  <b>Formal</b>
                  <span>Eveningwear styling session</span>
                </button>
                <button
                  type="button"
                  className={`option-card ${selectedService === 'Semi-Formal Consultation' ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect('Semi-Formal Consultation')}
                >
                  <b>Semi-Formal</b>
                  <span>Occasion dress consult</span>
                </button>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="modeSelect">Consultation Mode</label>
                  <select
                    id="modeSelect"
                    value={consultMode}
                    onChange={(e) => setConsultMode(e.target.value)}
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
                    onChange={(e) => setAtelierLoc(e.target.value)}
                  >
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Karachi">Karachi</option>
                  </select>
                </div>
              </div>
              <div className="book-nav">
                <span></span>
                <button type="button" className="btn btn-block" onClick={handleStep1Continue}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="book-step active">
              <div className="field-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="field">
                  <label htmlFor="dateInput">Preferred Date</label>
                  <input
                    type="date"
                    id="dateInput"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>
              </div>
              <label className="label">Available Times</label>
              <div className="slot-grid" id="slotGrid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className="book-nav">
                <button type="button" className="link-btn" onClick={() => setCurrentStep(1)}>
                  ← Back
                </button>
                <button type="button" className="btn btn-block" onClick={handleStep2Continue}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="book-step active">
              <p className="label" style={{ margin: '0 0 4px' }}>
                Sign in to secure your reservation.
              </p>
              <div className="sso-row">
                <button
                  type="button"
                  className="sso-btn"
                  onClick={() => handleSSOSignIn('Google')}
                >
                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.8-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 7.1 29.6 5 24 5c-7.6 0-14.1 4.3-17.7 9.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 43c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.3 34.4 26.8 35 24 35c-5.3 0-9.7-3.5-11.3-8.3l-6.5 5C9.8 38.6 16.3 43 24 43z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.3 5.2C40.9 36.3 43 30.6 43 24c0-1.4-.1-2.8-.4-3.5z"
                    />
                  </svg>
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="sso-btn"
                  onClick={() => handleSSOSignIn('Apple')}
                >
                  <svg width="16" height="16" viewBox="0 0 384 512" fill="#111">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Continue with Apple
                </button>
              </div>
              <div className="divider">or</div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="nameInput">Full Name</label>
                  <input
                    type="text"
                    id="nameInput"
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="jane@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="book-nav">
                <button type="button" className="link-btn" onClick={() => setCurrentStep(2)}>
                  ← Back
                </button>
                <button type="button" className="btn btn-block" onClick={handleStep3Continue}>
                  Sign In &amp; Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="book-step active">
              <div className="confirm-box">
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none" style={{ margin: '0 auto 22px' }}>
                  <circle cx="32" cy="32" r="30" stroke="#111110" strokeWidth="1.2" />
                  <path d="M20 33l8 8 16-18" stroke="#111110" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 style={{ fontSize: '26px', fontWeight: 300 }}>Fitting reserved.</h3>
                <p style={{ color: 'var(--stone)', maxWidth: '44ch', margin: '14px auto 0' }}>
                  A confirmation has been sent to your email with atelier directions or your video link. We look forward to meeting you.
                </p>
                <div className="confirm-ref" id="refCode">
                  {refCode}
                </div>
                <div style={{ marginTop: '30px' }}>
                  <button type="button" className="btn" onClick={handleRestartBooking}>
                    Book Another Fitting
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`toast ${showToast ? 'show' : ''}`} id="toast">
        {toastMessage}
      </div>
    </section>
  );
};
