import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps {
  phoneNumber: string
  message: string
}

function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white shadow-lg shadow-emerald-300 transition hover:scale-105 hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
