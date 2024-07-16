import React from 'react'

export default function GalCard({ galTitle, galWebImageUrl, galPhotographyLocation }) {
    return (


        <div className="text-sm bg-white border border-gray-200 rounded-lg shadow ">

            <img className="rounded-t-lg"
                src={galWebImageUrl} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {galTitle}</h5>

                <p className="mb-3 font-normal text-gray-700 ">
                    {galPhotographyLocation}</p>

            </div>
        </div>

    )
}
