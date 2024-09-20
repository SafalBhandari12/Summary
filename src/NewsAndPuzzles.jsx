import React from "react";
import CitationsGraph from "./Graphs/CitationsGraph";
import PublicationGraph from "./Graphs/PublicationsGraph";
import PieChart from "./PiChart";
import piChartGraph from "./Graphs/newgraphpi.jpeg";

const NewsAndPuzzles = () => {
  const data = {
    publicationsDataGoogle: {
      years: ["2018", "2021", "2024"],
      publications: [14, 13, 3],
    },
    publicationsDataScopus: {
      years: ["2022", "2023", "2024"],
      publications: [4, 8, 3],
    },
  };
  return (
    <div className='w-1/4 bg-white px-4 pt-4 pb-2 rounded-lg shadow-md'>
      <h3 className='text-sm font-bold text-gray-600'>
        Scholarly Literature Graphs
      </h3>
      <div className='bg-white p-1 rounded-lg shadow'>
        <p className='text-gray-500 font-bold text-sm'>Publication Details</p>
        <div className='flex items-center justify-center h-48'>
          <PublicationGraph data={data} />
        </div>
      </div>
      <div className='bg-white p-1 rounded-lg shadow mt-2'>
        <p className='text-gray-500 font-bold text-sm'>Publication Overview</p>
        <div className='flex items-center justify-center h-48'>
          <img src={piChartGraph} alt='' className='w-72' />
        </div>
      </div>
      <h3 className='text-sm font-bold text-gray-600 mt-4'>
        People with similar interest
      </h3>
      <ul className='text-sm text-gray-600 mt-2'>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Noam Shazeer</span>
        </li>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Niki Parmar</span>
        </li>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Jakob Uszkoreit</span>
        </li>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Llion Jones</span>
        </li>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Peter Shaw</span>
        </li>
        <li className='flex items-center mt-2'>
          <i class='fa-solid fa-user'></i>
          <span className='text-sm text-gray-700 ml-2'>Irwan Bello</span>
        </li>
      </ul>
    </div>
  );
};

export default NewsAndPuzzles;
