import Image from "next/image";
import Link from "next/link";
import { createClient } from '../lib/supabase/client'
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = supabase.from('todos').select()
  return (
    <main className= "flex min-h-screen flex-col items-center justify-between p-24">
    {/**********************************************************************************/ }
    <div className="border-4 border-red-500 w-full h-[500px]" >
        <ul className="list-disc ml-10 mt-5">
        { todos?.map((todo) => (
          <li>{ todo } </li>
        ))
        }
      </ul>
    </div>
        {/**********************************************************************************/ }

    <h1 className="m-10 text-2xl md:text-6xl text-center font-bold" >
      { " "}
    Welcome to Supabase, NextJS, TailwindCSS, ShadCN, GPT - 4 API, Stripe
    Payments API, & Pinecone Boilerplate....
  </h1>

  {/**********************************************************************************/ }
  <div className="flex flex-col items-center justify-center space-y-8 m-10">
    <div className="border-2 border-gray-300 rounded-lg p-8 shadow-md">
      <h1 className="text-center">
        { " "}
        This is a Template to produce Saas Products much more efficiently and
  effectively.
      </h1>
    </div>
    </div>  

  {/**********************************************************************************/ }
  <div className="flex flex-col items-center justify-center space-y-8 m-10" >
    <div className="border-2 border-gray-300 rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4"> Key Features </h2>
        <ul className = "list-disc pl-6 space-y-2">
          <li>Supabase for authentication, database, and storage </li>
            <li> Next.js for server - side rendering and static site generation </li>
              <li> Tailwind CSS for styling and responsive design </li>
                <li> Shadcn UI components for a consistent and modern UI </li>
                  <li> GPT - 4 API integration for advanced AI - powered features </li>
                    <li> Stripe Payments API for secure and seamless transactions </li>
                      <li> Pinecone for scalable and efficient vector search </li>
                        </ul>
                        </div>
                        </div>

  {/**********************************************************************************/ }
  <div className="flex flex-col items-center justify-center space-y-8 m-5">
    <div className="border-2 border-gray-300 rounded-lg p-8 shadow-md w-auto">
      <h2 className="text-2xl font-bold mb-4"> Get Started </h2>
        <p className = "mb-4"> To get started, follow these steps: </p>
          <ol className = "list-disc pl-6 space-y-2 ">
            <li>
            Clone the repository: { " " } <br/><code>
            git clone <Link className = "hover:text-red-500" href="https://github.com/ruizTechServices/supabase_saas_boilerplate.git"> {'=>'}this repo </Link>
    </code>
    </li>
    <li>
          Install dependencies: <br/><code>npm install</code>
    </li>
    <li>
          Set up environment variables: <br/>Create a <code>.env.local</code> file
          and add the necessary environment variables(e.g., Supabase, Stripe,
      Pinecone).
        </li>
    <li>
          Start the development server: <br/><code>npm run dev</code>
    </li>
    <li>
          Open your browser and visit <br/> <code>http://localhost:3000</code>
  </li>
    </ol>
    <p> Enjoy building your SaaS product with this powerful boilerplate! </p>
      </div>
      </div>

  
  </main>

  );
}
