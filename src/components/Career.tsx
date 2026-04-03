import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>IIT (BHU), Varanasi</h5>
              </div>
              <h3>2024-Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CPI of 8.06/10. Active member of Technex and Masquerade Dramatic Society.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate/+2</h4>
                <h5>Shivjyoti convent school</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Intermediate education under CBSE board, securing 82.2%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Shakuntala Vidyalaya Bhilai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Matriculation under CBSE board, securing 84.8%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
