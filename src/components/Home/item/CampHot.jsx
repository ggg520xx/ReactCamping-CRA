import indexIcon from '../../../assets/index/indexIcon.png';


const CampHot = (props) => { 
    return ( 

        <>
            

            <div className="flex p-5 border border-red-500 justify-center items-end">
                {/* <FontAwesomeIcon icon={faCoffee} className="mr-2" />
                <FontAwesomeIcon icon={faAtom} className="w-12 h-12" /> */}
                <img src={indexIcon} className='w-20 h-20' alt="" />
                <h2 className="font-semibold text-center text-4xl">熱門營區</h2>
                <img src={indexIcon} className='w-20 h-20' alt="" />
            </div>

            

            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]"  alt="" /></div>
                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]"  alt="" /></div>
                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]"  alt="" /></div>

                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" alt="" /></div>
                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" alt="" /></div>
                <div className="col-span-1 mt-5 bg-red-300"><img className="h-[200px] w-full object-cover rounded-[30px]" alt="" /></div>
            </div>




        </>
    )

}



export default CampHot;