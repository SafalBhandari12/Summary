import React from "react";
import Profile from "./Profile";
import PostSection from "./PostSection";
import NewsAndPuzzles from "./NewsAndPuzzles";
import MessageButton from "./MessageButton";

const App = () => {
  return (
    <div className='flex justify-center p-4 bg-gray-200'>
      <Profile />
      <PostSection />
      <NewsAndPuzzles />
      <MessageButton />
    </div>
  );
};

export default App;
