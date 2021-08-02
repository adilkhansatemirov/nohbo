import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from 'styles/Brands/Subscribe/Subscribe.module.scss';

const schema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

function Subscribe({ toast }) {
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
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setSubmitting(true);
    axios
      .post('https://nonbo-api.herokuapp.com/mail', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: 'Hello, I would like to subscribe to your news letter',
      })
      .then(() => {
        console.log('posted');
        setSubmitting(false);
        toast.success('You will now receive emails! 🚀');
        reset();
      })
      .catch(() => {
        console.log('error');
        setSubmitting(false);
        toast.error('Something went wrong 😶');
        reset();
      });
  }

  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <h3 className={styles.title}>Single-use, waste-free emails</h3>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputLine}>
            <div className={styles.inputContainer}>
              <input
                {...register('firstName')}
                className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                type="text"
                placeholder="First Name"
              />
              <p className={styles.helperText}>{errors.firstName && errors.firstName.message}</p>
            </div>
          </div>
          <div className={styles.inputLine}>
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
            <button disabled={submitting} type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
