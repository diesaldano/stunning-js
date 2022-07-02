import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://stunning-js.vercel.app/api/test')
    const { data } = await response.json()
    const paths = data.map((card: { id: string })=> ({ params: { id: card.id.toString()}}))
  
    return {
      // Statically generate all paths
      paths,
      // Display 404 for everything else
      fallback: false,
    }
  }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await fetch(`https://stunning-js.vercel.app/api/test/${params?.id}`);
    const data  = await response.json();

    return { props: { data } };
}

const Detail = ({data}: {data: any}) => {
    console.log("Dataaaa",data)
    return (
        <div className="md:7/12 lg:w-6/12 mx-auto my-5">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mt-8">{data.title}</h2>
            <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-orange-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-orange-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-orange-500"></span>
            </div>
            <p className="mt-6 text-gray-600">{data.description}</p>
            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
    )
}

export default Detail;