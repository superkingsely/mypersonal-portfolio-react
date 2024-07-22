import '../Card/card.css'
const Card = ({cardEmoji,txt1,txt}:any) => {
  return (
    <div className="card-con">
        <div className="emoji-card">
            <img src={cardEmoji} alt="" />
        </div>
        <span className='card-h1'>{txt1}</span>
        <p>{txt}</p>
    </div>
  )
}

export default Card