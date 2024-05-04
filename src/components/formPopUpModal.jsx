import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#app');

const formPopUpModal = ()=> {
    let subtitle;

    const [formPopUp, setformPopUp] = useState(false)

    const openFormPopUp = ()=>{
        setformPopUp(true)
    }
    const afterOpenFormPopUp = ()=> {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      const closeFormPopUp = ()=>  {
        setIsOpen(false);
      }


    
  return (
    <div>
      <button onClick={openFormPopUp}>Open Modal</button>
      <Modal
        isOpen={formPopUp}
        onAfterOpen={afterOpenFormPopUp}
        onRequestClose={closeFormPopUp}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeFormPopUp}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}
export default formPopUpModal;