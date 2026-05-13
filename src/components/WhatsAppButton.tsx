export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5519983741258&text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates.%20Pode%20me%20ajudar?"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-[9999] flex items-center group"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
        referrerPolicy="no-referrer"
      />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold">
        Agende sua Aula
      </span>
    </a>
  );
}
