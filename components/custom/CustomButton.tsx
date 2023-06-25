"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'
import React from 'react'

export const CustomButton = (props: CustomButtonProps) => {
  const { title, containerStyles, handleClick, isDisabled, btnType, rightIcon, textStyles } = props;
  return (
    <button disabled={isDisabled} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="arrow_left" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};
