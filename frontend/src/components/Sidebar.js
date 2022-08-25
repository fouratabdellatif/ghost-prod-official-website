/* eslint-disable eqeqeq */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import "../assets/css/Sidebar.css";
import PostCard from "./Cards/PostCard";

export default function Sidebar({ id }) {

    const postsData = useSelector((state) => state.posts);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);


    let posts = postsData.filter((item) => item._id != id).map((item, index) => {
        return item;
    });

    let otherPosts = posts.slice(0, 4).map(item => {
        return item;
    });

    // console.log(otherPosts);

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
                <a className="show-more-blog" href="/blog">{"Afficher plus >>"}</a>
            </div>
        </div>
    );
}
