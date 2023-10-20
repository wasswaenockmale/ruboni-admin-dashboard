"use client"
import React, { useEffect, useRef } from 'react'

interface ProfileCardProps{
  showCard: boolean,
  handleCardDisplay: () => void
}
function ProfileCard({ showCard, handleCardDisplay }: ProfileCardProps) {

  const profileCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { 
    function handleClickOutSide (event: MouseEvent) {
      if (profileCardRef.current && !profileCardRef.current.contains(event.target as Node)) {
        handleCardDisplay();
      }
    }
    if (showCard) {
      document.addEventListener('click', handleClickOutSide)
    }

    return () => {
      document.removeEventListener('click', handleClickOutSide)
    }
  }, [showCard, handleCardDisplay]);

  return (
    <div
      ref={profileCardRef as React.RefObject<HTMLDivElement>}
      className={`${showCard ? 'absolute bg-white border rounded-md shadow-lg right-3 top-8 h-72 border-secondary-50 z-10 w-60' : 'hidden'}`}
    >
      
    </div>
  )
}

export default ProfileCard;