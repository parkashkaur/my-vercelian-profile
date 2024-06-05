/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oBNNAKWnzaR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
        <div className="px-6 py-4 border-b dark:border-gray-800">
          <h1 className="text-2xl font-bold">Dog Walking Schedule</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-6">
          <div className="col-span-1 text-center font-medium">
            <div>Monday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">8:00 AM - 9:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Tuesday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">8:00 AM - 9:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Wednesday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">8:00 AM - 9:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Thursday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">8:00 AM - 9:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Friday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">8:00 AM - 9:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">5:00 PM - 6:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Saturday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">9:00 AM - 10:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">3:00 PM - 4:00 PM</div>
            </div>
          </div>
          <div className="col-span-1 text-center font-medium">
            <div>Sunday</div>
            <div className="mt-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">9:00 AM - 10:00 AM</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1 mt-2">3:00 PM - 4:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
