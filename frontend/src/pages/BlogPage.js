/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg02.jpg'
import PaginatedItems from '../components/Blog/PaginatedItems'
import SpotlightPost from '../components/Blog/SpotlightPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/posts'

const BlogPage = () => {

    const posts = useSelector((state) => state.posts);

    const lastPost = posts[0];

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getPosts());
    }, [dispatch]);
    
    let restOfPosts = posts.filter((item) => item._id != lastPost._id).map((item, index) => {
        return item;
    });

    return (
        <>
            <CasualPage pageTitle="Blog" bg={bgImage} text="Où vous trouvez toutes nos nouveautés..." title="Blog" pageContent=
                {
                    (!posts || posts.length === 0) ?
                        null
                        : (
                            <>
                                <SpotlightPost item={lastPost} />
                                <PaginatedItems itemsPerPage={6} items={restOfPosts} />
                            </>
                        )
                }
            />
        </>
    )
}

export default BlogPage