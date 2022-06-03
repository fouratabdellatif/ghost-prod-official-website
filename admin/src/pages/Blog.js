import {
  Row,
  Col,
  Card,
  Radio
} from "antd";
import PostCard from '../components/layout/PostCard.js'
import { BlogData } from '../data/BlogData'
import '../assets/styles/BlogSection.css'

function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Les Blogs partagés"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">

                    <Radio.Button value="a"><a id="add-mem" href="/AjoutBlog">Ajouter un blog</a></Radio.Button>

                  </Radio.Group>
                </>
              }
            >

              <section className='blog-section'>

                <div className='blog-container'>
                  {BlogData.map((item, index) => (
                    <PostCard
                      key={index}
                      postId={item.postId}
                      name={item.text}
                      category={item.category}
                      image={item.image}
                    />
                  ))}
                </div>
              </section>
            </Card>


          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
