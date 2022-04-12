import {Form, Field, Formik} from 'formik';
import "../../../styles/form.css";
const AddNotice = (props)=>{
    const {addNewStudentNotice} = props;
    const studentNotice = {
        firstname: "",
        email: "",
        description: "",
        tags: "",
        courses: ""
      };
    const onSubmit = async values =>{

        const dataToSet = {
            firstname: values.firstname,
            email: values.email,
            description: values.description,
            tags: values.tags.trim().split(" "),
            courses: values.courses.trim().split(";")
        };
        addNewStudentNotice(dataToSet);
        alert("Dodano nowe ogłoszenie");
    };
    const validate = values =>{
        return {};
    };
    return (
        <>
            <Formik initialValues={studentNotice} validate={validate} onSubmit={onSubmit}>
                
                <div className="form-container">
                    <div className="form-wrapper">
                        <h3 className="mb-5 content-center"> Dodaj nowe ogłoszenie </h3>
                        <Form >
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label > Imie
                                            <Field className="form-control form-control-lg" name="firstname" type="input" required />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label> Email
                                            <Field className="form-control form-control-lg" name="email" type="email" required/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <label> Tagi (każdy oddziel spacją)
                                        <Field className="form-control form-control-lg" name="tags" required />
                                    </label>
                                    </div>  
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <label> Kursy (każdy kurs oddziel średnikiem)
                                        <Field className="form-control form-control-lg" name="courses" required />
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="full-row"> Opis 
                                    <Field className="form-control form-control-lg" name="description" as="textarea" rows='3' required />
                                </label>
                            </div>
                            <div className="content-center">
                                <button className="btn  btn-success" type="submit">Dodaj nowe ogłoszenie </button>
                            </div>
                        </Form>
                    </div>
                </div>
                
            </Formik>
        </>
    );
};
export default AddNotice;