import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center h-[100vh] text-center justify-center">
            <div className="space-y-2">
            <h2 className="text-4xl font-bold">Oopppssss!</h2>
            <p>You are in the wrong place</p>
            <button className="border-2 border-green-800 px-3 py-1 font-bold text-green-800 rounded-md" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;