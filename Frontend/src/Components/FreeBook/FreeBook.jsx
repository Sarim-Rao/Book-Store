import React from "react";
import { cardData } from "../../Constants/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../Components/Cards/Cards";

const FreeBook = () => {
    const freeBooks = cardData.filter((item) => {
        return item.catagory === "free";
    });

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-[1200px] container mx-auto md:px-20 px-4 my-6">
                <div className="my-4">
                    <h1> Free Offered Cources </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aut
                        vero perferendis corporis porro beatae?
                    </p>
                </div>

                <Slider {...settings}>
                    {freeBooks.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default FreeBook;
