import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // For validation
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert('Form Submitted Successfully');
    },
  });

  return (
    <section id="contact" className='flex flex-col items-center justify-center scroll-m-24'>
      <h1 className='text-4xl font-semibold'>Contact</h1>
      <div className='bg-blue-500 h-1 my-4 w-16'></div>
      <p className='mx-4 text-gray-700 text-center mb-2'>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
      <div className='my-16 w-full px-8 md:px:12 lg:px-28'>
        <div className='grid grid-col-1 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.05)] gap-10 lg:gap-0 lg:grid-cols-3 py-6 px-8'>
          <div className='flex items-center group gap-4'>
            <FontAwesomeIcon
              icon={faMapMarker}
              className='text-sm size-8 p-3 text-blue-600 bg-white border border-blue-600 rounded-full group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 ease-in-out'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Address</h1>
              <p className='text-sm'>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className='flex items-center group gap-4'>
            <FontAwesomeIcon
              icon={faPhone}
              className='text-sm size-8 p-3 text-blue-600 bg-white border border-blue-600 rounded-full group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 ease-in-out'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Call Us</h1>
              <p className='text-sm'>+1 5589 55488 55</p>
            </div>
          </div>
          <div className='flex items-center group gap-4'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-sm size-8 p-3 text-blue-600 bg-white border border-blue-600 rounded-full group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 ease-in-out'
            />
            <div>
              <h1 className='font-semibold text-xl leading-5 py-1'>Email Us</h1>
              <p className='text-sm'>info@example.com</p>
            </div>
          </div>
        </div>
        <div className='shadow-[10px_10px_10px_10px_rgba(0,0,0,0.05)] mt-8 p-8'>
          <form onSubmit={formik.handleSubmit} className='flex flex-col justify-between items-center'>
            <div className='flex flex-col w-full justify-between items-center md:flex-row'>
              <div className='mx-0 md:mr-4 mb-4 w-full md:w-1/2'>
                <input
                  className='mb-1 px-5 py-3 w-full border-[1px] text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('name')}
                  type="text"
                  placeholder="Name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className='text-red-800 w-full'>{formik.errors.name}</p>
                ) : null}
              </div>
              <div className='mx-0 md:ml-4 mb-4 w-full md:w-1/2'>
                <input
                  className='mb-1 px-5 py-3 text-black w-full border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                  {...formik.getFieldProps('email')}
                  type="email"
                  placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className='text-red-800 w-full'>{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className='mb-4 w-full'>
              <input
                className='mb-1 px-5 py-3 w-full border-[1px] text-black border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('subject')}
                type="text"
                placeholder="Subject"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className='text-red-800 w-full'>{formik.errors.subject}</p>
              ) : null}
            </div>
            <div className='w-full'>
              <textarea
                className='w-full h-40 px-5 py-3 text-black border-[1px] border-gray-200 focus:border-gray-400 focus:outline-none'
                {...formik.getFieldProps('message')}
                placeholder="Message"
              />
              {formik.touched.message && formik.errors.message ? (
                <p className='text-red-800'>{formik.errors.message}</p>
              ) : null}
            </div>
            <div className='w-auto'>
              <Button type="submit">SEND MESSAGE</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
