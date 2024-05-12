import { useLoaderData } from "react-router-dom";


const ViewAssignmentDetails = () => {
    const loadedAssignment = useLoaderData();
    console.log(loadedAssignment);
    return (
        <div>
            <h1>/viewassignmentsdetails/</h1>
        </div>
    );
};

export default ViewAssignmentDetails;