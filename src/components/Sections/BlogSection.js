import React, { useEffect } from 'react'
import PostCard from '../Cards/PostCard'
import '../../assets/css/BlogSection.css'
import SectionTitle from './SectionTitle'
import CasualButton from '../CasualButton'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts'

const BlogSection = () => {

    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    let somePosts = posts.slice(0, 3).map(item => {
        return item;
    });

    return (!posts || posts.length === 0) ? (
        null
    ) : (
        <section className='blog-section'>
            <SectionTitle miniTitle="Nos " title="Actualités" />
            <div className='blog-container'>
                {somePosts.map((item, index) => (
                    <PostCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
            <div data-aos="slide-left" className='blog-btn'>
                <CasualButton
                    text="Notre Blog"
                    link="/blog"
                    icon={
                        <MdOutlineArrowForwardIos className="icon-btn" />
                    }
                />
            </div>
        </section>
    )
}

export default BlogSection