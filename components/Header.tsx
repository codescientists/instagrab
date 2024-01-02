
import React from 'react';

const Header = () => {
  return (
    <header className="p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <h1 className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
              Grab Insta
            </span>
          </h1>
        </div>
        <div className="flex items-center">
          <img src="https://pbs.twimg.com/profile_images/1719678486326169600/aKUT3Dti_400x400.jpg" alt="" className="h-10 w-10 rounded-full" />
          <a href="https://twitter.com/piyushcodes" className="flex flex-col ml-3">
            <h5 className="text-md font-bold">Piyush Patil</h5>
            <span className='text-xs'>@piyushcodes</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
