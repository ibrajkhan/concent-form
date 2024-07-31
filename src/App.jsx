import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import logoSeno from "../src/assets/senocare.png";
import logoSeno from "../src/assets/logo.png";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import TermConditions from "./assets/SenocareConsent.pdf";
import withReactContent from "sweetalert2-react-content";
import { useForm } from "react-hook-form";
import { useRef } from "react";

// import React from "react";

import emailjs from "@emailjs/browser";

const MySwal = withReactContent(Swal);

import "./form.css";

const Form = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const watchAllFields = watch();

  const onSubmit = (data) => {
    console.log(data, "Data");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    MySwal.fire({
      icon: "success",
      title: "Form Submitted Sucessfully",
      time: 4000,
    });

    reset();
  };
  console.log(watchAllFields);

  return (
    <div className="main">
      <Navbar className="bg-body-tertiary navbar__content navbar__main">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoSeno}
              width={180}
              //   className="d-inline-block align-top"
              //   alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="text__container">
        <div className="content__form__text">
          <Row>
            <Col>
              <h2>TERMS CONDITIONS</h2>
              <h3>
                {" "}
                SENOCARE CARE MANAGER (CM) & ASSISTANT CARE MANAGER (ACM)
              </h3>
              <ul>
                <li>
                  The Senocare CM and ACM are full time employees of Senocare
                  Services Pvt Ltd.
                </li>
                <li>
                  Care Managers (i.e. CM and/or ACM) are available between 1000
                  Hrs. to 1800 Hrs. on weekdays. For assistance beyond these
                  hours, members can reach the Senocare 24x7 Help desk number
                  provided to them i. e. +91- 8800700100.
                </li>
                <li>
                  CM / ACM visits will be scheduled and confirmed 24 to 48 hours
                  prior to the visit.
                </li>
              </ul>
              <h3> MEDICAL ASSISTANCE</h3>
              <ul>
                <li>
                  Senocare is a service provider and conducts strict due
                  diligence before empaneling professionals & other service
                  providers. However, Senocare shall in no manner be responsible
                  for the services provided by such professionals and/ or
                  services providers as may be selected by the member.
                </li>
                <li>
                  Senocare shall provide members with access to qualified
                  doctors, accredited labs, trained nurses. Members are free to
                  select these services/ medical personnel and choose to use
                  these services as per their own discretion. Senocare shall not
                  be responsible for any liabilities arising from the use of
                  these services by the members.
                </li>
                <li>
                  CMs and ACMs are not qualified medical practitioners but are
                  trained to check basic vitals including blood pressure, sugar,
                  pulse, oxygen & give CPR (Cardiopulmonary resuscitation or
                  First Aid).
                </li>
                <li>
                  Complimentary consultation offered with doctors / dieticians
                  are strictly restricted to those doctors empaneled with
                  Senocare. However, member can ask the Care Manager to book an
                  online consultation with other specialists as per actual
                  costs.
                </li>
                <li>
                  Medical emergency service is restricted to assistance in
                  getting access to ambulance and coordination with hospital on
                  the phone.
                </li>
                <li>
                  For home delivery of medicines, a prescription is mandatory.
                </li>
                <li>
                  Sample home collection for lab tests must be booked with 24
                  hours’ notice, services to be sourced by accredited NABL labs.
                </li>
                <li>
                  Members will be provided with options for doctor, attendants &
                  other service providers in different fields, and he / she is
                  free to choose the professional or refer to their own doctor
                  or service provider.
                </li>
              </ul>
              <h4> Attendant & Nursing Staff – Duties:</h4>
              <p>
                Engaging an Attendant or a Nursing Staff for the first time, the
                attendant should be given proper brief about.
              </p>
              <ul>
                <li> Patient’s condition</li>
                <li> Daily routine</li>
                <li> Mobility condition</li>
                <li>Medication in written / doctor’s prescription</li>
                <li> Toileting needs</li>
              </ul>
              <h4>Services by Attendant</h4>
              <ul>
                <li> Assistance in walking & avoid fall.</li>
                <li>Bathing</li>

                <li> Assistance in changing clothes</li>
                <li> Brushing Teeth & Denture Care</li>
                <li> Diaper Change</li>
                <li> Assisting with WC, bedpan, Urinals, Catheters</li>
                <li> Oral, Ryle Tube feeding assistance</li>
                <li>
                  Repositioning bed-bound patients to help prevent bed sores
                </li>
                <li> Assisting with oral medication </li>

                <li> Assistance with light exercises</li>
                <li> Nail care, hair care, shaving.</li>
                <li> Checking temperature, blood pressure and blood sugar.</li>
              </ul>
              <h4> Services by Qualified Nurse:</h4>
              <ul>
                <li> IV Cannula care</li>
                <li>IM administration</li>
                <li> Oxygen administration</li>
                <li> Tracheostomy care</li>
                <li> Wound dressing</li>
                <li> Injection</li>
                <li> Insulin administration</li>
                <li> Urinary Catheter care</li>
                <li> Nasogastric tube feeding</li>
                <li> Oral, Ryle’s Tube Feeding</li>
                <li> Assisting with Oral Medication</li>
                <li> All below services provided by attendant.</li>
                <li> Assistance in walking & avoid fall.</li>
                <li> Bathing</li>
                <li> Assistance in changing clothes</li>
                <li> Brushing Teeth & Denture Care</li>
                <li> Diaper Change</li>
                <li> Assisting with WC, bedpan, Urinals, Catheters</li>
                <li> Oral, Ryle Tube feeding assistance.</li>
                <li>
                  Repositioning bed-bound patients to help prevent bed sores.
                </li>
                <li> Assisting with oral medication</li>
                <li> Assistance with light exercises</li>
                <li> Nail care, hair care, shaving.</li>
                <li> Checking temperature, blood pressure and blood sugar</li>
              </ul>
              <h4>
                Attendant & Nursing Staff Timings:<br></br>
                <br></br>
                Live-in staff
              </h4>
              <ul>
                <li>
                  The staff is expected to stay 24/7 with the member. However,
                  the working hours are limited to 8 hours per
                </li>
                <li>
                  The staff lives in with the member and is expected to provide
                  one-to-one dedicated care service
                </li>
                <li> The staff provides one-member care at a time</li>
                <li> The staff’s all 3 meals are provided by the member</li>
                <li>
                  Clean place to stay with one mattress, bed sheets and pillow
                </li>
                <li> Clean toilet to use</li>
                <li> Safety and security</li>
              </ul>
              <h4>Day Duty</h4>
              <ul>
                <li>
                  The staff is expected to provide dedicated service upto 12
                  hours with the member
                </li>
                <li>
                  The staff lives in their own home and reports to the member’s
                  house as per the time decided mutually
                </li>
                <li> The staff provides one-member care at a time</li>
                <li> The staff’s all 3 meals are provided by the </li>
              </ul>

              <h4>Member Obligation</h4>
              <ul>
                <li>
                  Safety & security of the attendant/nurse to perform their
                  services
                </li>
                <li>
                  The member shall take full responsibility and care to ensure
                  that there is no verbal, mental or physical harassment or
                  abuse of the attendant / nursing staff at their residence
                </li>
                <li>
                  Keep Senocare senior managers informed about any misconduct or
                  failure of the attendant/nurse to discharge any duty
                </li>
                <li>
                  Not to ask attendants & nursing staff to do jobs outside the
                  scope of work
                </li>
                <li>
                  Provide the attendant/nurse with the required equipment to
                  carry out his/her job, including “Personal Protective
                  Equipment” like disposable gloves, masks, apron, etc. to take
                  care of the member
                </li>
                <li>
                  Promptly inform the attendant/ nurse and Senocare managers if
                  the member is suffering from any infectious disease like TB,
                  HIV/AIDS, Hepatitis, COVID-19, etc. which can adversely affect
                  the health of the attendant/nurse or the medical team
                </li>
                <li>
                  Not to forcefully keep the attendant/nurse against his or her
                  wishes. Doing so construes illegal detention and the member
                  will be responsible for any contingencies arising from the
                  behavior of the member or any harm done to the attendant/nurse
                </li>
                <li>
                  Not to lend money or make unauthorized payment to the
                  attendant/nurse or Senocare staff
                </li>
                <li>
                  Provide immediate medical attention to attendant/nurse in case
                  of any sickness or accident and inform Senocare representative
                  without any delay
                </li>
                <li>
                  Provide food and accommodation and adequate rest to Live-in
                  attendant/nurse
                </li>
                <li>
                  Inform concerned authorities including nearest Police station
                  & RWA about employing the staff
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>DISCLOSURE OF HEALTH INFORMATION</h3>
              <p>
                Senocare, may and will use the member’s health information with
                the objective of providing the member the desired treatment,
                obtaining care or facilitate health related surgery or
                operations. Members agree and acknowledge that such information
                (along with other personal information of the members as may be
                required) may be shared by Senocare with other service providers
                in order to ensure that the requested services may be provided
                to the member. Members thus consent to such transmission/
                sharing of information to the extent necessary for provision of
                the requested services.
              </p>
              <h3>
                Listed below are some of the circumstances under which the
                member’s health information may/will be disclosed:
              </h3>
              <h4> To Provide Treatment:</h4>
              <p>
                Senocare may/will use the member’s health information to
                facilitate care within its firm and with the third parties
                involved in the member’s health care, for example: Doctors,
                Hospitals, Nursing agents, and other health care professionals
                enrolled with Senocare or contacted on member’s request. Further
                to the above listed, the members health information may/will be
                disclosed to member’s family members, medical equipment
                suppliers or other health care professionals with the sole
                intentions of providing the best health care to Senocare
                members.
              </p>
              <h4>To Acquire Payment:</h4>
              <p>
                Senocare may/will include the member’s health information for
                billing purposes to collect payment from the vendors or third
                parties for the care received by the member from the health care
                provider. For example, Health Insurance service provider. To
                improvise internal company operations: Senocare will/may
                disclose the member’s health information to better and improvise
                quality care provided to its member’s health care.
              </p>
              <h4>For Treatment Alternatives:</h4>
              <p>
                Senocare may disclose the member’s health information to
                recommend possible treatment options or alternatives that may be
                of interest to the member.
              </p>
              <h4>In case of a risk to Public Health:</h4>
              <p>
                Senocare will/may disclose the member’s health information in
                case of an infectious disease, injury or disability or in case
                of a medicine/product defect to track or enable product recall,
                replacements.
              </p>
              <h4>Incase of Domestic Violence, Abuse, and Neglect:</h4>
              <p>
                Seno care will/may disclose the member’s health information to
                the local authorities in case of any negligence, abuse or
                domestic violence observed or reported by the member as a
                victim/ observer, only if the member wishes and expresses to
                Senocare for it to be reported.
              </p>
              <h4>Incase of Legal Proceedings:</h4>
              <p>
                Senocare will/may disclose member’s health information in the
                case of any legal proceedings if required by the local
                authorities or for any other lawful purposes. However, the
                member will be notified by Senocare post which Senocare may/will
                share the health information.
              </p>
              <h4>To Medical Examiners:</h4>
              <p>
                Senocare will/may disclose member’s health information to
                medical examiners if required to determine the member’s cause of
                a fatal accident/incident or death.
              </p>
              <h4>To Funeral Homes:</h4>
              <p>
                Senocare will/may disclose member’s health information to
                funeral homes/agencies to organize the funeral arrangements.
              </p>
              <h4>Incase of Organ Donations:</h4>
              <p>
                Senocare will/may disclose member’s health information if the
                member has assigned his/ her organs post the member’s death to
                be donated.
              </p>
              <h4>Incase of Serious threat or health safety:</h4>
              <p>
                Senocare will/may disclose member’s health information to the
                legal authorities if Senocare believes that there is imminent
                threat to the member’s safety and well-being.
              </p>
              <p>
                <b>
                  Please note that the above list is illustrative in nature and
                  in no way exhaustive or limits the authority of Senocare to
                  share/ disclose health (and other) information of a member as
                  may be required for providing the services opted by the member
                  in his/ her sole discretion and judgment.
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>MEMBERS RIGHTS AND APPROVALS</h3>
              <p>
                Members have the following rights to the health information that
                Senocare maintains.
              </p>
              <h3>Restriction Right:</h3>
              <p>
                Senocare members can request for restriction rights pertaining
                to their healthcare information to someone involved in the
                member’s care or in the payment of your care. However, Senocare
                is not obliged to agree with the members request in this
                situation as there can be impulsion to share.
              </p>
              <h3>Right to receive confidential communication:</h3>
              <p>
                Senocare member can reserve the right whether or not to share
                their health information in the presence of their family
                members.
              </p>
              <h3>Right to inspect and copy Health Information:</h3>
              <p>
                Senocare member has the right to request for their billing
                information
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                SENOCARE’S DUTIES TOWARDS ITS MEMBER(S) WITH REGARDS TO HEALTH
                CARE INFORMATION
              </h3>
              <p>
                Senocare is obliged to maintain the privacy of its member’s
                health care information. Senocare will abide by the terms and
                conditions of this notice which may/will be amended time to
                time. Senocare reserves the right to revise, amend or add new
                provisions to the notice for all health information that it
                maintains. If the notice is amended, the copy of the notice will
                be shared with the member. In case the member feels the member’s
                rights have been violated, the member can express complaints to
                the Senocare Care Manager or management directly. Services
                included in various packages are strictly on non-transferable
                basis by the member. In case the member has not been able to use
                a service during the time frame defined, the same cannot be
                transferred for later use.
              </p>
              <h3>SAFETY & HOMECARE</h3>
              <p>
                Senocare has collaborated with Urban Company/ Urban Clap (UC)
                for various home care services like, AC repair service, Salon
                services, Electrician, Plumber, etc. UC is amongst the market
                leader in providing various home care services especially with
                regards to trained & reliable professionals at reasonable price.
                For these services the Terms & Conditions set forth by Urban
                Company will be applicable to members using their services. The
                same are recapped as an annexure and attached herewith for ready
                reference.
              </p>
              <h3>SUPPLIERS AND/ OR SERVICE PROVIDERS</h3>
              <p>
                In our effort to constantly improve and evolve, Senocare may add
                or change our suppliers and / or service providers from time to
                time. In such an event, the terms & conditions of those
                suppliers and/ or service providers will automatically be
                applicable to the member(s) for all their services offered
                through Senocare.
              </p>
              <h3>TECHNOLOGY & TROUBLESHOOTING</h3>
              <p>
                Technology support refers to usage and navigation of commonly
                used apps and devices. Any hardware support, if required, will
                be payable as per actual costs.
              </p>
              <h3>FORMS & FILING</h3>
              <p>
                Income tax filing includes only personal income tax for
                individuals only. Further, corporate tax is not covered as part
                of our service. Confidentiality would be unconditional
                commitment of empaneled professionals
              </p>
              <h3>TERMINATION OF MEMBERSHIP / SENOCARE SERVICES</h3>
              <p>
                The member can terminate the services if they do not find the
                services being provided as per the offerings of their package or
                service booked. However, no refund shall be payable on the
                payment towards the packages availed
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                MEMBERSHIP / SENOCARE SERVICES FEES, TAXES & PAYMENT TERMS
              </h3>
              <ul>
                <li>
                  The package & other Senocare service rates are subject to
                  change from time to time based on the service provider / goods
                  rate and cost of providing service changes.
                </li>
                <li>
                  Package rate & Senocare service fees mentioned are excluding
                  government taxes & will be applied as per the government rules
                  applicable at the time of booking & paying for the services.
                </li>
                <li>
                  The membership is activated 48 hours post receiving the
                  payment in Senocare Account
                </li>
                <li> No credit is extended for Senocare services.</li>
                <li>
                  Services are provided as per the inclusions of the package &
                  any additional service requested is at additional cost as
                  would be advised by the Senocare managers.
                </li>
                <li>
                  Services booked vary in terms of cancellation and refund as
                  there are different suppliers for various services being
                  provided
                </li>
                <li>
                  Payment for professionals like CA, Lawyers, Travel Agency are
                  as per the understanding between the member and such
                  professional
                </li>
                <li> Invoices will be sent by email only</li>
                <li>
                  Senocare encourages payment by cheque / bank Transfer / Paytm
                  for the services / package being booked and any payment made
                  in Cash is done on the member's risk
                </li>
                <li>
                  Senocare team is not allowed to receive partial payment
                  against the Invoice. Members are requested to make full
                  payment as per the Invoice value
                </li>
                <li>
                  In case of Cheque dishonor, in addition to remedies available
                  in law, Senocare is entitled to collect Rs. 500.00 as a
                  penalty over and above the invoice value
                </li>
                <li>
                  Upon realisation of amount, Senocare will email the payment
                  receipt to the member.
                </li>
                <li>
                  Delay in payment would entail interest at the rate of 15 % per
                  annum and may also lead to suspension of services.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Senocare Bank Details are as under:</h3>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td> Account Name</td>
                    <td>SENOCARE SERVICES PVT LTD.</td>
                  </tr>
                  <tr>
                    <td>Bank Name</td>
                    <td>KOTAK MAHINDRA BANK</td>
                  </tr>
                  <tr>
                    <td> Account No</td>
                    <td> 3245-0672-89</td>
                  </tr>
                  <tr>
                    <td> IFCS Code</td>
                    <td>KKBK0000261</td>
                  </tr>
                  <tr>
                    <td> Type</td>
                    <td>Current</td>
                  </tr>
                  <tr>
                    <td> Branch Address</td>
                    <td>
                      JMD REGENT SQUARE MEHRUALI GURGAON RD, GURGAON - 122002 HR
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>DISCLAIMER/WAIVER/INDEMNITY/LIMITATION OF LIABILITY</h3>
              <ul>
                <li>
                  The member agrees and acknowledges that the role of Senocare
                  and its team is limited to facilitating/ arranging/ managing
                  the provision of services requested by the member(s) from time
                  to time under the selected package. In this regard, the member
                  completely understands and agrees that Senocare shall in no
                  way be liable for the acts or omissions of the suppliers/
                  selected service providers (nurses, attendants, CA, lawyers,
                  doctors, diagnostic labs, etc.) nor for any dispute connected
                  with or arising out of the services provided by such
                  suppliers/ service providers in any manner whatsoever.
                </li>
                <li>
                  The member recognises that use of Senocare services shall be
                  at his/her own risk and that each member shall be solely
                  responsible for their own safety and the safety of their
                  belongings.
                </li>
                <li>
                  The member may note that Senocare has no quality control over
                  third-party products & services such as drugs, diagnostics
                  etc. and shall not responsible or liable for products or
                  service quality deficiency. Further, Senocare does not
                  exercise direct control or discretion over suppliers/ service
                  providers such as attendant/nursing staff, Urban Clap
                  professionals (plumbers, electricians, etc.) while working at
                  member’s home and disclaims all responsibilities for such
                  person’s conduct or omissions whatsoever.
                </li>
                <li>
                  By accepting these Terms and Conditions, the member waives and
                  releases Senocare and its partners, directors, agents,
                  employees, officers, attorneys, representatives and affiliated
                  entities from all liability, including but not limited to
                  liability arising from negligence or the actions of the
                  supplier and/ or service providers and/ or professionals
                  performing the required services for the member upon request.
                </li>
                <li>
                  Senocare does not provide medical advice, diagnoses or
                  recommendations about medical treatment, and does not
                  recommend or endorse any products or information for any
                  circumstances. The member expressly acknowledges and agrees
                  that Senocare is not responsible for the results of any
                  decisions made by the member or any third party.
                </li>
                <li>
                  Senocare’s listing of any third parties does not constitute
                  sponsorship or endorsement of these professionals or service
                  providers. The member shall make a competent consumer decision
                  before employing the services of any listed third party
                  professional or service provider. The member bears all risk
                  associated with the employing of any third party and obtaining
                  their goods or services.
                </li>
                <li>
                  Senocare shall endeavour to protect the confidentiality of the
                  information provided by the member (except to the extent
                  required for providing the services). However, Senocare cannot
                  ensure the security of such information and under no
                  circumstances shall be liable for the same
                </li>
                <li>
                  Senocare specifically disclaims any and all liability or loss
                  arising out of any action taken relying on the professional
                  opinion (including medical opinion, diagnoses, etc.), tools,
                  applications, products and services provided by suppliers/
                  service providers/ professionals as part of services
                  facilitated/ managed by Senocare as per the selected package.
                </li>
                <li>
                  In no event shall Senocare, nor any of its partners, officers,
                  directors and employees, be liable to the member for anything
                  arising out of or in any way connected with use of the
                  products/ services of suppliers/service
                  providers/professionals, whether such liability is under
                  contract, tort or otherwise.
                </li>
                <li>
                  Further, Senocare, including its partners, officers, directors
                  and employees, shall not be liable for any indirect,
                  consequential or special liability arising out of or in any
                  way related to provision of services under the selected
                  package.
                </li>
                <li>
                  The member also agrees that Senocare shall not be responsible
                  or liable to the member, or any party, for the statements or
                  conduct of any third party service provider/ supplier/
                  professional.
                </li>
                <li>
                  In no event shall Senocare or its suppliers or licensors or
                  service providers or professionals be liable for any indirect,
                  incidental, special, punitive, increased, or consequential
                  damages incurred by a member or any third party, whether in an
                  action in contract or tort (including negligence and strict
                  liability), arising from providing services to the member
                  under the selected package, even if senocare has been advised
                  of the possibility of such damages. under no circumstances
                  shall the total liability of senocare for all damages, losses,
                  or causes of action exceed the amount paid by the member to
                  Senocare, if any.
                </li>
                {/* <li>
                  IN NO EVENT SHALL SENOCARE OR ITS SUPPLIERS OR LICENSORS OR
                  SERVICE PROVIDERS OR PROFESSIONALS BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, PUNITIVE, INCREASED, OR CONSEQUENTIAL
                  DAMAGES INCURRED BY A MEMBER OR ANY THIRD PARTY, WHETHER IN AN
                  ACTION IN CONTRACT OR TORT (INCLUDING NEGLIGENCE AND STRICT
                  LIABILITY), ARISING FROM PROVIDING SERVICES TO THE MEMBER
                  UNDER THE SELECTED PACKAGE, EVEN IF SENOCARE HAS BEEN ADVISED
                  OF THE POSSIBILITY OF SUCH DAMAGES. UNDER NO CIRCUMSTANCES
                  SHALL THE TOTAL LIABILITY OF SENOCARE FOR ALL DAMAGES, LOSSES
                  OR CAUSES OF ACTION EXCEED THE AMOUNT PAID BY THE MEMBER TO
                  SENOCARE, IF ANY.
                </li> */}
                <li>
                  The member hereby indemnifies Senocare and undertakes to keep
                  Senocare indemnified against any losses, damages, costs,
                  liabilities and expenses (including without limitation legal
                  expenses and any amounts paid by Senocare to a third party in
                  settlement of a claim or dispute on the advice of legal
                  advisers of Senocare) incurred or suffered by Senocare arising
                  out of any breach by the member of any provision of these
                  Terms and Conditions, or arising out of any claim that the
                  member had breached any provision of these Terms and
                  Conditions.
                </li>
              </ul>
              <h3>FORCE MAJEURE</h3>
              <p>
                Senocare shall not be liable for any delay or default in the
                event Senocare is unable to perform any of its obligations
                towards the member(s) as a result of natural disasters, actions
                or decrees of governmental bodies, communication line failures
                which are not caused due to the fault of the affected member, or
                any other delay or failure which arises from causes beyond a
                party’s reasonable control and without negligence or wilful
                misconduct of the Senocare otherwise chargeable with failure,
                delay or default including but not limiting to, strikes, riots,
                protests, mass demonstration, government imposed restrictions,
                epidemic/ pandemic, civil commotion, fire, floods, explosions,
                acts of God, acts of State, war, enemy action or terrorist
                action (hereafter referred to as a “Force Majeure Event”).
                Senocare shall immediately give written notice to the member of
                the facts which constitute the Force
              </p>
              <p>
                Majeure Event and shall do everything reasonably possible to
                resume performance. For the avoidance of doubt, a Force Majeure
                Event shall exclude any event that a party could reasonably have
                prevented by testing, work-around, or other exercise of
                diligence.
              </p>
              <h3>GOVERNING LAW AND JURISDICTION</h3>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of India and any dispute(s) relating to
                the provisions of these Terms and Conditions shall be subject to
                the exclusive jurisdiction of the courts of Gurgaon.
              </p>
              <h3>GENERAL</h3>
              <ol type="i">
                <li>
                  The member shall have no right to assign its rights under
                  these Terms and Conditions;
                </li>
                <li>
                  These Terms and Conditions may not be and shall not be deemed
                  or construed to have been modified, amended, rescinded or
                  canceled in whole or in part, except by written instrument
                  which makes specific reference to this MOU and which specifies
                  that these Terms and Conditions are being modified, amended,
                  rescinded or canceled by Senocare;
                </li>
                <li>
                  If any provision of these Terms and Conditions shall be
                  declared invalid or illegal for any reason whatsoever, then,
                  notwithstanding such invalidity or illegality, the remaining
                  terms and provisions of these Terms and Conditions shall
                  remain in full force and effect in the same manner as if the
                  invalid or illegal provision had not been contained herein;
                </li>
                <li>
                  Any failure of a Party to comply with any obligation contained
                  in these Terms and Conditions may be waived by the Party
                  entitled to the benefit thereof only by a written instrument
                  duly executed and delivered by the Party granting such waiver,
                  which instrument makes specific reference to these Terms and
                  Conditions and the provision to which it relates and describes
                  the right or obligation consented to, waived or purported to
                  be violated;
                </li>
                <li>
                  These Terms and Conditions contains the entire agreement and
                  understanding between the Parties hereto relating to the
                  subject matter hereof and supersedes all other prior
                  agreements and understandings, both written and oral, between
                  the Parties with respect to the subject matter hereof;
                </li>
                <li>
                  Any notice, demand or other communication given or made under
                  or in connection with the matters contemplated by these Terms
                  and Conditions, shall be in writing and delivered, personally,
                  by courier, registered airmail or by e-mail to the Parties at
                  the addresses of the Parties and shall be deemed delivered
                  when received/ refused by the Party or the next business day
                  (whichever is earlier).
                </li>
              </ol>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="seno__form__heading"> Member(s) Consent Form</h2>
              <p>
                The member(s) or the Subscriber (member’s relative or any other
                person who has subscribed to Senocare services on behalf of the
                member(s)), as the case may be, hereby confirms that he /she has
                booked the Senocare Package after doing due diligence and he /
                she agrees to all the Terms and Conditions attached to this
                consent form.
              </p>
              <p>
                The member(s) and/or the Subscriber (as applicable) hereby
                agrees and undertakes the following:
              </p>
              <p>
                I have read and understood the Terms and Conditions of the
                Senocare Service Package that I have subscribed to and I am
                signing this Consent Form after having been given a reasonable
                opportunity to seek independent advice on the same.
              </p>
              <p>
                I hereby accept and undertake that all the information furnished
                by me and/or by my family member is updated, true and accurate.
                I understand that Senocare is a service facilitator and I am in
                agreement with the terms and conditions of their services which
                are specified under the Term and Conditions in this Members
                Consent Form.
              </p>
              <p>
                I understand that Senocare, through its team members, will
                endeavour to assist me with my day to day requirements of
                utility services by sourcing various services for me through
                their reliable collaborators/ associate partners and business
                associates, all of which I am free but under no obligation to
                use. I also understand that the Terms and Conditions of all of
                Senocare’s vendors/ service providers will be binding on me for
                the services being availed of by me. Finally, I also understand
                that Senocare may change these service providers / professionals
                from time to time in the interest of its members, including me.
              </p>
              <p>
                The Senocare staff has clearly informed me about the services to
                be provided, rights and responsibilities of the member / the
                undersigned. I have also been informed of the costs and billing,
                the practices to be adopted or followed with respect to the
                personnel/ professional providing services, member(s)
                information (medical and otherwise) to be provided and updated
                etc., and I hereby confirm that I have understood and hereby
                give my consent to the same.
              </p>
              <p>
                I am aware that, during the course of the services, services of
                consultants including (without limitation) doctors, dieticians,
                physiotherapists, nurses, chartered accountants, lawyers, home
                care personnel, etc. may be required. Senocare shall not be
                liable for the views or opinions of such consultants/
                professionals and the member shall be free to seek an
                independent opinion from an independent consultant of their
                choice.
              </p>
              <p>
                I am also aware that Senocare is merely a facilitator arranging
                for services to be provided to me under the selected Senocare
                Package and therefore, Senocare has no liability whatsoever
                arising from use or provision of such services to me.
              </p>
              <p>
                I, the undersigned, certify that this consent form and Terms and
                Conditions attached to this consent form have been read over and
                explained to me in a language I understand and I fully
                understand the implications of my consent.
              </p>
              <p>
                I, the undersigned, certify that I am over 18 years of age and
                of sound mind, capable to comprehend the nature and scope of
                this consent form (and the attached Terms and Conditions). I am
                therefore competent to sign this consent form and am doing so
                voluntarily out of my own volition and without any pressure or
                influence or compulsion.
              </p>
              <p>
                I shall further provide necessary documents as may be requested
                by Senocare and/ or its service providers/ professionals from
                time to time pursuant to the subscription availed by me.{" "}
                <a href={TermConditions}>Terms and Conditions</a>
              </p>
            </Col>
          </Row>
        </div>
        <div className="form main_text">
          <div className="form_input">
            <form
              name="Senocare Consent Form"
              method="post"
              ref={form}
              onSubmit={handleSubmit(onSubmit)}>
              <h2>Senocare Consent Form</h2>
              <div className="main_form">
                <label htmlFor="name" id="label">
                  Name: <span className="required_field">*</span>
                </label>
                <br />
                <input
                  type="text"
                  id="Name"
                  placeholder="Name"
                  name="Name"
                  {...register("Name", {
                    required: "Name is required.",
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Enter Valid Name",
                    },
                    minLength: {
                      value: 3,
                      message: "Name should be at least 3 characters.",
                    },
                    maxLength: {
                      value: 30,
                      message: "Name should be maximum 30 characters.",
                    },
                  })}
                />
                {errors.Name && (
                  <span className="errorMsg">{errors.Name.message}</span>
                )}
                <br />
                <br />
                <label htmlFor="email" id="label">
                  Email: <span className="required_field">*</span>
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Enter valid Email Id",
                    },
                  })}
                />
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}

                <br />
                <br />
                <label htmlFor="Phone" id="label">
                  Phone: <span className="required_field">*</span>
                </label>
                <br />
                <input
                  type="tel"
                  id="Phone"
                  placeholder="Enter Phone No"
                  name="phone"
                  {...register("phone", {
                    required: "Phone is required.",
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "Enter valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="errorMsg">{errors.phone.message}</span>
                )}
                <br />
                <br />
                <input
                  type="checkbox"
                  name="acceptTerms"
                  label="Agree to Terms and Conditions"
                  id="acceptTerms"
                  {...register("acceptTerms", {
                    required: "You must accept the terms and conditions.",
                  })}
                />

                <label htmlFor="acceptTerms" className="termsLabel">
                  Agree to Terms & Conditions{" "}
                  <span className="required_field">*</span>
                </label>

                {errors.acceptTerms && (
                  <span className="errorMsg">{errors.acceptTerms.message}</span>
                )}
                {/* <br />
                <br />
                <label htmlFor="interested">
                  Are you interested: <span className="required_field">*</span>
                </label>
                <br />
                <select
                  id="interested"
                  name="interested"
                  {...register("interested", {
                    required: "Select from list",
                  })}>
                  <option value="">Select from list</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.interested && (
                  <span className="errorMsg">{errors.interested.message}</span>
                )} */}
                <br />

                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <footer>
        <h6>© 2024. Senocare Services Pvt. Ltd. All Rights Reserved.</h6>
      </footer>
    </div>
  );
};

export default Form;
