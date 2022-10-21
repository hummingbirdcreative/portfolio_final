import React from "react";

function Projects() {
  return (
    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Projects
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="https://wardobe-catalog.herokuapp.com/users/login" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              <a href="https://wardobe-catalog.herokuapp.com/users/login"><img src="https://i.imgur.com/bYQlMgb.png" title="source: imgur.com" alt="project_photo"/></a>
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Wardrobe Catalog
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              My first Full-CRUD application using Node.js, MongoDb, Mongoose, Express and EJS.
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-start">
              <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <a href="https://wardobe-catalog.herokuapp.com/users/login">Live Site</a>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="https://record-project.netlify.app/" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              <a href="https://record-project.netlify.app/"><img src="https://i.imgur.com/5J583XW.png" title="source: imgur.com" alt="project_photo"/></a>
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Record Crate
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                My first MERN application using Node.js, MongoDb, Mongoose, Express and React.              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-center">
              <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <a href="https://record-project.netlify.app/">Live Site</a>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="https://vita-life-story.herokuapp.com/" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              <a href="https://vita-life-story.herokuapp.com/"><img src="https://i.imgur.com/g97RV6k.png" title="source: imgur.com" alt="project_photo" /></a>
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Vita Life Story
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Group project using Python, Django, SQL, and AWS to create a photo sharing app. 
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-end">
              <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <a href="https://vita-life-story.herokuapp.com/">Live Site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Projects;