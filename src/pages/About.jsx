import React from "react";
import Tittle from "../components/Tittle";
import { assets } from "../assets/frontend_assets/assets";
import NewLetterbox from '../components/NewLetterbox'

const About = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-2xl text-center pt-8 border-t">
        <Tittle text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aperiam temporibus incidunt a amet facilis. Magni facere vel nostrum
            soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae quibusdam nemo fugiat dolorum quod cumque quaerat at in
            praesentium, obcaecati laborum aliquam distinctio totam, provident
            quisquam doloribus impedit accusamus placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            autem, magni quae explicabo molestiae placeat ut aut fugiat itaque
            dolores aliquid dignissimos nostrum natus neque, corrupti odit sequi
            ex aliquam omnis ullam, inventore sit? Voluptatum eum tenetur
            voluptatem deserunt quia!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus ut numquam aliquam officiis nobis consectetur fugiat ipsa
            dolore reiciendis dignissimos repudiandae cum suscipit veritatis
            reprehenderit corporis facilis fuga eligendi pariatur nostrum
            quaerat, magni impedit totam. Voluptatibus labore natus dolore ut,
            dolorem laborum placeat eius tempora, assumenda modi perspiciatis
            totam.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Tittle text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-2">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            totam enim aspernatur, veniam dolorem autem, unde in, magni vel
            earum praesentium  
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-2">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            totam enim aspernatur, veniam dolorem autem, unde in, magni vel
            earum praesentium  
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-2">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            totam enim aspernatur, veniam dolorem autem, unde in, magni vel
            earum praesentium  
          </p>
        </div>
      </div>

     <NewLetterbox/>
    </div>
  );
};

export default About;
