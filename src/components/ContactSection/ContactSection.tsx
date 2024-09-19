
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section>
      <div className="bg-gray-500">
        <Disclosure>
          <DisclosureButton className="flex items-center justify-between w-full">
            Is team pricing available?
            <FaChevronDown className="w-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-white">
            Yes! You can purchase a license that you can share with your entire team.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </section>
  )
}

export default ContactSection;