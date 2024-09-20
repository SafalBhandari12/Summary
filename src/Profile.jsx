import React from "react";

const Profile = () => {
  return (
    <div className='w-1/4 bg-white p-6 rounded-lg shadow-md'>
      <div className='flex flex-col items-center'>
        <img
          src='https://media.licdn.com/dms/image/v2/C5603AQEDhAJzTfYLvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650996874299?e=1732147200&v=beta&t=JhIIBiDWg3_pETmOauS3ST9sAQuuoS60whKmVyiL3SQ'
          alt='Profile'
          className='rounded-full mb-4'
          width={160}
          height={120}
        />
        <h2 className='text-lg font-bold'>Ashish Vaswani</h2>
        <p className='text-center text-sm text-gray-600'>Deep Learning</p>
        <p className='text-center text-sm text-gray-600'>
          <span className='underline'>Co-founder</span> and{" "}
          <span className='underline'>CEO</span> at Essential AI
        </p>
      </div>

      {/* No. of Publications, Citations, H-Index, P-Index */}
      <div className='mt-4'>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>No Of Publications</span>
          <span className='text-blue-600'>104</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>No Of Citations</span>
          <span className='text-blue-600'>162565</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>H-Index</span>
          <span className='text-blue-600'>47</span>
        </div>
        <div className='flex justify-between text-sm text-gray-600 mt-2 bg-slate-200 px-4 py-2 rounded-md'>
          <span>P-Index</span>
          <span className='text-blue-600'>65</span>
        </div>
      </div>

      {/* Professional Experience */}
      <div className='mt-6'>
        <h3 className='text-md font-semibold text-gray-700 mb-3 border-b pb-2'>
          Professional Experience
        </h3>
        <ul className='text-sm text-gray-600 space-y-4'>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Co-founder and CEO</span> at Essential AI <br />
              <p className='text-xs text-gray-500'>Dec 2022 - Present · San Francisco Bay Area · On-site</p>
              <p className='text-xs italic text-gray-500'>Pushing the frontier of human-machine partnership</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Co-founder and Chief Scientist</span> at Adept AI Labs <br />
              <p className='text-xs text-gray-500'>Jan 2022 - Nov 2022 · San Francisco Bay Area</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Staff Research Scientist</span> at Google Brain <br />
              <p className='text-xs text-gray-500'>Jul 2016 - Nov 2021 · Mountain View</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Computer Scientist</span> at Information Sciences Institute <br />
              <p className='text-xs text-gray-500'>Jul 2014 - Jun 2016 · Marina Del Rey</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Graduate Research Assistant</span> at University of Southern California <br />
              <p className='text-xs text-gray-500'>May 2008 - May 2014</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Summer Research Intern</span> at Google <br />
              <p className='text-xs text-gray-500'>May 2013 - Aug 2013 · New York</p>
            </div>
          </li>
          <li className='flex items-start'>
            <i className='fas fa-briefcase mr-2 text-blue-600'></i>
            <div>
              <span className='font-bold text-gray-800'>Summer Research Intern</span> at IBM <br />
              <p className='text-xs text-gray-500'>May 2011 - Aug 2011 · New York</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Recent Publications */}
      <div className='mt-4'>
        <h3 className='text-sm font-bold text-gray-600'>Recent Publications</h3>
        <ul className='text-sm text-gray-600 mt-2'>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Attention-based sequence transduction neural networks
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Attention-based image generation neural networks
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Mesh-TensorFlow: Deep Learning for Supercomputers
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Fast decoding in sequence models using discrete latent variables
          </li>
          <li className='flex items-center mt-2'>
            <i className='fas fa-users mr-2'></i>Music Transformer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
