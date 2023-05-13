import { Bungee_Inline } from "@next/font/google";
import { useForm, ValidationError } from "@formspree/react";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

type Props = {};

const Contact = (props: Props) => {
  const [state, handleSubmit] = useForm("mrgvjnjg");
  if (state.succeeded) {
    return (
      <>
        <div className="max-w-screen-md mx-auto pt-20 px-4" id="contact">
          <div className="text-center mb-16">
            <h3
              className={`${bungee.className} text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight  leading-normal`}
            >
              Get In <span className="text-teal-500">Touch</span>
            </h3>
          </div>
          <div className="text-center mb-16">
            <h4
              className={`${bungee.className} text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight  leading-normal`}
            >
              We will get in touch with you soon!
            </h4>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-screen-md mx-auto pt-20 px-4" id="contact">
        <div className="text-center mb-16">
          <h3
            className={`${bungee.className} text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight  leading-normal`}
          >
            Get In <span className="text-teal-500">Touch</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="first-name"
                type="text"
                placeholder="Name"
              />
              <ValidationError
                prefix="First Name"
                field="first-name"
                errors={state.errors}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 leading-tight focus:outline-none"
                id="last-name"
                type="text"
                placeholder="SurName"
              />
              <ValidationError
                prefix="Last Name"
                field="last-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:noborder-gray-500"
                id="email"
                type="email"
                placeholder="********@*****.**"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                rows={10}
                name="message"
                id="message"
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:noborder-gray-500"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow focus:shadow-outline focus:outline-none text-teal-200 bg-opacity-10 bg-gray-100 font-semibold hover:bg-teal-600 hover:text-white transition duration-200 ease-in-out py-2 px-6 rounded"
                type="submit"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
