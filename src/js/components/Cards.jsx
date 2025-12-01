const Card = ({img, title, description}) =>{


    return (
    <div className="container"> 
        <div className="card-group">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    )
}

export default Card