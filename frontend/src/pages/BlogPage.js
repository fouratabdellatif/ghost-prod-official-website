/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg02.jpg'
import PaginatedItems from '../components/Blog/PaginatedItems'
import SpotlightPost from '../components/Blog/SpotlightPost'
import { useSelector } from 'react-redux'

const BlogPage = () => {

    const posts = useSelector((state) => state.posts);
    const pages = useSelector((state) => state.pages);

    const lastPost = posts[0];

    let restOfPosts = posts.filter((item) => item._id != lastPost._id).map((item, index) => {
        return item;
    });

    let data = pages.filter((item) => item.name == "blog").map((item, index) => {
        return item;
    });

    const page = data[0];

    const pageTitle = page?.pageTitle;
    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={page ? pageTitle : "Blog"}
                bg={page ? image : bgImage}
                text={page ? text : "Où vous trouvez toutes nos nouveautés..."}
                title={page ? title : "Blog"}
                pageContent=
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