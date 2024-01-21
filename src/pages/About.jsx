import React from "react";

const About = () => {
  return (
    <section className="space-y-4">
      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content">
          <h2 className="text-xl font-bold capitalize">
            Folder Structure Explanation:
          </h2>
        </div>
        <div className="collapse-content bg-primary text-primary-content">
          <ul className="space-y-2">
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src:</b> This is the
              root directory for your source code.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/api:</b> Contains
              files related to API functionality.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/api/storeAPI.js:</b>{" "}
              File related to store API functionality.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/components:</b>{" "}
              Contains reusable UI components.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/components/ui:</b>{" "}
              Subdirectory for UI components.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/components/ui/Input.jsx, Loading.jsx, Message.jsx,
                Navigation.jsx, ProductCard.jsx:
              </b>
              Individual UI components.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/components/Logo.jsx:
              </b>{" "}
              Another component.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/components/context:
              </b>{" "}
              Directory for context-related files.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/components/context/AuthContext.js:
              </b>{" "}
              File related to authentication context.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/schemas:</b>{" "}
              Contains schema files.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/schemas/auth.js:</b>{" "}
              Schema file related to authentication.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/pages:</b> Contains
              individual pages of application.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/pages/Home.js, About.js, SignIn.js:
              </b>{" "}
              Files for home, about, and sign-in pages.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/styles:</b> Contains
              styling files.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/styles/index.css:
              </b>{" "}
              Main styling file.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/assets:</b> Contains
              static assets.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/assets/images:</b>{" "}
              Subdirectory for image assets.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">
                /src/assets/images/pro.png:
              </b>{" "}
              Image file.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/api:</b> Contains
              route-related files.
            </li>
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-primary ">/src/api/route.jsx:</b>{" "}
              File related to routing for the API.
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h2 className="text-xl font-bold capitalize">
            How to start the project:
          </h2>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <ul className="space-y-2">
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-neutral">clone the repo:</b>[
              https://github.com/lokeshkavisth/provision-store ]
            </li>{" "}
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-neutral">cd into directory:</b> cd
              provision-store
            </li>{" "}
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-neutral">install dependencies:</b>{" "}
              npm install
            </li>{" "}
            <li className="bg-base-300 p-2 rounded-md text-gray-400">
              <b className="mr-3 badge badge-neutral">start the project:</b> npm
              run dev
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
