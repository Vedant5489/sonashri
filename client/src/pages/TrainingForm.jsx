import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBrief from "../components/training-form/AboutBrief";
import TrainingEnrollmentForm from "../components/training-form/TrainingEnrollmentForm";
import "../styles/trainingForm.css";
import { useEffect } from "react";

const TrainingForm = () => {

  useEffect(() => {
    document.title = "SES | Training Form";
  }, []);

  return (
    <>
      <Navbar />
      <main className="training-page">
        <AboutBrief />
        <TrainingEnrollmentForm />
      </main>
      <Footer />
    </>
  );
};

export default TrainingForm;
