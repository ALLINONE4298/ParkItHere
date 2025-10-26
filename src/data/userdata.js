let userdata ={
    name: "John Doe",
    email: "john.doe@example.com",
    subscription: {
        plan: "Gold",
        status: "Active",
        features: ["Unlimited Vehicles", "Priority Support", "Access to Premium Spots"]
    },
    vehicles: [
        { make: "Toyota", model: "Camry", year: 2020, plate: "ABC123" },
        { make: "Honda", model: "Civic", year: 2019, plate: "XYZ789" }
    ],
    parkingHistory: [
        { location: "Lot A", date: "2024-06-01", duration: "2 hours" },
        { location: "Lot B", date: "2024-06-03", duration: "3 hours" }
    ],
    billAmount: 49.99,
    bookings: [
        { location: "Lot C", date: "2024-06-10", time: "10:00 AM" },
        { location: "Lot D", date: "2024-06-12", time: "2:00 PM" }
    ],
    billingHistory: [
        { month: "June", year: 2024, amount: 49.99 },
        { month: "May", year: 2024, amount: 39.99 }
    ],
    documents: [
        { type: "Driver's License", status: "Verified" },
        { type: "Vehicle Registration", status: "Pending" }
    ]
}

export default userdata;