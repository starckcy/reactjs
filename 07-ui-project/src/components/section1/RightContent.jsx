import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id="right" className='h-full flex rounded-4xl overflow-x-auto flex-nowrap p-6 gap-10 w-2/3'>
        {props.users.map(function(elem, idx){
            return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx} />
        })}
    </div>
  )
}

export default RightContent