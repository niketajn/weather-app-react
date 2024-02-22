import CardItem from './CardItem';

const Cards = ({cardData}) =>{
    
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
        {cardData.map(((dt,index)=>{ return (
            <CardItem item={dt} key={index}></CardItem>
        )}))}
        </div>
    )

}
export default Cards;