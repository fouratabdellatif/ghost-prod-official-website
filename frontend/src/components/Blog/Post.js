import "../../assets/css/Post.css";
import CustomDivider from "../CustomDivider";

export default function Post({ item }) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={item.image}
                    alt=""
                />
                <div className="singlePostInfo">
                    <h1 className="singlePostTitle">{item.text}</h1>
                    <span>1 day ago</span>
                </div>
                <CustomDivider right />
                {item.content && item.content.map((paragraph, index) => (
                    <>
                        <p className="singlePostDesc">
                            {paragraph}
                        </p>
                        <br />
                    </>
                ))}
            </div>
        </div>
    );
}
