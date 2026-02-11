import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBrief from "../components/training-form/AboutBrief";
import TrainingEnrollmentForm from "../components/training-form/TrainingEnrollmentForm";
import "../styles/trainingForm.css";

const TrainingForm = () => {
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
