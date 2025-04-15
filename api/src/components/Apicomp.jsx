import { GoDotFill } from "react-icons/go";


const Cardtype = ({ data }) => {
    return(
        <>
            <div className='card'>
                <div className='bg-color d-flex '>
                    <img src={data.image} alt='' />

                    <div className='container2 sb'>
                        <div className='sb-1'>
                            <h3 className='name'>{data.name}</h3>
                            <span className='name'><GoDotFill />{data.name}{data.species}</span>
                        </div>
                        <div className='sb-2'>
                            <span className='text'>Last know location</span>
                            <h4 className='name'>{data.location.name}</h4>
                        </div>
                        <div className='sb-1'>
                            <span className='text'>Frist seen in:</span>
                            <h6 className='name'>{data.created}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cardtype;