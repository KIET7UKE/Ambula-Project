import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Here you can handle form submission and any other logic
    // For demonstration purposes, let's simulate a successful form submission
    setTimeout(() => {
      Swal.fire({
        title: 'Message Sent',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Refresh the page after showing the toast message
        window.location.reload();
      });
    }, 1000);
  };
  

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-950 mb-8">Contact Us</h1>
        <div className="mb-8">
          <p className="text-blue-950">
            Have questions or feedback? We{"'"}d love to hear from you! Please fill out the form below and we{"'"}ll get back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`h-[40px] px-2 block shadow-md focus:outline-none font-semibold w-full sm:text-sm border-gray-300 rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className={`shadow-md h-[40px] px-2 block w-full focus:outline-none sm:text-sm font-semibold border-gray-300 rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows="4"
                className={`shadow-md px-2 py-2 block w-full focus:outline-none sm:text-sm border-gray-300 font-semibold rounded-md ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Your message here"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
