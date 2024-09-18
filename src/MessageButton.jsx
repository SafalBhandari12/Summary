import React from "react";

const MessageButton = () => {
  return (
    <div className='fixed bottom-2 right-5 shadow-md'>
      <div className='flex items-center p-1 rounded-lg shadow-md bg-blue-100'>
        <img
          src='https://media.licdn.com/dms/image/v2/D5603AQEiDtHcNivUlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723812389465?e=1732147200&v=beta&t=aYwtU-X8sF_g8VVrw52cMfnB9hlq2JM9xcnR-mzDN8w'
          alt='Profile picture of a person'
          className='w-10 h-10 rounded-full'
        />
        <span className='ml-2 text-sm font-semibold'>Messaging</span>
        <div className='flex-grow'></div>
        <i className='fas fa-ellipsis-h text-sm mx-2'></i>
        <i className='fas fa-external-link-alt text-sm mx-2'></i>
        <i className='fas fa-chevron-up text-sm mx-2'></i>
      </div>
    </div>
  );
};

export default MessageButton;
