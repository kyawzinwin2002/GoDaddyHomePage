import React from 'react'

const Table = () => {
  return (
    <div className=" px-10 my-5">
      <table className=" border-collapse border border-gray-500">
        <tbody>
          <tr>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>.com</span>
                <span>$0.9/1st yr</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>SSL Security</span>
                <span>$69.99/yr</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>Professional Email</span>
                <span>$1.99 per user/mo</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>Microsoft 365</span>
                <span>$1.99/mo</span>
              </div>
            </td>
            <td className="border row-span-2  border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>.com</span>
                <span>$0.9/1st year</span>
              </div>
            </td>
          </tr>

          <tr>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>.sg</span>
                <span>$59.99/1st yr</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>Web Hosting</span>
                <span>$5.99/mo</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>WordPress</span>
                <span>$8.99/mo</span>
              </div>
            </td>
            <td className="border border-gray-500 ">
              <div className=" flex flex-col gap-2 px-16 py-5 items-center">
                <span>Website Builder</span>
                <span>Free Trial</span>
              </div>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table