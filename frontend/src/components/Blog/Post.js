import "../../assets/css/Post.css";
import CustomDivider from "../CustomDivider";
import moment from 'moment';
import 'moment/locale/fr'

export default function Post({ item }) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={item?.imageFile}
                    alt=""
                />
                <div className="singlePostInfo">
                    <h1 className="singlePostTitle">{item?.text}</h1>
                    <span>{moment(item?.createdAt).locale("fr").fromNow()}</span>
                </div>
                <CustomDivider right />
                {item?.content && item?.content.map((paragraph, index) => (
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
