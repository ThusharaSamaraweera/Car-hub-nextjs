"use client";

import { CustomFilterProps, OptionProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = React.useState<OptionProps>(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
        }}>
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image src="/chevron-up-down.svg" width={20} height={20} className="ml-4 object-contain" alt="chevron_up-down" />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}>
                  {({ selected }) => (
                    <>
                      {option.title}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;