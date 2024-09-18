import React from "react";
import Post from "./Post";

const PostSection = () => {
  return (
    <div className='w-1/2 mx-4'>
      <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
        <div className='flex items-center'>
          <img
            src='https://media.licdn.com/dms/image/v2/D5603AQEiDtHcNivUlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723812389465?e=1732147200&v=beta&t=aYwtU-X8sF_g8VVrw52cMfnB9hlq2JM9xcnR-mzDN8w'
            alt='Profile'
            className='rounded-full mr-2 size-10'
          />
          <input
            type='text'
            placeholder='Search for Scholarly Literature (DOI)'
            className='w-full p-2 border rounded-full text-sm'
          />
        </div>
        <div className='flex items-center space-x-2 p-2 text-sm justify-center'>
          <i className='fas fa-filter text-blue-500'></i>
          <div className='flex space-x-2'>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Type <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Time <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Co-Authors <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Publisher <i className='fas fa-caret-down ml-1'></i>
            </button>
            <button className='flex items-center px-1.5 py-1 border border-gray-300 rounded-md bg-white text-gray-700 text-sm'>
              Keywords <i className='fas fa-caret-down ml-1'></i>
            </button>
          </div>
        </div>
      </div>
      <Post
        profileImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAh1BMVEX///8jHyAAAAAZFBVnZWYMAAWlpKQQCQsgHB2VlJQdGRq8u7tHREX8/PzY2NjNzMwoJCXe3t7s6+v39vcIAABOS0xBPj9cWlsUDhA7ODlUUVLv7++ioaG1tLR4d3eIh4cuKyzR0NCGhYVvbW5+fH3Ew8S4t7esq6s0MTKbmZqSkJFraWp0cnMrln4yAAAD3ElEQVR4nO3Ya3OqOhQG4LBSTUAUuSgR8Q6lXv7/7zsBrUSge8+ec8Tjnvf5UmbBtOudhlxgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGrxXN/AsJ4pf3cJz5GTR6tVNPMNSSMsi/9VtPMGcD4i4HL+6j//cR0TF0ltQ0roziT9KZ53Zv14+yPQjy476WtfDjvq552Absvx0m40vtG7e8ohrqvxv+tXlA+HqR4J2XS3KZB11p99gBcVBTI5w/CGdWsksTU6rZFaTM6uStevzMplo1eW012ArWvuWklMpKc/p+PckW9HGI8eKct0IpZNGtI5kEdXmRrKBUf8ykgmjLnoM9kn2J0lLblnCdTTbf4zWTsZXo1peJxsUjfotmUiN+qi/YCmlq7IzYbPqJ512tPllMhE2fsUtGS0b9VuyF62Se7JHdPv74+vFJjdnyI5kzQTfyYJG/TvZ5NkhupxpndN9Ksh41UlaUHJfst8zWTCnZFK2xYkv1myTCKdqJc9o+z2E/mA0/pSs/9GYk9r6XOpcl3wmvlhC65h41YurvrfHHTOIN7mrmv5Oltf1iZEs+mzUny4jSROXWzzWwyufzvQWax+yWLfjLAIh6Rx2J7OMSXxmJDPrUyPZwyrRR7CELH4op0Mas2BKPGYX5dA2TPSIjI6psMT0h2Q1HpvJas7CTFaTvWyuPshS+3Je1O/HiJQ4sL3gES0vejyKTSEsNQjfMxmzyaFAr85yOwz90yzxPqaHlb+JdAN86Ug6/DQanTv1kKyu84dksq6rXpKxiSO+ltKxZESu/enl+ch2I1W+MJO1oPT6UDuZdO/mByOZM69vxEYyadTdfpKxcEaHQO+sdFeK1mOb1HXWL1akduynZKJ5PP1f7kEysie3fk+siK6dZDty712+50rNym1jcd2EiCNbVcn0kYaMk+/bJtPb4FUVbTBk1QayDHYx7r9vMr0TKTz9rkUjtiuXgL3/sNV/370+K3s/+uTwyzBTVvna/e7k6ZzsWjmD3pKpTV0+lfVbMpUZz9u9RstpH0wVF0rSymt+COlYz5S4I7dOZtYj80xt1Ae812T6XTuHCUk+2BWUNe6983cQ7UiL4KTiYE2t74FvnkwfrWkY+G7Hl1SPBlqkqmSDpttobNer0UhRsx71tL0yuFxExHlz2tNtp8OKvlzeLg1peYoL2/Vhoevjjvqw72As5PKFK89T6feJilc38Rybh63HX2X3+0cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf+wfCO0e7jEoIkwAAAABJRU5ErkJggg=='
        name="Alzheimer's Disease Detection using Ensemble Approach"
        role='P Upadhyay, P Tomar, SP Yadav'
        time='3 Months'
        postContent="Alzheimer's disease (AD) is a neurodegenerative, irrevocable, major brain dysfunction and complicated disease that continuously affects synapses, leading to memory and concentration skills degradation and, consequently, the inability to do even the most fundamental activities. This disease causes cognitive loss..."
        status='Synchronized'
      />
      <Post
        profileImg='data:image/png;base64,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'
        name='A new model for predicting component-based software'
        role='Chander Diwaker, Pradeep Tomar, Arun Solanki'
        time='1 Year'
        postContent='Software engineering is the process of developing software by utilizing applications of computer engineering. In the present day, predicting the reliability of the software system become a recent issue and an attractive issue for the research area in the field of software engineering. Different techniques have been applied to estimate and predict the reliability of a system...'
        status = "+ Add to Google Scholar"
      />
      <Post
        profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxL-zCpCQr4jThL9mR6auBXS3-IKraiZ3VA&s'
        name='Estimation of component reusability through reusability metrics'
        role='Aditya Pratap Singh, Pradeep Tomar'
        time='2 Year'
        postContent='Component-Based Software (CBS). The component reusability is an important assess for the effective reuse of components in CBS. The attributes of reusability proposed by various researchers are studied and four of them are identified as potential factors affecting reusability. This paper proposes metric for...'
        status = "+ Add to DBLP"
      />
    </div>
  );
};

export default PostSection;
