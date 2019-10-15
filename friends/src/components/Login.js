import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";

const Login = ( {values,status,history}) => {
    


    return(
        <div>
            <Form >
                <Field type="text" name="username" ></Field>
                <Field type="password" name="password" ></Field>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({username, password, }) {
        return {
            username: username || "",
            password: password || ""
        }
    },
    
    handleSubmit(values,{setStatus, resetForm, props}){
        console.log("values",values)
        axiosWithAuth()
        .post("/api/login", values)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            console.log("post response",res)
            setStatus(res);
            props.history.push("/friends-list")
        })
    }
})(Login)

export default FormikLogin