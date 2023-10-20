import React from 'react'

interface ProfileCardProps{
  showCard: boolean,
  handleCardDisplay: () => void
}
function ProfileCard({showCard, handleCardDisplay}:ProfileCardProps) {
  return (
    <div
      className={`${showCard ? 'absolute bg-white border rounded-md shadow-lg right-3 top-8 h-72 border-secondary-50 z-10 w-60' : 'hidden'}`}
    >
      
    </div>
  )
}

export default ProfileCard;