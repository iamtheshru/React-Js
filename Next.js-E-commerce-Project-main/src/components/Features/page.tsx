"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer viverra fermentum turpis tellus."
    }
  ];

  // const [openIndex, setOpenIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#F8FAFC] py-12">
      <div className=" mx-auto main_container px-5 md:px-0">
        <h2 className="second_tital mb-6 ">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-100 transition duration-300"
              >
                <span className="text-gray-900 font-semibold">{index + 1}. {faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-teal-500" />
                ) : (
                  <FaPlus className="text-teal-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
