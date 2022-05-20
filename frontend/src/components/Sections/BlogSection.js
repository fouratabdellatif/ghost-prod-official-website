import React from 'react'
import { BlogPageData } from '../../data/BlogData'
import PostCard from '../Cards/PostCard'
import '../../assets/css/BlogSection.css'
import SectionTitle from './SectionTitle'
import CasualButton from '../CasualButton'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const BlogSection = () => {

    let somePosts = BlogPageData.slice(0, 3).map(item => {
        return item;
    });

    return (
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