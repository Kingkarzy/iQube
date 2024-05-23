import { useState } from "react";
import "./styles.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("form");
  const [payNow, setPayNow] = useState(false); //i added this to view the card information instead of creating a new UI for the user

  return (
    <div className="min-h-full bg-gradient flex flex-col items-center justify-center p-10">
      <div className="container max-w-4xl p-5">
        <h1 className="text-[#4e598e] font-bold text-3xl">
          Complete your purchase
        </h1>
        <div className="links-container my-10 max-w-4xl">
          <a
            href="#form"
            onClick={() => setActiveSection("form")}
            className={`link text-[#f2994a] font-extrabold text-2xl ${
              activeSection === "form" ? "active" : ""
            }`}
          >
            Personal Info
          </a>
          <a
            href="#billing"
            onClick={() => setActiveSection("billing")}
            className={`link text-[#f2994a] font-extrabold text-2xl ${
              activeSection === "billing" ? "active" : ""
            }`}
          >
            Billing Info
          </a>
          <a
            href="#confirm"
            onClick={() => setActiveSection("confirm")}
            className={`link text-[#f2994a] font-extrabold text-2xl ${
              activeSection === "confirm" ? "active" : ""
            }`}
          >
            Confirm Payment
          </a>
        </div>

        <div
          className={`${
            activeSection === "form" ? "block" : "hidden"
          } w-full max-w-4xl`}
        >
          <form className="flex flex-col gap-y-6">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              className="placeholder-text"
              placeholder="Opera Linus Ahmed"
            />
            <label className="label-text">
              Email Address <span className="text-[#f2994a] ">*</span>
            </label>
            <p className=" text-gray-500">
              The purchase reciept would be sent to this address
            </p>
            <input
              type="email"
              name="email"
              className="placeholder-text"
              placeholder="OperaLinusAhmed@devmail.com"
            />
            <label className="label-text">Address 1</label>
            <input
              type="text"
              name="address1"
              className="placeholder-text"
              placeholder="The address of the user goes here"
            />
            <label className="label-text">Address 2</label>
            <input
              type="text"
              name="address2"
              className="placeholder-text"
              placeholder=". and here"
            />
            <div className="flex gap-x-10">
              <div className=" w-2/3">
                <p className="label-text my-5">Local Government </p>
                <input
                  type="text"
                  name="lga"
                  className="placeholder-text w-full"
                  placeholder="Surulere"
                />
              </div>
              <div className="w-1/3">
                <p className="label-text my-5">State</p>

                <select className="placeholder-text bg-white w-full">
                  <option value={"lagos"} default>
                    Lagos
                  </option>
                </select>
              </div>
            </div>
            <div className="mt-10 grid md:flex gap-y-3 gap-x-20">
              <button className="text-white text-xl font-bold bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-lg py-3 px-28">
                {" "}
                Next{" "}
              </button>
              <button className="text-[#4e598e] text-xl font-bold bg-transparent">
                {" "}
                Cancel Payment{" "}
              </button>
            </div>
          </form>
        </div>

        <div
          id="billing"
          className={`${
            activeSection === "billing" ? "block" : "hidden"
          } w-full max-w-4xl`}
        >
          {!payNow && (
            <form className="flex flex-col gap-y-6">
              <label className="label-text">
                Name on Card <span className="text-[#f2994a] ">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="placeholder-text"
                placeholder="Opera Linus Ahmed"
              />

              <p className="label-text my-5">
                Card Type <span className="text-[#f2994a] ">*</span>
              </p>

              <select className="placeholder-text bg-white w-full">
                <option value={"visa"} default>
                  Visa
                </option>
              </select>

              <div className="flex gap-x-10">
                <div className=" w-3/5">
                  <p className="label-text my-5">
                    Card details <span className="text-[#f2994a] ">*</span>
                  </p>
                  <input
                    type="text"
                    name="cardDetails"
                    className="placeholder-text text-center w-full tracking-widest"
                    placeholder="44960  44960  44960  44960"
                  />
                </div>
                <div className="w-1/5">
                  <p className="label-text my-5">
                    Expiring Date <span className="text-[#f2994a] ">*</span>
                  </p>

                  <input
                    type="text"
                    name="cardDetails"
                    className="placeholder-text text-center w-full"
                    placeholder="04 / 23"
                  />
                </div>
                <div className="w-1/5">
                  <p className="label-text my-5">
                    CVV <span className="text-[#f2994a] ">*</span>
                  </p>

                  <input
                    type="text"
                    name="cardDetails"
                    className="placeholder-text text-center font-bold w-full"
                    placeholder="923"
                  />
                </div>
              </div>
              <div className="mt-10 grid md:flex gap-y-3 gap-x-20">
                <button
                  onClick={() => setPayNow(!payNow)}
                  className="text-white text-xl font-bold bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-lg py-3 px-28"
                >
                  {" "}
                  Next{" "}
                </button>
                <button className="text-[#4e598e] text-xl font-bold bg-transparent">
                  {" "}
                  Cancel Payment{" "}
                </button>
              </div>
            </form>
          )}

          {payNow && (
            <div>
              <div className="w-full rounded-xl shadow-xl text-left pb-10 text-xl bg-white">
                <div className="bg-blue-600 rounded-t-xl px-[90px] flex justify-between py-5 text-white font-bold ">
                  <p>Item Name</p>
                  <p>₦ Price</p>
                </div>
                <div className="flex flex-col px-20 py-6">
                  <div className="flex justify-between text-left items-center">
                    <p className="p-3 text-left text-[#4e598e]">
                      Data science and usability
                    </p>
                    <p className="p-3 font-semibold text-[#4e598e]">
                      50,000.00
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="p-3 text-[#4e598e]">Shipping</p>
                    <p className="p-3">0.00</p>
                  </div>
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <div className="w-full min-w-fit flex justify-between border border-[#747b9d] rounded-lg">
                    <p className="p-3 text-[#979ec5e0]">Total</p>
                    <p className="p-3 font-semibold text-[#4e598e]">
                      50,000.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20 grid md:flex gap-y-3 gap-x-20">
                <button
                  onClick={() => setActiveSection("confirm")}
                  className="text-white text-xl font-bold bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-lg py-4 px-28"
                >
                  {" "}
                  Pay{" "}
                </button>
                <button className="text-[#4e598e] text-xl font-bold bg-transparent">
                  {" "}
                  Cancel Payment{" "}
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          id="confirm"
          className={`${
            activeSection === "confirm" ? "block" : "hidden"
          } w-full max-w-4xl`}
        >
          <div className="bg-white max-w-3xl text-center md:text-left shadow-lg grid place-content-center gap-y-10 py-10">
            <div className="w-28 h-28 mx-auto my-5 font-extrabold text-7xl text-green-600 bg-white shadow-lg shadow-slate-200 rounded-full grid place-content-center">
              &#x2713;
            </div>
            <h1 className="text-[#4e598e] font-bold text-5xl">
              Purchased Completed
            </h1>
            <p className="max-w-[420px] text-slate-700 text-xl">
              Please check your email for details concerning this transaction
            </p>
            <a
              href=""
              className="font-semibold underline text-xl text-[#f2994a]"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
