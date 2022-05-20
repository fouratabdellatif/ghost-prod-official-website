/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg02.jpg'
import Post from '../components/Blog/Post'
import { useParams } from 'react-router-dom'
import { BlogPageData } from '../data/BlogData'
import Sidebar from '../components/Sidebar'

const PostPage = () => {

    const { id } = useParams();

    let posts = BlogPageData.filter((item) => item.id == id).map((item, index) => {
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
                        <Sidebar id={post.id} />
                    </div>
                </>
            } />
        </>
    )
}

export default PostPage