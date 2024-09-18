const Post = ({
  profileImg,
  name,
  role,
  time,
  postContent,
  postImg,
  status,
}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md mb-3'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            src={profileImg}
            alt='Profile'
            className='rounded-full mr-2 size-12 border-black border-2'
          />
          <div>
            <h4 className='text-sm font-bold'>{name}</h4>
            <p className='text-xs text-gray-600'>{role}</p>
            <p className='text-xs text-gray-600'>
              {time} <i className='fas fa-globe'></i>
            </p>
          </div>
        </div>
        <button className='text-blue-600 text-xs bg-gray-100 px-1.5 py-1 rounded-md'>{status}</button>
      </div>
      <p className='text-sm text-gray-600 mt-2'>{postContent}</p>
    </div>
  );
};

export default Post;
