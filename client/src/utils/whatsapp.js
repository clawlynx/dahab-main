export const handleChatClick = () => {
  const phoneNumber = "+971568145866"; // Replace with the actual phone number
  const message = "Hello! I would like to chat."; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => {
  const phoneNumber = "+971568145866";
  const messageContent = `FIRST NAME : ${firstName}\n LAST NAME : ${lastName}\n EMAIL : ${email}\n PHONE : ${phone}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleProductEnquiry = ({ name }) => {
  const phoneNumber = "+971568145866";
  const messageContent = `Hi i would like to know more details about the product ${name}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
