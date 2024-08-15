import React from "react";
import { dataBooks } from "../../Constants/Constants";
import Cards from "../../Components/Cards/Cards";
import { useNavigate } from "react-router-dom";

const Courses = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 w-full">

            <div className="mt-28 text-center">
                <h1 className="text-2xl md:text-4xl">
                    We're delighted to have you{" "}
                    <span className="text-pink-500">Here! :)</span>{" "}
                </h1>

                <p className="mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    veritatis numquam neque voluptatem? Itaque eveniet officiis nesciunt,
                    illo porro facilis dolor debitis earum neque esse, nihil
                    necessitatibus. Quod hic totam incidunt animi repellendus aliquam
                    necessitatibus.
                </p>
                <button className="btn btn-primary mt-6" onClick={goBack}>Go Back</button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-x-4">
                {dataBooks.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>

        </div>
    );
};

export default Courses;
