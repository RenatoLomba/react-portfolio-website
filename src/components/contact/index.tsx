import { FC, FormEvent, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import data from '../../configs/data.json';
import { ContactOption } from './contact-option';
import styles from './contact.module.scss';

const { email, messenger, whatsapp } = data.contactOptions;

export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const canSendMessage =
    !!name.trim() && !!senderEmail.trim() && !!message.trim();

  const clearMessageFields = () => {
    setName('');
    setSenderEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!canSendMessage) return;

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email: senderEmail,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast('Message sended!', { type: 'success', theme: 'colored' });

      clearMessageFields();
    } catch (err) {
      toast('Oops, sorry, we cannot send your message now...', {
        type: 'error',
        theme: 'colored',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactOptions}>
          <ContactOption
            option="Email"
            value={email}
            icon={MdOutlineEmail}
            href={`mailto:${email}`}
          />
          <ContactOption
            option="Messenger"
            value={messenger}
            icon={RiMessengerLine}
            href={`https://m.me/${messenger}`}
          />
          <ContactOption
            option="WhatsApp"
            value={whatsapp}
            icon={BsWhatsapp}
            href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>

          <button
            disabled={!canSendMessage || isSending}
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};
