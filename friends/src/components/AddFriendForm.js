import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";


const AddFriendForm = ( {friends, setFriends, values, status}) => {
    console.log("FRIENDS IN FORM", friends)
    useEffect(()=> {
        if (status) {
            console.log("status", status)
            setFriends([...status])
        }
    },[status]);

    return(
        <div>
            <Form >
                <Field placeholder="Name" type="text" name="name" ></Field>
                <Field placeholder="Age" type="text" name="age" ></Field>
                <Field placeholder="Email" type="text" name="email" ></Field>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
};

const FormikAddFriend = withFormik({
    mapPropsToValues({name, age,email }) {
        return {
            name: name || "",
            age: age || "",
            email: email || ""
        }
    },
    
    handleSubmit(values,{setStatus, resetForm, }){
        console.log("values",values)
        axiosWithAuth()
        .post("/api/friends", values)
        .then(res => {
            console.log("friends post response",res)
            setStatus(res.data);
            resetForm("");
        })
    }
})(AddFriendForm)

export default FormikAddFriend