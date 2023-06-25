"use client"
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from './custom/CustomButton'

function ShowMore({isNext, pageNumber}: ShowMoreProps) { 
    const router = useRouter()


  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton btnType="button" title="Show More" containerStyles="bg-primary-blue rounded-full text-white" />
      )}
    </div>
  );
}

export default ShowMore