import Accordion from 'react-bootstrap/Accordion';
import '../home.css';

function AllCollapseExample() {
  return (
    <Accordion >
      <Accordion.Item className='m-4' style={{ border: "0px solid white", borderRadius: "20px" }} eventKey="0">
        <Accordion.Header>How does Dr. Bishnu Treat Her patients?</Accordion.Header>
        <Accordion.Body>
        Dr. Bishnu is a compassionate and skilled physician who goes above and beyond to ensure her patients receive excellent care. Her expertise and attentive nature create a trusting and comfortable environment for her patients. She is dedicated to providing comprehensive treatment and promoting the well-being of those under her care.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='m-4' style={{ border: "0px solid white", borderRadius: "20px" }} eventKey="1">
        <Accordion.Header >How to Contact Dr. Bishnu Homeopathy Hospital?</Accordion.Header>
        <Accordion.Body>
        Dr. Bishnu Homoeopathic Hospital, located on New Bus Stand Road in Brahmapur, 760001, is a trusted healthcare facility specializing in homeopathic treatments. With its convenient location, the hospital offers easy access to patients seeking holistic and natural remedies for their health conditions. The hospital is known for its dedicated staff and commitment to providing personalized care to all patients.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='m-4' style={{ border: "0px solid white", borderRadius: "20px" }} eventKey="2">
        <Accordion.Header>Does Homeopathy have side effects?</Accordion.Header>
        <Accordion.Body>
        Homeopathic remedies are generally considered safe with minimal risk of side effects when used properly. Due to their highly diluted nature, homeopathic medicines are thought to have a low potential for adverse reactions. However, in rare cases, some individuals may experience mild symptoms such as a temporary worsening of existing symptoms or a slight aggravation before experiencing improvement. It is always recommended to consult a qualified homeopathic practitioner for personalized advice and guidance.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default AllCollapseExample;