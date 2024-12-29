import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    status,
    title,
    requirements,
    salaryRange,
    responsibilities,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="companyLogo" />
        </figure>

        <div>
          <h3 className="text-2xl">{company}</h3>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill, i) => (
            <p className="border text-center px-2 hover:text-blue-400 hover:bg-gray-300" key={i}>
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center ">
            salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>

          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
