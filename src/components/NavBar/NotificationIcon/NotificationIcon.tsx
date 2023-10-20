import React from 'react'
import NotificationModal from '@/components/Notifications/NotificationModal';
import { IoNotifications } from "react-icons/io5";


function NotificationIcon() {
  const [showNotificationModal, setShowNotificationModal] = React.useState(false);

  const handleShowModal = () => {
    setShowNotificationModal(!showNotificationModal);
  }
  return (
    <div className="relative hidden p-1 bg-white rounded-md cursor-pointer md:flex">
      <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-2 font-roboto"></span>
      <IoNotifications
        className="w-8 h-8 fill-primary-500"
        onClick={handleShowModal}
      />
      {/* Notification card  */}
      <NotificationModal
        showNotificationModal={showNotificationModal}
        handleShowModal={handleShowModal}
      />
    </div>
  );
}

export default NotificationIcon