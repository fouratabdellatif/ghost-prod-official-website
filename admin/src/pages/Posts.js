/* eslint-disable react-hooks/exhaustive-deps */
import {
  Row,
  Col,
  Card,
  Radio,
  Button
} from "antd";
import StandardCard from '../components/layout/StandardCard.js'
import '../assets/css/BlogSection.css'
import { useState } from "react";
import Tracker from "./Tracker.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletePost, getPosts } from "../actions/posts.js";
import { MdDelete } from "react-icons/md";

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
                  <div style={{
                    display: 'inline-block'
                  }}>
                    <StandardCard
                      type="post"
                      key={index}
                      item={item}
                    />
                    <Button
                      type="danger"
                      htmlType="submit"
                      style={{ width: "55px", marginTop: '10px', display: "block", margin: "10px auto" }}
                      onClick={() => dispatch(deletePost(item._id))}
                    >
                      <MdDelete style={{
                        margin: 'auto',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                      }} />
                    </Button>
                  </div>
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
