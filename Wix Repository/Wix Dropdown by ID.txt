//Select Proposal
$w('#selectProposal').onChange((event) => { 

        //get the id of the proposal
        let identifier = $w("#selectProposal").value;

        // Query the "Services" collection for an exact match with _id
    wixData.query("Services")
        .eq("_id", identifier)
        .find()
        .then((results) => {
            if (results.items.length > 0) {
                // Retrieve the matching item
                let matchingItem = results.items[0];

                // Assign fields to variables
                let editServicePrice = matchingItem.servicePrice; 
                let editProposalFirstName = matchingItem.namesCompany; // Replace with your actual field keys
                let editAuthor = matchingItem.owner; // Example of another field
                let editIntro = matchingItem.introduction; // Example of another field
                let editOffer = matchingItem.servicePriceDesc; // Example of another field
                let editCompanyName = matchingItem.proposalFor; 
                let editDateURL = matchingItem.pGlobalURL; // Example of another field

                //update the read only fields
                $w("#label1").text = editCompanyName;
                $w("#label2").text = editProposalFirstName
                $w("#label3").text = editDateURL;

                //update the fields that can be edited
                $w("#input10").value = editServicePrice;
                $w("#input11").value = editProposalFirstName;
                $w("#input12").value = editAuthor;
                $w("#input13").value = editIntro;
                $w("#input14").value = editOffer;

            } else {
                console.log("No matching item found for identifier:", identifier);
            }
        })
        .catch((err) => {
            console.error("Query failed:", err);
        });

})
