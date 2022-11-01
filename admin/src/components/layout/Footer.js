import { Layout, Row, Col } from "antd";
// import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2022, Made by
            {/* with
            {<HeartFilled />} */}
            <a href="https://inceptumje.tn/" target="_blank" rel="noreferrer">INCEPTUM Junior Entreprise</a>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
