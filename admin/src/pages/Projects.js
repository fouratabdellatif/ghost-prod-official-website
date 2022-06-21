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
import { getProjects } from "../actions/projects.js";

function Projects() {

  const projects = useSelector((state) => state.projects);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getProjects());
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

    return data.filter((project) => {
      var projectName = project.name;
      return replaceAcc(projectName.toLowerCase()).includes(replaceAcc(query.toLowerCase()));
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredData = filterData(projects, searchQuery);

  return (
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Projets"
            extra={
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a"><a id="add-mem" href="/project">Ajouter un projet</a></Radio.Button>
                </Radio.Group>
            }
          >

            <section className='blog-section'>

              <Tracker
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                label="Rechercher un projet"
                placeholder="Introduire le nom du projet"
              />

              <div className='blog-container'>
                {filteredData.map((item, index) => (
                  <StandardCard
                    type="project"
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

export default Projects;
