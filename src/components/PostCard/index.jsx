
import './styles.css'
export const PostCard = ({title,body,cover,key}) => {



    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div key={key} className="post-content">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}