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
      className='flex flex-col items-center mb-6 w-full px-4'
    >
      <div className='mb-5 w-full max-w-sm mx-auto'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-lime-8'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Gary Larson'
          className='w-full transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-6 outline-none focus:bg-lime-0/90 focus:shadow-md focus:text-lime-9'
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
          className='mb-3 block text-base font-medium text-lime-8'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-6 outline-none focus:bg-lime-0/90 focus:shadow-md focus:text-lime-9'
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
          className='mb-3 block text-base font-medium text-lime-8'
        >
          Message
        </label>

        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none transform -skew-x-9 bg-lime-0/20 py-3 px-6 text-base font-medium text-lime-6 outline-none focus:bg-lime-0/90 focus:shadow-md focus:text-lime-9'
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
        <button className='-skew-x-9 bg-lime-8/90 py-3 px-8 text-base font-semibold text-lime-0 outline-none hover:bg-lime-0/90 hover:text-lime-9 focus:ring-4 focus:ring-lime-0'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
