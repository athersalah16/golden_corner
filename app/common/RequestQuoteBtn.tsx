import { Send } from "lucide-react";

function RequestQuoteBtn() {
  return (
    <a
      href="/contact"
      className=" w-full bg-yellow-500 flex flex-row justify-center gap-3 items-center text-white p-4 cursor-pointer hover:bg-yellow-600 rounded-md duration-300 transition-colors"
    >
     <Send size={20}/>  Request a Quote
    </a>
  );
}

export default RequestQuoteBtn;
