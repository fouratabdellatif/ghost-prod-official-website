import {
  Row,
  Col,
  Card
} from "antd";
import '../assets/styles/BlogSection.css'
import SinglePost from "../components/layout/SinglePost";
import { BlogData } from '../data/BlogData'
import { useParams } from "react-router-dom";

function Tables() {
  const { postId } = useParams();
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card className="ant-card-body-7" >


              {BlogData.filter((item) => item.postId === postId).map((item, index) => (
                <SinglePost
                  key={index}
                  name={item.text}
                  para={item.para}
                  image={item.image}
                />
              ))}


            </Card>


          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
