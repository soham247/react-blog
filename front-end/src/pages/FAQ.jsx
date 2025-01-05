import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is React Blog?",
      answer:
        "React Blog is an online platform where you can explore and share articles on various topics. Whether you're here to read or write, it's your go-to place for insightful and creative content.",
    },
    {
      question: "Can I read articles for free?",
      answer:
        "Absolutely! All the articles on React Blog are available for free. Dive in and enjoy reading without wasting the time.",
    },
    {
      question: "How can I post an article?",
      answer:
        "Posting an article is super simple: If you're new, just sign up for an account. If you're already a member, log in to your account and start writing.",
    },
    {
      question: "Can I read articles without logging in?",
      answer:
        "Yes, you can! You don’t need an account to read articles. Feel free to explore and enjoy the content at any time.",
    },
    {
      question: "How do I start writing an article?",
      answer:
        "Once you're logged in, head over to the 'Create Article' section. Add your title, content, and any images you’d like to include. Then, hit Publish to share your thoughts with the world!",
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="faq-section">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <h2
              className="text-xl font-semibold cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </h2>
            {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
