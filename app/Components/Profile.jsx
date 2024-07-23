"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, User, Lock } from "react-feather";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(undefined);
  const [hidden, setHidden] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUserInfo(storedUserInfo);
      if (storedUserInfo) {
        reset(storedUserInfo);
      }
    }
  }, [reset]);

  const submitHandler = async (data) => {
    if (data) {
      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
      window.location.reload();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-y-3"
      >
        <div className="relative">
          <User className="absolute bg-white rounded left-2 top-[17px] z-10 w-[16px] h-[16px] text-primary" />
          <input
            className="relative w-full bg-[#F6F7F9] outline-slate-200 text-sm px-8 py-[12px] rounded-md"
            type="text"
            {...register("name", {
              required: "User name is required",
            })}
            placeholder="you"
          />
          {errors?.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>
        <div className="relative">
          <Mail className="absolute bg-white rounded left-2 top-[17px] z-10 w-[16px] h-[16px] text-primary" />
          <input
            className="relative w-full bg-[#F6F7F9] outline-slate-200 text-sm px-8 py-[12px] rounded-md"
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
          {errors?.email && (
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
          {errors?.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>
        <button className="py-[10px] rounded-md w-full bg-primary text-white text-sm">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
