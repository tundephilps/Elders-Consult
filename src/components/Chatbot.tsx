import { PiChats } from "react-icons/pi";

const Chatbot = () => {
  const whatsappNumber = "+2348032422357"; // Replace with your WhatsApp number
  const startWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "150px" /* Adjust as needed to position the icon vertically */,
        right: "90px",
      }}
      className="animate-bouncer"
    >
      <div className="relative  ml-[100%] cursor-pointer animate-bouncer">
        <div
          className=" h-6 w-6 flex items-center justify-center text-white -top-3 z-10 left-10 absolute "
          style={{ backgroundColor: "red", borderRadius: "100%" }}
        >
          1
        </div>
        <div
          className="bg-orange-900 h-16 w-16 rounded-full absolute flex items-center justify-center "
          data-number={whatsappNumber}
          data-message="Hello, I have a question"
          onClick={startWhatsAppChat}
        >
          <PiChats className="h-12 w-12 text-white animate-bouncer" />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
