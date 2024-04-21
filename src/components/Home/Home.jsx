import React from 'react'
// ------------------------------------------
import css from "./Home.module.css"
// ------------------------------------------
import { NavLink } from 'react-router-dom'
// ------------------------------------------
import Footer from "../Footer/Footer"

// ------------------------------------------
import Sponsor1 from "./assets/icons/sp-1.svg"
// ------------------------------------------
import Sponsor2 from "./assets/icons/sp-2.svg"
// ------------------------------------------
import Sponsor3 from "./assets/icons/sp-3.svg"
// ------------------------------------------
import Sponsor4 from "./assets/icons/sp-4.svg"
// ------------------------------------------
import Sponsor5 from "./assets/icons/sp-5.svg"
// ------------------------------------------
import Sponsor6 from "./assets/icons/sp-6.svg"
// ------------------------------------------
import Cardlogoone from "./assets/icons/directory-icon.svg"
// ------------------------------------------
import Cardlogotwo from "./assets/icons/double-line.svg"
// ------------------------------------------
import Cardlogothree from "./assets/icons/message.svg"
// ------------------------------------------
import Whybigfoto from "./assets/img/Rectangle2png.png"
// ------------------------------------------
import Peoples from "./assets/img/people.png"
// ------------------------------------------
import Humancard from "./assets/img/double-card.png"
// ------------------------------------------
import Navbar from '../Navbar/Navbar'
// ------------------------------------------
import Noute from "./assets/img/noute.png"

function Home() {
    return (

        <div className={css.home}>
            <div className={css.header}>
                <Navbar />
                <div className={css.headers_textbox}>
                    <h1 className={css.bigger_text_head}>Alma makes it easy to find high quality, affordable mental <br /> health care.</h1>
                    <NavLink className={css.text_button_header} to="" >Browse Our Directory</NavLink>
                    <div className={css.support_box}>
                        <NavLink className={css.support_link} to="" >Want help? Talk to Our Team </NavLink>
                    </div>
                </div>

            </div>


            {/* ====================================================================================================
            ========================================================================================================
            ======================================================================================================== */}


            <div className={css.section_one}>
                <div className={css.rek_box}>
                    <div className={css.text_rek}>
                        <h3 className={css.text_rek_title}>Find therapists at Alma in network with:</h3>
                        <img src={Sponsor1} alt="" className={css.sponsor_logo} />
                        <img src={Sponsor2} alt="" className={css.sponsor_logo} />
                        <img src={Sponsor3} alt="" className={css.sponsor_logo} />
                        <img src={Sponsor4} alt="" className={css.sponsor_logo} />
                        <img src={Sponsor5} alt="" className={css.sponsor_logo} />
                        <img src={Sponsor6} alt="" className={css.sponsor_logo} />
                    </div>
                </div>
                <div className={css.why_box}>
                    <div className={css.why_one}>
                        <p className={css.why_text_mini}>WHY ALMA</p>
                        <h3 className={css.simple_text}>Simple, supportive <br /> search process</h3>
                        <div className={css.card_directory}>
                            <img src={Cardlogoone} alt="" className={css.card_mini_logo} />
                            <div className={css.card_textbox}>
                                <h3 className={css.text_card_green}>Easy-to-use directory</h3>
                                <h4 className={css.text_card_gray}>An easy-to-use online directory that <br /> lets you search and filter on what <br /> matters most</h4>
                            </div>
                        </div>
                        <div className={css.card_no_directory}>
                            <img src={Cardlogotwo} alt="" className={css.no_card_logo} />
                            <h3 className={css.no_card_text}>Free matching support</h3>
                        </div>
                        <div className={css.card_no_directory}>
                            <img src={Cardlogothree} alt="" className={css.no_card_logo} />
                            <h3 className={css.no_card_text}>In-person or online care</h3>
                        </div>
                    </div>
                    <div className={css.why_two}>
                        <img src={Whybigfoto} alt="" className={css.why_bigger_img} />
                        <img src={Noute} alt="" className={css.why_bigger_img_two} />
                    </div>
                </div>
            </div>
            {/* ============================================================================
            =============================================================================================
            =========================================================================================== */}

            <div className={css.section_two}>
                <div className={css.sec_two_textbox}>
                    <h1 className={css.aprovide_text}>A network of providers <br /> committed to <span className={css.quality_span} >quality</span> care.</h1>
                    <p className={css.aprovide_mini_text}>Providers at Alma are committed to continuing education, <br /> professional development, and culturally competent care.</p>
                    <div className={css.aprovide_button_box}>
                        <NavLink to="" className={css.aprovide_button_one}>Browse Directory</NavLink>
                        <NavLink to="" className={css.aprovide_button_two}>How it works</NavLink>
                    </div>
                </div>
                <div className={css.sec_two_people_box}>
                    <img src={Peoples} alt="" className={css.people_img} />
                    <div className={css.people_pinned}>
                        <h1 className={css.people_pinned_text}>With Alma, the experience of finding a therapist was night and <br /> day different. I felt comfortable, heard, and empowered to <br /> choose the right provider for me.</h1>
                        <p className={css.people_pinned_mini_text}>Erick chose Alma for the one-to-one, human approach. <br /> Read more stories here.</p>
                    </div>
                </div>
            </div>

            {/* ============================================================================
            =============================================================================================
            =========================================================================================== */}

            <div className={css.section_three}>
                <div className={css.human_box}>
                    <img src={Humancard} alt="" className={css.human_card_img} />
                </div>
                <div className={css.human_textbox}>
                    <h1 className={css.human_text_one}>Find a licensed provider in <br /> your state.</h1>
                    <h3 className={css.human_text_two}>Currently available in New York, New Jersey, Connecticut, and Massachusetts. Sign up here to be the first to know when Alma comes to your state!</h3>
                    <input type="text" placeholder='Type Your Country' className={css.input_humanbox} />
                    <NavLink to="#" className={css.humanbox_button} >See providers</NavLink>
                </div>
            </div>

            {/* ============================================================================
            =============================================================================================
            =========================================================================================== */}


            <div className={css.inputbox_home}>
                <div className={css.title_of_homeinputbox}>
                    <h4 className={css.green_text_inp}>Stay In Touch</h4>
                    <h1 className={css.black_text_inp}>We're growing soon!</h1>
                    <p className={css.mini_text_inp}>Sign up to be the first to know when Alma comes <br /> to you.</p>
                </div>
                <div className={css.inp_bigger}>
                    <div className={css.input_father}>
                        <div className={css.inpbox}>
                            <p className={css.inp_box_content}>First Name</p>
                            <input className={css.input_of_type} type="text" placeholder='Mr Black' />
                        </div>
                        <div className={css.inpbox}>
                            <p className={css.inp_box_content}>Last name</p>
                            <input className={css.input_of_type} type="text" placeholder='Brown' />
                        </div>
                    </div>
                    <div className={css.input_father_two}>
                        <div className={css.inpbox}>
                            <p className={css.inp_box_content}>Email Adress</p>
                            <input className={css.input_of_type} type="text" placeholder='youremail@domain.com' />
                        </div>
                        <div className={css.inpbox}>
                            <p className={css.inp_box_content}>I'm a....</p>
                            <input className={css.input_of_type} type="text" placeholder='Programmer , designer ....' />
                        </div>
                    </div>
                </div>

                <div className={css.help_input_box}>
                    <NavLink className={css.button_inp_green}>Stay in Touch</NavLink>
                    <h3 className={css.after_button_content}>By subscribing to emails from Alma, you are agreeing to Alma's <span className={css.privacy_text_span}>privacy policy</span>.</h3>
                </div>
            </div>

            {/* ============================================================================
            =============================================================================================
            =========================================================================================== */}

            <Footer />

        </div>
    )
}

export default Home