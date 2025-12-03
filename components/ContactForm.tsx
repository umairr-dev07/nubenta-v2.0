import React, { useState } from 'react';
import Button from './Button';
import { FormStatus } from '../types';
import { Check, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  formTitle?: string;
  successMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  formTitle = "Book a Live Demo",
  successMessage = "We have received your application. Our team will connect you as soon as possible."
}) => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    agentInterest: '',
    date: '',
    time: '',
    struggles: ''
  });

  // REPLACE THIS URL with your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBf5NPW6hQ7nUu_wBYUKtX3eSHE7oan2oJMT3uHSNXEaxunWpXC0XQjAMLFA9DcFbjIg/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setErrorMessage('');

    console.log('Submitting form data:', formData);
    console.log('Sending to URL:', GOOGLE_SCRIPT_URL);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      });

      console.log('Form submitted successfully');
      
      // Wait a bit to ensure the data is processed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus(FormStatus.SUCCESS);
      setFormData({ 
        name: '', 
        businessName: '', 
        email: '', 
        phone: '', 
        agentInterest: '', 
        date: '', 
        time: '', 
        struggles: '' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting the form. Please try again.');
      setStatus(FormStatus.IDLE);
    }
  };

  // Generate time slots (9 AM to 5 PM in 30-minute intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break;
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const displayMinute = minute.toString().padStart(2, '0');
        const value = `${hour.toString().padStart(2, '0')}:${displayMinute}`;
        slots.push({
          value,
          label: `${displayHour}:${displayMinute} ${period}`
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      
      {status === FormStatus.SUCCESS ? (
        <div className="text-center py-8 animate-fade-in relative z-10">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
             <Check className="w-10 h-10 text-green-400" />
          </div>
          <h4 className="text-3xl font-bold text-white mb-4">Success!</h4>
          <p className="text-lg text-slate-300 max-w-sm mx-auto leading-relaxed">{successMessage}</p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{formTitle}</h3>
          
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{errorMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-slate-400 mb-1">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="agentInterest" className="block text-sm font-medium text-slate-400 mb-1">Which AI Agent Do You Want to Explore?</label>
              <select
                id="agentInterest"
                name="agentInterest"
                required
                value={formData.agentInterest}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              >
                <option value="" disabled>Select an option</option>
                <option value="beeba">Beeba</option>
                <option value="genie">Genie</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={getMinDate()}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-slate-400 mb-1">Preferred Time</label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                >
                  <option value="" disabled>Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="struggles" className="block text-sm font-medium text-slate-400 mb-1">What Are You Currently Struggling With?</label>
              <textarea
                id="struggles"
                name="struggles"
                required
                value={formData.struggles}
                onChange={handleChange}
                rows={4}
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                placeholder="Tell us about your current challenges..."
              />
            </div>

            <Button 
              type="submit" 
              fullWidth 
              glowColor="blue"
              disabled={status === FormStatus.SUBMITTING}
              className={status === FormStatus.SUBMITTING ? 'opacity-70 cursor-not-allowed' : ''}
            >
              {status === FormStatus.SUBMITTING ? 'Processing...' : 'Submit Inquiry'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;