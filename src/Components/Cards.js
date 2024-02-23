import CardItem from './CardItem';

const Cards = ({cardData}) =>{
    
    return(
        <div className='d-flex flex-wrap gap-3'>
        {cardData.map(((dt,index)=>{ return (
            <CardItem item={dt} key={index}></CardItem>
        )}))}
        </div>
    )

}
export default Cards;