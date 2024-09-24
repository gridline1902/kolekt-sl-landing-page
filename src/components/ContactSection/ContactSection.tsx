"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Button from '../Button';

const faqs = [
  {
    id: 1,
    question: "Is it really free? No catch?",
    answer: "Yes, Kolekt is really free. This is our way of enhancing financial inclusion and encouraging merchants to join the digital economy. You will need to have a settlement account to instantly settle all payments. In addition to the settlement account, you and your staff will also receive notifications on WhatsApp for every payment received."
  },
  {
    id: 2,
    question: "What do you mean I need to have a settlement account?",
    answer: "Kolekt is not affiliated with any bank or mobile money service. It is an independent system designed to make in-person payments easier for small businesses. To use Kolekt, you simply create an account and start receiving payments, which are instantly settled in your preferred account. No technical knowledge is necessary, making it easy to use overall."
  },
  {
    id: 3,
    question: "Can I use my existing merchant account?",
    answer: "Yes, Kolekt payments can be settled in your existing merchant account. You simply need to verify your merchant account and connect it as your settlement account. You are also free to change the settlement account at any time."
  },
];

export const transitionClasses = {
  enter: 'transform transition ease-in-out duration-500 sm:duration-700',
  enterFrom: 'translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transform transition ease-in-out duration-500 sm:duration-700',
  leaveFrom: 'translate-x-0',
  leaveTo: 'translate-x-full',
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mb-8 text-left lg:text-3xl">
          {`Let's talk`}
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    onClick={() => { }}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">About KOLEKT</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gray-900">Who is Kolekt for?</h5>
                  <p className="text-gray-700">Kolekt is built for small businesses to quickly set up and start collecting in-person payments that are instantly settled.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Who is Kolekt not for?</h5>
                  <p className="text-gray-700">Kolekt is not intended for use by large businesses, enterprises, fintech, or e-commerce solution providers. For these types of users, please visit <a href="https://monime.io" className="text-blue-600 hover:underline">monime.io</a>.</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">New here?</h5>
                  <p className="text-gray-700">Begin by setting up a free account or reach out to us at <a href="tel:078102030" className="text-blue-600 hover:underline">078102030</a> or <a href="mailto:info@monime.io" className="text-blue-600 hover:underline">info@monime.io</a>.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8 lg:mt-0">
            {faqs.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <DisclosureButton className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                        {open ? (
                          <FiChevronUp className="h-5 w-5 text-blue-500" />
                        ) : (
                          <FiChevronDown className="h-5 w-5 text-blue-500" />
                        )}
                      </div>
                    </DisclosureButton>
                    <Transition
                      show={open}
                      {...transitionClasses}
                    >
                      <DisclosurePanel className="p-4 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-700">{faq.answer}</p>
                      </DisclosurePanel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
