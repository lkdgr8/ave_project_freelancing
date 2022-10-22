import React from 'react'
import styles from "./about.module.css"

export const About = () => {
  return (
    <>
      <div className={styles.body}>
        <div>
          <h1 className={styles.about}>About Us</h1>
        </div>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio incidunt, tenetur asperiores modi sed amet animi fugit, sequi excepturi at cumque maxime, eligendi iure. Impedit, voluptates facere nihil alias officia quisquam! Minima nulla accusamus dolores quod? Iste aspernatur quidem quisquam ullam ipsam eos expedita nemo iure obcaecati molestiae. Ut!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum porro obcaecati maxime necessitatibus at dolore minus doloribus officia molestias dolor omnis, quia repudiandae corrupti earum veritatis nisi officiis cum reiciendis!</p>
        </div>
        <div className={styles.cardimages}>
          <div className={styles.containcardimage}>
            <div className={styles.card}>
              <img src="images/card_img1.jpg" alt="" />
              <div className={styles.text}>
                <h2 className={styles.title}>Lorem ipusm</h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="images/card_img2.jpg" alt="" />
              <div className={styles.text}>
                <h2 className={styles.title}>Lorem ipusm</h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="images/card_img3.jpg" alt="" />
              <div className={styles.text}>
                <h2 className={styles.title}>Lorem ipusm</h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <img src="images/1st_img_pyamid.jpg" className={styles.firstimage} alt="img" />
          <div className={styles.secondpyramid}>
            <img src="images/2nd_img_pyramid.jpg" alt="" className={styles.img2} />
            <img src="images/3rd_img_pyramid.jpg" alt="" className={styles.img3} />
          </div>
          <div className={styles.thirdpyramid}>
            <img src="images/4th_imge_pyramid.jpg" alt="" className={styles.img3} />
            <img src="images/5th_imge_pyramid.jpg" alt="" className={styles.img3} />
            <img src="images/6th_imge_pyramid.jpg" alt="" className={styles.img3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About;