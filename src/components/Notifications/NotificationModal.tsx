"use client";

import React from 'react'

interface NotificationModal{
  showNotificationModal: boolean,
  handleShowModal: () => void
}
function NotificationModal({showNotificationModal, handleShowModal}:NotificationModal) {
  return (
    <div
      className={`${showNotificationModal ? 'absolute top-5 right-3 w-60 bg-white rounded-md shadow h-80 z-10' : 'hidden'}`}
    >
      <div
        className='p-1 text-left border-b border-b-secondary-50'
      >
        <h2 className='ml-5 text-primary-500 font-roboto'>Notifications{'(0 unread)'}</h2>
      </div>
      
    </div>
  )
}

export default NotificationModal;