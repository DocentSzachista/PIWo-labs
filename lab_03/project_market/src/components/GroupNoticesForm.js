import { Field, Formik, Form } from 'formik';
const GroupNoticesForm = (props)=>{
    const {element,  title,  isEdit, onSubmit} = props;
    let initialValues = {
        people: "",
        emails: "",
        description: "",
        groupName: "",
        course: ""
    };
    if (isEdit){
        
        let emails = "";
        let people = "";
        element.people.forEach( (element, _) =>{
            emails += `${element.email} `;
            people += `${element.name};`;
        }  );
        
        initialValues = {
            people: people,
            emails: emails,
            description: element.description,
            groupName: element.groupName,
            course: element.course
        };
        // console.log(initialValues);
    }
    const validate = values =>{
        return {};
    };


    return(
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                
                <div className="form-container">
                    <div className='form-wrapper'>
                    <h3 className="mb-5 content-center"> {title} </h3>
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
                        <div className='row'>
                            <div className='col mb-4'>
                                <div className='form-outline'>
                                    <label className='full-row'> Emaile uczestników projektu (oddzielaj ich średnikiem) 
                                        <Field className="form-control form-control-lg" name="emails" required />
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
                            <button className="btn  btn-success" type="submit"> {title} </button>
                        </div>
                    </Form>
                    </div>
                </div>
                
        </Formik>
    );


};
export default GroupNoticesForm;