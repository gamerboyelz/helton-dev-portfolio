import { useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

/*very important   ----Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`.*/

Modal.setAppElement(document.getElementById("root"));

// const sendEmail = new emailjs

const FormPopUpModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleClickopenModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    // function that clear form fields and close modal here.......
    clearFormFields();
    setIsOpen(false);
  }
  // function to clear form fields when closed or send is clicked
  function clearFormFields(){
    setEmailAddress("")
    setName("")
    setMessage("")
  }

  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      from: { emailAddress },
      emailAddress: { emailAddress },
      message: { message },
      name: { name },
    };
    console.log("form submit");
    console.log(emailData);


    //  method taken from emailjs to assit with sending emails below-----
    
    emailjs
      .send("service_08ncjdg", "template_qvr5sqc", emailData.message, {
        publicKey: "bsyXAxXpfPAy4MewL",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

      // ----------------------------------------------------------------

    closeModal();
  };

  return (
    <div className="popUpModalContainer">
      <button className="btn-HeroSection" onClick={handleClickopenModal}>
        HIRE ME
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

        <form id="modalFormId">
          <input
            type="email"
            placeholder="Enter your email address."
            name="emailAddress"
            value={emailAddress}
            onChange={(event) => {
              setEmailAddress(event.target.value);
            }}
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            placeholder="Send me a message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </form>
        <div className="modalButtonContainer">
          <button className="modalBtn-HeroSection" onClick={closeModal}>
            cancel
          </button>
          <button
            className="modalBtn-HeroSection"
            form="modalFormId"
            onClick={handleFormSubmit}
          >
            {" "}
            Send{" "}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FormPopUpModal;

/*emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }; */

