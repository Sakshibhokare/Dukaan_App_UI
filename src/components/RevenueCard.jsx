export const RevenueCard = ({ title, orderCount, amount }) => {
    return <div className=" bg-white rounded shadow-sm p-4">
        <div className="text-gray-700">
            {title}
        </div>
        <div className="flex justify-between">
            <div className="font-semibold text-2xl">
                ${amount}
            </div>
            <div>
                {orderCount ? <div className="text-blue-700">{orderCount} Orders{" > "} </div> : null}
            </div>
        </div>
    </div>
}