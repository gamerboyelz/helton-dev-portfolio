import emailjs from 'emailjs';

const sendEmail = (email)=>{
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', email)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
}