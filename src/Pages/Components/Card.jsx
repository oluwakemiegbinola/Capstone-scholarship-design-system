import { cardInfo } from "./cardInfo"
// import { useState } from "react"

let Card = (prop) => {

    return (
        <div className={`${prop.grid ? "grid grid-cols-2 gap-2 max-[800px]:flex flex-col": "" } space-y-6`}>
            {
                cardInfo.map((details) => {
                    return (
                        <div className="bg-white shadow-lg p-4 rounded-md space-y-1" key={details.key}>
                        <div className="flex justify-between">
                            <p className="text-2xl max-[700px]:text-xl">{details.mainTitle}</p>
                            <p className="text-gray-900 text-xs self-center">Posted {details.time}</p>
                        </div>
                        <p className="max-[700px]:text-sm">{details.subTitle}</p>
                        <div className="flex gap-2">
                            <p>💰 : </p>
                            <p>{details.tuition}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>🗓️ : </p>
                            <div className="flex gap-1">
                                <p>{details.date}</p>
                                <p className="text-[#0000FE] text-xs font-bold self-center">closes in {details.expiry}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p>🧑‍🎓 : </p>
                            <p>{details.student}</p>
                        </div>
                        <div>
                        <div className="min-[800px]:flex gap-1">
                        <p>Application Status:</p>
                        <div className="min-[800px]:flex items-center min-[700px]:gap-1">
                        <img src={details.progress} alt="progress bar" />
                        <p className="text-[#0000FE] text-xs font-bold self-center">{details.appStatus}</p>
                         </div>   
                        </div>
                        </div>
                        <hr></hr>
                        <div className="min-[800px]:flex items-center justify-between">
                            <div className="flex gap-2 text-sm">
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag1}</p>
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag2}</p>
                            <p className="bg-[#DCDDFF] w-fit p-2 rounded-md">{details.tag3}</p>
                            </div>
            
                            <div className="flex gap-1 max-[800px]:w-40 max-[800px]:place-self-center items-center max-[700px]:pt-2">
                                <button className="bg-[#0000FE] p-2 rounded-md text-white cursor-pointer max-[700px]:text-xs">{details.apply}</button>
                                <img src="images/info icon.png" className="bg-[#DCDDFF] w-fit p-2 rounded-md" alt="info" />
                                <img src={details.bookmark} className={`bg-[#DCDDFF] w-fit p-2 rounded-md`} alt="bookmark" />
                            </div>
                        </div>
                    </div>

                    )
                })
            }
        </div>

        // <div className="space-y-10">
        //             <div>
        // <div className="grid grid-cols-4">
        //     <p className="font-bold">Bill From</p>
        //     <p className="font-bold">Bill To</p>
        //     <p className="font-bold">Order Date</p>
        //     <p className="font-bold">Invoice Date</p>
        // </div>

        // <div className="grid grid-cols-4">
        //     <p>amelia.joseph@gmail.com</p>
        //     <p>wade.warren@gmail.com</p>
        //     <p>10 Jan 2024</p>
        //     <p>15 Jan 2024</p>
        // </div>

        // <div className="grid grid-cols-4">
        //     <p>(604) 337-0352</p>
        //     <p>+316-2222222</p>
        // </div>

        // <div className="grid grid-cols-4">
        //     <p>Amelia Joseph</p>
        //     <p>Wade Warren</p>
        // </div>

        // <div className="grid grid-cols-4">
        //     <p>Darpan 6 Roads, Ahmedabad</p>
        //     <p>(604) 397-8351</p>
        // </div>
        // </div>


        //     <div class="grid grid-cols-2">
        //     <div className="bg-gray-300 w-fit">
        //         <h4>Notes:</h4>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p> 
        //     </div>

        //     <div>
        //         <div class="grid grid-cols-3">
        //             <p className="">Sub Total:</p>
        //             <p className="col-start-3"><strong>$360</strong></p>
        //         </div>
    
        //         <div class="grid grid-cols-3">
        //             <p className="">Tax ABC </p>
        //             <p className="">12%:</p>
        //             <p className=" "><strong>$43.20</strong></p>
        //         </div>
    
        //         <div class="grid grid-cols-3">
        //             <p className="">Tax XYZ </p>
        //             <p className="">5%:</p>
        //             <p className=""><strong>$18.00</strong></p>
        //         </div>
    
        //         <div class="grid grid-cols-3">
        //             <p className="text-blue-800 font-bold">Grand Total:</p>
        //             <p class="grand-total col-start-3 text-blue-800 font-bold "><strong>$421.20</strong></p>
        //         </div>
        //     </div>
        // </div>



        // </div>
    )
    
}

export default Card