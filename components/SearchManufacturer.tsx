"use client";
import { SearchManuFacturerProps } from "@/types";
import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

function SearchManufacturer(props: SearchManuFacturerProps) {
  const { manufacturer, setManuFacturer } = props;
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo" />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
