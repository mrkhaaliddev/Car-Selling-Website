"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Key, Lock, Mail, User } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { useRegisterMutation } from "../../redux/users/authUserSlice.js";
// import { setCredentials } from "../../redux/users/authSlice.js";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  // console.log(errors);
  //   const navigate = useNavigate();
  //   const password = watch("password");
  //   const dispatch = useDispatch();

  //   const { userInfo } = useSelector((state) => state.auth);

  //   const [Register, { isLoading }] = useRegisterMutation();

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate("/");
  //     }
  //   }, [navigate, userInfo]);

  const SubmitHandler = async (data) => {
    console.log("🚀 ~ SubmitHandler ~ data:", data);
    //   const { name, email, password } = data;
    //   try {
    //     const res = await Register({
    //       name,
    //       email,
    //       password,
    //     }).unwrap();
    //     console.log({ ...res });
    //     dispatch(setCredentials({ ...res }));
    //     navigate("/");
    //   } catch (err) {
    //     console.log("Registration error", err);
    //     toast.error("User or Email already exists");
    //   }
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto mt-10 w-96">
        <div className="w-[340px]">
          {" "}
          <div className="mb-8">
            <h1 className="w-full pb-2 text-2xl font-semibold">
              Register Now!
            </h1>
          </div>
          <saction>
            <form
              action=""
              onSubmit={handleSubmit(SubmitHandler)}
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
                <small className="text-red-500">{errors?.name?.message}</small>
              </div>
              <div className="relative">
                <Mail className="absolute bg-white rounded left-2 top-[17px] z-10 w-[16px] h-[16px] text-primary" />
                <input
                  className="relative w-full bg-[#F6F7F9]  outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type="text"
                  {...register("email", {
                    required: "Emali is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="you@exmaple.com"
                />
                <small className="text-red-500">{errors?.email?.message}</small>
              </div>
              <div className="relative">
                <Lock className="absolute left-2 top-[15px] z-10 w-[16px] h-[16px] text-primary" />
                <input
                  className="relative w-full bg-[#F6F7F9] outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 8,
                      message: "minLength must be 8",
                    },
                  })}
                  placeholder="At least 8 charecters"
                />
                <small className="text-red-500">
                  {errors?.password?.message}
                </small>
              </div>
              <div className="relative">
                <Key className="absolute left-2 top-[15px] z-10 w-[16px] h-[16px] text-primary" />
                <input
                  className="relative w-full bg-[#F6F7F9] outline-slate-200 text-sm px-8 py-[12px] rounded-md"
                  type="password"
                  {...register("confirmPassword", {
                    required: "confirmPassword is required",
                    validate: (value) =>
                      value === password || toast("The passwords do not match"),
                  })}
                  placeholder="ConfirmPassword"
                />
                <small className="text-red-500">
                  {errors?.confirmPassword?.message}
                </small>
              </div>

              <button
                type="submit"
                className="py-[10px] rounded-md w-full bg-primary text-white text-sm"
              >
                Register
              </button>
            </form>
          </saction>
          <div className="flex mb-5 gap-x-4">
            <div className="w-40 border-b border-slate-200"></div>
            <p className="pt-5 text-slate-400">or</p>
            <div className="w-40 border-b border-slate-200"></div>
          </div>
          <div className="flex gap-x-3 max-w-[340px] mb-5">
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                className="absolute left-8 top-[10px]"
                alt=""
                width={16}
                height={16}
              />
              <button className="relative py-2 text-sm font-semibold border rounded-md px-14 border-slate-200">
                Google
              </button>
            </div>{" "}
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
                className="absolute left-8 top-[10px]"
                alt=""
                width={18}
                height={18}
              />
              <button className="relative py-2 text-sm font-semibold border rounded-md px-14 border-slate-200">
                Facebook
              </button>
            </div>{" "}
          </div>
        </div>
        <p className="text-[13px] mb-10 text-slate-400 font-normal">
          I already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary">
            Sign In
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default SignUp;
