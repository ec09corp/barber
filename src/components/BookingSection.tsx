import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Scissors,
  CheckCircle,
  Phone,
  MessageSquare,
  Sparkles,
  ExternalLink,
  RotateCcw
} from "lucide-react";
import { noirConfig } from "../data/noirConfig";
import { BookingFormData, Service, Barber } from "../types";

interface BookingSectionProps {
  initialServiceId?: string;
  initialBarberId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId,
  initialBarberId,
}) => {
  // Generate dates for the next 10 days
  const today = new Date();
  const availableDates = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const monthNames = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    return {
      iso: d.toISOString().split("T")[0],
      dayName: dayNames[d.getDay()],
      dayNumber: d.getDate(),
      month: monthNames[d.getMonth()],
      isSunday: d.getDay() === 0,
      fullDisplay: `${dayNames[d.getDay()]}, ${d.getDate()} de ${monthNames[d.getMonth()]}`
    };
  });

  const availableTimeSlots = [
    "10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    barberId: initialBarberId || noirConfig.barbers[0].id,
    serviceId: initialServiceId || noirConfig.services[0].id,
    date: availableDates[0].iso,
    timeSlot: "11:00",
    notes: "",
  });

  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    details: BookingFormData;
    serviceName: string;
    servicePrice: number;
    barberName: string;
    dateFormatted: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  // Sync props if changed externally
  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialBarberId) {
      setFormData((prev) => ({ ...prev, barberId: initialBarberId }));
    }
  }, [initialBarberId]);

  const selectedService = noirConfig.services.find((s) => s.id === formData.serviceId) || noirConfig.services[0];
  const selectedBarber = noirConfig.barbers.find((b) => b.id === formData.barberId) || noirConfig.barbers[0];

  const validate = () => {
    const errors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) errors.name = "Por favor, introduce tu nombre";
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      errors.phone = "Por favor, introduce un teléfono válido";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    /**
     * =========================================================================
     * PREPARACIÓN PARA SISTEMAS EXTERNOS / BACKEND:
     * Aquí es donde se conectará fácilmente en producción:
     * 1. Google Calendar API (creación de evento con recordatorio al cliente)
     * 2. Webhook hacia Make / Zapier / n8n para notificación de reserva
     * 3. Base de datos (Firestore / Supabase / PostgreSQL)
     * 4. Envío de SMS / WhatsApp Business API
     * =========================================================================
     */
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = "NOIR-" + Math.floor(1000 + Math.random() * 9000);
      const dateObj = availableDates.find((d) => d.iso === formData.date);

      setConfirmedBooking({
        reference: randomRef,
        details: { ...formData },
        serviceName: selectedService.name,
        servicePrice: selectedService.price,
        barberName: selectedBarber.name,
        dateFormatted: dateObj ? dateObj.fullDisplay : formData.date,
      });
    }, 450);
  };

  const generateWhatsAppConfirmationUrl = () => {
    if (!confirmedBooking) return "#";
    const text = `Hola Noir Barber Studio, confirmo mi reserva:\n- Ref: ${confirmedBooking.reference}\n- Cliente: ${confirmedBooking.details.name}\n- Servicio: ${confirmedBooking.serviceName} ($${confirmedBooking.servicePrice} USD)\n- Barbero: ${confirmedBooking.barberName}\n- Fecha: ${confirmedBooking.dateFormatted}\n- Hora: ${confirmedBooking.details.timeSlot} hrs.`;
    return `https://wa.me/${noirConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const generateGoogleCalendarUrl = () => {
    if (!confirmedBooking) return "#";
    const title = `Cita: ${confirmedBooking.serviceName} @ Noir Barber Studio`;
    const details = `Cita de barbería con ${confirmedBooking.barberName}. Referencia: ${confirmedBooking.reference}`;
    const location = noirConfig.contact.address;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  };

  const handleResetBooking = () => {
    setConfirmedBooking(null);
    setFormData((prev) => ({
      ...prev,
      name: "",
      phone: "",
      notes: "",
    }));
  };

  return (
    <section id="reservas" className="py-28 md:py-36 bg-[#09090b] text-[#f4f3ef] border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#c5a059] font-medium">
              AGENDA ONLINE
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.08em] text-[#f4f3ef]">
            RESERVA TU SILLA
          </h2>
          <p className="text-sm text-[#8e8d89] max-w-md mt-4 leading-relaxed font-normal">
            Selecciona tu servicio, barbero y horario preferido. Sin pagos por adelantado requeridos.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!confirmedBooking ? (
            /* Booking Form */
            <motion.form
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-[#111114] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl space-y-10"
            >
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold mb-4 flex items-center gap-2">
                  <Scissors className="w-4 h-4" />
                  <span>1. SELECCIONA EL SERVICIO</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {noirConfig.services.map((srv: Service) => {
                    const isSelected = formData.serviceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                        className={`p-4 border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#18181c] border-[#c5a059] text-white shadow-md shadow-[#c5a059]/10"
                            : "bg-[#0c0c0f] border-white/5 text-[#8e8d89] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[10px] font-mono tracking-widest ${isSelected ? "text-[#c5a059]" : "text-[#8e8d89]"}`}>
                            {srv.number}
                          </span>
                          <span className="text-xs font-bold text-[#f4f3ef]">
                            ${srv.price} {srv.currency}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold tracking-wider uppercase text-[#f4f3ef] mb-1">
                          {srv.name}
                        </h4>
                        <span className="text-[11px] text-[#8e8d89]">
                          {srv.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Barber */}
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>2. SELECCIONA TU BARBERO</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {noirConfig.barbers.map((b: Barber) => {
                    const isSelected = formData.barberId === b.id;
                    return (
                      <div
                        key={b.id}
                        onClick={() => setFormData({ ...formData, barberId: b.id })}
                        className={`p-4 border cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                          isSelected
                            ? "bg-[#18181c] border-[#c5a059] text-white shadow-md shadow-[#c5a059]/10"
                            : "bg-[#0c0c0f] border-white/5 text-[#8e8d89] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <img
                          src={b.photo}
                          alt={b.name}
                          className={`w-12 h-12 object-cover rounded-full border ${
                            isSelected ? "border-[#c5a059]" : "border-white/10"
                          }`}
                        />
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-[#f4f3ef]">
                            {b.name}
                          </h4>
                          <span className="text-[11px] text-[#c5a059] font-medium block">
                            {b.role}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Select Date & Time */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Date Horizontal Picker */}
                <div className="lg:col-span-7">
                  <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>3. SELECCIONA FECHA</span>
                  </label>

                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {availableDates.map((d) => {
                      const isSelected = formData.date === d.iso;
                      return (
                        <button
                          type="button"
                          key={d.iso}
                          onClick={() => setFormData({ ...formData, date: d.iso })}
                          className={`p-3 text-center border cursor-pointer transition-all duration-200 flex flex-col items-center ${
                            isSelected
                              ? "bg-[#c5a059] border-[#c5a059] text-[#09090b] font-bold"
                              : "bg-[#0c0c0f] border-white/5 text-[#8e8d89] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <span className="text-[10px] uppercase tracking-wider">{d.dayName}</span>
                          <span className="text-lg font-display font-bold leading-tight">{d.dayNumber}</span>
                          <span className="text-[9px] uppercase tracking-wider opacity-80">{d.month}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slot Grid */}
                <div className="lg:col-span-5">
                  <label className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>4. SELECCIONA HORA</span>
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {availableTimeSlots.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-2.5 text-center text-xs tracking-wider font-mono border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-[#c5a059] border-[#c5a059] text-[#09090b] font-bold"
                              : "bg-[#0c0c0f] border-white/5 text-[#8e8d89] hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="pt-6 border-t border-white/10">
                <span className="block text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold mb-4">
                  5. TUS DATOS DE CONTACTO
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8e8d89] mb-2 font-medium">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      id="booking-input-name"
                      required
                      placeholder="Ej: David Martínez"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-[#0c0c0f] border text-sm text-[#f4f3ef] placeholder-[#8e8d89]/50 focus:outline-none transition-colors ${
                        formErrors.name ? "border-red-500" : "border-white/10 focus:border-[#c5a059]"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8e8d89] mb-2 font-medium">
                      Teléfono Móvil (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      id="booking-input-phone"
                      required
                      placeholder="Ej: +34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-[#0c0c0f] border text-sm text-[#f4f3ef] placeholder-[#8e8d89]/50 focus:outline-none transition-colors ${
                        formErrors.phone ? "border-red-500" : "border-white/10 focus:border-[#c5a059]"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Optional notes */}
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-wider text-[#8e8d89] mb-2 font-medium">
                    Notas o Preferencias (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Primera vez en Noir, prefiero degradado medio."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0c0c0f] border border-white/10 text-sm text-[#f4f3ef] placeholder-[#8e8d89]/50 focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="p-5 bg-[#0c0c0f] border border-[#c5a059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#c5a059]/10 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8e8d89] block">
                      RESUMEN DE RESERVA
                    </span>
                    <span className="text-sm font-bold text-[#f4f3ef]">
                      {selectedService.name} • Con {selectedBarber.name} • {formData.timeSlot} hrs
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-[#8e8d89] mr-2">Total a pagar en estudio:</span>
                  <span className="font-display font-extrabold text-2xl text-[#c5a059]">
                    ${selectedService.price} {selectedService.currency}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="booking-confirm-btn"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c5a059] hover:bg-[#d8b46e] text-[#09090b] text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 active:scale-98 shadow-xl shadow-[#c5a059]/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>PROCESANDO RESERVA...</span>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>CONFIRMAR RESERVA</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            /* Confirmation State (Booking Receipt) */
            <motion.div
              key="booking-confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111114] border-2 border-[#c5a059] p-8 sm:p-12 md:p-14 shadow-2xl text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c5a059] mb-2">
                ¡RESERVA REGISTRADA CON ÉXITO!
              </span>

              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#f4f3ef] mb-4">
                TE ESPERAMOS EN NOIR
              </h3>

              <div className="px-4 py-2 bg-black/60 border border-white/10 font-mono text-xs text-[#c5a059] tracking-widest uppercase mb-8">
                CÓDIGO DE RESERVA: {confirmedBooking.reference}
              </div>

              {/* Receipt Summary Card */}
              <div className="w-full max-w-md bg-[#0c0c0f] border border-white/10 p-6 text-left space-y-3 mb-8">
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-[#8e8d89]">Cliente:</span>
                  <span className="font-semibold text-[#f4f3ef]">{confirmedBooking.details.name}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-[#8e8d89]">Teléfono:</span>
                  <span className="font-mono text-[#f4f3ef]">{confirmedBooking.details.phone}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-[#8e8d89]">Servicio:</span>
                  <span className="font-semibold text-[#c5a059]">{confirmedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-[#8e8d89]">Barbero asignado:</span>
                  <span className="font-semibold text-[#f4f3ef]">{confirmedBooking.barberName}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-[#8e8d89]">Fecha y Hora:</span>
                  <span className="font-semibold text-[#f4f3ef]">
                    {confirmedBooking.dateFormatted} — {confirmedBooking.details.timeSlot} hrs
                  </span>
                </div>
                <div className="flex justify-between text-xs pt-2">
                  <span className="text-[#8e8d89]">Total en caja:</span>
                  <span className="font-display font-black text-lg text-[#c5a059]">
                    ${confirmedBooking.servicePrice} USD
                  </span>
                </div>
              </div>

              {/* Fast Action Buttons: WhatsApp & Calendar */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mb-8">
                <a
                  href={generateWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#09090b] text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CONFIRMAR EN WHATSAPP</span>
                </a>

                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#16161a] hover:bg-[#232328] border border-white/15 text-[#f4f3ef] text-xs font-semibold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-[#c5a059]" />
                  <span>AGREGAR A CALENDARIO</span>
                </a>
              </div>

              {/* Re-book / modify button */}
              <button
                onClick={handleResetBooking}
                className="text-xs text-[#8e8d89] hover:text-[#c5a059] transition-colors flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Hacer otra reserva o cambiar datos</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
