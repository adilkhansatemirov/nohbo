import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from 'styles/ContactUs/Form/Form.module.scss';

const schema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function Form({ toast }) {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setSubmitting(true);
    console.log('toast', toast);
    axios
      .post('https://nonbo-api.herokuapp.com/mail', data)
      .then(() => {
        console.log('posted');
        setSubmitting(false);
        toast.success('Your message has been delivered! 🚀');
        reset();
      })
      .catch(() => {
        console.log('error');
        setSubmitting(false);
        toast.error('Something went wrong 😶');
        reset();
      });
    console.log(data);
  }

  return (
    <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputLine}>
        <div className={styles.inputContainer}>
          <input
            {...register('firstName')}
            style={{ marginRight: '15px' }}
            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
            type="text"
            placeholder="First Name"
          />
          <p className={styles.helperText}>{errors.firstName && errors.firstName.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register('lastName')}
            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
            type="text"
            placeholder="Last Name"
          />
          <p className={styles.helperText}>{errors.lastName && errors.lastName.message}</p>
        </div>
      </div>
      <div className={styles.inputLine}>
        <div className={styles.inputContainer}>
          <input
            {...register('email')}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            type="text"
            placeholder="Email Address"
          />
          <p className={styles.helperText}>{errors.email && errors.email.message}</p>
        </div>
      </div>
      <div className={styles.inputLine}>
        <div className={styles.inputContainer}>
          <textarea
            {...register('message')}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            placeholder="Message"
          />
          <p className={styles.helperText}>{errors.message && errors.message.message}</p>
        </div>
      </div>
      <div className={styles.inputLine}>
        <button disabled={submitting} type="submit" className={styles.button}>
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;
