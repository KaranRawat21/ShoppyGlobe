import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setErrorMsg("")
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      setErrorMsg("Please fill all the details!")
      return;
    }

    // Navigate to main checkout page
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-[60px]">
      <h1 className="text-2xl font-semibold mb-6">Shipping Details</h1>

      <form
        onSubmit={handleSubmit}
        className="w-[350px] flex flex-col gap-3  p-5 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-md outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-md outline-none"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded-md outline-none"
        />

        <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded-md outline-none resize-none h-20"
        ></textarea>

        {/* error message */}
        <p className=" text-[12px] text-red-500 ">{errorMsg}</p>

        <button
          type="submit"
          className="w-full rounded-xl text-white font-semibold bg-[#dc6a54] p-2 cursor-pointer hover:bg-[#c85d48] transition"
        >
          Continue to Checkout
        </button>
      </form>
    </div>
  );
}
