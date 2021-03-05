import React  from 'react'
import {FiUser,FiMail } from "react-icons/fi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"



//VALIDATE MESSAGES
const userJoin = Yup.object().shape({
  
  first_name:Yup.string()
                 .min(3, 'Too Short!')
                 .max(15, 'Too Long!')
                 .required('Required'),
  
  last_name:Yup.string()
               .min(3, 'Too Short!')
               .max(15, 'Too Long!')
               .required('Required'),

  email:Yup.string()
           .email('Invalid email')
           .required('Required'),
  });


const JoinUs = (props) => {

  return(

    //INTIAL STATE FOR FORM
    <Formik initialValues={{"first_name":'', "last_name":'', "email":''}}  
            validationSchema={userJoin}
            onSubmit ={ (values,{resetForm}) =>{ props.handleClick(values); resetForm() } } >


      {(formik) => (
          <Form className="home-page-content__form" id='5'
                onSubmit={formik.handleSubmit}>
              
              {/* firstname */}
                <div className="home-page-content__form__group">
                  <FiUser className='icon' /> 
                  <Field type='text' name='first_name' placeholder='name'/>
                  <p><ErrorMessage name="first_name" /></p>
                </div>

                {/* lastname */}
                <div className="home-page-content__form__group">
                 <FiUser className='icon' /> 
                 <Field type='text' name='last_name' placeholder='surname'/>
                 <p><ErrorMessage name="last_name" /></p>
            
                </div>

                {/* email */}
                <div className="home-page-content__form__group">
                    <FiMail className='icon' /> 
                    <Field type='email' name='email' placeholder='email'/>
                    <p><ErrorMessage name="email" /></p>
                </div>

              <button type='submit' disabled={props.disableBtn} className="btn-join">Join</button> 
            </Form> )}  

          </Formik>
    )
}
export default JoinUs



