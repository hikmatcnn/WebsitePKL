import React from "react";
import SimpleForm from "../components/SimpleForm";
import JumbotronAwal from "../components/JumbotronAwal";
import JsonData from "../data/data.json";
import SimpleNavbar from "../components/SimpleNavbar";
import SimpleGallery from "../components/SimpleGallery";
import SimplePatner from "../components/SimplePatner";
import SimpleCard from "../components/SimpleCard";
import SimpleFooter from "../components/SimpleFooter";

class HomePage extends React.Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <SimpleNavbar />
        <JumbotronAwal data={this.state.landingPageData.Header} />
        <SimpleGallery />
        <SimplePatner />
        <SimpleCard />
        <SimpleForm />
        <SimpleFooter />
      </div>
    );
  }
}

export default HomePage;
