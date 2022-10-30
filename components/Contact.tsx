import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:devshiva.iit.kgp@gmail.com?subject=${formData.subject}&
    body=hi,%20my%20name%20is%20${formData.name}.%20${formData.message}.%20(${formData.email})`;
  };

  return (
    <div
      className="h-screen 
        relative
        flex 
        flex-col
        md:flex-row
        text-center
        md:text-left 
        max-w-7xl px-10 justify-evenly
        mx-auto items-center
    "
    >
      <h3
        className=" absolute tracking-widest uppercase
        text-gray-300
        top-24
        text-2xl
      "
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4
          className="
                text-3xl
                font-semibold
                text-center
            "
        >
          Looking forward to Opportunities.{" "}
          <span
            className="
                decoration-[#ef694e]/50 
                underline
                "
          >
            Let us Talk.
          </span>
        </h4>
        <div>
          <div
            className="flex items-center
                space-x-5 justify-center"
          >
            <PhoneIcon
              className="h-7 w-7 
                text-[#ef694e]
                animate-pulse"
            />
            <p className="text-xl">+91 7784074165</p>
          </div>
          <div
            className="flex items-center
                space-x-5 justify-center"
          >
            <EnvelopeIcon
              className="h-7 w-7 
              text-[#ef694e]
                animate-pulse"
            />
            <p className="text-xl">devshiva.iit.kgp@gmail.com</p>
          </div>
          <div
            className="flex items-center
                space-x-5 justify-center"
          >
            <MapPinIcon
              className="h-7 w-7 
              text-[#ef694e]
                animate-pulse"
            />
            <p className="text-xl">Dwarka, Delhi</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col 
            w-fit
            mx-auto
            space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="font-bold bg-[#ef694e]/40
                px-5 py-3 rounded-md text-gray-400
          "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
/*

https://www.rapidtables.com/web/html/mailto.html
*/
