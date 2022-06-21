/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg02.jpg'
import Post from '../components/Blog/Post'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/posts'

const PostPage = () => {

    const { id } = useParams();

    const postsData = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getPosts());
    }, [dispatch]);

    let posts = postsData.filter((item) => item?._id == id).map((item, index) => {
        return item;
    });

    const post = posts[0];

    return (
        <>
            <CasualPage pageTitle="Blog" bg={bgImage} text="Où vous trouvez toutes nos nouveautés..." title="Blog" pageContent={
                <>
                    <div style={{
                        display: 'flex'
                    }}>
                        <Post
                            item={post}
                        />
                        <Sidebar id={post?._id} />
                    </div>
                </>
            } />
        </>
    )
}

export default PostPage