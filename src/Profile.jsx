import React from "react";

const Profile = () => {
  return (
    <div className='w-1/4 bg-white p-4 rounded-lg shadow-md'>
      <div className='flex flex-col items-center '>
        <img
          src='https://media.licdn.com/dms/image/v2/D5603AQEiDtHcNivUlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723812389465?e=1732147200&v=beta&t=aYwtU-X8sF_g8VVrw52cMfnB9hlq2JM9xcnR-mzDN8w'
          alt='Profile'
          className='rounded-full mb-4'
        />
        <h2 className='text-lg font-bold'>Safal Bhandari</h2>
        <p className='text-center text-sm text-gray-600'>
          Image Recognition | LLM | NLP
        </p>
        <p className='text-center text-sm text-gray-600 '>
          Researcher at <span className='underline'>MIT</span>
        </p>
      </div>
      <div className='mt-4'>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>No Of Publication</span>
          <span className='text-blue-600'>96</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>No Of Citations</span>
          <span className='text-blue-600'>69</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>H-Index</span>
          <span className='text-blue-600'>2</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>P-Index</span>
          <span className='text-blue-600'>1</span>
        </div>
      </div>
      <div className='mt-4 '>
        <h3 className='text-sm font-bold text-gray-600'>Recent Publications</h3>
        <ul className='text-sm text-gray-600 mt-2'>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Future of AI in Medical Imaging
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Face Recognition Using
            EfficientNet
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Personality Analysis using E...
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Impact of Artificial
            Inteligence
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Artificial Intelligence,
            Machine...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
