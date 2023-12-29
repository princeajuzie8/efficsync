"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import BG from "@/assets/svg/signupbg.svg"

declare module "@material-tailwind/react" {
  interface InputProps {
    crossOrigin?: string;
  }
  interface TypographyProps {
    placeholder?: string;
  }
  interface CheckboxProps {
    crossOrigin?: string;
  }
  interface ButtonProps {
    placeholder?: string;
  }
}

export default function page() {
  return (
    <div>

<section className="m-8 flex ">
            <div className="w-2/5 h-[50%] hidden lg:block">
        <Image
        height={100}
        width={200}
        alt=""
      src={BG}
      draggable={false}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold text-2xl mb-4 text-[#CECEC5]">Unlock Your Productivity? Sign Up Today</Typography>
          <Typography variant="paragraph"  className="text-lg font-normal text-[#CECEC5]">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography   className="-mb-3 font-medium border-gray-100 text-[#CECEC5]">
              Your email
            </Typography>
            <input placeholder="name@mail.com"
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-[#CECEC5]  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="white"
                className="flex items-center justify-start font-medium "
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-[#CECEC5] transition-colors hover:text-#CECEC5] underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-[#0FADF9]" fullWidth>
            Register Now
          </Button>

          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md bg-[#131313]" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="#131313" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#CECEC5] bg-[#131313]">Sign in With Google</span>
            </Button>
      
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link href="/auth/signin" className="text-[#ffff] ml-1 text-sm underline">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>
    </div>
  );
}
