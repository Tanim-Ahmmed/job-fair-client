import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const {id }= useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    const handleJobApplication = (e) =>{
        e.preventDefault();

        const form = e.target;

        const linkedIn = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications',{
            method : "POST",
            headers:{
                'content-type' : "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "You Applied successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
            }
        })
    }
  return (
        <div className="card bg-base-100 w-full shadow-2xl">
        <h1 className="text-5xl font-bold text-center">Apply for job!</h1>
          <form onSubmit={handleJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="linkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="github url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="resume url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Apply</button>
            </div>
          </form>
        </div>
  );
};

export default JobApply;
