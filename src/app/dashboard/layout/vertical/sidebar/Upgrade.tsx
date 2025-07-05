import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Upgrade = () => {
  return (
    <>
      <div className="px-4 mt-8 relative">
        <div className="bg-lightprimary py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h6 className="text-base text-dark">Upgrade to pro</h6>
              <Button
                color={"primary"}
                className="mt-3 rounded-xl"
                as={Link}
                href="#"
              >
                Buy Pro
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
