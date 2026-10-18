const RightCardContent = (props) => {
  return (
        <div className='absolute p-8 top-0 left-0 h-full w-full flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <p className='text-xl leading-relaxed text-white mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, accusantium eaque nemo dolorem mollitia ratione.</p>
            <div className='flex justify-between items-center'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardContent