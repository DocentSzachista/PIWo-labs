import React from "react";

class GroupNotice extends React.Component {
    constructor(props){
        super(props);
    }
    createUsersHTML = (users) => {
        return users.map( (iterator, id) => {return (
            <span className=""  key={id}>
                {`${iterator} `} 
            </span>
         )}   );
     };


    render() {
        const {groupNotices, query} = this.props;
        const groupNoticesHTML = groupNotices.filter( (it) =>{
            return query ==="" 
                    || it.groupName.toLowerCase().includes(query)
                    || it.course.toLowerCase().includes(query)
                    || it.description.toLowerCase().includes(query)
                    || it.people.join(" ").toLowerCase().includes(query)
        }  )
        .map( (iterator, index) =>{
            return(
            <div className="col-sm-4 mt-4">
                <div className="card" key={index}>
                    <div className="card-header">Grupa: {iterator.groupName}</div>
                    <h5 className="card-title">Kurs: {iterator.course}</h5>
                    <p className="card-text">{iterator.description}</p>
                    <div className="card-footer">
                        {`Uczestnicy:  `}
                        {this.createUsersHTML(iterator.people)}
                    </div>
                </div>
            </div>
            );
        });
        console.log(groupNotices);
        return (
        <div className="card-group ">
            {groupNoticesHTML}
        </div>
        );
    }
};

export default GroupNotice;