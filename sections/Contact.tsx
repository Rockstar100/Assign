import ContactCard from "@/components/cards/ContactCard";
import Heading from "@/components/heading/Heading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import SelectInput from "@/components/ui/SelectInput";
import TextArea from "@/components/ui/TextArea";
import { servicesOptions } from "@/components/data";
import { useState } from "react";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";


const Contact = () => {
    const [services, setServices] = useState<string[]>([]);

    
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 text-white">
        <div className="w-full max-w-xl">
          <h1 className="text-4xl leading-tight mb-8 font-light">
            Tell us about your project
            <br />
            and find out how we can help your business grow
          </h1>
          <p className="text-sm mb-4">Fill out the form below</p>
          <form className="space-y-4">
            <label className="block">
              <span className="text-xs mb-1">EMAIL ID:</span>
              <input type="email" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your email" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">NAME:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">COMPANY NAME:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your company name" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">CONTACT NUMBER:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your contact number" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">PROFESSIONAL DESIGNATION:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your designation" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">BUDGET YOU INTEND TO COMMIT TO THE PROJECT*:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Your budget" />
            </label>
            <label className="block">
              <span className="text-xs mb-1">DESCRIBE YOUR PROJECT:</span>
              <input type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="Project description" />
            </label>
          </form>
        </div>
      </div>
    );
  };

export default Contact;
