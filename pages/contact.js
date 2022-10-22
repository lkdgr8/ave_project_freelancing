import { React, useState } from 'react'
import styles from "./contact.module.css"

const contact = () => {
   const [value, setValue] = useState("");
   const [age, setAge] = useState("")

   // var month_diff = Date.now() - today.getTime();
   // var age_dt = new Date(month_diff);   
   // var year = age_dt.getUTCFullYear();  
   // var age = Math.abs(year - 1970);  


   const submit = (e) => {
      e.preventDefault();
      let today = new Date(value);
      let month_diff = Date.now() - today.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let age = Math.abs(year - 1970);
      { setAge(age) }
      // {if (age === 0) {
      //    alert("select a valid DOB");
      // } else {
      //   
      // }}
   }
   return (
      <>
         <h1 className={styles.heading}>
            Contact Us
         </h1>
         <form className={styles.form}>
            <div className={styles.container}>
               <div>
                 <a>first name: </a><input type="text" placeholder="first name"></input>
               </div>
               <div>
                 <a>middle name: </a><input type="text" placeholder="middle name"></input>
               </div>
               <div>
                  <a>last name: </a><input type="text" placeholder="last name"></input>
               </div>
               <div className={styles.row2}>
                  <div>
                  <span><a href="">select your DOB: </a><input type="date" value={value} onChange={(e) => { setValue(e.target.value); submit(e) }} placeholder="select your DOB" className={styles.birthyear}></input></span>
                  </div>
                  <div>
                  <span><a href="">your age: </a><input type="text" className={styles.age} value={age}></input></span>
                  </div>
                  <div> 
                  <span><a href="">your home address: </a><input type="text" placeholder="your home address" className={styles.address}></input></span>
                  </div>
               </div>

               <div className={styles.row2}>
                  <div>
                  <span><a href="">your home phone number: </a><input type="int" placeholder="your home phone number"></input></span>
                  </div>
                  <div>
                  <span><a href="">your work address: </a><input type="text" placeholder="your work address " className={styles.address}></input></span>
                  </div>
               </div>
               <div className={styles.row2}>
                  <div>
                  <span><a href="">your work phone: </a><input type="int" placeholder="your work phone" className={styles.phone}></input></span>
                  </div>
                  <div>
                  <span><a href="">your email: </a><input type="email" placeholder="your email" className={styles.email}></input></span>
                  </div>
               </div>
               <div className={styles.row2}>
                  <span><a href="">your comment</a><textarea className={styles.comment} type="textarea" rows="4" cols="80" placeholder="add your comment"></textarea></span>
               </div>
               <button className={styles.button} type="submit">Submit</button>
            </div>
         </form>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28355.89472657872!2d68.12259420296303!3d27.32924428444942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39350a713719d55f%3A0x72b723adb98b8c6b!2sMohenjo-daro!5e0!3m2!1sen!2sin!4v1661624228000!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </>
   )
}

export default contact;