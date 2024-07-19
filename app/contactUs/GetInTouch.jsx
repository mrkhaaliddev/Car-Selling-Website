"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Please enter a valid phone number"),
  message: yup.string(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const GetInTouch = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onsubmit = (data) => {
    if (data) {
      reset();
      toast.success("Thanks for contacting us 🔥");
    }
  };

  return (
    <div className="w-full mb-20 rounded-lg">
      <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
        Get In Touch
      </h1>
      <p className="mb-5 text-sm text-gray-600">Fill out the form below.</p>
      <div className="w-full">
        <form action="" onSubmit={handleSubmit(onsubmit)} noValidate>
          <div className="flex w-full gap-5 mb-5">
            <div className="w-[50%]">
              <label htmlFor="firstName" className="label">
                First Name <span className="text-red-500">*</span>
              </label>

              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      className="mt-2 input"
                      placeholder="Khaalid"
                    />
                    <div className="h-2">
                      {errors.firstName && (
                        <small className="pt-2 text-xs text-red-500">
                          {errors.firstName.message}
                        </small>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="lastName" className="label">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      className="mt-2 input"
                      placeholder="Abdirahim"
                    />
                    <div className="h-2">
                      {errors.lastName && (
                        <small className="pt-2 text-xs text-red-500">
                          {errors.lastName.message}
                        </small>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex w-full gap-5 mb-5">
            <div className="w-[50%]">
              <label htmlFor="firstName" className="label">
                Email <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      className="mt-2 input"
                      placeholder="example@gmail.com"
                    />
                    <div className="h-2">
                      {errors.email && (
                        <small className="pt-2 text-xs text-red-500">
                          {errors.email.message}
                        </small>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="lastName" className="label">
                Phone <span className="text-red-500">*</span>
              </label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      className="mt-2 input"
                      placeholder="+252 611008043"
                    />
                    <div className="h-2">
                      {errors.phone && (
                        <small className="pt-2 text-xs text-red-500">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <label htmlFor="message" className="label">
              Message
            </label>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <>
                  <Textarea
                    type=" textarea"
                    {...field}
                    className="w-full mt-2 input"
                    placeholder="Message"
                  />
                  <div className="h-2">
                    {errors.message && (
                      <small className="pt-2 text-xs text-red-500">
                        {errors.message.message}
                      </small>
                    )}
                  </div>
                </>
              )}
            />
          </div>
          <Button type="submit" className="mt-4 text-white btn btn-primary">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
