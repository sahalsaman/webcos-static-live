import React from 'react'
import bannerimg from '../../src/assets/images/web5.jpg'
import { careers } from '../constents'


export default function Careers() {

  
  return (
    <div>
      <img src={bannerimg} className="w-full"/>
      <div className="md:container mx-auto px-6 py-16">
          {/* <h2 className="text-3xl font-bold">Job Vacancies</h2> */}
          <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white  ">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Job Title</th>
              <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Posted</th>
              {/* <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Description</th> */}
              <th className="px-4 py-2 border-b-2 border-gray-200 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {careers.map((job, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 border-b">{job.title}</td>
                <td className="px-4 py-2 border-b">{job.posted}</td>
                {/* <td className="px-4 py-2 border-b">{job.description}</td> */}
                <td className="px-4 py-2 border-b text-center">
                  <button className="bg-black text-white py-2 px-4 rounded hover:bg-blue-600">
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
