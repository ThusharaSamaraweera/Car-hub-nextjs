"use client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image'
import React from 'react'

export const CustomButton = (props: CustomButtonProps) => {
  const { title, containerStyles, handleClick, isDisabled, btnType, rightIcon, textStyles } = props;
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
    </button>
  );
};
