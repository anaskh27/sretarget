import { useState, useEffect } from "react";

const fetchPricingData = async () => {
  try {
    const res = await fetch("https://qa3.savvycard.com/api/re-target/pricing");

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export default function Home() {
  const [pricingData, setPricingData] = useState({
    discounts: [],
    customers: {},
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPricingData = async () => {
      const data = await fetchPricingData();
      if (data) {
        setPricingData(data);
      }
      setIsLoading(false);
    };

    getPricingData();
  }, []);

  return (
    <div className=" min-h-screen w-full">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <img
            src="/logo.png"
            alt="RE-Target Logo"
            className="w-32 h-32 animate-spin-x"
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-10 px-4">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="RE-Target Logo" className="w-32" />
          </div>

          <h1 className="text-4xl font-bold text-[#f88c10] text-center mb-8">
            RE-Target Advertising Markets
          </h1>

          <div className="flex justify-between items-center mb-4 pr-4">
            <h2 className="text-2xl font-bold text-black">
              B2B Advertising Markets
            </h2>
            <p className="ml-4 text-lg font-semibold">
              Ads to Real Estate Agents placed in their MLS or Association
              software
            </p>
          </div>

          <div className="flex justify-between items-center mb-2 pr-4">
            <h2 className="text-xl font-bold text-black">
              Multi-market discounts
            </h2>
            <p className="ml-4  font-semibold">
              3+ markets discount fees by this additional %: 50% 20% 30%
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-8">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Organization</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">States</th>
                  <th className="border px-4 py-2">REALTORS</th>
                  <th className="border px-4 py-2">One Time Setup Fee</th>
                  <th className="border px-4 py-2">Monthly Fee - 6 Month</th>
                  <th className="border px-4 py-2">Monthly Fee - 12 Month</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.customers.current?.map((customer, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      {customer.organization}
                    </td>
                    <td className="border px-4 py-2">{customer.location}</td>
                    <td className="border px-4 py-2">
                      {customer.states.join(", ")}
                    </td>
                    <td className="border px-4 py-2">
                      {customer["agent-count"] || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      ${customer["setup-fee"] || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      ${customer["monthly-fee-6-month"] || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      ${customer["monthly-fee-12-month"] || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-black mb-4">
            Coming Soon
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-8">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Organization</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">States</th>
                  <th className="border px-4 py-2">Realtors</th>
                  <th className="border px-4 py-2">One Time Setup Fee</th>
                  <th className="border px-4 py-2">Monthly Fee - 6 Month</th>
                  <th className="border px-4 py-2">Monthly Fee - 12 Month</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.customers["coming-soon"]?.map(
                  (customer, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        {customer.organization}
                      </td>
                      <td className="border px-4 py-2">{customer.location}</td>
                      <td className="border px-4 py-2">
                        {customer.states.join(", ")}
                      </td>
                      <td className="border px-4 py-2">
                        {customer["agent-count"] || "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        ${customer["setup-fee"] || "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        ${customer["monthly-fee-6-month"] || "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        ${customer["monthly-fee-12-month"] || "N/A"}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div style={{ width: "70%" }}>
            <p className="font-bold mb-6">
              *Must be an affiliate member to advertise. Affiliate memberships
              generally range from $150-$450 per year. This must be processed
              directly with the association - RE-Target can introduce you to the
              appropriate contacts.
            </p>
            <p className="font-bold mb-6">
              Multi-Market Advertisers (3+ markets) receive discounted setup and
              monthly subscription fees.
            </p>
          </div>

          <div className="flex justify-between pr-4 items-center mb-4">
            <h2 className="text-2xl font-bold text-black">
              B2C Advertising Markets
            </h2>
            <p className="ml-4 font-semibold">
              Ads to Home Buyers placed in MLS consumer search portals
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-8">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Organization</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">States</th>
                  <th className="border px-4 py-2">Monthly Impressions</th>
                  <th className="border px-4 py-2">One time Setup Fee</th>
                  <th className="border px-4 py-2">Monthly Fee - 6 Month</th>
                  <th className="border px-4 py-2">Monthly Fee - 12 Month</th>
                  <th className="border px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
