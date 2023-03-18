import { Bungee_Inline } from "@next/font/google";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-20 px-4">
        <div className="text-center mb-16">
          <h3
            className={`${bungee.className} text-white text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight `}
          >
            Get In <span className="text-teal-500">Touch</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:noborder-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="SurName"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:noborder-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows={10}
                className="appearance-none block w-full text-gray-100 bg-opacity-10 bg-white noborder noborder-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:noborder-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow focus:shadow-outline focus:outline-none text-teal-200 bg-opacity-10 bg-gray-100 font-semibold hover:bg-teal-600 hover:text-white transition duration-200 ease-in-out py-2 px-6 rounded"
                type="submit"
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
