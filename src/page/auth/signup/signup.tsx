import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dtslogo from "/dts.png";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface SignupInputs {
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignupInputs) => {
    console.log("Form Data:", data);
  };

  return (
    <section id="signup" className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl border border-gray-100">
        <div className="text-center mb-8">
          <img src={dtslogo} alt="DTS Logo" className="mx-auto h-40 object-contain" />
          <h1 className="text-2xl font-bold text-gray-900 mt-4">Create an Account</h1>
          <p className="text-gray-500 text-sm">Please enter your details to register</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserIcon />
              </span>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                {...register("email")}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all outline-none focus:ring-2 ${errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-amber-500 focus:ring-amber-200"
                  }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" title="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockIcon />
              </span>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                {...register("password")}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all outline-none focus:ring-2 ${errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-amber-500 focus:ring-amber-200"
                  }`}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-md transition-all active:scale-[0.98] focus:ring-2 focus:ring-amber-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default Signup;