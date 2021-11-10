import React from 'react';
import './App.css';
import {Contacto, Phone} from "@monorepo/common";
import {createValidator} from "class-validator-formik";
import {validate} from "class-validator";
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";

let contactoDefaultValues = new Contacto();
contactoDefaultValues.subject = 'jsjsjsjsjsss';
contactoDefaultValues.email = 'mi@mail.com';


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>


                <Formik
                    initialValues={contactoDefaultValues}
                    validate={createValidator(Contacto)}
                    onSubmit={d => {
                        console.log(typeof d)
                        validate(d).then(errors => console.log(errors))
                    }}
                >
                    {({values}) =>
                        <Form>
                            <p>
                                <Field id="subject" name="subject" placeholder="subject"/>
                                <ErrorMessage name="subject"/>
                            </p>

                            <p>
                                <Field id="email" name="email" placeholder="email"/>
                                <ErrorMessage name="email"/>
                            </p>


                            <FieldArray
                                name="phones"
                                render={arrayHelpers => (
                                    <div>
                                        {values.phones && values.phones.length > 0 ? (
                                            values.phones.map((phone, index) => (
                                                <div key={index}>
                                                    <Field id={`phones[${index}].preffix`}
                                                           name={`phones[${index}].preffix`}/>
                                                    <ErrorMessage name={`phones[${index}].preffix`}/>

                                                    <Field name={`phones[${index}].number`}/>
                                                    <ErrorMessage name={`phones[${index}].number`}/>
                                                    <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                    >
                                                        -
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => arrayHelpers.insert(index, new Phone())} // insert an empty string at a position
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <button type="button" onClick={() => arrayHelpers.push(new Phone())}>
                                                Add a phone
                                            </button>
                                        )}
                                    </div>
                                )}
                            />


                            <button onClick={() => console.log(new Phone())}>New Phone</button>
                            <p>
                                <button type="submit">Submit</button>
                            </p>

                        </Form>
                    }
                </Formik>

            </header>
        </div>
    );
}

export default App;
