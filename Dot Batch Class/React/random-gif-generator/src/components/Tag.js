import axios from 'axios';
import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { MdDownload, MdDownloadDone } from "react-icons/md";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag); 

  const [downloaded, setDownloaded] = useState(false);

  async function downloadHandler() {
    try {
      if (!gif) {
        console.warn('No GIF URL available to download.');
        return;
      }
      
      const response = await axios.get(gif, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'random-gif.gif');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
    } catch (error) {
      console.error('Error downloading the GIF:', error);
    }
  }

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5 mt-5 mb-5 bg-blue-400 rounded-[12px] border-2 border-[#3f3e3e]'> 
      <h2 className='text-2xl underline font-bold uppercase pt-5 text-center'>
        Random {tag} Gif
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        gif ? (
          <img src={gif} width='450' alt={`Random ${tag} GIF`} />
        ) : (
          <p>No GIF available</p>
        )
      )}

      <input
        placeholder='Meme Topic'
        className='w-9/12 py-2 text-lg rounded-lg outline-none text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <div className='flex justify-center w-9/12 gap-x-5'>
        <button 
          onClick={() => {
            fetchData(tag);
            setDownloaded(false);
          }}
          className='w-9/12 bg-white opacity-70 py-2 text-md rounded-lg uppercase font-bold text-black tracking-wide mb-5'>
          Generate
        </button>

        {downloaded ? (
          <MdDownloadDone className='mt-1 text-4xl text-red-600' />
        ) : (
          <MdDownload 
            onClick={downloadHandler}
            className='mt-1 cursor-pointer text-4xl text-blue-800'/>
        )}
      </div>
    </div>
  );
}

export default Tag;
