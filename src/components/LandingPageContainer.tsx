import React, { useState } from 'react';
import Button from './Button';

const LandingPageContainer: React.FC<{ posts: any[] }> = ({ posts }) => {
    const images = [
        {
            src: "/bananas.jpg",
            alt: "bananas",
        },
        {
            src: "/avocados.jpg",
            alt: "avocados",
        },
        {
            src: "/eggs.jpg",
            alt: "eggs",
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-row justify-between">
            <div className="m-16 mb-8 flex-grow">
                <h1 className="text-8xl max-md:text-7xl font-bold mb-4">Explore</h1>
                <div className="flex flex-row gap-6 my-6 mx-2">
                    <Button label="Carbs" onClick={() => setCurrentIndex(0)} />
                    <Button label="Fats" onClick={() => setCurrentIndex(1)} />
                    <Button label="Proteins" onClick={() => setCurrentIndex(2)} />
                </div>
                <div className="flex flex-col gap-6">
                    {posts.map((post: any) => (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href={`/${post.data}`} className="px-4 py-1 pb-6">
                                <h2 className="text-2xl font-bold">{post.data.title}</h2>
                                <p className="text-gray-500">{post.data.description}</p>
                                <p className="text-gray-500">{post.data.date}</p>
                            </a>
                        </>
                    ))}
                </div>
            </div>
            <div className="w-1/2">
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-screen object-cover" />
            </div>
        </div>
    );
};

export default LandingPageContainer;