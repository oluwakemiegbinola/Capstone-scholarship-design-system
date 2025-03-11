import Card from './Card'
import { useState } from 'react';

let Content = () => {

    let [grid, isGrid] = useState(false);

    let ChangeGrid = () => {
        isGrid(!grid)
        console.log("change grid"+ grid);
    }

    let [norm, isNorm] = useState(true);

    let ChangeNorm = () => {
        isNorm(!norm)
        console.log("change norm"+ norm);
    }



  return (
    <div className=" rounded-lg flex-1">
        <div className="min-[700px]:mx-10 p-4 bg-[#F4F5FF] rounded-md">
            <p className="text-center text-3xl pb-3">Now showing results for <span className="font-bold">“STEM Undergraduate Scholarships in Ghana”</span></p>
            <hr />
            <div className="flex justify-between pt-4 items-center">
                <p>RESULTS 21</p>
                <div className="flex items-center gap-3">SORT BY:
                    <select className="border-1 border-black rounded-md p-2 text-[#0000FE] font-bold">
                        <option>Latest</option>
                        <option>Earliest</option>
                        <option>Most Popular</option>
                        <option>Closing Soon</option>
                        <option>Fully Funded</option>
                        <option>Merit-Based</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-4 w-[90px] mx-auto pt-4 max-[800px]:hidden">
                <img onClick={ChangeGrid} src="images/list.png" alt="list icon" className='cursor-pointer' />
                <img onClick={ChangeGrid} src="images/grid.png" alt="grid icon" className='cursor-pointer' />
            </div>

            <div className='pt-6'>
                 <Card grid={grid} norm={norm} />
            </div>

            <div className='pagination flex items-center justify-around pt-10'>
                <button className='p-2 rounded-md border-1 border-gray-500 cursor-pointer'>Previous</button>
                <div className='pages flex gap-10'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
                <button className='p-2 pr-6 pl-6 rounded-md border-1 border-gray-500 cursor-pointer'>next</button>
                <p className='text-gray-500'>Showing 1-10 of 21 results</p>
            </div>
        </div>
    </div>
  );
};

export default Content;
