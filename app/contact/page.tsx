import BaseSection from "../common/base/BaseSection";

function ContactPage() {
  return (
    <div className="bg-white w-full min-h-screen pt-20 pb-5 px-4">
      <BaseSection title="Contact With Us">
        <p className="text-gray-600 text-center max-w-md mx-auto mb-8">
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
      </BaseSection>
    </div>
  );
}

export default ContactPage;
