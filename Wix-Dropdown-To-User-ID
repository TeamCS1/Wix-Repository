import wixWindow from 'wix-window';
import wixData from 'wix-data';
import wixLocation from 'wix-location';

let storedUserId; // Variable to store the selected user's ID

$w.onReady(function () {
    // Populate the dropdown with user names
    wixData.query("InductionRecord")
        .find()
        .then((results) => {
            const userDropdown = $w("#inducteeNameDD");
            const options = results.items.map((user) => {
                return {
                    label: user.title, // Assuming 'title is the field with user names
                    value: user._id // Assuming '_id' is the unique identifier field
                };
            });
            userDropdown.options = options;
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        });

    $w("#inducteeNameDD").onChange((event) => {
        const selectedUserId = event.target.value;
        storedUserId = selectedUserId; // Store the selected user's ID
        console.log("Stored User ID:", storedUserId);
    });

    // Example of how to fetch user data using the stored user ID
    $w("#button1").onClick(() => {
        if (storedUserId) {
            wixData.query("InductionRecord")
                .eq("_id", storedUserId)
                .find()
                .then((result) => {
                    const user = result.items[0];
                    console.log("Fetched User Data:", user);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    });
});
