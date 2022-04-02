
import {Form, Field, Formik} from 'formik';
const AddGroupNotice = (props) =>{
    const {addNewGroupNotice} = props;
    const groupNotice = {
        people: "",
        description: "",
        groupName: "",
        course: ""
      };
    const onSubmit = async values =>{

        const dataToSet = {
            groupName: values.groupName,
            course: values.course,
            description: values.description,
            people: values.people.trim().split(";"),
        };
        addNewGroupNotice(dataToSet);
        alert("Dodano nową grupę");
    };
    const validate = values =>{
        return {};
    };

    return(
        <>
            <Formik initialValues={groupNotice} validate={validate} onSubmit={onSubmit}>
                
                <div className="form-container">
                    <div className='form-wrapper'>
                    <h3 className="mb-5 content-center"> Dodaj nową grupę projektową </h3>
                    <Form >
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label > kurs
                                        <Field className="form-control form-control-lg" name="course" type="input" required />
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label> Nazwa grupy
                                        <Field className="form-control form-control-lg" name="groupName" type="input" required/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-4">
                                <div className="form-outline">
                                <label className='full-row'> Imiona uczestników projektu (oddzielaj ich średnikiem) 
                                    <Field className="form-control form-control-lg" name="people" required />
                                </label>
                             </div>
                            </div>
                        </div>
                        <div className="form-group">
                                <label className='full-row'> Opis 
                                    <Field className="form-control form-control-lg" name="description" as="textarea" rows='3' required />
                                </label>
                            </div>
                        <div className='content-center'>
                            <button className="btn  btn-success" type="submit">Dodaj nowe ogłoszenie </button>
                        </div>
                    </Form>
                    </div>
                </div>
                
            </Formik>
        </>
    );
};
export default AddGroupNotice;