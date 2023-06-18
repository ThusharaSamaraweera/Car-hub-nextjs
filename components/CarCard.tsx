import { ICar } from "@/types";
import { calculateCarRent } from "@/utils/services";
import React from "react";

interface CarCardProps {
  car: ICar;
}

function CarCard(props: CarCardProps) {
  const { city_mpg, year, make, model, transmission } = props.car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>
    </div>
  );
}

export default CarCard;
