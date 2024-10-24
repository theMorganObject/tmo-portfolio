'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './constact-form.module.css';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        reset();
      })
      .catch((err) => {
        alert(err);
      });
  }

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center w-full px-5'
    >
      <div className='mb-5 w-full max-w-sm mx-auto text-center'>
        <label htmlFor='name' className='mb-3 block text-base font-medium'>
          Full Name
        </label>
        <input
          type='text'
          placeholder='Gary Larson'
          className={`w-full py-3 px-6 text-base font-medium 
            placeholder:text-gray-5 outline-none  
            focus:shadow-md focus:text-lime-13 ${styles.trapezoid}`}
          {...register('name', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Name is required
          </p>
        )}
      </div>

      <div className='mb-5 w-full max-w-sm mx-auto text-center'>
        <label htmlFor='email' className='mb-3 block text-base font-medium'>
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className={`w-full py-3 px-6 text-base font-medium placeholder:text-gray-5 outline-none focus:shadow-md focus:text-lime-13 ${styles.trapezoid}`}
          {...register('email', { required: true })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Email is required
          </p>
        )}
      </div>

      <div className='mb-5 w-full max-w-sm mx-auto text-center'>
        <label htmlFor='message' className='mb-3 block text-base font-medium'>
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className={`w-full py-3 px-6 text-base font-medium placeholder:text-gray-5 outline-none focus:shadow-md focus:text-lime-13 ${styles.inverted}`}
          {...register('message', { required: true })}
          aria-invalid={errors.message ? 'true' : 'false'}
        ></textarea>
        {errors.message?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Message is required
          </p>
        )}
      </div>

      <div className='w-full max-w-md mx-auto flex justify-center'>
        <button
          type='submit'
          className={`py-3 px-8 text-base font-semibold outline-none transition-all ${styles.trapezoidButton}`}
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
