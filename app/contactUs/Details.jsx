import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import Link from "next/link";

const Details = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="pb-2 text-lg">Contact details</CardTitle>
          <CardDescription>
            Etiam pharetra egestas interdum blandit viverra morbi consequat mi
            non bibendum egestas quam egestas nulla.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-7">
            <p className="flex gap-2 text-sm">
              {" "}
              <span>
                <CiLocationOn className="w-6 h-7" />
              </span>{" "}
              <span className="flex flex-col">
                <span className="pb-2">Address</span>
                <span className="text-xs">Nasrudiin mogadisho, somalia.</span>
              </span>
            </p>
          </div>
          <div className="mb-7">
            <p className="flex gap-2 text-sm">
              {" "}
              <span>
                <AiTwotoneMail className="w-6 h-7" />
              </span>{" "}
              <span className="flex flex-col">
                <span className="pb-2">Email</span>
                <span className="text-xs">khaalidyare344@gmail.com</span>
              </span>
            </p>
          </div>
          <div className="mb-7">
            <p className="flex gap-2 text-sm">
              {" "}
              <span>
                <CiPhone className="w-6 h-7" />
              </span>{" "}
              <span className="flex flex-col">
                <span className="pb-2">Phone</span>
                <span className="text-xs">+252 611008043</span>
              </span>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            <p className="pb-6 text-sm">Follow us</p>
            <p className="flex text-sm gap-7">
              <Link href="https://www.facebook.com/" target="_blank" passHref>
                <FaFacebookF className="cursor-pointer" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" passHref>
                <FaTwitter className="cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" passHref>
                <FaInstagram className="cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank" passHref>
                <FaLinkedinIn className="cursor-pointer" />
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Details;
