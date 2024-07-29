'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

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
      <div className='mb-5 w-full max-w-sm mx-auto'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-lime-3'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Gary Larson'
          className='w-full transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-1 placeholder:text-gray-5 outline-none focus:bg-lime-1 focus:shadow-md focus:text-lime-13'
          {...register('name', { required: true })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Name is required
          </p>
        )}
      </div>
      <div className='mb-5 w-full max-w-sm mx-auto'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-lime-3'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-1 placeholder:text-gray-5 outline-none focus:bg-lime-1 focus:shadow-md focus:text-lime-13'
          {...register('email', { required: true })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Email is required
          </p>
        )}
      </div>
      <div className='mb-5 w-full max-w-sm mx-auto'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-lime-3'
        >
          Message
        </label>

        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-1 placeholder:text-gray-5 outline-none focus:bg-lime-1 focus:shadow-md focus:text-lime-13'
          {...register('message', { required: true })}
          aria-invalid={errors.email ? 'true' : 'false'}
        ></textarea>
        {errors.message?.type === 'required' && (
          <p role='alert' className='text-red-6'>
            Message is required
          </p>
        )}
      </div>
      <div className='w-full max-w-md mx-auto flex justify-center'>
        <button className='-skew-x-9 bg-lime-7/70 py-3 px-8 text-base font-semibold text-lime-0 outline-none hover:bg-lime-0/90 hover:text-lime-13 focus:ring-4 focus:ring-lime-0'>
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
