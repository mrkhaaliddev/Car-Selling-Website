"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, User } from "react-feather";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null); // Changed from undefined to null
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = localStorage.getItem("userInfo");
      setUserInfo(storedUserInfo);
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [userInfo, router]);

  const submitHandler = async (data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUserInfo(data); // Update the userInfo state after setting it in localStorage
    }
    toast.success("Login Successful");
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col items-center mx-auto my-40 mt-20 w-96">
        <div className="w-96 md:w-[500px]">
          <div className="mb-5">
            <h1 className="w-full pb-2 text-2xl font-semibold">
              Welcome back!
            </h1>
          </div>
          <section>
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-y-3"
            >
              <div className="relative">
                <User className="absolute bg-white rounded left-2 top-[17px] z-10 w-[16px] h-[16px] text-primary" />
                <input
                  className="relative w-full bg-[#F6F7F9]  outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type="text"
                  {...register("name", {
                    required: "User name is required",
                  })}
                  placeholder="you"
                />
                {errors.name && (
                  <small className="text-red-500">{errors.name.message}</small>
                )}
              </div>
              <div className="relative">
                <Mail className="absolute bg-white rounded left-2 top-[17px] z-10 w-[16px] h-[16px] text-primary" />
                <input
                  className="relative w-full bg-[#F6F7F9]  outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-2 top-[15px] z-10 w-[16px] h-[16px] text-primary" />
                {hidden ? (
                  <Eye
                    onClick={() => setHidden(!hidden)}
                    className="absolute right-2 top-[15px] cursor-pointer z-10 w-[18px] h-[18px] text-primary"
                  />
                ) : (
                  <EyeOff
                    onClick={() => setHidden(!hidden)}
                    className="absolute cursor-pointer right-2 top-[15px] z-10 w-[18px] h-[18px] text-primary"
                  />
                )}
                <input
                  className="relative w-full bg-[#F6F7F9] outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type={hidden ? "password" : "text"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="At least 8 characters"
                />
                {errors.password && (
                  <small className="text-red-500">
                    {errors.password.message}
                  </small>
                )}
              </div>
              <Link href="#">
                <p className="text-sm font-semibold text-right text-primary">
                  Forgot password?
                </p>
              </Link>
              <button className="py-[10px] rounded-md w-full bg-primary text-white text-sm">
                Login
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignIn;

{
  /* <div className="flex mb-5 gap-x-4">
            <div className="w-40 border-b border-slate-200"></div>
            <p className="pt-5 text-slate-400">or</p>
            <div className="w-40 border-b border-slate-200"></div>
          </div> */
}
{
  /* <div className="flex gap-x-3 max-w-[340px] mb-5">
            <div className="relative">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                className="absolute left-8 top-[10px]"
                alt="Google"
                width={16}
                height={16}
              />
              <button className="relative py-2 text-sm font-semibold border rounded-md px-14 border-slate-200">
                Google
              </button>
            </div>{" "}
            <div className="relative">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
                className="absolute left-8 top-[10px]"
                alt="Facebook"
                width={18}
                height={18}
              />
              <button className="relative py-2 text-sm font-semibold border rounded-md px-14 border-slate-200">
                Facebook
              </button>
            </div>{" "}
          </div> */
}
{
  /* <p className="text-[13px] text-slate-400 font-normal mb-10">
          Don&apos;t you have an account?{" "}
          <Link href="/signUp" className="font-semibold text-primary">
            Sign Up
          </Link>{" "}
        </p> */
}
