import { FaWhatsapp } from "react-icons/fa";


function ChatOnWhatsApp() {
    return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.link/cwxtzq"
      className="border-none outline-none bg-green-500 flex flex-row  gap-3 cursor-pointer justify-center items-center text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
    >
      <FaWhatsapp /> Chat on WhatsApp
    </a>
  )
}

export default ChatOnWhatsApp
