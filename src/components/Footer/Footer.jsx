import React from 'react'
import css from "./Footer.module.css"
import Right from "./assets/icons/right.svg"
import { NavLink } from 'react-router-dom'



// =========================================
import IconOne from "./assets/icons/tvit.svg"
// =========================================
import IconTwo from "./assets/icons/face.svg"
// =========================================
import IconThree from "./assets/icons/insta.svg"
// =========================================


function Footer() {
    return (
        <div className={css.footer_father}>
            <div className={css.not_a_footer}>
                <div className={css.green_page}>
                    <div className={css.flex_security}>
                        <p className={css.greenpage_textone}>For Providers</p>
                        <h1 className={css.greenpage_tecttwo}>Grow your practice with <br /> Alma.</h1>
                        <h3 className={css.greenpage_textthree}>Get the tools and resources you need to build a thriving private <br /> practice, powered by Alma.</h3>
                        <h5 className={css.greenpage_textfour}>Learn more about membership <span><img src={Right} alt="" className={css.span_icon} /></span></h5>
                    </div>

                </div>
            </div>
            <div className={css.footer}>
                <div className={css.follow_box}>
                    <p className={css.follow_us_text}>Follow Us</p>
                    <div className={css.follow_buttons}>
                        <NavLink className={css.button_follow} to="" >
                            <img src={IconOne} alt="" className={css.button_follow_img} />
                        </NavLink>
                        <NavLink className={css.button_follow} to="" >
                            <img src={IconTwo} alt="" className={css.button_follow_img} />
                        </NavLink>
                        <NavLink className={css.button_follow} to="" >
                            <img src={IconThree} alt="" className={css.button_follow_img} />
                        </NavLink>
                    </div>
                </div>
                <div className={css.copyrighted_box}>
                    <p className={css.copyrighted_text}>Privacy Policy <br /> • Copyright Alma, 2021</p>
                </div>
            </div>
        </div>


    )
}

export default Footer