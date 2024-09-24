'use client'

import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Input } from '../Input'
import { Textarea } from '../TextArea'
import Button from '../Button'


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
]

const transitionClasses = {
  enter: 'transform transition ease-in-out duration-500 sm:duration-700',
  enterFrom: 'translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transform transition ease-in-out duration-500 sm:duration-700',
  leaveFrom: 'translate-x-0',
  leaveTo: 'translate-x-full',
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-12 text-center lg:text-4xl">
          {`Let's Talk`}
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  label="Message"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" onClick={() => { }} className="w-full h-10 px-4" >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-4 mt-12 lg:mt-0">
            {faqs.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <DisclosureButton className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
                      <DisclosurePanel className="p-6 bg-gray-50">
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
  )
}

export default ContactSection