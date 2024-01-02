"use client"

import axios from "axios";
import { useState } from "react"

type PostType = {
    result: [
        {
            url: string;
            thumb: string;
        }
    ]
}
const Downloader = () => {
  const [post, setPost] = useState<PostType>()
  const [postUrl, setPostUrl] = useState('')

  const options = {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_RAPID_API_URL,
    params: {
      url: postUrl
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RapidAPI_Host
    }
  };

  const getPostData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPost(response.data)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      
      <div className="flex items-center justify-center py-10 text-white bg-gradient-to-l from-blue-600 to-pink-500">
            {post ? 
            <>
                <div className="p-8 rounded flex flex-col items-center justify-center">
                    <img src={post?.result[0].thumb} alt="" className="h-96"/>

                    <a href={post?.result[0].url} className="text-xl mt-6 ml-2 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 focus:outline-none" download>
                        Download Reel
                    </a>
                </div>
            </> 
            : 
            <>
                <div className="p-8 rounded flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-6">Instagram Downloader</h1>
                    <p className=" mb-6">
                        Download photos and videos from Instagram with ease using our app.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <input
                        type="text"
                        placeholder="Enter Instagram URL"
                        value={postUrl}
                        onChange={(e)=>setPostUrl(e.target.value)}
                        className="w-2/3 px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={ ()=> getPostData()} className="ml-2 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
                        Download
                        </button>
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Downloader