import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { _id, title, company, applicationDeadline } = useLoaderData();
   
    return (
        <div className="m-10">
            <h2 className="text-3xl">job  details for {title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>

           <Link to={`/jobApply/${_id}`}>
           <button className="btn btn-neutral">apply Now</button>
           </Link>
        </div>
    );
};

export default JobDetails;  