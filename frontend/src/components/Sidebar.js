/* eslint-disable eqeqeq */
import "../assets/css/Sidebar.css";
import { BlogPageData } from "../data/BlogData";
import PostCard from "./Cards/PostCard";

export default function Sidebar({ id }) {


    let posts = BlogPageData.filter((item) => item._id != id).map((item, index) => {
        return item;
    });

    let otherPosts = posts.slice(0, 4).map(item => {
        return item;
    });

    console.log(otherPosts);

    return (
        <div className="sidebar">
            <span className="sidebarTitle">Other posts</span>
            {otherPosts.map((item, index) => (
                <div className="sidebarItem">
                    <PostCard
                        key={index}
                        item={item}
                    />
                </div>
            ))}
            <div className="sidebarItem">
                <a className="show-more-blog" href="/blog">{"Show more >>"}</a>
            </div>
        </div>
    );
}
