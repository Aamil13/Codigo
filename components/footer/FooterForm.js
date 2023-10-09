

const FooterForm = () => {
  return (
    <div className=''>
        <h3 className='text-4xl font-bold mb-8'>Request a quote</h3>
        <p className="mb-5">Get a ballpark costing on the product or idea you want to build. Be specific to get a more concise cost and timeline.</p>
        <p className="font-bold text-red-600 mb-5">* MANDATORY FIELDS</p>
        <hr className="bg-gray-400"></hr>

        <h4 className="text-lg font-bold mt-10">What do you need? *</h4>
        <div className="flex flex-wrap justify-between items-center my-5">
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Build an App</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Build a Website</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Hire Offshore Team</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">I'm not sure yet</span>
        </div>

        </div>
        {/*  */}
        <hr></hr>
        <h3 className='text-lg font-bold mb-8'>What are the objectives, requirements and functionalities of this product? *</h3>
        <textarea className="textarea w-full h-[120px]" placeholder="
        requirements and functionalities of this product
        requirements and functionalities of this product
        requirements and functionalities of this product
        " disabled>
        </textarea>
        {/*  */}
        <hr></hr>
        <h4 className="text-lg font-bold mt-10">How did you find us? *</h4>
        <div className="flex flex-wrap justify-between items-center my-5">
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Search</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Word of Mouth</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Social Media</span>
        </div>
        <div className="flex items-center w-1/2 mb-5">
        <input type="checkbox" className="checkbox checkbox-error mr-3" />
    <span className="label-text">Others</span>
        </div>
        </div>
        <div className="">
        <button className="btn btn-error w-full">Submit</button>
        </div>
    </div>
  )
}

export default FooterForm