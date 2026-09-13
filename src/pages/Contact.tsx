import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Send } from 'lucide-react';
import { ConcentricRipple } from '../components/ConcentricRipple';
import { useCurrency } from '../context/CurrencyContext';

export default function Contact() {
  const { currency, toggle } = useCurrency();
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    service: 'Web Development', 
    budget: 'Not sure yet',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kiran.mannepalli.in@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          service: formState.service,
          budget: formState.budget,
          message: formState.message,
          _subject: `New Project Inquiry from ${formState.name} - ${formState.service}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', service: 'Web Development', budget: 'Not sure yet', message: '' });
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#0B0B0F]">
      {/* 
        ========================================================================
        CONTACT HERO (Background: Soft Line #F8FAFC - design.md #77)
        ========================================================================
      */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pb-14 px-6 sm:px-10 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        {/* Subtle Neutral Ripple Watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 pointer-events-none opacity-40">
          <ConcentricRipple 
            id="contact-hero-ripple" 
            variant="neutral-light" 
            placement="bottom-right" 
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-2">Initiate a Collaboration</div>
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0B0F] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Start a <span className="text-[#EF4444]">Project</span>
          </h1>
          <p className="text-[#475569] text-base sm:text-lg max-w-2xl leading-relaxed">
            Have a project in mind, an existing system to modernize, or an engineering role to fill? Let's discuss your requirements.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTACT FORM & DETAILS (Background: White #FFFFFF - design.md #50, #51)
        ========================================================================
      */}
      <section className="py-12 sm:py-14 px-6 sm:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#0B0B0F] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Direct Communication
              </h2>
              <p className="text-[#475569] text-sm leading-relaxed mb-8">
                We respond to all verified project inquiries within 24 business hours with an initial scope review.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px] flex items-start gap-4 group hover:border-[#EF4444] transition-all duration-300">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id="contact-mail-ripple" variant="soft-rose" placement="bottom-right" />
                </div>
                <div className="w-10 h-10 rounded-[6px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#EF4444] shrink-0 relative z-10">
                  <Mail size={18} />
                </div>
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider text-[#475569] font-medium mb-0.5">Email Inquiries</div>
                  <a href="mailto:contact@tekloria.in" className="text-base font-semibold text-[#0B0B0F] hover:text-[#EF4444] transition-colors">
                    contact@tekloria.in
                  </a>
                </div>
              </div>

              <a 
                href="https://wa.me/918520950487" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px] flex items-start gap-4 group hover:border-[#EF4444] transition-all duration-300 cursor-pointer block"
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id="contact-phone-ripple" variant="soft-rose" placement="bottom-right" />
                </div>
                <div className="w-10 h-10 rounded-[6px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#EF4444] shrink-0 relative z-10">
                  <Phone size={18} />
                </div>
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider text-[#475569] font-medium mb-0.5">WhatsApp</div>
                  <div className="text-base font-semibold text-[#0B0B0F] group-hover:text-[#EF4444] transition-colors">
                    +91 85209 50487
                  </div>
                  <p className="text-xs text-[#475569] mt-0.5">Tap to open WhatsApp</p>
                </div>
              </a>

              <div className="relative overflow-hidden p-6 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px] flex items-start gap-4 group hover:border-[#EF4444] transition-all duration-300">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-105">
                  <ConcentricRipple id="contact-loc-ripple" variant="soft-rose" placement="bottom-right" />
                </div>
                <div className="w-10 h-10 rounded-[6px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#EF4444] shrink-0 relative z-10">
                  <MapPin size={18} />
                </div>
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider text-[#475569] font-medium mb-0.5">Office Location</div>
                  <p className="text-base font-semibold text-[#0B0B0F]">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="relative overflow-hidden p-6 bg-[#F7F5F5] border border-[#E5E7EB] rounded-[6px]">
              <div className="absolute -right-8 -bottom-8 w-44 h-44 pointer-events-none opacity-40">
                <ConcentricRipple 
                  id="contact-next-ripple" 
                  variant="neutral-sand" 
                  placement="bottom-right" 
                />
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-semibold text-[#0B0B0F] mb-2">What Happens Next?</h4>
                <ol className="space-y-2 text-xs text-[#475569] list-decimal list-inside leading-relaxed">
                  <li>Initial scope assessment within 24 hours</li>
                  <li>Discovery call to align on technical stack & timeline</li>
                  <li>Formal project proposal with fixed milestone deliverables</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Column: Project Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden p-8 sm:p-10 bg-white border border-[#E5E7EB] rounded-[6px]">
              {submitted ? (
                <div className="py-16 text-center space-y-4 relative z-10">
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0">
                      <ConcentricRipple id="success-target" variant="mini-target" size="sm" />
                    </div>
                    <div className="relative z-10 w-10 h-10 bg-[#E6F4EA] text-[#1F2937] rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle2 size={24} className="text-[#1F2937]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0B0B0F]" style={{ fontFamily: 'var(--font-display)' }}>
                    Inquiry Received!
                  </h3>
                  <p className="text-[#475569] text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A lead technical architect will review your project requirements and follow up shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-sm text-[#EF4444] font-medium hover:underline pt-4"
                  >
                    Submit another inquiry <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-white border border-[#E5E7EB] rounded-[6px] px-4 py-3 text-sm text-[#0B0B0F] placeholder-[#475569] focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15 transition-all"
                        value={formState.name} 
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@company.com"
                        className="w-full bg-white border border-[#E5E7EB] rounded-[6px] px-4 py-3 text-sm text-[#0B0B0F] placeholder-[#475569] focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15 transition-all"
                        value={formState.email} 
                        onChange={e => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider mb-2">
                        Service of Interest
                      </label>
                      <select 
                        className="w-full bg-white border border-[#E5E7EB] rounded-[6px] px-4 py-3 text-sm text-[#0B0B0F] focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15 transition-all"
                        value={formState.service} 
                        onChange={e => setFormState({...formState, service: e.target.value})}
                      >
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>ERP Development</option>
                        <option>Graphic & UI/UX Design</option>
                        <option>Business Strategy & Marketing</option>
                        <option>HR Recruiting Services</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider">
                          Project Budget
                        </label>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold ${currency === 'INR' ? 'text-[#0B0B0F]' : 'text-[#475569]'}`}>INR</span>
                          <button 
                            type="button"
                            onClick={toggle}
                            className="w-8 h-4 rounded-full bg-[#E5E7EB] relative transition-colors duration-300"
                            aria-label="Toggle currency"
                          >
                            <div className={`absolute top-[2px] left-[2px] w-3 h-3 rounded-full bg-[#EF4444] transition-transform duration-300 ${currency === 'USD' ? 'translate-x-4' : 'translate-x-0'}`} />
                          </button>
                          <span className={`text-[10px] font-bold ${currency === 'USD' ? 'text-[#0B0B0F]' : 'text-[#475569]'}`}>USD</span>
                        </div>
                      </div>
                      <select 
                        className="w-full bg-white border border-[#E5E7EB] rounded-[6px] px-4 py-3 text-sm text-[#0B0B0F] focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15 transition-all"
                        value={formState.budget} 
                        onChange={e => setFormState({...formState, budget: e.target.value})}
                      >
                        <option>Not sure yet</option>
                        {currency === 'INR' ? (
                          <>
                            <option>₹25k - ₹1L</option>
                            <option>₹1L - ₹5L</option>
                            <option>₹5L - ₹15L</option>
                            <option>₹15L+</option>
                          </>
                        ) : (
                          <>
                            <option>$500 - $2k</option>
                            <option>$2k - $10k</option>
                            <option>$10k - $25k</option>
                            <option>$25k+</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B0B0F] uppercase tracking-wider mb-2">
                      Project Details & Scope *
                    </label>
                    <textarea 
                      required 
                      rows={5}
                      placeholder="Describe your product vision, timeline, or current technical bottlenecks..."
                      className="w-full bg-white border border-[#E5E7EB] rounded-[6px] px-4 py-3 text-sm text-[#0B0B0F] placeholder-[#475569] focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15 transition-all resize-none"
                      value={formState.message} 
                      onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#D93636] text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                    </button>
                    
                    <a 
                      href="https://wa.me/918520950487" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0 group-hover:opacity-100 rounded-full"></span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-5 h-5 group-hover:animate-bounce relative z-10"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <span className="relative z-10">Chat</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
