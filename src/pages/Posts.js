/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio
} from "antd";
import StandardCard from '../components/layout/StandardCard.js'
import '../assets/css/BlogSection.css'
import { useState } from "react";
import Tracker from "./Tracker.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../actions/posts.js";

function Posts() {

  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getPosts());
  }, []);

  function replaceAcc(str) {
    return str
      .replace(/[àáâãäå]/g, "a")
      .replace(/[èéêë]/g, "e")
      .replace(/[^a-z0-9]/gi, '');
  }

  const filterData = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((post) => {
      var postText = post.text;
      return replaceAcc(postText.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(posts, searchQuery);

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Posts"
            extra={
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a"><a id="add-mem" href="/post">Ajouter un post</a></Radio.Button>
                </Radio.Group>
            }
          >

            <section className='blog-section'>

              <Tracker
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                label="Rechercher un post"
                placeholder="Introduire le nom du post"
              />

              <div className='blog-container'>
                {filteredData?.map((item, index) => (
                  <StandardCard
                    type="post"
                    key={index}
                    item={item}
                  />
                ))}
              </div>
            </section>
          </Card>


        </Col>
      </Row>
    </div>
  );
}

export default Posts;
