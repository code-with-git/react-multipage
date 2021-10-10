import React from 'react';

const Hero = () => (
    <div id='top'>
        <section class="text-gray-600 dark:text-gray-50 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hey! This is the homepage
                        <br class="hidden lg:inline-block"/>Get ready
                    </h1>
                    <p class="mb-8 leading-relaxed">This website is for a hacktober fest task. This is a multipage website created using react and tailwind.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Know More</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded-3xl" alt="hero" src="bird.jpg" />
                </div>
            </div>
        </section>
    </div>
);

export default Hero;