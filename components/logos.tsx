import Image from "next/image";
import NSFlogo from "../public/images/NSF-logo.png";
import NASAlogo from "../public/images/NASA-logo.jpg";
import AFOSRlogo from "../public/images/AFOSR-logo.jpeg";
import DODlogo from "../public/images/DOD-logo.jpeg";
import DTRAlogo from "../public/images/DTRA-logo.jpeg";
import ARMYlogo from "../public/images/US-Army-Logo.jpg";


export default function Logos() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by the world’s most innovative partners
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="NSF"
              src={NSFlogo}
              width={158}
              height={48}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="NASA"
              src={NASAlogo}
              width={158}
              height={48}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="AFOSR"
              src={AFOSRlogo}
              width={158}
              height={48}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="DOD"
              src={DODlogo}
              width={158}
              height={48}
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="DTRA"
              src={DTRAlogo}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
            <Image
              alt="US Army"
              src={ARMYlogo}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
  